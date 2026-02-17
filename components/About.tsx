export default function About() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-ink mb-6">A Beacon of Hope</h2>
          <p className="text-subtext leading-relaxed mb-6">
            In a world that often feels overwhelming, Elpis Wellness Africa stands as a beacon of hope.  
            We offer comprehensive, compassionate, and evidence-based mental health services across the lifespan. [cite: 10, 11]
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-xl border border-border">
              <h4 className="font-bold text-primary mb-1">Our Mission</h4>
              <p className="text-xs text-subtext">To provide accessible care that empowers individuals to achieve lasting wellness. [cite: 14]</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-border">
              <h4 className="font-bold text-primary mb-1">Our Vision</h4>
              <p className="text-xs text-subtext">To create a society where mental wellness is prioritized at every stage of life. [cite: 88]</p>
            </div>
          </div>
        </div>
        <div className="relative aspect-video bg-brand-blue/10 rounded-3xl border border-brand-blue/20 flex items-center justify-center text-brand-blue font-bold">
          [Image Placeholder: Clinical Excellence]
        </div>
      </div>
    </section>
  );
}