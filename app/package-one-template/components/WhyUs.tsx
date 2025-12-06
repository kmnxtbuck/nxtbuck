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

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Why Homeowners Trust MaplePeak
          </h2>
          <p className="text-slate-200 mb-6 max-w-xl">
            We treat your home like our own and stand behind every roof we
            install. No shortcuts, no disappearing acts — just reliable work.
          </p>
          <div className="grid gap-4">
            {reasons.map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-xs text-slate-300">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-700 bg-slate-800/80 p-6 md:p-8">
          <h3 className="text-sm font-semibold mb-4">
            "They were the only roofing company that actually showed me photos
            from the roof."
          </h3>
          <p className="text-xs text-slate-300 mb-6">
            "MaplePeak walked me through what was wrong, gave me options at
            different price points, and finished the job exactly when they
            said they would. I recommend them to everyone on our street."
          </p>
          <p className="text-xs text-slate-400">— Sarah L., North York</p>
        </div>
      </div>
    </section>
  );
}

