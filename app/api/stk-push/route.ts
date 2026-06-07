import { NextResponse } from "next/server";
import { PROGRAMS, SERVICES } from "../../lib/payment-config";

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
      AccountNo: params.accountNo,
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

    if (flowType === "consultation") {
      const { serviceSlug, date, time } = body;

      if (!serviceSlug || !date || !time) {
        return NextResponse.json(
          { success: false, error: "Service, date, and time are required." },
          { status: 400 }
        );
      }

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

      amount =
        paymentOption === "installment"
          ? program.installmentAmount
          : program.fullAmount;

      itemName = program.name;
      reference = `program-${program.slug}-${paymentOption}`;
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid payment flow type." },
        { status: 400 }
      );
    }

    const env = getEnv();

    if (!env.baseUrl || !env.paybillNo || !env.accountNo) {
      return NextResponse.json(
        { success: false, error: "NCBA configuration is incomplete." },
        { status: 500 }
      );
    }

    if (!env.username || !env.password) {
      return NextResponse.json(
        {
          success: false,
          error: "NCBA credentials are not yet set. Add username and password in .env.local.",
          paymentDetails: {
            flowType,
            itemName,
            amount,
            phone: normalizedPhone,
            reference,
          },
        },
        { status: 501 }
      );
    }

    const accessToken = await getNcbaToken(env.baseUrl, env.username, env.password);

    const stkResponse = await initiateNcbaStkPush({
      baseUrl: env.baseUrl,
      accessToken,
      phone: normalizedPhone,
      amount,
      paybillNo: env.paybillNo,
      accountNo: env.accountNo,
    });

    return NextResponse.json({
      success: true,
      message: "STK push initiated successfully.",
      paymentDetails: {
        flowType,
        itemName,
        amount,
        phone: normalizedPhone,
        reference,
      },
      ncba: stkResponse,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong.";

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}