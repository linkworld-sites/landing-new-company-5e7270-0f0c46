"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Methode", href: "#how-it-works" },
  { label: "Preise", href: "#pricing" },
  { label: "Blog", href: "/blog" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-void/80 backdrop-blur-xl border-b border-wire/60"
          : "bg-transparent"
      }`}
      initial={prefersReduced ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-space font-800 text-snow tracking-tight">
            Fleximo
          </span>
          <span className="text-xl font-space font-800 text-teal-gradient bg-teal-glow bg-clip-text text-transparent">
            Finance
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-inter font-500 tracking-widest uppercase text-mist hover:text-snow transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <motion.div whileHover={{ scale: prefersReduced ? 1 : 1.02 }} whileTap={{ scale: prefersReduced ? 1 : 0.98 }}>
            <Link
              href="/contact"
              onClick={() => track("intent")}
              className="btn-teal rounded-sm text-xs"
            >
              <span>Beratung anfragen</span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-mist hover:text-snow"
          onClick={() => setOpen(!open)}
          aria-label="Menu öffnen"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-px bg-current transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-[9px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          className="md:hidden bg-void/95 backdrop-blur-xl border-b border-wire px-6 py-6 flex flex-col gap-5"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-space font-600 tracking-wider uppercase text-mist hover:text-snow"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => { track("intent"); setOpen(false); }}
            className="btn-teal rounded-sm text-xs w-fit"
          >
            <span>Beratung anfragen</span>
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
