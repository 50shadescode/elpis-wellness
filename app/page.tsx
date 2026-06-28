import type { Metadata } from "next";
import About from "@/components/About";
import Services from "@/components/Services";
import Values from "@/components/Values"; 
import Link from "next/link";
import Image from "next/image";

// High-Intent Corporate Keywords from the Official Company Profile to fix Google AI Overview
export const metadata: Metadata = {
  title: "Elpis Wellness Africa | Whole-Person Mental Health Care & EAPs",
  description: "Comprehensive, compassionate, and evidence-based mental health services across the lifespan. Specializing in individual therapy, holistic care, and customized Employee Assistance Programs (EAPs).",
  keywords: [
    "Elpis Wellness Africa", 
    "Lifespan Mental Wellness", 
    "Employee Assistance Programs Kenya", 
    "Clinical Psychologist Julie Otieno", 
    "Whole-Person Care",
    "Psychological Assessments",
    "Mental Health Care Kisumu"
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-muted">
      {/* 1. BRIGHTER DYNAMIC VIDEO HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden bg-slate-900">
        
        {/* Background Video Wrapper - Visibility boosted from 40% to 65% for natural warmth */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-65">
          <video 
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          >
            <source 
              src="https://res.cloudinary.com/dmpdabx8b/video/upload/f_auto,q_auto,so_0,eo_10/v1781731487/Video_from_Martin_br3omd.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Softened, highly transparent color overlay to maximize room brightness */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-slate-900/15" />
        </div>

        {/* Hero Content Overlays with drop-shadow for pristine readability */}
        <div className="relative mx-auto max-w-4xl text-center z-10 py-20 lg:py-32 drop-shadow-md">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            A safe space for <span className="text-primary-foreground underline decoration-primary decoration-4">healing</span>, 
            <br />growth, and mental wellness.
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-100 leading-relaxed font-medium">
            Compassionate, accessible, and evidence-based mental health care from Elpis Wellness Africa, 
            empowering individuals, families, and organizations.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/meet-jullie"
              prefetch={false}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-opacity-90 shadow-lg"
            >
              Book a Consultation
            </Link>

            <Link
              href="/self-assessment"
              prefetch={false}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-slate-900"
            >
              Take a Self-Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators Bar */}
      <section className="px-4 -mt-8 relative z-20">
        <div className="mx-auto max-w-5xl rounded-2xl bg-surface p-8 shadow-md border border-border flex flex-wrap justify-between items-center gap-8">
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

      {/* 3. WIDE LAYOUT: Clinical Excellence Welcome Space */}
      <section className="py-24 px-6 bg-[#fcfcfd] border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Full-length Office Tour View Player */}
            <div className="relative aspect-[9/16] max-h-[580px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-950 mx-auto">
              <video 
                controls 
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source 
                  src="https://res.cloudinary.com/dmpdabx8b/video/upload/f_auto,q_auto/v1781731487/Video_from_Martin_br3omd.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right Column: Grounded Professional Greeting Copy */}
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em]">
                Clinical Excellence
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">
                Welcome to Elpis Wellness Africa
              </h3>
              
              <div className="space-y-4 text-base md:text-lg text-subtext font-light leading-relaxed">
                <p>
                  In a world that often feels overwhelming, our practice stands as a beacon of hope. We believe that true healing begins in an environment designed entirely around your peace, security, and absolute comfort.
                </p>
                <p>
                  Our physical office space is curated to provide a quiet, modern, and confidential sanctuary away from daily stressors, allowing you to focus completely on your personal path to recovery and mental balance.
                </p>
                <p>
                  Whether you join us for an in-person session at our clinic or connect through our flexible secure teletherapy portal from anywhere across the region, you receive identical dedicated, evidence-based psychological care.
                </p>
                <p className="font-medium text-ink pt-2">
                  Take a digital walk through our space on the left, and explore our specialized clinical services below.
                </p>
              </div>

              {/* NEW SOCIAL CHANNELS INTEGRATION SPLIT */}
              <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <Link
                  href="/meet-jullie"
                  prefetch={false}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-md hover:bg-opacity-90 transition-all text-center"
                >
                  Explore Consultations
                </Link>

                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.15em] font-bold text-subtext">Connect & Follow Us</span>
                  <div className="flex items-center gap-3">
                    {/* Facebook Link */}
                    <a 
                      href="https://www.facebook.com/share/1BacVLhtBb/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-xl bg-muted text-[#3D6EA6] hover:bg-[#3D6EA6] hover:text-white transition-all shadow-sm"
                    >
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>

                    {/* Instagram Link */}
                    <a 
                      href="https://www.instagram.com/elpiswellnessafrica/?utm_source=qr&igsh=MTlramg0dDh6cDByZw==" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-xl bg-muted text-[#3D6EA6] hover:bg-[#F28C38] hover:text-white transition-all shadow-sm"
                    >
                      <svg className="h-5 w-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>

                    {/* TikTok Link */}
                    <a 
                      href="https://tiktok.com/@elpiswellnessafrica" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-xl bg-muted text-[#3D6EA6] hover:bg-black hover:text-white transition-all shadow-sm"
                    >
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.94-1.74-.22-.21-.42-.45-.61-.7v5.13c.03 3.44-2.31 6.82-5.73 7.26-2.5.34-5.12-.58-6.68-2.58-1.57-1.97-1.72-4.9-.39-7.05 1.2-1.99 3.51-3.2 5.86-3.12v4.04c-1.4-.08-2.84.73-3.41 2.04-.63 1.41-.16 3.22 1.07 4.14 1.21.94 3.01.88 4.11-.2 1.01-1.04 1.09-2.73 1.09-4.14V.02z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Mission & Vision Cards */}
          <div className="grid sm:grid-cols-2 gap-8 mt-16">
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
      </section>

      {/* 4. About Section */}
      <About />

      {/* 5. Core Values Section */}
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
                prefetch={false}
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
                prefetch={false}
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
            At Elpis Wellness Africa, we care for more than mental health—we care for people.
Our holistic, client-centered approach combines professional expertise with genuine compassion to support emotional well-being, personal growth, and lasting resilience. Whether you're seeking care for yourself, a loved one, or your organization, we're here to help you navigate life's challenges with confidence and hope.
          </p>
          <Link 
            href="/meet-jullie" 
            prefetch={false}
            className="inline-block bg-accent text-white px-8 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all shadow-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </main>
  );
}