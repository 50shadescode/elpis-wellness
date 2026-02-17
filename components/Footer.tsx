import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8fafc] text-[#3D6EA6] pt-16 pb-8 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* 1. Brand & Logo - Scaled Up for Visibility */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/Black logo.jpeg" // Using Black logo for light background contrast
                alt="Elpis Wellness Africa" 
                width={240} // Increased from 180 for better legibility
                height={80} // Scaled proportionally
                className="h-16 w-auto object-contain" // Height class increased to h-16
                priority
              />
            </Link>
            <p className="text-sm font-medium text-slate-500 italic leading-relaxed max-w-xs">
              "With Elpis, Find Mental Bliss"
            </p>
          </div>

          {/* 2. Official Contact Details */}
          <div>
            <h4 className="font-bold mb-6 text-[#F28C38] uppercase text-xs tracking-[0.2em]">
              Contact Details
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-[#3D6EA6] mt-1">📍</span>
                <div className="flex flex-col">
                  <span className="font-bold text-[#3D6EA6]"> Kisumu, Kenya</span>
                  <span className="text-xs">Serving the lakeside regions</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3D6EA6]">📞</span>
                <span>+254 727 202 659</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3D6EA6]">✉️</span>
                <span className="break-all">elpiswellnessafrica@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* 3. Quick Navigation */}
          <div>
            <h4 className="font-bold mb-6 text-[#3D6EA6] uppercase text-xs tracking-[0.2em]">
              Explore
            </h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <Link href="/services" className="text-slate-600 hover:text-[#F28C38] transition-colors">Our Services</Link>
              <Link href="/self-assessment" className="text-slate-600 hover:text-[#F28C38] transition-colors">Free Wellness Test</Link>
              <Link href="/meet-jullie" className="text-slate-600 hover:text-[#F28C38] transition-colors">Meet the Psychologist</Link>
              <Link href="/contact" className="text-slate-600 hover:text-[#F28C38] transition-colors">Book a Session</Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} Elpis Wellness Africa. All rights reserved.</p>
          <div className="flex gap-6 font-medium italic">
            Built by Suby Tech
          </div>
        </div>
      </div>
    </footer>
  );
}