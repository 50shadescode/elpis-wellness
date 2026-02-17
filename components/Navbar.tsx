import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border px-6 py-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        
        {/* Brand Logo - Increased size for better visibility */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/logo.jpeg" 
            alt="Elpis Wellness Africa" 
            width={240} // Increased from 180
            height={65} 
            className="h-16 w-auto object-contain transition-transform group-hover:scale-105" // Increased height to h-16
            priority
          />
        </Link>

        {/* Navigation Links - Updated to Brand Blue [#3D6EA6] */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#3D6EA6]">
          <Link href="/" className="hover:text-[#F28C38] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#F28C38] transition-colors">About</Link>
          <Link href="/services" className="hover:text-[#F28C38] transition-colors">Services</Link>

          {/* --- Programs Dropdown --- */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-[#F28C38] transition-colors cursor-pointer outline-none">
              Programs
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute left-0 mt-1 w-64 bg-white border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
              <div className="p-2">
                <Link 
                  href="/programs/ignite" 
                  className="block px-4 py-3 hover:bg-muted rounded-lg transition-colors group/item"
                >
                  <span className="block text-ink font-bold">Ignite Your Life</span>
                  <span className="text-[10px] text-subtext group-hover/item:text-[#3D6EA6] italic">6-Week Total Life Transformation</span>
                </Link>
                <Link 
                  href="/programs/guilt-free" 
                  className="block px-4 py-3 hover:bg-muted rounded-lg transition-colors group/item"
                >
                  <span className="block text-ink font-bold">Guilt Free</span>
                  <span className="text-[10px] text-subtext group-hover/item:text-[#F28C38] italic">For High-Achieving Women</span>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/meet-jullie" className="hover:text-[#F28C38] transition-colors">Meet Jullie</Link>
          <Link href="/organizations" className="hover:text-[#F28C38] transition-colors">For Organizations</Link>
        </div>

        {/* Primary CTA Button - Updated to Brand Orange [#F28C38] */}
        <Link 
          href="/contact" 
          className="bg-[#F28C38] text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg hover:bg-opacity-90 transition-all active:scale-95"
        >
          Book Consultation
        </Link>
      </div>
    </nav>
  );
}