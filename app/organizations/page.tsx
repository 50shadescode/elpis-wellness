export default function Organizations() {
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
      image: "https://images.unsplash.com/photo-1573497159142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      details: ["Trauma debriefing", "Immediate response", "Strategic planning"]
    }
  ];

  return (
    <main className="min-h-screen bg-muted">
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
              {/* Image Container: Matches the perfect rounded frame profile */}
              <div className="w-full h-64 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Content Area: Minimized to look balanced with the photo */}
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
        <button className="bg-brand-blue text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-opacity-90 transition-all">
          Request a Proposal
        </button>
      </section>
    </main>
  );
}