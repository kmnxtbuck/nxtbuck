const services = [
  {
    title: "Roof Repair",
    body: "Fix leaks, missing shingles, and storm damage before they become expensive structural problems.",
    icon: "🔧",
  },
  {
    title: "Full Roof Replacement",
    body: "High-quality materials and clean installation, backed by a 10-year workmanship warranty.",
    icon: "🏠",
  },
  {
    title: "Emergency Tarping & Storm Damage",
    body: "24/7 emergency response to protect your home from active leaks and weather exposure.",
    icon: "⚡",
  },
  {
    title: "Gutters & Attic Ventilation",
    body: "Proper drainage and ventilation extend the life of your roof and improve energy efficiency.",
    icon: "💨",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Component Preview */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 sm:mb-10 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3 text-slate-900">
              Roofing Services We Specialize In
            </h2>
            <p className="text-slate-600 max-w-2xl text-sm sm:text-base mx-auto md:mx-0">
              From minor repairs to full replacements, we handle every aspect of
              residential roofing with care and precision.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {services.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl group-hover:bg-amber-100 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 text-center">
            <a
              href="/package-one-template/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Get a Free Quote
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Component Info */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 border-t border-slate-200">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-slate-900 text-white rounded-full mb-4">
            Services Component
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Services Grid Section
          </h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            A clean services grid with icons, hover effects, and a call-to-action.
            Cards feature subtle animations and responsive layout.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Features</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Icon badges with hover color change
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Card hover shadow effect
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Two-column grid on tablet+
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Centered CTA button
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
                Single column, smaller padding
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                  ≥ 768px
                </span>
                Two-column grid layout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

