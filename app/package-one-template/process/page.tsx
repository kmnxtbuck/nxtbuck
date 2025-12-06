const steps = [
  {
    step: "01",
    title: "Free Roof Inspection",
    body: "We visit your home, inspect your roof, and show you photos of any issues.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Clear Quote",
    body: "You receive a detailed written quote with options for materials and budget.",
    icon: "📋",
  },
  {
    step: "03",
    title: "Professional Installation",
    body: "Our crew completes the work on schedule, keeping you updated throughout.",
    icon: "🔨",
  },
  {
    step: "04",
    title: "Walkthrough & Warranty",
    body: "We walk the site with you and provide your warranty documentation.",
    icon: "✅",
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Component Preview */}
      <section id="process" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3 text-slate-900">
              How It Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              A simple, transparent process from first call to final walkthrough.
            </p>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-10 left-0 right-0 h-0.5 bg-slate-200" />
              
              <ol className="grid grid-cols-4 gap-6 relative">
                {steps.map((item, index) => (
                  <li key={item.step} className="relative">
                    {/* Step Circle */}
                    <div className="w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center text-3xl mb-6 relative z-10 mx-auto">
                      {item.icon}
                    </div>
                    
                    <div className="text-center">
                      <p className="text-xs font-bold text-amber-500 mb-2 tracking-wider">
                        STEP {item.step}
                      </p>
                      <h3 className="text-base font-semibold mb-2 text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.body}
                      </p>
                    </div>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-8 -right-3 text-slate-300">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <ol className="md:hidden space-y-6">
            {steps.map((item, index) => (
              <li
                key={item.step}
                className="relative flex gap-4"
              >
                {/* Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-slate-200" />
                )}
                
                {/* Step Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl relative z-10">
                  {item.icon}
                </div>
                
                <div className="flex-1 pb-6">
                  <p className="text-[10px] font-bold text-amber-500 mb-1 tracking-wider">
                    STEP {item.step}
                  </p>
                  <h3 className="text-sm font-semibold mb-1 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* CTA */}
          <div className="mt-10 sm:mt-12 text-center">
            <a
              href="/package-one-template/contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold text-slate-900 hover:bg-amber-300 transition-colors"
            >
              Start Your Free Inspection
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
            Process Component
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Process Timeline Section
          </h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            A step-by-step process timeline with icons and connecting lines.
            Features different layouts for mobile (vertical) and desktop (horizontal).
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Features</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Icon circles with emoji
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Connecting timeline lines
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Step number badges
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                CTA button at bottom
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
                Vertical timeline layout
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                  ≥ 768px
                </span>
                Horizontal 4-column grid
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

