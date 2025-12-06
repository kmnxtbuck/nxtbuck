export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Request Your Free Roof Inspection
          </h2>
          <p className="text-slate-600 mb-6 max-w-xl">
            Fill out the form and we'll contact you within one business day
            to schedule your inspection.
          </p>
          <div className="space-y-2 text-sm text-slate-700">
            <p>
              Phone:{" "}
              <a href="tel:+14165550199" className="underline">
                (416) 555-0199
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@maplepeakroofing.ca" className="underline">
                info@maplepeakroofing.ca
              </a>
            </p>
            <p>Service Area: Toronto & GTA</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="(416) 555-0199"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Address
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Street, City, Postal Code"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Type of Service
              </label>
              <select className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900">
                <option>Roof Repair</option>
                <option>Full Roof Replacement</option>
                <option>Emergency Leak / Storm Damage</option>
                <option>Not Sure</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Message / Notes
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Tell us what's going on with your roof..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Request My Free Inspection
            </button>

            <p className="text-[11px] text-slate-500 mt-2">
              By submitting this form, you agree to be contacted by email or
              phone about your roofing quote. We never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

