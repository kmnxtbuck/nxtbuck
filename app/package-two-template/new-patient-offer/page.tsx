// app/new-patient-offer/page.tsx

export default function NewPatientOfferPage() {
    return (
      <main className="bg-slate-950 text-slate-50">
        <section className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-3xl px-4 pb-16 pt-12 sm:pb-20 sm:pt-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-400">
              New patient special
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Exam, digital X-rays &amp; cleaning for $149.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              If you don&apos;t have dental insurance, this is the easiest way to get
              caught up on your oral health. No surprises, no add-on fees — just a
              thorough, gentle visit with a dentist who takes the time to listen.
            </p>
  
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <div className="grid gap-8 sm:grid-cols-[1.1fr,1fr]">
                {/* Left: What’s included */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-slate-50">
                    What&apos;s included in the $149 visit:
                  </h2>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Comprehensive exam with Dr. Shah</li>
                    <li>• Necessary digital X-rays</li>
                    <li>• Gentle standard cleaning (in absence of gum disease)</li>
                    <li>• Personalized treatment plan &amp; cost estimate if needed</li>
                  </ul>
                  <p className="text-xs text-slate-400">
                    If we find signs of gum disease, we&apos;ll discuss further treatment
                    options and fees with you before moving forward.
                  </p>
                  <div className="mt-3 rounded-xl bg-slate-950/70 p-3 text-xs text-slate-300">
                    <p className="font-semibold text-sky-300">Have insurance?</p>
                    <p className="mt-1">
                      Most insured patients pay little or nothing out of pocket for this
                      same visit. We can help you verify your benefits before you book.
                    </p>
                  </div>
                </div>
  
                {/* Right: Request form / Calendar */}
                <div className="space-y-4">
                  <h2 className="text-sm font-semibold text-slate-100">
                    Request your new patient appointment
                  </h2>
                  <p className="text-xs text-slate-300">
                    Fill out the form below and our team will contact you to confirm your
                    exact appointment time and answer any questions.
                  </p>
  
                  <form className="space-y-3 text-sm">
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
                    <textarea
                      placeholder="Anything you'd like us to know? (optional)"
                      className="h-20 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                    />
                    <label className="flex items-center gap-2 text-[11px] text-slate-400">
                      <input
                        type="checkbox"
                        className="h-3 w-3 rounded border-slate-600 bg-slate-950 text-sky-500 focus:ring-sky-500"
                      />
                      I agree to receive appointment-related texts &amp; emails.
                    </label>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-sky-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                    >
                      Request My $149 New Patient Visit
                    </button>
                    <p className="text-[11px] text-slate-500">
                      This form does not collect payment. We&apos;ll confirm availability
                      and any insurance coverage with you first.
                    </p>
                  </form>
  
                  {/* Optional: embed Calendly / other scheduler */}
                  {/* <div className="mt-4">
                    <iframe ... />
                  </div> */}
                </div>
              </div>
            </div>
  
            <p className="mt-6 text-xs text-slate-400">
              Questions first? Call{" "}
              <a
                href="tel:+14165550123"
                className="font-semibold text-sky-400 hover:text-sky-300"
              >
                (416) 555-0123
              </a>{" "}
              and mention the new patient special.
            </p>
          </div>
        </section>
      </main>
    );
  }
  