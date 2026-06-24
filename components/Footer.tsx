import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8fafc] text-[#3D6EA6] pt-16 pb-8 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* 1. Brand, Logo & Social Media Links */}
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

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-4">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/1BacVLhtBb/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-[#3D6EA6] hover:text-white transition-all duration-200"
                title="Follow on Facebook"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/elpiswellnessafrica/?utm_source=qr&igsh=MTlramg0dDh6cDByZw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-[#F28C38] hover:text-white transition-all duration-200"
                title="Follow on Instagram"
              >
                <svg className="h-5 w-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com/@elpiswellnessafrica" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-black hover:text-white transition-all duration-200"
                title="Follow on TikTok"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.94-1.74-.22-.21-.42-.45-.61-.7v5.13c.03 3.44-2.31 6.82-5.73 7.26-2.5.34-5.12-.58-6.68-2.58-1.57-1.97-1.72-4.9-.39-7.05 1.2-1.99 3.51-3.2 5.86-3.12v4.04c-1.4-.08-2.84.73-3.41 2.04-.63 1.41-.16 3.22 1.07 4.14 1.21.94 3.01.88 4.11-.2 1.01-1.04 1.09-2.73 1.09-4.14V.02z"/>
                </svg>
              </a>
            </div>
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
              <Link href="/meet-jullie" className="text-slate-600 hover:text-[#F28C38] transition-colors">Book a Session</Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} Elpis Wellness Africa. All rights reserved.</p>
          <div className="flex gap-6 font-medium italic">
            Built by <a href="https://subytech.com" target="_blank" rel="noopener noreferrer" className="text-[#3D6EA6] hover:text-[#F28C38]">subytech.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}