import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

const coreValues = [
  {
    title: "Radical Simplicity",
    description:
      "We measure success by how few clicks it takes to get the job done. If it requires a manual, we go back to the drawing board.",
  },
  {
    title: "Unapologetically Forward",
    description:
      "We don't build for the world as it is today; we build for where it's going next year.",
  },
  {
    title: "Invisible Engineering",
    description:
      "The best technology gets out of your way. Our backend is complex so your frontend can be effortless.",
  },
];

export default function AboutUs() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="text-white space-y-16">
        {/* Headline */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Building the Future.
            <br />
            <span className="text-[#FF4081]">Sans the Friction.</span>
          </h1>
        </header>

        {/* Mission */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#FF4081]">Our Mission</h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Technology should feel like magic, not homework. At NxtBuck, we exist to bridge the gap between complex next-gen capability and intuitive human experience. We take the most powerful algorithms and wrap them in interfaces so clean, you forget the code is even there.
          </p>
        </section>

        {/* Core Values */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-[#FF4081]">Core Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3"
              >
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#FF4081]">Our Story</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            NxtBuck Inc. was founded on a simple observation: Software is getting faster, but it&apos;s also getting harder to use. We are a team of engineers, designers, and optimists who believe that high-performance tools shouldn&apos;t be reserved for the technical elite.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            We are democratizing power through design.
          </p>
        </section>
      </article>
    </main>
  );
}
