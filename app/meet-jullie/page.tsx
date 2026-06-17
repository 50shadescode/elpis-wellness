"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { SERVICES } from "../lib/payment-config";

const TIME_SLOTS = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
];

export default function MeetJullie() {
  const [serviceSlug, setServiceSlug] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const selectedService = useMemo(
    () => SERVICES.find((service) => service.slug === serviceSlug),
    [serviceSlug]
  );

  const handleBookingPayment = async () => {
    setMessage("");

    if (!serviceSlug || !date || !time || !phone) {
      setMessage("Please select a service, date, time, and enter your phone number.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/stk-push", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          flowType: "consultation",
          serviceSlug,
          date,
          time,
          phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Failed to initiate payment.");
        return;
      }

      setMessage("Payment request sent successfully. Please complete the prompt on your phone.");
    } catch (error) {
      setMessage("Something went wrong while initiating payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-20 px-6 max-w-7xl mx-auto space-y-24">
      {/* 1. Profile Bio Section */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-border bg-slate-200">
            <Image
              src="/photo.jpeg"
              alt="Jullie A. Otieno - Clinical Psychologist"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <h1 className="text-4xl font-bold text-ink mb-2 text-primary">
            Jullie A. Otieno
          </h1>
          <p className="text-xl text-brand-orange font-semibold mb-6">
            Clinical Psychologist
          </p>

          <div className="space-y-6 text-subtext leading-relaxed">
            <div className="flex items-center gap-3 text-ink">
              <span className="text-2xl">🎓</span>
              <span className="font-bold text-lg">MA Clinical Psychology</span>
            </div>

            <p>
              With over 10 years of professional experience, Jullie is dedicated
              to providing compassionate, evidence-based mental health care across Kenya.
            </p>

            <div className="p-6 bg-white rounded-xl border-l-4 border-brand-blue shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-2">
                Professional Status
              </p>
              <p className="text-ink font-medium leading-relaxed">
                Duly Licensed and Registered Practitioner with the{" "}
                <span className="block text-primary font-bold">
                  Counsellors and Psychologists Board (CPB)
                </span>
              </p>
            </div>

            <p>
              Her work centers on trauma-informed therapy, empowering individuals
              through personal development and compassionate, evidence-based mental health care.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Embedded Video Presentation & Verbatim Text Transcript */}
      <section className="bg-white rounded-3xl shadow-md border border-slate-200 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Frame: Cloudinary Explainer Video Container (9:16 Original Framing) */}
          <div className="relative aspect-[9/16] max-h-[560px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 bg-slate-950 mx-auto">
            <video 
              controls 
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source 
                src="https://res.cloudinary.com/dmpdabx8b/video/upload/f_auto,q_auto/v1781733246/Video_from_Martin_ifbgk3.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Frame: Her Exact Verbal Transcription */}
          <div className="space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
              A Message from Jullie
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
              Demystifying Your First Therapy Hour
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-subtext font-light leading-relaxed border-l-2 border-primary/20 pl-4">
              <p>
                "I want to tell you what actually happens in a first therapy session, because the version in your head is probably wrong. It’s not a couch and a notepad and someone saying, <span className="italic font-medium text-ink">'and how does that make you feel?'</span> every five minutes.
              </p>
              <p>
                It’s not you crying and confessing everything in the first hour. It’s not someone telling you what is wrong with you.
              </p>
              <p className="font-semibold text-ink">
                Here’s what it actually is: <span className="text-primary">It’s a conversation.</span>
              </p>
              <p>
                I ask you questions. You ask me some questions. We figure out if this is the right space for you. No pressure, no performance.
              </p>
              <p>
                You don’t have to have the right words. You don’t have to know exactly what’s wrong. Most people don’t know exactly what’s wrong—that’s actually why they come.
              </p>
              <p className="font-medium text-ink pt-1">
                The first session is just about showing up. Everything else we figure out together.
              </p>
              <p>
                If you’ve been thinking about it, that thought is worth following. You don’t have to be in crisis to deserve support. You just have to be human."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Booking Engine Form Section */}
      <section id="booking" className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-10">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-3">
              Book Consultation
            </h2>
            <p className="text-subtext mb-8">
              Choose a service, select your preferred date and time, then pay to secure your slot.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  Select Service
                </label>
                <select
                  value={serviceSlug}
                  onChange={(e) => setServiceSlug(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
                >
                  <option value="">Choose a service</option>
                  {SERVICES.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.name} - KES {service.amount.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  Preferred Time
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
                >
                  <option value="">Choose a time slot</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  M-Pesa Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 254712345678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
                />
              </div>

              <button
                onClick={handleBookingPayment}
                disabled={loading}
                className="w-full rounded-xl bg-brand-orange text-white font-bold py-4 px-6 disabled:opacity-60 transition-all active:scale-[0.99]"
              >
                {loading ? "Processing..." : "Pay to Secure Slot"}
              </button>

              {message ? (
                <p className="text-sm text-ink bg-slate-100 rounded-xl p-4">
                  {message}
                </p>
              ) : null}
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Booking Summary
            </h3>

            <div className="space-y-4 text-ink">
              <div>
                <p className="text-sm text-slate-500">Service</p>
                <p className="font-semibold">
                  {selectedService?.name || "Not selected"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Amount</p>
                <p className="font-semibold">
                  {selectedService ? `KES ${selectedService.amount.toLocaleString()}` : "—"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Duration</p>
                <p className="font-semibold">
                  {selectedService?.duration || "—"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Preferred Date</p>
                <p className="font-semibold">{date || "Not selected"}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Preferred Time</p>
                <p className="font-semibold">{time || "Not selected"}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Phone Number</p>
                <p className="font-semibold">{phone || "Not entered"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}