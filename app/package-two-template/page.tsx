// app/page.tsx

export default function Home() {
    return (
      <main className="bg-slate-950 text-slate-50">
        {/* HERO */}
        <section className="border-b border-slate-800">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-12 lg:flex-row lg:items-center lg:pb-24 lg:pt-20">
            {/* Left: copy */}
            <div className="flex-1 space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-400">
                Harbour Dental Studio
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Stress-free dentistry.
                <br />
                <span className="text-sky-300">Beautiful, healthy smiles for life.</span>
              </h1>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                We help busy professionals and families keep their teeth healthy and their
                smiles confident — with gentle care, modern technology, and appointments
                that actually run on time.
              </p>
  
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/package-two-template/new-patient-offer"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-sky-400"
                >
                  New Patient Special
                </a>
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
                >
                  Book Appointment
                </a>
              </div>
  
              <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium text-slate-400 sm:text-xs">
                <span>Located in Downtown Toronto</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>4.9 ★ Google rating (320+ reviews)</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>Evening &amp; Saturday appointments</span>
              </div>
            </div>
  
            {/* Right: "Booking" card */}
            <div className="flex-1">
              <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl lg:mt-0">
                <p className="mb-2 text-sm font-semibold text-slate-100">
                  New Patient Exam, X-Rays &amp; Cleaning
                </p>
                <p className="mb-4 text-xs text-slate-300">
                  Comprehensive exam, digital X-rays, and a gentle cleaning for new
                  patients without insurance.
                </p>
                <p className="mb-4 text-2xl font-semibold text-sky-300">
                  $149 <span className="text-xs font-normal text-slate-400">one-time</span>
                </p>
  
                <form className="space-y-3 text-sm">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile phone"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Preferred date / time"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                  />
                  <label className="flex items-center gap-2 text-[11px] text-slate-400">
                    <input
                      type="checkbox"
                      className="h-3 w-3 rounded border-slate-600 bg-slate-950 text-sky-500 focus:ring-sky-500"
                    />
                    Send me a text confirmation &amp; reminder
                  </label>
                  <button
                    type="submit"
                    className="mt-1 w-full rounded-lg bg-sky-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                  >
                    Request My New Patient Appointment
                  </button>
                  <p className="text-[11px] text-slate-500">
                    No payment required to request. We&apos;ll confirm your time by phone or
                    email within one business day.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
  
        {/* TRUST BAR */}
        <section className="border-b border-slate-800 bg-slate-900/60">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-xs text-slate-400">
            <p className="font-medium text-slate-300">
              Trusted by Toronto families for over 10 years
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span>4.9 ★ on Google</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>Member: Ontario Dental Association</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>Invisalign® Provider</span>
            </div>
          </div>
        </section>
  
        {/* SERVICES OVERVIEW */}
        <section className="border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Complete dental care in one studio.
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-300">
                  From routine cleanings to cosmetic smile makeovers, we provide
                  comprehensive care using modern technology and a gentle, judgment-free
                  approach.
                </p>
              </div>
              <a
                href="/package-two-template/services"
                className="text-xs font-medium text-sky-400 hover:text-sky-300"
              >
                View all services →
              </a>
            </div>
  
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Family & Preventive",
                  desc: "Checkups, cleanings, fluoride, and sealants to keep smiles healthy at every age.",
                },
                {
                  title: "Cosmetic Dentistry",
                  desc: "Whitening, bonding, and veneers to correct stains, chips, and gaps.",
                },
                {
                  title: "Invisalign® Clear Aligners",
                  desc: "Straighten your teeth discreetly with removable, virtually invisible aligners.",
                },
                {
                  title: "Emergency Dentistry",
                  desc: "Same-day appointments for toothaches, broken teeth, and urgent concerns.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-slate-50">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300">{item.desc}</p>
                  </div>
                  <button className="mt-4 text-xs font-medium text-sky-400 hover:text-sky-300">
                    Learn more →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* WHY CHOOSE US */}
        <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="mb-8 max-w-2xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Not your typical dental office.
              </h2>
              <p className="text-sm text-slate-300">
                We designed Harbour Dental Studio around what patients actually want:
                clear communication, gentle care, and appointments that respect your time.
              </p>
            </div>
  
            <div className="grid gap-6 md:grid-cols-3">
              <Feature
                title="On-time, every time"
                desc="We intentionally limit the number of patients we see each day so we can run on schedule and never rush your visit."
              />
              <Feature
                title="Gentle, judgment-free care"
                desc="Whether it’s been 6 months or 6 years since your last visit, you’ll get honest advice without pressure or lectures."
              />
              <Feature
                title="Modern tech, better comfort"
                desc="Digital X-rays, intraoral cameras, and minimally invasive techniques for faster, more comfortable visits."
              />
            </div>
          </div>
        </section>
  
        {/* NEW PATIENT OFFER STRIP */}
        <section className="border-b border-slate-800 bg-sky-500/10">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                New patient offer
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-50 sm:text-xl">
                Exam, digital X-rays &amp; cleaning for just $149.
              </h3>
              <p className="mt-1 max-w-xl text-xs text-slate-300 sm:text-sm">
                Perfect for patients without insurance who want a fresh, healthy start.
                Limited appointments available each month.
              </p>
            </div>
            <a
              href="/package-two-template/new-patient-offer"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-sm transition hover:bg-sky-400"
            >
              Claim the new patient special
            </a>
          </div>
        </section>
  
        {/* TESTIMONIALS */}
        <section className="border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Patients actually love coming here.
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-300">
                  Hundreds of patients trust us with their smiles. Here&apos;s what some of
                  them have to say.
                </p>
              </div>
              <div className="text-xs text-slate-400">
                4.9 ★ average rating from 320+ Google reviews
              </div>
            </div>
  
            <div className="grid gap-6 md:grid-cols-3">
              <Testimonial
                name="Sarah M."
                body="I used to dread the dentist. Dr. Shah and her team are so kind and gentle that I actually look forward to my visits now."
              />
              <Testimonial
                name="Jason T."
                body="They got me in the same day for a toothache and took the time to explain every option. I felt heard and never pressured."
              />
              <Testimonial
                name="Amrita K."
                body="Beautiful office, friendly staff, and my Invisalign treatment has been so easy. I recommend them to everyone."
              />
            </div>
          </div>
        </section>
  
        {/* INSURANCE + FINANCING */}
        <section className="border-b border-slate-800 bg-slate-900/60">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  We make dentistry easy to afford.
                </h2>
                <p className="text-sm text-slate-300">
                  We accept most major insurance plans and can help you understand your
                  coverage before any treatment is completed.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>• Direct insurance billing (where available)</li>
                  <li>• Transparent treatment plans with all fees upfront</li>
                  <li>• Payment plans for larger treatments</li>
                </ul>
                <a
                  href="/package-two-template/financing"
                  className="mt-3 inline-flex text-xs font-medium text-sky-400 hover:text-sky-300"
                >
                  Learn more about insurance &amp; financing →
                </a>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-100">
                  Not sure what your insurance covers?
                </h3>
                <p className="text-sm text-slate-300">
                  Our front-desk team can contact your provider and help you understand
                  your benefits before you book.
                </p>
                <p className="text-sm text-slate-300">
                  Call us at{" "}
                  <a
                    href="tel:+14165550123"
                    className="font-semibold text-sky-400 hover:text-sky-300"
                  >
                    (416) 555-0123
                  </a>{" "}
                  or submit your info and we&apos;ll check for you.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* FAQ + FINAL CTA */}
        <section className="border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
              <div>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Frequently asked questions
                </h2>
                <div className="space-y-4 text-sm text-slate-300">
                  <FAQ
                    q="Do you accept new patients?"
                    a="Yes. We welcome new patients of all ages and can usually offer an appointment within 1–2 weeks, with same-day options for emergencies."
                  />
                  <FAQ
                    q="What if it's been a long time since my last visit?"
                    a="You are absolutely welcome here. Our job is to help, not judge. We'll start with a gentle exam and walk you through a clear, step-by-step plan."
                  />
                  <FAQ
                    q="Do you offer evening or weekend appointments?"
                    a="Yes. We offer select evening and Saturday appointments to make visits easier to fit into your schedule."
                  />
                  <FAQ
                    q="Is the $149 new patient offer really all-inclusive?"
                    a="For patients without insurance, the $149 special includes a comprehensive exam, necessary digital X-rays, and a standard cleaning in the absence of periodontal disease."
                  />
                </div>
              </div>
  
              {/* Final CTA block */}
              <div
                id="booking"
                className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-50">
                  Ready to schedule your visit?
                </h3>
                <p className="text-sm text-slate-300">
                  Request an appointment in under a minute. Our team will follow up to
                  confirm your exact time and answer any questions.
                </p>
                <a
                  href="/package-two-template/new-patient-offer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  Request New Patient Appointment
                </a>
                <p className="text-xs text-slate-400">
                  Prefer to talk to a human? Call us at{" "}
                  <a
                    href="tel:+14165550123"
                    className="font-semibold text-sky-400 hover:text-sky-300"
                  >
                    (416) 555-0123
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  function Feature({ title, desc }: { title: string; desc: string }) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
        <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
        <p className="mt-2 text-xs text-slate-300">{desc}</p>
      </div>
    );
  }
  
  function Testimonial({ name, body }: { name: string; body: string }) {
    return (
      <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
        <p className="flex-1 text-xs text-slate-200">&ldquo;{body}&rdquo;</p>
        <p className="mt-4 text-xs font-semibold text-slate-300">— {name}</p>
      </div>
    );
  }
  
  function FAQ({ q, a }: { q: string; a: string }) {
    return (
      <div className="border-b border-slate-800/60 pb-3 last:border-none last:pb-0">
        <p className="text-sm font-semibold text-slate-100">{q}</p>
        <p className="mt-1 text-sm text-slate-300">{a}</p>
      </div>
    );
  }
  