"use client";

import { useState, useEffect } from "react";

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-5 relative flex flex-col justify-between">
      <span
        className={`block h-0.5 w-full bg-slate-900 rounded-full transition-all duration-300 origin-center ${
          isOpen ? "rotate-45 translate-y-[9px]" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-slate-900 rounded-full transition-all duration-300 ${
          isOpen ? "opacity-0 scale-x-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-slate-900 rounded-full transition-all duration-300 origin-center ${
          isOpen ? "-rotate-45 -translate-y-[9px]" : ""
        }`}
      />
    </div>
  );
}

const navLinks = [
  { href: "/package-one-template/services", label: "Services" },
  { href: "/package-one-template/why-us", label: "Why Us" },
  { href: "/package-one-template/process", label: "Process" },
  { href: "/package-one-template/testimonials", label: "Reviews" },
  { href: "/package-one-template/contact", label: "Contact" },
];

export default function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Component Preview */}
      <div className="border-b-4 border-dashed border-slate-300">
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-slate-900" />
              <span className="font-semibold tracking-tight text-slate-900">
                MaplePeak Roofing
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-slate-900 text-slate-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="/package-one-template/contact"
              className="hidden md:inline-flex items-center rounded-full border border-slate-900 px-4 py-2 text-sm font-medium hover:bg-slate-900 hover:text-white transition"
            >
              Get Free Inspection
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 -mr-2 z-50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <HamburgerIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-white z-40 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-20 px-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-4 text-lg font-medium text-slate-700 hover:text-slate-900 border-b border-slate-100 transition-all duration-300"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateX(0)" : "translateX(20px)",
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/package-one-template/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 py-3 px-6 text-center rounded-full bg-slate-900 text-white font-medium transition-all duration-300 hover:bg-slate-800"
              style={{
                transitionDelay: isMenuOpen ? "250ms" : "0ms",
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              Get Free Inspection
            </a>
          </div>
        </div>
      </div>

      {/* Component Info */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-slate-900 text-white rounded-full mb-4">
            Header Component
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Sticky Navigation Header
          </h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            A responsive header with sticky positioning, blur backdrop, and a
            mobile hamburger menu with slide-in navigation panel.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Features</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Sticky positioning with backdrop blur
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Animated hamburger icon on mobile
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Slide-in mobile menu with staggered animations
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Body scroll lock when menu is open
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Click outside to close menu
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Responsive Breakpoints</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                  &lt; 768px
                </span>
                Hamburger menu visible
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">
                  ≥ 768px
                </span>
                Full horizontal navigation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

