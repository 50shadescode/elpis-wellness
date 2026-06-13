import { NextResponse } from "next/server";
import { PROGRAMS, SERVICES } from "../../lib/payment-config";
import nodemailer from "nodemailer";

type ProgramPaymentOption = "full" | "installment";

function normalizePhone(phone: string) {
  const cleaned = phone.replace(/\s+/g, "").trim();

  if (/^254\d{9}$/.test(cleaned)) return cleaned;
  if (/^0\d{9}$/.test(cleaned)) return `254${cleaned.slice(1)}`;

  return null;
}

function getEnv() {
  return {
    baseUrl: process.env.NCBA_BASE_URL || "",
    username: process.env.NCBA_USERNAME || "",
    password: process.env.NCBA_PASSWORD || "",
    secretKey: process.env.NCBA_SECRET_KEY || "",
    paybillNo: process.env.NCBA_PAYBILL_NO || "",
    accountNo: process.env.NCBA_ACCOUNT_NO || "",
    emailUser: process.env.EMAIL_USER || "",
    emailPass: process.env.EMAIL_PASS || "",
    receiverEmail: process.env.JULIE_RECEIVER_EMAIL || "",
  };
}

async function getNcbaToken(baseUrl: string, username: string, password: string) {
  const auth = Buffer.from(`${username}:${password}`).toString("base64");

  const response = await fetch(`${baseUrl}/payments/api/v1/auth/token`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${auth}`,
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Failed to generate NCBA token.");
  }

  return data.access_token as string;
}

async function initiateNcbaStkPush(params: {
  baseUrl: string;
  accessToken: string;
  phone: string;
  amount: number;
  paybillNo: string;
  accountNo: string;
}) {
  const response = await fetch(`${params.baseUrl}/payments/api/v1/stk-push/initiate`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      TelephoneNo: params.phone,
      Amount: String(params.amount),
      PayBillNo: params.paybillNo,
      AccountNo: params.accountNo, // Strictly alphanumeric now
      Network: "Safaricom",
      TransactionType: "CustomerPayBillOnline",
    }),
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Failed to initiate STK push.");
  }

  return data;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { flowType, phone } = body;

    const normalizedPhone = normalizePhone(phone || "");
    if (!normalizedPhone) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    let amount = 0;
    let itemName = "";
    let reference = "";
    let selectedDate = "N/A";
    let selectedTime = "N/A";
    let customBankReference = "";

    if (flowType === "consultation") {
      const { serviceSlug, date, time } = body;

      if (!serviceSlug || !date || !time) {
        return NextResponse.json(
          { success: false, error: "Service, date, and time are required." },
          { status: 400 }
        );
      }

      selectedDate = date;
      selectedTime = time;

      const service = SERVICES.find((item) => item.slug === serviceSlug);

      if (!service) {
        return NextResponse.json(
          { success: false, error: "Selected service was not found." },
          { status: 404 }
        );
      }

      amount = service.amount;
      itemName = service.name;
      reference = `consult-${service.slug}`;
      
      // SAFARICOM SAFE FORMAT: Remove ALL hyphens, colons, spaces, and am/pm tags 
      // Example: "2026-06-13" and "02:30 PM" becomes pure alphanumeric "06130230PM"
      const pureDate = date.replace(/[^a-zA-Z0-9]/g, "").slice(4); // strips year prefix if needed, or keeps month/day
      const pureTime = time.replace(/[^a-zA-Z0-9]/g, "");
      
      customBankReference = `${pureDate}${pureTime}`; 
    } else if (flowType === "program") {
      const { programSlug, paymentOption } = body as {
        programSlug: string;
        paymentOption: ProgramPaymentOption;
      };

      if (!programSlug || !paymentOption) {
        return NextResponse.json(
          { success: false, error: "Program and payment option are required." },
          { status: 400 }
        );
      }

      const program = Object.values(PROGRAMS).find((item) => item.slug === programSlug);

      if (!program) {
        return NextResponse.json(
          { success: false, error: "Selected program was not found." },
          { status: 404 }
        );
      }

      amount = paymentOption === "installment" ? program.installmentAmount : program.fullAmount;
      itemName = program.name;
      reference = `program-${program.slug}-${paymentOption}`;
      customBankReference = program.slug.replace(/[^a-zA-Z0-9]/g, "").slice(0, 12);
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid payment flow type." },
        { status: 400 }
      );
    }

    const env = getEnv();

    if (!env.baseUrl || !env.paybillNo) {
      return NextResponse.json(
        { success: false, error: "NCBA configuration is incomplete." },
        { status: 500 }
      );
    }

    if (!env.username || !env.password) {
      return NextResponse.json(
        {
          success: false,
          error: "NCBA credentials are not yet set.",
          paymentDetails: { flowType, itemName, amount, phone: normalizedPhone, reference },
        },
        { status: 501 }
      );
    }

    const accessToken = await getNcbaToken(env.baseUrl, env.username, env.password);

    // Final clean check to guarantee Safaricom receives a safe alphanumeric layout
    const finalAccountNo = customBankReference.replace(/[^a-zA-Z0-9]/g, "") || env.accountNo || "Booking";

    const stkResponse = await initiateNcbaStkPush({
      baseUrl: env.baseUrl,
      accessToken,
      phone: normalizedPhone,
      amount,
      paybillNo: env.paybillNo,
      accountNo: finalAccountNo.trim(),
    });

    // =========================================================================
    // AUTOMATED GMAIL NOTIFICATION FOR ELPIS WELLNESS AFRICA
    // =========================================================================
    if (env.emailUser && env.emailPass && env.receiverEmail) {
      try {
        const mailTransporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: env.emailUser,
            pass: env.emailPass,
          },
        });

        const emailHtmlTemplate = `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="text-align: center; border-bottom: 2px solid #10b981; padding-bottom: 15px; margin-bottom: 20px;">
              <h2 style="color: #0f172a; margin: 0; font-size: 22px;">Elpis Wellness Africa</h2>
              <p style="color: #10b981; font-weight: 600; margin: 5px 0 0 0; text-transform: uppercase; letter-spacing: 1px; font-size: 12px;">New Booking STK Prompt Initiated</p>
            </div>
            
            <p style="color: #334155; font-size: 15px; line-height: 1.5;">Hello Julie,</p>
            <p style="color: #334155; font-size: 15px; line-height: 1.5;">A client has initiated an M-Pesa payment flow on the website. An STK PIN push has been dispatched to their phone. Here are the selection details:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
              <thead>
                <tr style="background-color: #f8fafc;">
                  <th style="padding: 12px; text-align: left; border: 1px solid #cbd5e1; color: #475569;">Item Parameter</th>
                  <th style="padding: 12px; text-align: left; border: 1px solid #cbd5e1; color: #475569;">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: 600; color: #1e293b;">Selected Service/Program:</td>
                  <td style="padding: 12px; border: 1px solid #cbd5e1; color: #334155;">${itemName}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: 600; color: #1e293b;">Customer Mobile:</td>
                  <td style="padding: 12px; border: 1px solid #cbd5e1; color: #334155;">${normalizedPhone}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: 600; color: #ef4444;">Requested Date:</td>
                  <td style="padding: 12px; border: 1px solid #cbd5e1; color: #ef4444; font-weight: bold;">${selectedDate}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: 600; color: #ef4444;">Requested Time:</td>
                  <td style="padding: 12px; border: 1px solid #cbd5e1; color: #ef4444; font-weight: bold;">${selectedTime}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: 600; color: #1e293b;">Transaction Value:</td>
                  <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #0f172a;">KES ${amount}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: 600; color: #1e293b;">Account Ref Sent:</td>
                  <td style="padding: 12px; border: 1px solid #cbd5e1; font-family: monospace; color: #475569;">${finalAccountNo}</td>
                </tr>
              </tbody>
            </table>
            
            <div style="background-color: #f0fdf4; border-left: 4px solid #16a34a; padding: 12px; margin-top: 20px; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #14532d; font-weight: 500;">Note: This email verifies that the customer triggered checkout. Monitor your NCBA C2B statement or business dashboard to confirm completion when they fill in their PIN.</p>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 25px 0;" />
            <p style="font-size: 12px; color: #94a3b8; text-align: center; margin: 0;">Automated Notification Engine by Suby Tech</p>
          </div>
        `;

        await mailTransporter.sendMail({
          from: `"Elpis Wellness Africa" <${env.emailUser}>`,
          to: env.receiverEmail,
          subject: `📅 SCHEDULE ALERT: ${itemName} [${selectedDate} @ ${selectedTime}]`,
          html: emailHtmlTemplate,
        });

        console.log("Notification email dispatched cleanly to Julie's workspace.");
      } catch (mailError) {
        console.error("Nodemailer delivery error caught safely:", mailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "STK push initiated successfully.",
      paymentDetails: { flowType, itemName, amount, phone: normalizedPhone, reference },
      ncba: stkResponse,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Something went wrong.";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}