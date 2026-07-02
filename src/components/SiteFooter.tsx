"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Methode", href: "#how-it-works" },
  { label: "Preise", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/contact" },
];

const legalLinks = [
  { label: "Impressum", href: "/legal/impressum" },
  { label: "Datenschutz", href: "/legal/datenschutz" },
  { label: "Cookies", href: "/legal/cookies" },
];

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function SiteFooter() {
  const prefersReduced = useReducedMotion();

  return (
    <footer className="bg-void border-t border-wire">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-wire/50">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="text-lg font-space font-800 text-snow">Fleximo</span>
              <span className="text-lg font-space font-800 text-teal-gradient bg-teal-glow bg-clip-text text-transparent">Finance</span>
            </Link>
            <p className="text-sm font-inter text-mist/70 leading-relaxed max-w-xs">
              Finanzen, die mit Ihrem Unternehmen wachsen. Fractional CFO. Full Impact.
            </p>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-mist/50 hover:text-neon transition-colors duration-200 w-fit"
              whileHover={prefersReduced ? {} : { x: 3 }}
              aria-label="Fleximo Finance on LinkedIn"
            >
              <LinkedInIcon />
              <span className="text-xs font-mono">LinkedIn</span>
            </motion.a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer Navigation">
            <p className="text-xs font-mono text-mist/40 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-inter text-mist/70 hover:text-snow transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono text-mist/40 uppercase tracking-widest mb-4">Kontakt</p>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-inter text-mist/70">
                Starten Sie mit einem kostenlosen Erstgespräch.
              </p>
              <motion.div
                whileHover={{ scale: prefersReduced ? 1 : 1.02 }}
                whileTap={{ scale: prefersReduced ? 1 : 0.97 }}
                className="w-fit"
              >
                <Link href="/contact" className="btn-teal rounded-sm text-xs">
                  <span>Gespräch anfragen →</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs font-mono text-mist/30">
            © {new Date().getFullYear()} Fleximo Finance. Alle Rechte vorbehalten.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-inter text-mist/30 hover:text-mist/70 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
