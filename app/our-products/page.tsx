"use client";

import { useState, FormEvent } from "react";

export default function OurProducts() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mkgljode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          source: "Early Access Waitlist",
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decor (Glowing Orbs) */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#FF4081] rounded-full blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-[#9C27B0] rounded-full blur-[128px] opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-3xl px-6 text-center">
        {/* 1. The Badge */}
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-[#FF4081]/30 bg-[#FF4081]/10 text-[#FF4081] text-sm font-medium tracking-wide">
          Private Beta • Q1 2025
        </div>

        {/* 2. The Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          We are crafting <br />
          <span className="text-[#FF4081]">the next generation.</span>
        </h1>

        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
          NxtBuck is building a suite of tools designed to remove friction from
          your digital life. Powerful, intuitive, and silent. You&apos;ve never
          worked like this before.
        </p>

        {/* 3. The Progress Bar */}
        <div className="w-full max-w-md mx-auto bg-white/10 rounded-full h-2 mb-12 overflow-hidden">
          <div className="bg-gradient-to-r from-[#FF4081] to-[#E040FB] h-2 rounded-full w-[85%]"></div>
        </div>

        {/* 4. The Waitlist Form */}
        {status === "sent" ? (
          <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-4 rounded-xl">
            <span className="font-bold">You&apos;re on the list.</span> We&apos;ll
            reach out when your spot opens up.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF4081] transition-all"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-4 rounded-xl bg-[#FF4081] hover:bg-[#FF4081]/90 disabled:bg-[#FF4081]/50 text-white font-bold shadow-lg shadow-[#FF4081]/25 transition-all transform hover:scale-105"
            >
              {status === "sending" ? "Joining..." : "Get Early Access"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-4 text-red-400 text-sm">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="mt-6 text-sm text-white/40">
          Join 2,000+ others waiting for the launch. No spam, ever.
        </p>
      </div>
    </div>
  );
}

