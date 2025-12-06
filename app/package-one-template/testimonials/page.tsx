const testimonials = [
  {
    quote:
      "MaplePeak fixed a major leak in the middle of a storm. Fast, professional, and fairly priced.",
    name: "Sarah L.",
    location: "North York",
    rating: 5,
    avatar: "S",
  },
  {
    quote:
      "They replaced our entire roof in two days and left our yard cleaner than it was before.",
    name: "Daniel R.",
    location: "Scarborough",
    rating: 5,
    avatar: "D",
  },
  {
    quote:
      "Excellent communication from start to finish. The crew was respectful and efficient.",
    name: "Maria K.",
    location: "Etobicoke",
    rating: 5,
    avatar: "M",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-slate-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Component Preview */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3 text-slate-900">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
              Most of our work comes from referrals and repeat customers.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <StarRating rating={t.rating} />
                <p className="text-sm sm:text-base text-slate-700 my-4 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["S", "D", "M", "J"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-600"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-sm text-slate-600 ml-2">
                500+ Happy Customers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-600">4.9 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Component Info */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 border-t border-slate-200">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-slate-900 text-white rounded-full mb-4">
            Testimonials Component
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Customer Testimonials Grid
          </h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            A testimonials section with star ratings, avatars, and trust badges.
            Includes hover effects and responsive grid layout.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Features</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Star rating component
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Avatar initials
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Hover shadow effect
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Stacked avatar trust badge
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
                Single column stack
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                  ≥ 768px
                </span>
                Three-column grid
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

