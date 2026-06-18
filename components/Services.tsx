export default function Services() {
  const services = [
    { 
      title: "Individual's Therapy", 
      desc: "Support for anxiety, depression, and trauma across all life stages.", 
      // Your direct testing asset URL
      image: "https://res.cloudinary.com/dmpdabx8b/image/upload/f_auto,q_auto/v1/Photo_from_Martin_f6lvpi" 
    },
    { 
      title: "Family & Couples", 
      desc: "Improving communication and conflict resolution within relationships.", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Teletherapy", 
      desc: "Flexible, secure virtual sessions accessible from anywhere.", 
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "EAPs & Workplace", 
      desc: "Customized mental wellness solutions and training for organizations.", 
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Assessments", 
      desc: "Comprehensive psychological testing for learning and diagnostics.", 
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Crisis Intervention", 
      desc: "Immediate support and debriefing during mental health emergencies.", 
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600" 
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
              className="group hover:border-brand-blue transition-all flex flex-col bg-white rounded-2xl border border-border shadow-sm p-3"
            >
              {/* Image Container: Rounded on all sides, removing the sharp bottom edges */}
              <div className="w-full h-64 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Minimized Text Content */}
              <div className="pt-4 px-2 pb-2 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-brand-blue transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-subtext leading-relaxed">
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