export default function AboutPage() {
  return (
    <main className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-ink mb-8 text-center">Our Story</h1>
      <div className="space-y-6 text-subtext leading-relaxed text-lg">
        <p>
          In a world that often feels overwhelming, Elpis Wellness Africa stands as a beacon of hope. 
          The name "Elpis" originates from Greek mythology, representing the personification of hope.
        </p>
        <p>
          We are dedicated to providing comprehensive, compassionate, and evidence-based mental health services 
          tailored to the diverse needs of individuals across the lifespan.
        </p>
        <div className="bg-white p-8 rounded-2xl border border-border mt-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
          <p>To provide accessible, high-quality care that empowers individuals and organizations to achieve lasting wellness.</p>
        </div>
      </div>
    </main>
  );
}