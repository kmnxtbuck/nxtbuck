"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/our-products", label: "Our Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-5 relative flex flex-col justify-between">
      <span
        className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${
          isOpen ? "rotate-45 translate-y-[9px]" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
          isOpen ? "opacity-0 scale-x-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${
          isOpen ? "-rotate-45 -translate-y-[9px]" : ""
        }`}
      />
    </div>
  );
}

export default function NxtBuckHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
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

  // Close menu on route change or resize
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
    <>
      <header className="relative z-50 flex items-center justify-between px-6 md:px-8 py-4">
      <Link href="/" className="flex items-center gap-3">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`}
          alt="NxtBuck Logo"
          width={48}
          height={48}
            className="object-contain w-10 h-10 md:w-12 md:h-12"
        />
          <span className="text-lg md:text-xl font-bold text-white tracking-tight">
          NxtBuck
        </span>
      </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
              className="text-white/80 hover:text-white font-medium transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 -mr-2 z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <HamburgerIcon isOpen={isMenuOpen} />
        </button>
    </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#1a1a2e] z-40 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 px-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-4 text-lg font-medium text-white/80 hover:text-white border-b border-white/10 transition-all duration-300"
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateX(0)" : "translateX(20px)",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 py-4 px-6 text-center rounded-xl bg-gradient-to-r from-[#FF4081] to-[#E040FB] text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#FF4081]/25"
            style={{
              transitionDelay: isMenuOpen ? "150ms" : "0ms",
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? "translateY(0)" : "translateY(10px)",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
