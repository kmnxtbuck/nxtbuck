"use client";

import { FormEvent, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import useUtmPersistence from "@/lib/useUtmPersistence";
import ArrowIcon from "@/components/ArrowIcon";

const formId = "contact_page_form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  business: string;
  budget: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    business: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const hasStartedRef = useRef(false);
  const interactedFieldsRef = useRef<Set<string>>(new Set());
  const { firstTouch, lastTouch, ready } = useUtmPersistence();

  const handleFieldInteraction = (field: string) => {
    if (!interactedFieldsRef.current.has(field)) {
      interactedFieldsRef.current.add(field);
      trackEvent("form_field_interaction", {
        event_data: {
        form_id: formId,
        form_field: field,
          ...utmPayload,
        },
      });
    }

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("form_start", {
        event_data: {
          form_id: formId,
          form_field: field,
          ...utmPayload,
        },
      });
    }
  };

  const utmPayload = {
    first_utm_source: firstTouch?.utm_source ?? "",
    first_utm_medium: firstTouch?.utm_medium ?? "",
    first_utm_campaign: firstTouch?.utm_campaign ?? "",
    first_utm_term: firstTouch?.utm_term ?? "",
    first_utm_content: firstTouch?.utm_content ?? "",
    last_utm_source: lastTouch?.utm_source ?? "",
    last_utm_medium: lastTouch?.utm_medium ?? "",
    last_utm_campaign: lastTouch?.utm_campaign ?? "",
    last_utm_term: lastTouch?.utm_term ?? "",
    last_utm_content: lastTouch?.utm_content ?? "",
  };

  // Normalize phone number (remove all non-digit characters)
  const normalizePhone = (phone: string): string => {
    return phone.replace(/\D/g, "");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const nameParts = formData.name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    trackEvent("form_submit", {
      event_data: {
        form_id: formId,
        user_data: {
          email: formData.email,
          phone: normalizePhone(formData.phone),
          first_name: firstName,
          last_name: lastName,
        },
        ...utmPayload,
      },
    });

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
          ...utmPayload,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Capture form data before resetting
        const submittedName = formData.name;
        const submittedEmail = formData.email;
        const submittedPhone = formData.phone;
        
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", business: "", budget: "", message: "" });
        
        const nameParts = submittedName.trim().split(/\s+/);
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";

        trackEvent("form_complete", {
          event_data: {
            form_id: formId,
            user_data: {
              email: submittedEmail,
              phone: normalizePhone(submittedPhone),
              first_name: firstName,
              last_name: lastName,
            },
            ...utmPayload,
          },
        });
      } else {
        console.error("Form submission error:", data.error);
        trackEvent("form_error", {
          event_data: {
          form_id: formId,
          error_message: data?.error || "Unknown error",
            ...utmPayload,
          },
        });
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      trackEvent("form_error", {
        event_data: {
        form_id: formId,
        error_message: error instanceof Error ? error.message : "Unknown error",
          ...utmPayload,
        },
      });
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="p-6 sm:p-8 rounded-2xl border border-green-500/30 bg-green-500/10 text-center">
        <span className="text-4xl mb-4 block">✅</span>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-white/70 mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="text-[#FF4081] font-medium hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  if (!ready) return null;

  return (
    <form
      onSubmit={handleSubmit}
      id={formId}
      className={`p-6 sm:p-8 rounded-2xl border border-white/20 bg-white/10 space-y-5`}
    >
      {/* Hidden UTM fields – first touch */}
      <input type="hidden" name="first_utm_source" value={firstTouch?.utm_source ?? ""} readOnly />
      <input type="hidden" name="first_utm_medium" value={firstTouch?.utm_medium ?? ""} readOnly />
      <input type="hidden" name="first_utm_campaign" value={firstTouch?.utm_campaign ?? ""} readOnly />
      <input type="hidden" name="first_utm_term" value={firstTouch?.utm_term ?? ""} readOnly />
      <input type="hidden" name="first_utm_content" value={firstTouch?.utm_content ?? ""} readOnly />
      {/* Hidden UTM fields – last touch */}
      <input type="hidden" name="last_utm_source" value={lastTouch?.utm_source ?? ""} readOnly />
      <input type="hidden" name="last_utm_medium" value={lastTouch?.utm_medium ?? ""} readOnly />
      <input type="hidden" name="last_utm_campaign" value={lastTouch?.utm_campaign ?? ""} readOnly />
      <input type="hidden" name="last_utm_term" value={lastTouch?.utm_term ?? ""} readOnly />
      <input type="hidden" name="last_utm_content" value={lastTouch?.utm_content ?? ""} readOnly />

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
            <option value="" className="bg-[#1a1a2e]">
              Select your industry
            </option>
            <option value="contractor" className="bg-[#1a1a2e]">
              Contractor / Trades
            </option>
            <option value="dental" className="bg-[#1a1a2e]">
              Dental / Healthcare
            </option>
            <option value="legal" className="bg-[#1a1a2e]">
              Law Firm / Legal
            </option>
            <option value="realestate" className="bg-[#1a1a2e]">
              Real Estate
            </option>
            <option value="hvac" className="bg-[#1a1a2e]">
              HVAC / Home Services
            </option>
            <option value="consulting" className="bg-[#1a1a2e]">
              Consulting
            </option>
            <option value="other" className="bg-[#1a1a2e]">
              Other
            </option>
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
            <option value="" className="bg-[#1a1a2e]">
              Select budget (optional)
            </option>
            <option value="under-2500" className="bg-[#1a1a2e]">
              Under $2,499
            </option>
            <option value="2500-5000" className="bg-[#1a1a2e]">
              $2,499 - $4,999
            </option>
            <option value="5000-10000" className="bg-[#1a1a2e]">
              $4,999 - $9,999
            </option>
            <option value="10000-plus" className="bg-[#1a1a2e]">
              $9,999+
            </option>
            <option value="monthly" className="bg-[#1a1a2e]">
              Monthly retainer
            </option>
            <option value="not-sure" className="bg-[#1a1a2e]">
              Not sure yet
            </option>
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
        <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-white text-[#673AB7] font-bold text-base hover:bg-cyan-400 hover:text-white disabled:bg-white/50 transition-all duration-300 active:scale-[0.98] hover:shadow-cyan-400/40"
      >
        {status === "sending" ? "Sending..." : "Get My Free Quote"}
        {status !== "sending" && <ArrowIcon className="w-5 h-5" />}
      </button>

      <p className="text-white/50 text-xs text-center">We respond within 24 hours. No spam, ever.</p>
    </form>
  );
}

