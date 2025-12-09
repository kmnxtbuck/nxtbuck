import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Toronto Web Design Agency",
  description:
    "NxtBuck Inc. is a Toronto-based web design agency specializing in high-converting websites for service businesses across Ontario and Canada. Learn about our mission.",
  keywords: [
    "Toronto web design company",
    "Ontario web agency",
    "Canadian web designers",
    "about NxtBuck",
  ],
};

const values = [
  {
    title: "Results Over Aesthetics",
    description:
      "A beautiful website means nothing if it doesn't generate leads. Every design decision is backed by conversion data.",
    icon: "📈",
  },
  {
    title: "Speed Is Everything",
    description:
      "Your time is valuable. We deliver in 14 days, not 14 weeks. Fast sites, fast timelines, fast results.",
    icon: "⚡",
  },
  {
    title: "No BS Pricing",
    description:
      "Transparent quotes with no hidden fees. You know exactly what you're paying for before we start.",
    icon: "💎",
  },
];

const stats = [
  { value: "24/7", label: "Support Access" },
  { value: "2x Faster", label: "Lead Capture Setup" },
  { value: "100%", label: "SEO-Ready Structure" },
  { value: "1 Platform", label: "Website + Booking + Forms" },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function AboutUs() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="hidden sm:block absolute top-[-10%] right-[-10%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#FF4081] rounded-full blur-[180px] opacity-15"></div>
      <div className="hidden sm:block absolute top-[50%] left-[-15%] w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-[#9C27B0] rounded-full blur-[160px] opacity-15"></div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF4081] animate-pulse"></span>
            <span className="text-white/80 text-xs sm:text-sm font-medium">
              About NxtBuck Inc.
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-4 sm:mb-6">
            We Build Websites That{" "}
            <span className="bg-gradient-to-r from-[#FF4081] to-[#E040FB] bg-clip-text text-transparent">
              Actually Work.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Based in Toronto, we build websites that generate leads, 
            book appointments, and grow businesses across Ontario and Canada. 
            Most agencies build pretty websites. We build ones that actually work.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 border-y border-white/10 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Why We Started{" "}
                <span className="text-[#FF4081]">NxtBuck</span>
              </h2>
              <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
                <p>
                  We saw too many Toronto and Ontario service businesses losing customers 
                  to outdated, slow, and confusing websites. Contractors, clinics, law firms - 
                  great at what they do, but struggling online.
                </p>
                <p>
                  Traditional GTA agencies charge $15-50K and take months. DIY builders 
                  look cheap and don't convert. There had to be a better way for Canadian businesses.
                </p>
                <p>
                  So we built it. A Toronto-based agency that delivers premium, 
                  conversion-optimized websites in 14 days at a fair price. 
                  Serving businesses from Mississauga to Ottawa and across Canada.
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border border-white/20 bg-white/10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                Our Promise to You
              </h3>
              <ul className="space-y-3">
                {[
                  "Your website will generate more leads",
                  "You'll have it in 14 days or less",
                  "No hidden fees or surprise charges",
                  "We're not done until you're happy",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-[#FF4081] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </section>

      {/* Values Section */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              What We Believe
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
              These principles guide every project we take on.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-2xl border border-white/20 bg-white/10 hover:border-[#FF4081]/50 hover:bg-white/15 transition-all duration-300"
              >
                <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">{value.icon}</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          </div>
        </section>

      {/* Who We Work With */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Built for Ontario Service Businesses
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
              We specialize in websites for Toronto and GTA businesses where leads mean everything.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              "Contractors",
              "Law Firms",
              "Dental Clinics",
              "HVAC Companies",
              "Realtors",
              "Consultants",
            ].map((industry, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-white/10 bg-white/5 text-center"
              >
                <span className="text-white/80 text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Get a Website That{" "}
            <span className="text-[#FF4081]">Works?</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
            Let's talk about your Toronto or Ontario business and how we can help you get more leads online.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-[#673AB7] font-bold text-base sm:text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20 active:scale-[0.98] sm:hover:scale-[1.02]"
            >
              Get Your Free Quote
              <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="/our-products"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border-2 border-white/30 text-white font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              View Packages
            </Link>
          </div>
        </div>
        </section>
    </main>
  );
}
