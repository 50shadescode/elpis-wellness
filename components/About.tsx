"use client";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Story & Mission Copy */}
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              In a world that often feels overwhelming, Elpis Wellness Africa stands as a beacon of hope. 
              The name &quot;Elpis&quot; originates from Greek mythology, representing the personification of hope.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              We are dedicated to providing comprehensive, compassionate, and evidence-based mental health services 
              tailored to the diverse needs of individuals across the lifespan.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h4 className="text-2xl font-bold text-primary mb-3">Our Mission</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              To provide accessible, high-quality care that empowers individuals and organizations to achieve lasting wellness.
            </p>
          </div>
        </div>

        {/* Right Column: High-Resolution Image Frame */}
        <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl border border-brand-blue/10 overflow-hidden shadow-2xl group">
          <img 
            src="/consultation-room.jpeg" 
            alt="Elpis Wellness Therapeutic Consultation Room" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}