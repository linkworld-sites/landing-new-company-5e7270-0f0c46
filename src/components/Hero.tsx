"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { DashboardMock } from "@/components/DashboardMock";
import { track } from "@/lib/funnel";

export function Hero() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReduced) return;
    const handler = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [prefersReduced]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-void pt-16"
      aria-label="Hero"
    >
      {/* Background aurora */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #1B4FFF 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, #00E5C8 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00E5C8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — Headline + CTA */}
        <div className="flex flex-col gap-8">
          {/* Tag */}
          <motion.div
            className="flex items-center gap-2 w-fit"
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-xs font-mono text-neon tracking-widest uppercase">
              Fractional CFO · KI-gestützt
            </span>
          </motion.div>

          {/* H1 */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-display font-space font-extrabold text-snow leading-[0.95]"
              initial={prefersReduced ? false : { opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              Ihr CFO.{" "}
              <br />
              <span className="text-teal-gradient">On Demand.</span>
              <br />
              Powered by AI.
            </motion.h1>
          </div>

          {/* Subline */}
          <motion.p
            className="text-mist font-inter text-lg leading-relaxed max-w-lg"
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
          >
            CFO-Level-Finanzführung ohne Festanstellung. Von Cash-Flow-Prognosen
            bis zur Wachstumsplanung — wir verwandeln finanzielle Komplexität in
            Entscheidungen, die Sie heute umsetzen können.
          </motion.p>

          {/* Trust line */}
          <motion.p
            className="text-sm font-mono text-mist/60 tracking-wider"
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
          >
            Fractional CFO. Full Impact. Ab €1.500/Monat.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
          >
            <motion.div whileHover={{ scale: prefersReduced ? 1 : 1.02 }} whileTap={{ scale: prefersReduced ? 1 : 0.97 }}>
              <Link
                href="/contact"
                onClick={() => track("intent")}
                className="btn-teal rounded-sm"
              >
                <span>Jetzt Beratung buchen</span>
                <span className="text-sm">→</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: prefersReduced ? 1 : 1.02 }} whileTap={{ scale: prefersReduced ? 1 : 0.97 }}>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-space font-600 text-mist hover:text-snow transition-colors duration-200 group"
              >
                Services ansehen
                <span className="group-hover:translate-x-1 transition-transform duration-200">↓</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Social proof bar */}
          <motion.div
            className="flex items-center gap-6 pt-4 border-t border-wire/50"
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
          >
            {[
              { value: "+34%", label: "Cash Runway" },
              { value: "−60%", label: "Reporting-Zeit" },
              { value: "48h", label: "Onboarding" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-lg font-space font-700 text-neon">{stat.value}</span>
                <span className="text-[10px] font-mono text-mist/60 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Image + Dashboard */}
        <div className="relative hidden lg:flex items-center justify-center">
          <motion.div
            className="relative w-full"
            animate={prefersReduced ? {} : {
              rotateX: -mousePos.y * 3,
              rotateY: mousePos.x * 3,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 100 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            {/* Hero image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-wire shadow-2xl"
              initial={prefersReduced ? false : { opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease }}
              style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.6)" }}
            >
              <Image
                src="/images/products/product-0.jpg"
                alt="Summit CFO Services — Finanzielle Steuerung der Zukunft"
                width={680}
                height={480}
                className="w-full object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 40%, rgba(10,15,44,0.7) 100%)",
                }}
              />
            </motion.div>

            {/* Floating dashboard */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-72"
              animate={prefersReduced ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <DashboardMock />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile dashboard */}
        <div className="lg:hidden">
          <DashboardMock />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={prefersReduced ? {} : { y: [0, 6, 0] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono text-mist/40 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-mist/40 to-transparent" />
      </motion.div>
    </section>
  );
}
