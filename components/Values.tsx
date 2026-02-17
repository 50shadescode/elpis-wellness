export default function Values() {
  const values = [
    { name: "Hope", desc: "Believing in the possibility of positive change and recovery." },
    { name: "Compassion", desc: "Meeting you with empathy and genuine care." },
    { name: "Inclusivity", desc: "Honoring diverse backgrounds and lived experiences." },
    { name: "Integrity", desc: "Practicing with honesty and ethical excellence." }
  ];

  return (
    <section className="py-20 bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {values.map((v) => (
            <div key={v.name} className="text-center">
              <h3 className="text-lg font-bold text-brand-orange mb-2">{v.name}</h3>
              <p className="text-sm text-subtext leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}