"use client";

import { useState } from "react";

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
  {
    q: "What warranty do you offer?",
    a: "We provide a 10-year workmanship warranty on all installations, plus manufacturer warranties on materials ranging from 25-50 years.",
  },
  {
    q: "Do you handle permits?",
    a: "Yes, we handle all necessary permits and inspections. This is included in our quote.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 hover:border-slate-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
      >
        <span className="text-sm sm:text-base font-medium text-slate-800 pr-4">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-4 h-4 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-slate-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Component Preview */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3 text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              If you don't see your question here, just ask during your inspection.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.q}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 sm:mt-12 text-center p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              We're here to help. Get in touch with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+14165550199"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (416) 555-0199
              </a>
              <a
                href="/package-one-template/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Component Info */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 border-t border-slate-200">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-slate-900 text-white rounded-full mb-4">
            FAQ Component
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            FAQ Accordion Section
          </h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            An interactive FAQ accordion with smooth animations, single-item expansion,
            and a contact CTA for unanswered questions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Features</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Animated accordion expansion
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Single-item-open behavior
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Rotating chevron indicator
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Contact CTA card
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
                Full-width, stacked CTA buttons
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                  Desktop
                </span>
                Max-width container, inline buttons
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

