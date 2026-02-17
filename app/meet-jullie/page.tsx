import Image from "next/image";

export default function MeetJullie() {
  return (
    <main className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Profile Image Section - Using your photo.jpeg from public folder */}
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border bg-slate-200">
           <Image 
            src="/photo.jpeg" 
            alt="Jullie A. Otieno - Clinical Psychologist"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Professional Profile Section */}
        <div>
          <h1 className="text-4xl font-bold text-ink mb-2 text-primary">Jullie A. Otieno</h1>
          <p className="text-xl text-brand-orange font-semibold mb-6">Clinical Psychologist</p>
          
          <div className="space-y-6 text-subtext leading-relaxed">
            {/* Qualification Statement */}
            <div className="flex items-center gap-3 text-ink">
              <span className="text-2xl">🎓</span>
              <span className="font-bold text-lg">MA Clinical Psychology</span>
            </div>

            <p>
              With over 10 years of professional experience, Jullie is dedicated to providing compassionate, 
              evidence-based mental health care across Kenya. 
            </p>
            
            {/* Board Licensing Info - Secured to protect registration number */}
            <div className="p-6 bg-white rounded-xl border-l-4 border-brand-blue shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-2">Professional Status</p>
              <p className="text-ink font-medium leading-relaxed">
                Duly Licensed and Registered Practitioner with the 
                <span className="block text-primary font-bold">Counsellors and Psychologists Board (CPB)</span>
              </p>
            </div>

            <p>
              Her work centers on trauma-informed therapy, empowering individuals through personal development and compassionate, evidence-based mental health care.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}