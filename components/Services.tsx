import Image from "next/image";

export default function Services() {
  const services = [
    { 
      title: "Individual's Therapy", 
      desc: "Support for anxiety, depression, and trauma across all life stages.", 
      image: "https://res.cloudinary.com/dmpdabx8b/image/upload/f_auto,q_auto/v1781813527/individual_therapy.jpg" 
    },
    { 
      title: "Family & Couples", 
      desc: "Improving communication and conflict resolution within relationships.", 
      image: "/couples-therapy.jpg" // Ready for the next image you select
    },
    { 
      title: "Teletherapy", 
      desc: "Flexible, secure virtual sessions accessible from anywhere.", 
      image: "/teletherapy-session.jpg" 
    },
    { 
      title: "EAPs & Workplace", 
      desc: "Customized mental wellness solutions and training for organizations.", 
      image: "/corporate-wellness.jpg" 
    },
    { 
      title: "Assessments", 
      desc: "Comprehensive psychological testing for learning and diagnostics.", 
      image: "/psychological-assessment.jpg" 
    },
    { 
      title: "Crisis Intervention", 
      desc: "Immediate support and debriefing during mental health emergencies.", 
      image: "/crisis-support.jpg" 
    }
  ];

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ink">Our Services</h2>
          <p className="mt-4 text-subtext max-w-2xl">
            Tailored solutions to meet diverse mental wellness needs, from early development to aging-related concerns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="elpis-card group hover:border-brand-blue transition-all flex flex-col p-0 overflow-hidden bg-white rounded-2xl border border-border"
            >
              {/* Card Image Wrapper with Subtle Scale Hover Animation */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-7xl) 33vw, 50vw"
                />
              </div>

              {/* Text Padding Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-brand-blue transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-subtext leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}