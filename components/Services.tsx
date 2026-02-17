export default function Services() {
  const services = [
    { title: "Individual Therapy", desc: "Support for anxiety, depression, and trauma across all life stages.", icon: "👤" },
    { title: "Family & Couples", desc: "Improving communication and conflict resolution within relationships.", icon: "👥" },
    { title: "Teletherapy", desc: "Flexible, secure virtual sessions accessible from anywhere.", icon: "💻" },
    { title: "EAPs & Workplace", desc: "Customized mental wellness solutions and training for organizations.", icon: "🏢" },
    { title: "Assessments", desc: "Comprehensive psychological testing for learning and diagnostics.", icon: "📊" },
    { title: "Crisis Intervention", desc: "Immediate support and debriefing during mental health emergencies.", icon: "🛡️" }
  ];

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ink">Our Services</h2>
          <p className="mt-4 text-subtext max-w-2xl">
            Tailored solutions to meet diverse mental wellness needs, from early development to aging-related concerns. [cite: 66]
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="elpis-card group hover:border-brand-blue transition-colors">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-subtext leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}