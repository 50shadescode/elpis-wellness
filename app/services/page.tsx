export default function ServicesPage() {
  const allServices = [
    { name: "Individual Therapy", detail: "Focusing on anxiety, depression, and trauma." },
    { name: "Family & Couples", detail: "Improving relational dynamics and communication." },
    { name: "Teletherapy", detail: "Secure virtual sessions accessible from anywhere." },
    { name: "EAP Services", detail: "Workplace wellness for organizational health." },
    { name: "Psychological Assessments", detail: "Learning and diagnostic evaluations." }
  ];

  return (
    <main className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-ink mb-12 text-center">Comprehensive Mental Health Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allServices.map((service) => (
          <div key={service.name} className="p-6 bg-white rounded-xl border border-border shadow-sm">
            <h3 className="font-bold text-primary mb-2">{service.name}</h3>
            <p className="text-sm text-subtext leading-relaxed">{service.detail}</p>
          </div>
        ))}
      </div>
    </main>
  );
}