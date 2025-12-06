const testimonials = [
  {
    quote:
      "MaplePeak fixed a major leak in the middle of a storm. Fast, professional, and fairly priced.",
    name: "Sarah L.",
    location: "North York",
  },
  {
    quote:
      "They replaced our entire roof in two days and left our yard cleaner than it was before.",
    name: "Daniel R.",
    location: "Scarborough",
  },
];

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        What Our Customers Say
      </h2>
      <p className="text-slate-600 mb-6">
        Most of our work comes from referrals and repeat customers.
      </p>

      <div className="space-y-4">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-800 mb-3">"{t.quote}"</p>
            <p className="text-xs text-slate-500">
              — {t.name}, {t.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

