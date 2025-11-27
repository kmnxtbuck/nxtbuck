import Link from "next/link";

const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/our-products", label: "Our Products" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function NxtBuckHeader() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <Link href="/" className="flex items-center gap-3">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`}
          alt="NxtBuck Logo"
          width={48}
          height={48}
          className="object-contain"
        />
        <span className="text-xl font-bold text-[#000000] tracking-tight">
          NxtBuck
        </span>
      </Link>

      <nav className="flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#000000] hover:text-[#FF4081]/80 font-medium transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

