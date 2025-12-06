const services = [
  {
    title: "Roof Repair",
    body: "Fix leaks, missing shingles, and storm damage before they become expensive structural problems.",
  },
  {
    title: "Full Roof Replacement",
    body: "High-quality materials and clean installation, backed by a 10-year workmanship warranty.",
  },
  {
    title: "Emergency Tarping & Storm Damage",
    body: "24/7 emergency response to protect your home from active leaks and weather exposure.",
  },
  {
    title: "Gutters & Attic Ventilation",
    body: "Proper drainage and ventilation extend the life of your roof and improve energy efficiency.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Roofing Services We Specialize In
          </h2>
          <p className="text-slate-600 max-w-2xl">
            From minor repairs to full replacements, we handle every aspect of
            residential roofing with care and precision.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

