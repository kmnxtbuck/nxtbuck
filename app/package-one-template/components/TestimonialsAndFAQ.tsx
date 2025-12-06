import Testimonials from "./Testimonials";
import FAQ from "./FAQ";

export default function TestimonialsAndFAQ() {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
        <Testimonials />
        <FAQ />
      </div>
    </section>
  );
}

