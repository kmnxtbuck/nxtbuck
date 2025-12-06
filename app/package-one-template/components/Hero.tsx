export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300 mb-4">
            TORONTO RESIDENTIAL ROOFING
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Reliable Roofing for Toronto Homes.
          </h1>
          <p className="text-slate-200 mb-6 max-w-xl">
            Fast, clean, and long-lasting roof repairs and replacements —
            with upfront pricing and no surprise add-ons.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 transition"
            >
              Get a Free Roof Inspection
            </a>
            <a
              href="tel:+14165550199"
              className="inline-flex items-center rounded-full border border-slate-500 px-5 py-3 text-sm font-medium text-slate-100 hover:border-slate-300 transition"
            >
              Call Now: (416) 555-0199
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              15+ years of experience
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Fully licensed & insured
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              24-hour emergency service
            </div>
          </div>
        </div>

        <div className="md:justify-self-end w-full">
          <div className="relative rounded-3xl bg-slate-800/80 border border-slate-700 shadow-2xl p-6 md:p-8">
            <p className="text-sm font-medium text-slate-200 mb-4">
              "They replaced our entire roof in two days and left our yard
              cleaner than it was before."
            </p>
            <p className="text-xs text-slate-400 mb-8">— Daniel R., Scarborough</p>
            <div className="grid grid-cols-3 gap-4 text-xs text-slate-200">
              <div>
                <p className="text-2xl font-semibold">15+</p>
                <p className="text-slate-400">Years in business</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">500+</p>
                <p className="text-slate-400">Roofs completed</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">4.9★</p>
                <p className="text-slate-400">Average rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

