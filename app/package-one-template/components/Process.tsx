const steps = [
  {
    step: "01",
    title: "Free Roof Inspection",
    body: "We visit your home, inspect your roof, and show you photos of any issues.",
  },
  {
    step: "02",
    title: "Clear Quote",
    body: "You receive a detailed written quote with options for materials and budget.",
  },
  {
    step: "03",
    title: "Professional Installation",
    body: "Our crew completes the work on schedule, keeping you updated throughout.",
  },
  {
    step: "04",
    title: "Walkthrough & Warranty",
    body: "We walk the site with you and provide your warranty documentation.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            How It Works
          </h2>
          <p className="text-slate-600 max-w-2xl">
            A simple, transparent process from first call to final
            walkthrough.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-medium text-slate-400 mb-2">
                {item.step}
              </p>
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

