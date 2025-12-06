const reasons = [
  {
    title: "Upfront, Transparent Pricing",
    body: "No hidden fees or surprise add-ons. You see the full cost before any work starts.",
  },
  {
    title: "Clean Job Sites",
    body: "We protect your landscaping, use magnetic nail sweepers, and leave your property spotless.",
  },
  {
    title: "Local & Accountable",
    body: "Toronto-based crew, not a fly-by-night operator. We're here before, during, and after the job.",
  },
  {
    title: "Real Warranty Support",
    body: "If anything's not right, we come back and fix it. Simple as that.",
  },
];

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Component Preview */}
      <section id="why-us" className="py-12 sm:py-16 md:py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
                Why Homeowners Trust MaplePeak
              </h2>
              <p className="text-slate-200 mb-6 sm:mb-8 max-w-xl text-sm sm:text-base">
                We treat your home like our own and stand behind every roof we
                install. No shortcuts, no disappearing acts — just reliable work.
              </p>
              <div className="grid gap-4 sm:gap-5">
                {reasons.map((item) => (
                  <div key={item.title} className="flex gap-3 sm:gap-4">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-slate-700 bg-slate-800/80 p-5 sm:p-6 md:p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">
                "They were the only roofing company that actually showed me photos
                from the roof."
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                "MaplePeak walked me through what was wrong, gave me options at
                different price points, and finished the job exactly when they
                said they would. I recommend them to everyone on our street."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-700 flex items-center justify-center text-lg font-semibold">
                  S
                </div>
                <div>
                  <p className="text-sm font-medium">Sarah L.</p>
                  <p className="text-xs text-slate-400">North York</p>
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
            Why Us Component
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trust Section with Testimonial
          </h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            A dark-themed section highlighting key differentiators alongside a
            featured customer testimonial with avatar and star rating.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Features</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Dark background for contrast
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Bullet points with accent indicators
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Featured testimonial card
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Star rating and avatar
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
                Stacked layout
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                  ≥ 1024px
                </span>
                Side-by-side grid
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

