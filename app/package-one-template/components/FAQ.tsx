const faqs = [
  {
    q: "How much does a roof replacement cost?",
    a: "Most Toronto homes we work on range between $8,000–$18,000 depending on size, pitch, and materials. We provide a detailed quote before any work begins.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We can connect you with flexible monthly payment options through our financing partners.",
  },
  {
    q: "Are you insured?",
    a: "Yes. We are fully licensed and carry liability and WSIB coverage for our crew.",
  },
  {
    q: "How soon can you start?",
    a: "For most projects, we can start within 1–2 weeks. Emergency repairs are available same-day.",
  },
];

export default function FAQ() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-slate-600 mb-6">
        If you don't see your question here, just ask during your
        inspection.
      </p>

      <div className="space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-slate-800">
              <span>{item.q}</span>
              <span className="text-slate-400 group-open:hidden">+</span>
              <span className="text-slate-400 hidden group-open:inline">
                –
              </span>
            </summary>
            <p className="mt-2 text-xs text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

