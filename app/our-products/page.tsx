"use client";

import { useState } from "react";
import Link from "next/link";

const packages = [
  {
    id: 1,
    name: "Performance Website",
    subtitle: "Entry-Level",
    price: "$2,500–$3,500",
    priceType: "one-time",
    target: "Small service businesses, local trades, consultants, early founders",
    promise:
      "A premium small-business website built to convert visitors into leads.",
    features: [
      "5–7 page responsive site (Home, About, Services, Pricing, Contact, etc.)",
      "Conversion-focused layout",
      "Basic brand styling",
      "Lead form integration",
      "Google Analytics + heatmaps (Simple Web Vitals)",
      "2 automations (lead email, thank-you flow)",
      "14-day post-launch support",
    ],
    popular: false,
    gradient: "from-[#667eea] to-[#764ba2]",
    accentColor: "#667eea",
    templateLink: "/package-one-template",
  },
  {
    id: 2,
    name: "Growth Engine Website",
    subtitle: "Core Package",
    price: "$6,000–$8,500",
    priceType: "one-time",
    target: "Growing businesses ready to scale their online presence",
    promise:
      "A complete revenue engine (not just a website) that converts, follows up, and books calls for you.",
    features: [
      "Everything from Performance Website, plus:",
      "Full branding (color system, typography, aesthetic direction)",
      "Conversion copywriting for all pages",
      "CRM setup with SMS/email follow-up sequences",
      "Calendar booking integration",
      "2 lead funnels (e.g., 'Get a Quote' or 'Free Audit')",
      "CMS setup for blogs or case studies",
      "Technical SEO (schema, site speed, on-page optimization)",
      "30 days of support + optimization pass",
    ],
    popular: true,
    gradient: "from-[#FF4081] to-[#E040FB]",
    accentColor: "#FF4081",
    templateLink: "/package-two-template",
  },
  {
    id: 3,
    name: "Fully Managed Revenue Site",
    subtitle: "Recurring Profit Engine",
    price: "$1,500–$2,500",
    priceType: "/month",
    setupFee: "$3,000 setup fee • 12-month contract",
    target:
      "Businesses ready to scale, realtors, home services, local franchises, high-ticket service companies",
    promise:
      "We don't just build your website (we run it like a revenue-producing machine).",
    features: [
      "Hosting + maintenance + security",
      "Unlimited small updates (<30 min tasks)",
      "Monthly CRO (conversion rate optimization)",
      "Monthly SEO improvements",
      "Google Business profile management",
      "A/B testing for landing pages",
      "Advanced CRM automations",
      "1 new funnel every quarter",
      "Analytics reports with insights",
      "Priority support",
    ],
    popular: false,
    gradient: "from-[#f093fb] to-[#f5576c]",
    accentColor: "#f5576c",
    templateLink: "/package-three-template",
  },
];

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

export default function OurProducts() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden pb-24">
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#FF4081] rounded-full blur-[200px] opacity-15 animate-pulse"></div>
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-[#9C27B0] rounded-full blur-[180px] opacity-15 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[30%] w-[450px] h-[450px] bg-[#667eea] rounded-full blur-[190px] opacity-10 animate-pulse"></div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-24">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#FF4081]/30 bg-[#FF4081]/10">
            <span className="w-2 h-2 rounded-full bg-[#FF4081] animate-pulse"></span>
            <span className="text-[#FF4081] text-sm font-semibold tracking-wide uppercase">
              Pricing & Packages
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Websites That{" "}
            <span className="bg-gradient-to-r from-[#FF4081] to-[#E040FB] bg-clip-text text-transparent">
              Generate Revenue
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Choose the package that matches your ambition. Every solution is
            built to convert visitors into customers.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative group rounded-3xl transition-all duration-500 ${
                pkg.popular
                  ? "lg:-mt-4 lg:mb-4"
                  : ""
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FF4081] to-[#E040FB] text-white text-sm font-bold tracking-wide shadow-lg shadow-[#FF4081]/30">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-b ${pkg.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
              ></div>

              {/* Card Content */}
              <div
                className={`relative h-full rounded-3xl border transition-all duration-500 ${
                  pkg.popular
                    ? "border-[#FF4081]/50 bg-[#0a0a0a]/95"
                    : "border-white/10 bg-[#0a0a0a]/80 hover:border-white/20"
                } backdrop-blur-xl p-8 lg:p-10`}
              >
                {/* Package Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-lg">
                        {pkg.id}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {pkg.name}
                      </h3>
                      <p className="text-sm text-white/50">{pkg.subtitle}</p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-bold text-white">
                        {pkg.price}
                      </span>
                      <span className="text-white/50 font-medium">
                        {pkg.priceType}
                      </span>
                    </div>
                    {pkg.setupFee && (
                      <p className="mt-2 text-sm text-[#FF4081]/80 font-medium">
                        {pkg.setupFee}
                      </p>
                    )}
                  </div>
                </div>

                {/* Target Audience */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <p className="text-sm text-white/40 uppercase tracking-wider mb-2 font-medium">
                    Ideal For
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {pkg.target}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex gap-3 items-start group/feature"
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mt-0.5`}
                      >
                        <CheckIcon className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/70 text-sm leading-relaxed group-hover/feature:text-white/90 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Promise */}
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${pkg.gradient} bg-opacity-10 mb-8`}
                  style={{
                    background: `linear-gradient(135deg, ${pkg.accentColor}15, ${pkg.accentColor}05)`,
                  }}
                >
                  <p className="text-sm text-white/60 uppercase tracking-wider mb-1 font-medium">
                    Our Promise
                  </p>
                  <p
                    className="text-white font-medium leading-relaxed"
                    style={{ color: pkg.accentColor }}
                  >
                    "{pkg.promise}"
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/contact-us"
                    className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-[#FF4081] to-[#E040FB] text-white shadow-lg shadow-[#FF4081]/25 hover:shadow-[#FF4081]/40 hover:scale-[1.02]"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:border-white/20"
                    }`}
                  >
                    Get Started
                    <ArrowIcon
                      className={`w-5 h-5 transition-transform duration-300 ${
                        hoveredCard === pkg.id ? "translate-x-1" : ""
                      }`}
                    />
                  </Link>
                  <Link
                    href={pkg.templateLink}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View Template
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 md:mt-32 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not sure which package is right for you?
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Book a free 30-minute strategy call. We'll analyze your current
              situation and recommend the perfect solution for your business
              goals.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-[#0a0a0a] font-bold hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-white/20 hover:scale-[1.02]"
            >
              Schedule Your Free Consultation
              <ArrowIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
