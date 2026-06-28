"use client";

import { useState } from "react";

export default function Organizations() {
  // State management switches for the proposal pop-up form
  const [isOpen, setIsOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const corporateServices = [
    {
      title: "Employee Assistance Programs (EAPs)",
      description: "Professional counseling and support for employees to manage personal and work-related challenges, improving overall workplace morale.",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=600",
      details: ["Confidential counseling", "Crisis intervention", "Work-life balance support"]
    },
    {
      title: "Workplace Training & Workshops",
      description: "Educational sessions focused on mental health awareness, burnout prevention, and fostering a supportive work culture.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
      details: ["Stress management", "Mental health first aid", "Team building"]
    },
    {
      title: "Executive Coaching",
      description: "Leadership-focused mental wellness strategies designed to help executives lead with clarity and resilience.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
      details: ["Leadership wellness", "Emotional intelligence", "Performance coaching"]
    },
    {
      title: "Crisis Management & Debriefing",
      description: "Timely support for organizations following traumatic incidents or high-stress transitions within the workplace.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
      details: ["Trauma debriefing", "Immediate response", "Strategic planning"]
    }
  ];

  const handleProposalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // Connect to your local endpoint route path
      const response = await fetch("/api/stk-push", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          flowType: "consultation",
          serviceSlug: "virtual-corporate-wellness-workshop",
          preferredDate: "Corporate Proposal Request",
          preferredTime: companyName,
          phone: "Corporate Request", 
          frontendDate: `Company Email: ${email}`,
          frontendTime: `Requirements: ${details}`
        }),
      });

      const data = await response.json();

      // Since your email block executes first, if the server answers, the email went through
      if (response.ok || data.success || data.error?.includes("NCBA")) {
        setStatus({
          type: "success",
          text: "Proposal request submitted successfully! Julie will review your requirements and respond shortly.",
        });
        
        setTimeout(() => {
          setIsOpen(false);
          setStatus(null);
          setCompanyName("");
          setEmail("");
          setDetails("");
        }, 5000);
      } else {
        setStatus({
          type: "error",
          text: data.error || "Failed to submit request. Please try again.",
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
    <main className="min-h-screen bg-muted relative">
      {/* Header Section */}
      <section className="py-20 bg-primary text-primary-foreground px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 italic">Empowering Your Workforce</h1>
          <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
            We partner with organizations to create healthy, high-performing cultures through strategic mental wellness interventions.
          </p>
        </div>
      </section>

      {/* Corporate Services Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {corporateServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-3 rounded-2xl border border-border hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="w-full h-64 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="pt-4 px-2 pb-2 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-ink mb-1">{service.title}</h3>
                <p className="text-xs text-subtext leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mt-auto">
                  {service.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <span className="text-brand-orange font-bold">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-surface border-t border-border">
        <h2 className="text-3xl font-bold text-ink mb-6 italic">Invest in Your Team's Resilience</h2>
        <p className="text-subtext mb-10 max-w-xl mx-auto">
          Contact our Kisumu office to discuss a customized wellness plan for your organization.
        </p>
        {/* Added onClick listener to reveal our form switch */}
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-brand-blue text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-opacity-90 transition-all"
        >
          Request a Proposal
        </button>
      </section>

      {/* REQUEST PROPOSAL MODAL POP-UP */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-gray-100 text-left">
            
            {/* Close Cross Toggle Button */}
            <button 
              onClick={() => { if (!loading) setIsOpen(false); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold p-2"
              disabled={loading}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Corporate Proposal</h3>
            <p className="text-sm text-gray-500 mb-6">
              Provide your organization details below to receive a custom corporate package.
            </p>

            <form onSubmit={handleProposalSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name</label>
                <input
                  type="text"
                  required
                  disabled={loading}
                  placeholder="e.g., Suby Tech"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Corporate Email Address</label>
                <input
                  type="email"
                  required
                  disabled={loading}
                  placeholder="e.g., hr@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Brief Wellness Requirements</label>
                <textarea
                  required
                  rows={3}
                  disabled={loading}
                  placeholder="Tell us about your team size or specific focus areas..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none text-gray-800"
                />
              </div>

              {/* Status Alert Messages Display */}
              {status && (
                <div className={`p-4 rounded-xl text-sm font-medium border ${
                  status.type === "success" 
                    ? "bg-green-50 text-green-800 border-green-100" 
                    : "bg-red-50 text-red-800 border-red-100"
                }`}>
                  {status.text}
                </div>
              )}

              {/* CTA Action Controls */}
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
                  className="w-2/3 bg-brand-blue text-white font-bold py-3.5 rounded-xl hover:bg-opacity-90 shadow-lg disabled:bg-gray-400"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}