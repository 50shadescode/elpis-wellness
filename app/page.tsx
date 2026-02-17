import About from "@/components/About";
import Services from "@/components/Services";
import Values from "@/components/Values"; 
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-muted">
      {/* 1. Hero Section */}
      <section className="px-4 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            A safe space for <span className="text-primary">healing</span>, 
            <br />growth, and mental wellness.
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg text-subtext leading-relaxed">
            Compassionate, accessible, and evidence-based mental health care 
            empowering individuals, families, and organizations.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-opacity-90 shadow-md"
            >
              Book a Consultation
            </Link>

            <Link
              href="/self-assessment"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-primary px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Take a Self-Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators Bar */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl rounded-2xl bg-surface p-8 shadow-sm border border-border flex flex-wrap justify-between items-center gap-8">
           <div className="flex items-center gap-3">
             <span className="text-primary font-bold">✓</span>
             <span className="text-sm font-medium text-ink">Licensed Psychologist</span>
           </div>
           <div className="flex items-center gap-3">
             <span className="text-primary font-bold">📊</span>
             <span className="text-sm font-medium text-ink">10+ Years Experience</span>
           </div>
           <div className="flex items-center gap-3">
             <span className="text-primary font-bold">🌐</span>
             <span className="text-sm font-medium text-ink">Teletherapy Available</span>
           </div>
           <div className="flex items-center gap-3">
             <span className="text-primary font-bold">🛡️</span>
             <span className="text-sm font-medium text-ink">Confidential & Ethical</span>
           </div>
        </div>
      </section>

      {/* 3. UPDATED WIDE LAYOUT: Beacon of Hope Section */}
      <section className="py-24 px-6 bg-[#fcfcfd]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12">
            
            {/* Top Text Content */}
            <div className="max-w-3xl">
              <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">
                Clinical Excellence
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-ink leading-tight mb-6">
                A Beacon of Hope
              </h3>
              <p className="text-lg text-subtext leading-relaxed">
                In a world that often feels overwhelming, Elpis Wellness Africa stands as a beacon of hope. 
                We offer comprehensive, compassionate, and evidence-based mental health services 
                across the lifespan.
              </p>
            </div>

            {/* WIDE PHOTO INTEGRATION: aspect-video */}
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              <Image 
                src="/hope.jpeg" 
                alt="Beacon of Hope" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 to-transparent" />
            </div>

            {/* Mission & Vision Cards below the photo */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="elpis-card !p-8 shadow-sm border border-border rounded-2xl bg-white">
                <h4 className="text-xl font-bold text-ink mb-3">Our Mission</h4>
                <p className="text-subtext leading-relaxed">
                  To provide accessible care that empowers individuals to achieve lasting wellness.
                </p>
              </div>
              <div className="elpis-card !p-8 shadow-sm border border-border rounded-2xl bg-white">
                <h4 className="text-xl font-bold text-ink mb-3">Our Vision</h4>
                <p className="text-subtext leading-relaxed">
                  To create a society where mental wellness is prioritized at every stage of life.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <Values />

      {/* 5. Services Grid */}
      <Services />

      {/* 6. Signature Programs Section */}
      <section className="py-24 px-6 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ink mb-4 italic">2026 Signature Programs</h2>
            <p className="text-subtext max-w-2xl mx-auto leading-relaxed">
              Step into a new version of yourself with our structured, 6-week transformational experiences delivered via Google Meet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-muted p-8 rounded-3xl border border-border hover:border-primary transition-all shadow-sm hover:shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Life Transformation</span>
                <span className="text-xl font-bold text-ink">24,000/-</span>
              </div>
              <h3 className="text-2xl font-bold text-ink mb-3">Ignite Your Life</h3>
              <p className="text-sm text-subtext mb-8 leading-relaxed">
                Turn your life around in all areas: health, wealth, relationships, and career. Meeting Tuesdays and Thursdays live on Google Meet.
              </p>
              <Link 
                href="/programs/ignite" 
                className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all"
              >
                Learn More & Enroll <span>→</span>
              </Link>
            </div>

            <div className="group bg-muted p-8 rounded-3xl border border-border hover:border-brand-orange transition-all shadow-sm hover:shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">For Women</span>
                <span className="text-xl font-bold text-ink">15,000/-</span>
              </div>
              <h3 className="text-2xl font-bold text-ink mb-3">Guilt Free</h3>
              <p className="text-sm text-subtext mb-8 leading-relaxed">
                For high-achieving but emotionally exhausted women. Reclaim your joy and self-worth every Saturday on Google Meet.
              </p>
              <Link 
                href="/programs/guilt-free" 
                className="inline-flex items-center gap-2 text-brand-orange font-bold group-hover:gap-4 transition-all"
              >
                Join the Journey <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Strategic Partners Section */}
      <section className="py-24 bg-[#fcfcfd]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">
              Strategic Partners
            </h2>
            <p className="text-3xl font-extrabold text-ink">
              Trusted by leading organizations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="elpis-card flex items-center justify-center h-40 p-8 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/Mindscape.jpeg" alt="Mindscape" width={160} height={60} className="max-h-full w-auto object-contain" />
            </div>
            <div className="elpis-card flex items-center justify-center h-40 p-8 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/Rjazi.jpeg" alt="Rjazi" width={160} height={60} className="max-h-full w-auto object-contain" />
            </div>
            <div className="elpis-card flex items-center justify-center h-40 p-8 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/mindfi.jpeg" alt="Mindfi" width={160} height={60} className="max-h-full w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Closing Statement Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 italic">"With Elpis, Find Mental Bliss"</h2>
          <p className="text-lg opacity-90 leading-relaxed mb-8">
            At Elpis Wellness Africa, we don't just treat mental health—we nurture the human spirit. 
            Whether you're seeking support for yourself, your loved ones, or your team, we are here to walk alongside you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent text-white px-8 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all shadow-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </main>
  );
}