"use client";

import { useState } from "react";

export default function GuiltFreeProgram() {
  // Switches to manage our pop-up modal and inputs
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [paymentOption, setPaymentOption] = useState<"full" | "installment">("full");
  
  // Switches to track background loading and errors
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // The handler that pushes data across the bridge to your backend script
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
          programSlug: "guilt-free", // Matches your payment-config layout exactly
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
      <div className="bg-brand-orange rounded-3xl p-12 text-white mb-16">
        <h1 className="text-4xl font-bold mb-4">Guilt Free</h1>
        <p className="text-xl opacity-90">For High-Achieving, Emotionally Exhausted Women</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-ink mb-4">Reclaim Your Capacity for Joy</h2>
            <p className="text-subtext leading-relaxed">
              Step out of the cycle of over-functioning and people-pleasing. This 6-week transformational 
              program meets on <strong>Saturdays via Google Meet</strong> to help you replace guilt 
              with self-trust and empowerment.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-border">
              <h4 className="font-bold text-brand-orange mb-2">Identify Triggers</h4>
              <p className="text-xs text-subtext">Use the "Guilt Equation" to quiet critical thoughts.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-border">
              <h4 className="font-bold text-brand-orange mb-2">Boundaries</h4>
              <p className="text-xs text-subtext">Create sustainable boundaries around overexertion.</p>
            </div>
          </div>
        </div>

        {/* Investment Card Panel */}
        <div className="bg-white p-8 rounded-3xl border border-brand-orange shadow-xl h-fit">
          <h3 className="text-xl font-bold mb-2">Investment</h3>
          <div className="text-3xl font-bold text-brand-orange mb-6">15,000/-</div>
          <p className="text-xs text-subtext mb-6 italic">2,500/- per session installment option available</p>
          <button 
            onClick={() => setIsOpen(true)}
            className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all"
          >
            Join the Program
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
                        ? "border-brand-orange bg-orange-50 text-brand-orange font-bold"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    } disabled:opacity-50`}
                  >
                    Full Payment<br/><span className="text-xs font-normal opacity-80">15,000/-</span>
                  </button>
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => setPaymentOption("installment")}
                    className={`py-3 px-4 rounded-xl text-sm transition-all border ${
                      paymentOption === "installment"
                        ? "border-brand-orange bg-orange-50 text-brand-orange font-bold"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    } disabled:opacity-50`}
                  >
                    Installment<br/><span className="text-xs font-normal opacity-80">7,500/- option</span>
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:bg-gray-50 disabled:text-gray-400"
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
                  className="w-2/3 bg-brand-orange text-white font-bold py-3.5 rounded-xl hover:bg-opacity-90 shadow-lg disabled:bg-gray-400 disabled:shadow-none"
                >
                  {loading ? "Processing..." : `Pay KES ${paymentOption === "full" ? "15,000" : "7,500"}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}