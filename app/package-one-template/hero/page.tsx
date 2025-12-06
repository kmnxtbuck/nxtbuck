export default function HeroPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Component Preview */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-24 grid gap-8 md:gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-300 mb-3 sm:mb-4">
              TORONTO RESIDENTIAL ROOFING
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 sm:mb-4">
              Reliable Roofing for Toronto Homes.
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mb-5 sm:mb-6 max-w-xl">
              Fast, clean, and long-lasting roof repairs and replacements —
              with upfront pricing and no surprise add-ons.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-5 sm:mb-6">
              <a
                href="/package-one-template/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 sm:px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 transition text-center"
              >
                Get a Free Roof Inspection
              </a>
              <a
                href="tel:+14165550199"
                className="inline-flex items-center justify-center rounded-full border border-slate-500 px-4 sm:px-5 py-3 text-sm font-medium text-slate-100 hover:border-slate-300 transition text-center"
              >
                Call Now: (416) 555-0199
              </a>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                15+ years of experience
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                Fully licensed & insured
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                24-hour emergency service
              </div>
            </div>
          </div>

          <div className="md:justify-self-end w-full">
            <div className="relative rounded-2xl sm:rounded-3xl bg-slate-800/80 border border-slate-700 shadow-2xl p-5 sm:p-6 md:p-8">
              <p className="text-sm font-medium text-slate-200 mb-3 sm:mb-4">
                "They replaced our entire roof in two days and left our yard
                cleaner than it was before."
              </p>
              <p className="text-xs text-slate-400 mb-6 sm:mb-8">— Daniel R., Scarborough</p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 text-xs text-slate-200">
                <div>
                  <p className="text-xl sm:text-2xl font-semibold">15+</p>
                  <p className="text-slate-400 text-[10px] sm:text-xs">Years in business</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-semibold">500+</p>
                  <p className="text-slate-400 text-[10px] sm:text-xs">Roofs completed</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-semibold">4.9★</p>
                  <p className="text-slate-400 text-[10px] sm:text-xs">Average rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Info */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-slate-900 text-white rounded-full mb-4">
            Hero Component
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Hero Section with Stats Card
          </h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            A compelling hero section with headline, CTAs, trust badges, and a
            testimonial stats card. Fully responsive with stacked layout on mobile.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Features</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Dark gradient background
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Primary & secondary CTA buttons
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Trust badges with indicators
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Testimonial card with stats
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Click-to-call phone button
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Responsive Behavior</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                  Mobile
                </span>
                Stacked layout, full-width buttons
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                  Tablet
                </span>
                Two-column grid layout
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                  Desktop
                </span>
                Larger typography, more padding
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

