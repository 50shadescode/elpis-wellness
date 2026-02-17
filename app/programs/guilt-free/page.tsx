export default function GuiltFreeProgram() {
  return (
    <main className="py-20 px-6 max-w-7xl mx-auto">
      <div className="bg-brand-orange rounded-3xl p-12 text-white mb-16">
        <h1 className="text-4xl font-bold mb-4">Guilt Free</h1>
        <p className="text-xl opacity-90">For High-Achieving, Emotionally Exhausted Women</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-ink mb-4">Reclaim Your Capacity for Joy</h2>
            <p className="text-subtext leading-relaxed">
              Step out of the cycle of over-functioning and people-pleasing. This 6-week transformational 
              program meets on <strong>Saturdays via Google Meet</strong> to help you replace guilt 
              with self-trust and empowerment.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-border">
              <h4 className="font-bold text-brand-orange mb-2">Identify Triggers</h4>
              <p className="text-xs text-subtext">Use the "Guilt Equation" to quiet critical thoughts.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-border">
              <h4 className="font-bold text-brand-orange mb-2">Boundaries</h4>
              <p className="text-xs text-subtext">Create sustainable boundaries around overexertion.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-brand-orange shadow-xl h-fit">
          <h3 className="text-xl font-bold mb-2">Investment</h3>
          <div className="text-3xl font-bold text-brand-orange mb-6">15,000/-</div>
          <p className="text-xs text-subtext mb-6 italic">2,500/- per session installment option available</p>
          <button className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold hover:bg-opacity-90">
            Join the Program
          </button>
        </div>
      </div>
    </main>
  );
}