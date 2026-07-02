"use client";

import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    icon: "◈",
    title: "Cash Flow Planning",
    desc: "13-Wochen-Liquiditätsforecast und szenariobasierte Planung — keine Cashflow-Überraschungen mehr.",
  },
  {
    icon: "⬡",
    title: "ERP-Analyse",
    desc: "Tiefenanalyse Ihrer ERP-Daten (SAP, DATEV, Lexware). Transparenz auf Knopfdruck, nicht nach Tagen.",
  },
  {
    icon: "◎",
    title: "Kostenrechnung",
    desc: "Deckungsbeitragsrechnung und Kostenstellenanalyse — erkennen Sie, wo Ihr Unternehmen wirklich verdient.",
  },
  {
    icon: "⚡",
    title: "KI-Automatisierungen",
    desc: "Reporting-Pipelines, die sich selbst befüllen. Weniger Manuelles — mehr strategische Energie für Sie.",
  },
  {
    icon: "⊞",
    title: "Financial Reporting",
    desc: "Management-Reporting, Investoren-Decks und Board-Packages — präzise, visuell, auf den Punkt.",
  },
  {
    icon: "◇",
    title: "Strategic Advisory",
    desc: "Von der Finanzierungsrunde bis zum Exit — wir begleiten Ihre wichtigsten Finanzentscheidungen.",
  },
];

export function ServicesGrid() {
  const prefersReduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="services" className="py-28 bg-void">
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
            Leistungen
          </span>
          <h2 className="text-display-sm font-space text-snow mb-4">
            ERP. KI. Kostenrechnung.{" "}
            <span className="text-teal-gradient">Alles aus einer Hand.</span>
          </h2>
          <p className="text-mist font-inter text-lg leading-relaxed">
            Kein Outsourcing-Wirrwarr. Ein Partner, der alle Finanzfäden
            zusammenhält — und Ihnen den Rücken freihält.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative bg-card border border-wire rounded-xl p-6 overflow-hidden cursor-default transition-all duration-300 hover:border-neon/40"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
              initial={prefersReduced ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              whileHover={prefersReduced ? {} : { scale: 1.02, y: -4 }}
            >
              {/* Teal left border */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-neon/40 group-hover:bg-neon transition-colors duration-300 rounded-l-xl" />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                style={{
                  background: "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(0,229,200,0.04) 0%, transparent 100%)",
                }}
                aria-hidden="true"
              />

              {/* Icon */}
              <motion.div
                className="text-azure text-2xl mb-4 w-fit"
                whileHover={prefersReduced ? {} : { rotate: 8, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-base font-space font-700 text-snow mb-2 group-hover:text-neon transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm font-inter text-mist leading-relaxed">
                {service.desc}
              </p>

              {/* Mini sparkline decoration */}
              <div className="mt-4 pt-4 border-t border-wire/50">
                <svg viewBox="0 0 80 20" className="w-20 h-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300" aria-hidden="true">
                  <path
                    d={`M0,15 C10,12 20,8 30,10 C40,12 50,4 60,5 C70,6 75,2 80,3`}
                    stroke="#00E5C8"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
