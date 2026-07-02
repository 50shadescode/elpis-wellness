"use client";

import React, { useState } from "react";
import { SERVICES } from "@/app/lib/payment-config"; // Points directly to your app/lib structure

export default function BookingForm() {
  const [phone, setPhone] = useState("");
  const [serviceSlug, setServiceSlug] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const selectedService = SERVICES.find((s) => s.slug === serviceSlug);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !serviceSlug || !date || !time) {
      setStatus({ success: false, message: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/stk-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          flowType: "consultation",
          phone,
          serviceSlug,
          date,
          time,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ success: true, message: "STK push initiated successfully! Check your phone." });
      } else {
        setStatus({ success: false, message: data.error || "Payment initiation failed." });
      }
    } catch (err) {
      setStatus({ success: false, message: "An unexpected error occurred." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 overflow-hidden text-left">
      {/* Left side: Form Input Controls */}
      <form onSubmit={handleSubmit} className="p-8 md:col-span-7 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Book Consultation</h2>
          <p className="text-sm text-slate-500 mt-1">
            Choose a service, select your preferred date and time, then pay to secure your slot.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Select Service</label>
            <select
              value={serviceSlug}
              onChange={(e) => setServiceSlug(e.target.value)}
              className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Choose a service</option>
              {SERVICES.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Preferred Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Preferred Time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Choose a time slot</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">M-Pesa Phone Number</label>
            <input
              type="text"
              placeholder="e.g. 254712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {status && (
          <div className={`p-4 rounded-lg text-sm font-medium ${status.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 shadow-md shadow-orange-500/20"
        >
          {loading ? "Processing..." : "Pay to Secure Slot"}
        </button>
      </form>

      {/* Right side: Live Dynamic Booking Summary Side Block */}
      <div className="bg-slate-50 p-8 md:col-span-5 border-t md:border-t-0 md:border-l border-slate-100 flex flex-col justify-between">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-800">Booking Summary</h3>

          <div className="space-y-4 text-sm">
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Service</span>
              <span className="font-bold text-slate-700">{selectedService ? selectedService.name : "Not selected"}</span>
            </div>

            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Amount</span>
              <span className="font-bold text-slate-700">{selectedService ? `KES ${selectedService.amount}` : "—"}</span>
            </div>

            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Preferred Date</span>
              <span className="font-bold text-slate-700">{date || "Not selected"}</span>
            </div>

            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Preferred Time</span>
              <span className="font-bold text-slate-700">{time || "Not selected"}</span>
            </div>

            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Number</span>
              <span className="font-bold text-slate-700">{phone || "Not entered"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}