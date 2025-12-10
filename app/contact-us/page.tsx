"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

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

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formId = "contact_page_form";
  const hasStartedRef = useRef(false);
  const interactedFieldsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    trackEvent("form_view", { form_id: formId });
  }, [formId]);

  const handleFieldInteraction = (field: string) => {
    if (!interactedFieldsRef.current.has(field)) {
      interactedFieldsRef.current.add(field);
      trackEvent("form_field_interaction", { form_id: formId, field_name: field });
    }

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("form_start", { form_id: formId, field_name: field });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Fire a dataLayer event for GTM before network call
    trackEvent("generate_lead", {
      event_data: {
        form_id: formId,
      },
    });
    trackEvent("form_submit", { form_id: formId });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business: formData.business,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", business: "", budget: "", message: "" });
        trackEvent("form_complete", { form_id: formId });
      } else {
        console.error("Form submission error:", data.error);
        trackEvent("form_error", {
          form_id: formId,
          error_message: data?.error || "Unknown error",
        });
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      trackEvent("form_error", {
        form_id: formId,
        error_message: error instanceof Error ? error.message : "Unknown error",
      });
      setStatus("error");
    }
  };

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
                  Based in Toronto, Ontario, we work with service businesses across 
                  the Greater Toronto Area and all of Canada.
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
                      <p className="text-white/60 text-sm">karan@nxtbuck.com</p>
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
                  Why Toronto Businesses Choose Us
                </h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>✓ Local team that understands the Ontario market</li>
                  <li>✓ Fast 14-day delivery for GTA businesses</li>
                  <li>✓ SEO optimized for Toronto & Canadian search</li>
                  <li>✓ Ongoing support in your timezone</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 md:order-2">
      {status === "sent" ? (
                <div className="p-6 sm:p-8 rounded-2xl border border-green-500/30 bg-green-500/10 text-center">
                  <span className="text-4xl mb-4 block">✅</span>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/70 mb-6">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
          <button
            onClick={() => setStatus("idle")}
                    className="text-[#FF4081] font-medium hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
                <form
                  onSubmit={handleSubmit}
                  className={`p-6 sm:p-8 rounded-2xl border border-white/20 bg-white/10 space-y-5 ${formId}`}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
          <div>
                      <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                        Your Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onFocus={() => handleFieldInteraction("name")}
              onChange={(e) => {
                handleFieldInteraction("name");
                setFormData({ ...formData, name: e.target.value });
              }}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#FF4081] transition-colors text-sm"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onFocus={() => handleFieldInteraction("phone")}
                        onChange={(e) => {
                          handleFieldInteraction("phone");
                          setFormData({ ...formData, phone: e.target.value });
                        }}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#FF4081] transition-colors text-sm"
                        placeholder="(416) 555-0123"
            />
                    </div>
          </div>

          <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onFocus={() => handleFieldInteraction("email")}
              onChange={(e) => {
                handleFieldInteraction("email");
                setFormData({ ...formData, email: e.target.value });
              }}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#FF4081] transition-colors text-sm"
                      placeholder="john@company.com"
            />
          </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="business" className="block text-white text-sm font-medium mb-2">
                        Business Type
                      </label>
                      <select
                        id="business"
                        value={formData.business}
                        onFocus={() => handleFieldInteraction("business")}
                        onChange={(e) => {
                          handleFieldInteraction("business");
                          setFormData({ ...formData, business: e.target.value });
                        }}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#FF4081] transition-colors text-sm appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 12px center",
                          backgroundSize: "20px",
                        }}
                      >
                        <option value="" className="bg-[#1a1a2e]">Select your industry</option>
                        <option value="contractor" className="bg-[#1a1a2e]">Contractor / Trades</option>
                        <option value="dental" className="bg-[#1a1a2e]">Dental / Healthcare</option>
                        <option value="legal" className="bg-[#1a1a2e]">Law Firm / Legal</option>
                        <option value="realestate" className="bg-[#1a1a2e]">Real Estate</option>
                        <option value="hvac" className="bg-[#1a1a2e]">HVAC / Home Services</option>
                        <option value="consulting" className="bg-[#1a1a2e]">Consulting</option>
                        <option value="other" className="bg-[#1a1a2e]">Other</option>
                      </select>
                    </div>
          <div>
                      <label htmlFor="budget" className="block text-white text-sm font-medium mb-2">
                        Budget Range
            </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onFocus={() => handleFieldInteraction("budget")}
                        onChange={(e) => {
                          handleFieldInteraction("budget");
                          setFormData({ ...formData, budget: e.target.value });
                        }}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#FF4081] transition-colors text-sm appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 12px center",
                          backgroundSize: "20px",
                        }}
                      >
                        <option value="" className="bg-[#1a1a2e]">Select budget (optional)</option>
                        <option value="under-2500" className="bg-[#1a1a2e]">Under $2,500</option>
                        <option value="2500-5000" className="bg-[#1a1a2e]">$2,500 - $5,000</option>
                        <option value="5000-10000" className="bg-[#1a1a2e]">$5,000 - $10,000</option>
                        <option value="10000-plus" className="bg-[#1a1a2e]">$10,000+</option>
                        <option value="monthly" className="bg-[#1a1a2e]">Monthly retainer</option>
                        <option value="not-sure" className="bg-[#1a1a2e]">Not sure yet</option>
                      </select>
                    </div>
          </div>

          <div>
                    <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                      Tell Us About Your Project *
            </label>
            <textarea
              id="message"
              required
                      rows={4}
              value={formData.message}
              onFocus={() => handleFieldInteraction("message")}
              onChange={(e) => {
                handleFieldInteraction("message");
                setFormData({ ...formData, message: e.target.value });
              }}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#FF4081] transition-colors resize-none text-sm"
                      placeholder="What are you looking for? New website, redesign, or something else?"
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm">
                      Something went wrong. Please try again or email us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-white text-[#673AB7] font-bold text-base hover:bg-white/90 disabled:bg-white/50 transition-all duration-300 active:scale-[0.98]"
          >
                    {status === "sending" ? "Sending..." : "Get My Free Quote"}
                    {status !== "sending" && <ArrowIcon className="w-5 h-5" />}
          </button>

                  <p className="text-white/50 text-xs text-center">
                    We respond within 24 hours. No spam, ever.
                  </p>
        </form>
      )}
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
