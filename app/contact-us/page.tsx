"use client";

import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import ContactForm from "@/components/ContactForm";

export default function ContactUs() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="hidden sm:block absolute top-[-10%] right-[-10%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#FF4081] rounded-full blur-[180px] opacity-15"></div>
      <div className="hidden sm:block absolute bottom-[-10%] left-[-10%] w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-[#9C27B0] rounded-full blur-[160px] opacity-15"></div>

      <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF4081] animate-pulse"></span>
              <span className="text-white/80 text-xs sm:text-sm font-medium">
                Get in Touch
              </span>
        </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Build Your{" "}
              <span className="bg-gradient-to-r from-[#FF4081] to-[#E040FB] bg-clip-text text-transparent">
                Website
              </span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
              Ready to get a website that actually generates leads? Fill out the form 
              and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="order-2 md:order-1">
              <div className="p-6 sm:p-8 rounded-2xl border border-white/20 bg-white/10 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Serving Toronto & Beyond
                </h2>
                <p className="text-white/70 text-sm sm:text-base mb-6">
                  Based in Toronto, Ontario, we work with service businesses and e-commerce retailers across 
                  USA & Canada.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-white/60 text-sm">Toronto, Ontario, Canada</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📧</span>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-white/60 text-sm">hello@nxtbuck.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">⏰</span>
          <div>
                      <p className="text-white font-medium">Response Time</p>
                      <p className="text-white/60 text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5">
                <h3 className="text-lg font-bold text-white mb-3">
                  Why Businesses Choose Us
                </h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>✓ Local team that understands your market</li>
                  <li>✓ Fast 14-day delivery</li>
                  <li>✓ SEO optimized for local search</li>
                  <li>✓ Ongoing support in your timezone</li>
                </ul>
              </div>
          </div>

            {/* Contact Form */}
            <div className="order-1 md:order-2">
              <ContactForm />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/our-products"
              className="inline-flex items-center gap-2 text-[#FF4081] font-semibold hover:text-[#E040FB] transition-colors"
            >
              View our packages and pricing
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
