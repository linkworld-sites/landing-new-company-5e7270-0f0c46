"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";

const comparison = [
  { feature: "Strategische Finanzplanung", fractional: true, fulltime: true },
  { feature: "Cash-Flow-Forecasting", fractional: true, fulltime: true },
  { feature: "KI-gestützte Automatisierung", fractional: true, fulltime: false },
  { feature: "Monatliche Fixkosten", fractional: "Ab €1.500", fulltime: "€120.000+" },
  { feature: "Onboarding-Zeit", fractional: "48h", fulltime: "3–6 Monate" },
  { feature: "Skalierbarkeit", fractional: true, fulltime: false },
  { feature: "Verfügbarkeit", fractional: "Flexibel", fulltime: "Vollzeit" },
];

export function PricingSection() {
  const prefersReduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="pricing" className="py-28 bg-void overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Central statement */}
        <motion.div
          className="text-center mb-20"
          initial={prefersReduced ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="text-xs font-mono text-neon uppercase tracking-widest block mb-6">
            Preismodell
          </span>
          <h2
            className="font-space font-extrabold text-snow leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}
          >
            Ab{" "}
            <span className="text-teal-gradient">€1.500 / Monat.</span>
            <br />
            Kein Headcount. Volle CFO Power.
          </h2>
          <p className="text-mist font-inter text-xl leading-relaxed max-w-2xl mx-auto">
            Kein Jahresvertrag erforderlich. Kein Overhead. Kein Onboarding-Theater.
            Nur messbare Ergebnisse — von Tag eins an.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="bg-card border border-wire rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 border-b border-wire">
              <div className="px-6 py-4">
                <span className="text-xs font-mono text-mist/50 uppercase tracking-wider">Kriterium</span>
              </div>
              <div className="px-6 py-4 border-l border-wire">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon" />
                  <span className="text-xs font-space font-700 text-neon uppercase tracking-wider">Fleximo</span>
                </div>
              </div>
              <div className="px-6 py-4 border-l border-wire">
                <span className="text-xs font-space font-600 text-mist/60 uppercase tracking-wider">Vollzeit-CFO</span>
              </div>
            </div>

            {/* Table rows */}
            {comparison.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-b border-wire/50 last:border-b-0 ${
                  i % 2 === 0 ? "" : "bg-void/30"
                }`}
              >
                <div className="px-6 py-4 flex items-center">
                  <span className="text-sm font-inter text-mist">{row.feature}</span>
                </div>
                <div className="px-6 py-4 border-l border-wire/50 flex items-center">
                  {typeof row.fractional === "boolean" ? (
                    <span className={`text-base font-mono font-700 ${row.fractional ? "text-neon" : "text-red-400"}`}>
                      {row.fractional ? "✓" : "—"}
                    </span>
                  ) : (
                    <span className="text-sm font-space font-700 text-neon">{row.fractional}</span>
                  )}
                </div>
                <div className="px-6 py-4 border-l border-wire/50 flex items-center">
                  {typeof row.fulltime === "boolean" ? (
                    <span className={`text-base font-mono font-700 ${row.fulltime ? "text-mist/60" : "text-red-400/60"}`}>
                      {row.fulltime ? "✓" : "—"}
                    </span>
                  ) : (
                    <span className="text-sm font-inter text-mist/60">{row.fulltime}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: prefersReduced ? 1 : 1.02 }}
            whileTap={{ scale: prefersReduced ? 1 : 0.97 }}
          >
            <Link
              href="/contact"
              onClick={() => track("intent")}
              className="btn-teal rounded-sm text-sm"
            >
              <span>Angebot anfragen — kostenlos →</span>
            </Link>
          </motion.div>
          <p className="mt-4 text-xs font-mono text-mist/40 uppercase tracking-wider">
            Kein Commitment. Kein Risiko. Nur Klarheit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
