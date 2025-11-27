"use client";

import type { Metadata } from "next";
import { useState, FormEvent } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // TODO: Replace YOUR_FORM_ID with your Formspree form ID from https://formspree.io
      const response = await fetch("https://formspree.io/f/mkgljode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
      <p className="text-white/60 mb-8">
        Have a question or want to work with us? Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      {status === "sent" ? (
        <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
          <p className="text-green-300 text-lg font-medium">Thank you for your message!</p>
          <p className="text-green-300/80 mt-2">We&apos;ll get back to you soon.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-[#FF4081] hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF4081] transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF4081] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-white font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF4081] transition-colors"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF4081] transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-[#FF4081] hover:bg-[#FF4081]/90 disabled:bg-[#FF4081]/50 text-white font-semibold rounded-lg transition-colors"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

        </form>
      )}
    </main>
  );
}

