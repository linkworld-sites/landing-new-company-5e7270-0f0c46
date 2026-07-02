"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Audit & Analyse",
    desc: "Wir analysieren Ihre aktuelle Finanzstruktur, ERP-Daten und Reporting-Prozesse in 48 Stunden.",
    duration: "48h",
  },
  {
    num: "02",
    title: "Modellierung & Planung",
    desc: "Aufbau eines maßgeschneiderten Finanzmodells: Cash-Flow-Plan, Szenarien und KPI-Framework.",
    duration: "1 Woche",
  },
  {
    num: "03",
    title: "KI-Integration",
    desc: "Automatisierung von Reporting-Pipelines und Aufbau Ihres persönlichen CFO-Dashboards.",
    duration: "2 Wochen",
  },
  {
    num: "04",
    title: "Laufendes Reporting",
    desc: "Monatliches CFO-Briefing, Ad-hoc-Analysen und strategische Begleitung — kontinuierlich.",
    duration: "Laufend",
  },
];

export function HowItWorks() {
  const prefersReduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="how-it-works" className="py-28 bg-void overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-xs font-mono text-neon uppercase tracking-widest block mb-4">
            Onboarding
          </span>
          <h2 className="text-display-sm font-space text-snow mb-4">
            Wie wir starten.
          </h2>
          <p className="text-mist font-inter text-lg leading-relaxed">
            Kein monatelanger Anlauf. In 4 klaren Schritten von der ersten
            Analyse zum laufenden CFO-Betrieb.
          </p>
        </motion.div>

        {/* Steps — desktop: horizontal, mobile: vertical */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-[52px] left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-wire"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative glass-card rounded-2xl p-6 hover:border-neon/30 transition-colors duration-300 group"
                initial={prefersReduced ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                whileHover={prefersReduced ? {} : { y: -6 }}
              >
                {/* Step number badge */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full border border-azure/40 flex items-center justify-center bg-azure/10 group-hover:bg-azure/20 transition-colors duration-300">
                    <span className="text-sm font-mono font-700 text-azure">{step.num}</span>
                  </div>
                  <span className="text-[10px] font-mono text-mist/50 uppercase tracking-wider">{step.duration}</span>
                </div>

                <h3 className="text-base font-space font-700 text-snow mb-3 group-hover:text-neon transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-sm font-inter text-mist leading-relaxed">
                  {step.desc}
                </p>

                {/* Connector dot (desktop) */}
                <div
                  className="hidden lg:block absolute top-[52px] left-[calc(25%)] -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-void bg-azure group-hover:bg-neon transition-colors duration-300"
                  style={{ top: "52px" }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-mist font-inter text-lg mb-6">
            Bereit für den ersten Schritt?
          </p>
          <motion.a
            href="/contact"
            className="btn-teal rounded-sm inline-flex"
            whileHover={{ scale: prefersReduced ? 1 : 1.02 }}
            whileTap={{ scale: prefersReduced ? 1 : 0.97 }}
          >
            <span>Kostenloses Erstgespräch →</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
