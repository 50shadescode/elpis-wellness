export default function IgniteProgram() {
  return (
    <main className="py-20 px-6 max-w-7xl mx-auto">
      <div className="bg-brand-blue rounded-3xl p-12 text-white mb-16">
        <h1 className="text-4xl font-bold mb-4">Ignite Your Life</h1>
        <p className="text-xl opacity-90">6-Week Total Life Transformation</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-ink mb-4">Program Overview</h2>
            <p className="text-subtext leading-relaxed">
              In just six weeks, your life can be completely turned around—not in one area, but in all areas 
              including health, wealth, relationships, and career. This face-to-face Google Meet experience 
              meets live on <strong>Tuesdays and Thursdays</strong>.
            </p>
          </section>

          <section className="bg-surface p-8 rounded-2xl border border-border">
            <h3 className="font-bold mb-4">What You Will Achieve:</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-sm text-subtext">
              <li>● Release what’s holding you back</li>
              <li>● Reclaim control over responses</li>
              <li>● Gain clarity on goals & dreams</li>
              <li>● Design your 2026 blueprint</li>
            </ul>
          </section>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-brand-blue shadow-xl h-fit">
          <h3 className="text-xl font-bold mb-2">Enrollment Details</h3>
          <div className="text-3xl font-bold text-primary mb-6">24,000/-</div>
          <p className="text-xs text-subtext mb-6 italic">2,000/- per session installment option available</p>
          <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-opacity-90">
            Secure Your Spot
          </button>
        </div>
      </div>
    </main>
  );
}