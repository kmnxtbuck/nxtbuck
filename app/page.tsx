import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design Toronto | High-Converting Websites for Service Businesses",
  description:
    "Toronto's top web design agency for contractors, clinics, law firms & service businesses. Custom websites that generate leads, delivered in 14 days. Serving Ontario & Canada.",
  keywords: [
    "web design Toronto",
    "Toronto web agency",
    "website design GTA",
    "Ontario web development",
    "contractor website Toronto",
    "small business website Canada",
  ],
};

const stats = [
  { value: "Free", label: "Custom Homepage Mockup" },
  { value: "100%", label: "Satisfaction Commitment" },
  { value: "3 Steps", label: "Simple Launch Process" },
  { value: "14 Days", label: "Average Delivery" },
];

const services = [
  {
    title: "Performance Websites",
    description:
      "5-7 page conversion-focused sites built to turn visitors into leads.",
    price: "From $2,500",
  },
  {
    title: "Growth Engine Sites",
    description:
      "Full branding, CRM integration, automations, and lead funnels.",
    price: "From $6,000",
  },
  {
    title: "Managed Revenue Sites",
    description:
      "We build, host, optimize, and run your site like a revenue machine.",
    price: "From $1,500/mo",
  },
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

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Elements - Hidden on very small screens for performance */}
      <div className="hidden sm:block absolute top-[-20%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#FF4081] rounded-full blur-[150px] md:blur-[200px] opacity-20"></div>
      <div className="hidden sm:block absolute top-[30%] left-[-15%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#9C27B0] rounded-full blur-[120px] md:blur-[180px] opacity-20"></div>
      <div className="hidden sm:block absolute bottom-[-10%] right-[20%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#E040FB] rounded-full blur-[100px] md:blur-[160px] opacity-15"></div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF4081] animate-pulse"></span>
              <span className="text-white/80 text-xs sm:text-sm font-medium">
                Toronto's Web Design Agency for Service Businesses
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-4 sm:mb-6">
              Stop losing customers to a{" "}
              <span className="bg-gradient-to-r from-[#FF4081] to-[#E040FB] bg-clip-text text-transparent">
                bad website.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              We build high-converting websites for contractors, clinics, law
              firms, and service businesses across Toronto, the GTA, and Ontario.
              Get a site that actually brings in leads - delivered in 14 days.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-[#673AB7] font-bold text-base sm:text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20 hover:shadow-white/30 active:scale-[0.98] sm:hover:scale-[1.02]"
              >
                Get a Free Quote
                <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/our-products"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border-2 border-white/30 text-white font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                View Our Packages
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/60">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4081] flex-shrink-0" />
                <span>No templates - 100% custom</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4081] flex-shrink-0" />
                <span>14-day delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4081] flex-shrink-0" />
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 md:py-16 border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Your website should be your{" "}
              <span className="text-[#FF4081]">best salesperson.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Most Toronto service business websites look the same, say nothing
              compelling, and don't convert. We fix that with strategic design,
              persuasive copy, and built-in lead capture for your Ontario customers.
            </p>
          </div>

          {/* Pain Points */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                problem: "Your site looks outdated",
                solution:
                  "We create modern, professional designs that build instant trust",
              },
              {
                problem: "Visitors leave without contacting you",
                solution:
                  "Strategic CTAs and lead funnels capture visitors before they bounce",
              },
              {
                problem: "You're invisible on Google",
                solution:
                  "Technical SEO and fast load times help you rank higher",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#FF4081]/30 transition-colors"
              >
                <div className="text-[#FF4081] font-semibold mb-2 text-sm sm:text-base">
                  ✕ {item.problem}
                </div>
                <div className="text-white/80 text-xs sm:text-sm">✓ {item.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                Solutions for every stage of growth.
              </h2>
              <p className="text-white/60 max-w-xl text-sm sm:text-base">
                Whether you're just starting out or ready to scale, we have a
                package that fits your needs and budget.
              </p>
            </div>
            <Link
              href="/our-products"
              className="text-[#FF4081] font-semibold hover:text-[#E040FB] transition-colors whitespace-nowrap text-sm sm:text-base"
            >
              See all packages →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-2xl border border-white/20 bg-white/10 hover:border-[#FF4081]/50 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-xs font-bold text-[#FF4081] mb-2 sm:mb-3">
                  {service.price}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6">
                  {service.description}
                </p>
                <Link
                  href="/our-products"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/70 group-hover:text-[#FF4081] transition-colors"
                >
                  Learn more
                  <ArrowIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              From idea to launch in 14 days.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
              Our streamlined process gets your site live fast without
              sacrificing quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We learn about your business, goals, and ideal customers.",
                icon: "📞",
              },
              {
                step: "02",
                title: "Strategy & Design",
                desc: "We create a custom design and conversion strategy.",
                icon: "🎨",
              },
              {
                step: "03",
                title: "Build & Refine",
                desc: "We build your site with your feedback every step of the way.",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "We launch your site and provide post-launch optimization.",
                icon: "🚀",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-2xl border border-white/20 bg-white/10 hover:border-[#FF4081]/50 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-xs font-bold text-[#FF4081] mb-2 sm:mb-3">
                  Step {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <span className="text-2xl">{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 md:py-32 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to turn your website into a{" "}
            <span className="bg-gradient-to-r from-[#FF4081] to-[#E040FB] bg-clip-text text-transparent">
              lead machine?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We'll analyze your current site
            and show you exactly how to get more leads in Toronto and across Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-white text-[#673AB7] font-bold text-base sm:text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20 hover:shadow-white/30 active:scale-[0.98] sm:hover:scale-[1.02]"
            >
              Get Your Free Strategy Call
              <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-white/50">
            No commitment required. We'll give you actionable advice even if you
            don't hire us.
          </p>
        </div>
      </section>
    </main>
  );
}
