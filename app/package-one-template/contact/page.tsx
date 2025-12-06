"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "Roof Repair",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Component Preview */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr,1.2fr] items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 text-slate-900">
                Request Your Free Roof Inspection
              </h2>
              <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base max-w-lg">
                Fill out the form and we'll contact you within one business day
                to schedule your inspection.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <a
                  href="tel:+14165550199"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                    <p className="text-sm sm:text-base font-medium text-slate-900">
                      (416) 555-0199
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@maplepeakroofing.ca"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <p className="text-sm sm:text-base font-medium text-slate-900">
                      info@maplepeakroofing.ca
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Service Area</p>
                    <p className="text-sm sm:text-base font-medium text-slate-900">
                      Toronto & Greater Toronto Area
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                      placeholder="(416) 555-0199"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Address
                  </label>
                  <input
                    type="text"
                    value={formState.address}
                    onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    placeholder="Street, City, Postal Code"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Type of Service
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      backgroundSize: "20px",
                    }}
                  >
                    <option>Roof Repair</option>
                    <option>Full Roof Replacement</option>
                    <option>Emergency Leak / Storm Damage</option>
                    <option>Gutters & Ventilation</option>
                    <option>Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Message / Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us what's going on with your roof..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
                >
                  Request My Free Inspection
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  By submitting this form, you agree to be contacted by email or
                  phone about your roofing quote. We never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Component Info */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 border-t border-slate-200">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-slate-900 text-white rounded-full mb-4">
            Contact Component
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Contact Form Section
          </h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            A lead capture form with contact info cards, form validation styling,
            and responsive two-column layout.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Features</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Clickable contact info cards
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Form with focus states
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Custom styled select dropdown
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Privacy disclaimer
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Responsive Behavior</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                  Mobile
                </span>
                Stacked layout, full-width form
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                  ≥ 1024px
                </span>
                Side-by-side grid
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

