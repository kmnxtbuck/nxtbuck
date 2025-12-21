import type { Metadata } from "next";
import Link from "next/link";
import ConversionSlider from "@/components/ConversionSlider";
import ArrowIcon from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "See What a High-Converting Website Looks Like",
  description:
    "Slide to see the difference between a generic website and a high-converting one built for your business. See typical improvements in load time, bounce rate, leads, and more.",
};

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

export default function ComparisonPage() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="hidden sm:block absolute top-[-20%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#FF4081] rounded-full blur-[150px] md:blur-[200px] opacity-20"></div>
      <div className="hidden sm:block absolute top-[30%] left-[-15%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#9C27B0] rounded-full blur-[120px] md:blur-[180px] opacity-20"></div>
      <div className="hidden sm:block absolute bottom-[-10%] right-[20%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#E040FB] rounded-full blur-[100px] md:blur-[160px] opacity-15"></div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF4081] animate-pulse"></span>
              <span className="text-white/80 text-xs sm:text-sm font-medium">
                Interactive Website Comparison
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-4 sm:mb-6">
              Slide to see what a{" "}
              <span className="bg-gradient-to-r from-[#FF4081] to-[#E040FB] bg-clip-text text-transparent">
                high-converting website
              </span>{" "}
              looks like.
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Most sites lose customers before they ever call. See the difference between a generic template and a conversion-focused design built for your business.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/60 mb-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4081] flex-shrink-0" />
                <span>Typical improvement ranges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4081] flex-shrink-0" />
                <span>Conservative estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4081] flex-shrink-0" />
                <span>Based on real redesigns</span>
              </div>
            </div>
          </div>

          {/* Conversion Slider Component */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <ConversionSlider />
          </div>

          {/* Supporting Text */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm sm:text-base text-white/60 mb-6 sm:mb-8 leading-relaxed">
              The difference isn't just visual. High-converting websites are built
              with strategic design, clear calls-to-action, and mobile-first
              optimization that turns visitors into leads.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Why these improvements matter
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
              Every metric we track directly impacts your bottom line.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                metric: "Faster load times",
                impact: "Visitors stay longer and convert more. Every second counts.",
                icon: "⚡",
              },
              {
                metric: "Lower bounce rate",
                impact: "More people explore your site and see your value proposition.",
                icon: "📊",
              },
              {
                metric: "More leads",
                impact: "Strategic CTAs and forms capture visitors before they leave.",
                icon: "📞",
              },
              {
                metric: "Higher trust score",
                impact: "Professional design builds credibility and reduces friction.",
                icon: "🛡️",
              },
              {
                metric: "Better mobile experience",
                impact: "Most visitors are on mobile. We optimize for them first.",
                icon: "📱",
              },
              {
                metric: "Conversion-focused",
                impact: "Every element is designed to guide visitors toward action.",
                icon: "🎯",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#FF4081]/30 transition-colors"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {item.metric}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Want a version of this for{" "}
            <span className="bg-gradient-to-r from-[#FF4081] to-[#E040FB] bg-clip-text text-transparent">
              your business?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Get a free 5-minute teardown of your current website. We'll show you exactly what's holding you back and how to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-white text-[#673AB7] font-bold text-base sm:text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 shadow-2xl shadow-white/20 hover:shadow-cyan-400/40 active:scale-[0.98] sm:hover:scale-[1.02]"
            >
              Get My Free 5-Minute Teardown
              <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="/our-products"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-xl border-2 border-white/30 text-white font-bold text-base sm:text-lg hover:bg-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-300 transition-all duration-300"
            >
              See Pricing & How It Works
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/60">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4081] flex-shrink-0" />
              <span>14-day delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4081] flex-shrink-0" />
              <span>Fixed price</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4081] flex-shrink-0" />
              <span>Done-for-you</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4081] flex-shrink-0" />
              <span>Conversion-focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: "14 Days", label: "Average Delivery" },
              { value: "100%", label: "Custom Design" },
              { value: "Free", label: "Strategy Call" },
              { value: "USA & Canada", label: "Serving" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
