"use client";

import { useState } from "react";

export default function IgniteProgram() {
  // Switches to manage our pop-up modal and inputs
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [paymentOption, setPaymentOption] = useState<"full" | "installment">("full");
  
  // New switches to track background loading and errors
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // The real handler that pushes data across the bridge to your backend script
  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/stk-push", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          flowType: "program",
          programSlug: "ignite-your-life",
          paymentOption: paymentOption,
          phone: phone,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          text: "STK PIN prompt sent successfully! Please check your phone screen.",
        });
        
        // Closes the popup and clears the field automatically after 5 seconds
        setTimeout(() => {
          setIsOpen(false);
          setStatus(null);
          setPhone("");
        }, 5000);
      } else {
        setStatus({
          type: "error",
          text: data.error || "Failed to initiate payment. Please verify your number.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        text: "Could not connect to the system. Please check your network connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-20 px-6 max-w-7xl mx-auto relative">
      <div className="bg-brand-blue rounded-3xl p-12 text-white mb-16">
        <h1 className="text-4xl font-bold mb-4">Ignite Your Life</h1>
        <p className="text-xl opacity-90">6-Week Total Life Transformation</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-ink mb-4">Program Overview</h2>
            <p className="text-subtext leading-relaxed">
              In just six weeks, your life can be completely turned around—not in one area, but in all areas 
              including health, wealth, relationships, and career. This face-to-face Google Meet experience 
              meets live on <strong>Tuesdays and Thursdays</strong>.
            </p>
          </section>

          <section className="bg-surface p-8 rounded-2xl border border-border">
            <h3 className="font-bold mb-4">What You Will Achieve:</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-sm text-subtext">
              <li>● Release what’s holding you back</li>
              <li>● Reclaim control over responses</li>
              <li>● Gain clarity on goals & dreams</li>
              <li>● Design your 2026 blueprint</li>
            </ul>
          </section>
        </div>

        {/* Enrollment Card Panel */}
        <div className="bg-white p-8 rounded-3xl border border-brand-blue shadow-xl h-fit">
          <h3 className="text-xl font-bold mb-2">Enrollment Details</h3>
          <div className="text-3xl font-bold text-primary mb-6">24,000/-</div>
          <p className="text-xs text-subtext mb-6 italic">2,000/- per session installment option available</p>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all"
          >
            Secure Your Spot
          </button>
        </div>
      </div>

      {/* POP-UP CHECKOUT BOX (MODAL) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-gray-100">
            
            {/* Close Button (✕) */}
            <button 
              onClick={() => { if (!loading) setIsOpen(false); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold p-2"
              disabled={loading}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Enrollment</h3>
            <p className="text-sm text-gray-500 mb-6">
              Select your payment option and enter your M-Pesa number to continue.
            </p>

            <form onSubmit={handleCheckoutSubmit} className="space-y-6">
              {/* Payment Plan Selectors */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Plan</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => setPaymentOption("full")}
                    className={`py-3 px-4 rounded-xl text-sm transition-all border ${
                      paymentOption === "full"
                        ? "border-brand-blue bg-blue-50 text-brand-blue font-bold"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    } disabled:opacity-50`}
                  >
                    Full Payment<br/><span className="text-xs font-normal opacity-80">24,000/-</span>
                  </button>
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => setPaymentOption("installment")}
                    className={`py-3 px-4 rounded-xl text-sm transition-all border ${
                      paymentOption === "installment"
                        ? "border-brand-blue bg-blue-50 text-brand-blue font-bold"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    } disabled:opacity-50`}
                  >
                    Installment<br/><span className="text-xs font-normal opacity-80">2,000/- option</span>
                  </button>
                </div>
              </div>

              {/* Mobile Phone Input Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  M-Pesa Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="e.g., 0712345678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue disabled:bg-gray-50 disabled:text-gray-400"
                />
              </div>

              {/* Error or Success Text Display */}
              {status && (
                <div className={`p-4 rounded-xl text-sm font-medium border ${
                  status.type === "success" 
                    ? "bg-green-50 text-green-800 border-green-100" 
                    : "bg-red-50 text-red-800 border-red-100"
                }`}>
                  {status.text}
                </div>
              )}

              {/* Submit / Pay CTA */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  disabled={loading}
                  className="w-1/3 py-3.5 border border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-2/3 bg-brand-blue text-white font-bold py-3.5 rounded-xl hover:bg-opacity-90 shadow-lg disabled:bg-gray-400 disabled:shadow-none"
                >
                  {loading ? "Processing..." : `Pay KES ${paymentOption === "full" ? "24,000" : "2,000"}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}