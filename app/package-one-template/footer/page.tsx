const footerLinks = {
  services: [
    { label: "Roof Repair", href: "#" },
    { label: "Roof Replacement", href: "#" },
    { label: "Emergency Services", href: "#" },
    { label: "Gutters", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Process", href: "#" },
    { label: "Reviews", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function FooterPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Component Preview - Simple Footer */}
      <div className="bg-white border-b-4 border-dashed border-slate-300">
        <div className="py-4 px-4 text-center text-xs text-slate-400">
          Simple Footer (Original)
        </div>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} MaplePeak Roofing. All rights reserved.</p>
            <p>Toronto, ON · (416) 555-0199</p>
          </div>
        </footer>
      </div>

      {/* Component Preview - Extended Footer */}
      <div className="bg-slate-900">
        <div className="py-4 px-4 text-center text-xs text-slate-400">
          Extended Footer (Enhanced)
        </div>
        <footer className="border-t border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12 md:py-16">
            {/* Top Section */}
            <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10 sm:mb-12">
              {/* Brand */}
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-white" />
                  <span className="font-semibold text-white tracking-tight">
                    MaplePeak Roofing
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-4 max-w-xs">
                  Toronto's trusted roofing experts. Quality workmanship, transparent pricing.
                </p>
                <div className="flex gap-3">
                  {["facebook", "instagram", "google"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      <span className="text-xs font-medium uppercase">
                        {social[0]}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2.5">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2.5">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2.5 text-sm text-slate-400">
                  <li>
                    <a href="tel:+14165550199" className="hover:text-white transition-colors">
                      (416) 555-0199
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@maplepeakroofing.ca" className="hover:text-white transition-colors">
                      info@maplepeakroofing.ca
                    </a>
                  </li>
                  <li>Toronto & GTA</li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 text-center sm:text-left">
                © {new Date().getFullYear()} MaplePeak Roofing. All rights reserved.
              </p>
              <div className="flex gap-4 sm:gap-6">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Component Info */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-slate-900 text-white rounded-full mb-4">
            Footer Component
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Footer Variations
          </h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            Two footer options: a minimal single-line footer and an extended multi-column
            footer with navigation, social links, and contact info.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Simple Footer</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Minimal copyright and contact
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Single line on desktop
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Stacked on mobile
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Extended Footer</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                4-column link grid
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Social media icons
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Legal links in bottom bar
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Dark theme design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

