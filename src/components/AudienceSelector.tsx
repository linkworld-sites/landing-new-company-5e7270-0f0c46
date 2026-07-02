"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const audiences = [
  {
    id: "startup",
    label: "Startup / Scale-up",
    icon: "◈",
    pains: [
      "Cash Runway unbekannt",
      "Investor-Reporting manuell",
      "Kein Finanzplan für Series A",
    ],
    services: ["Cash Flow Planning", "Investor-Reporting", "Financial Modeling"],
    cta: "Runway verlängern →",
    desc: "Für Gründer, die schnell skalieren und Investoren mit sauberen Zahlen überzeugen müssen.",
  },
  {
    id: "mittelstand",
    label: "Mittelstand",
    icon: "⬡",
    pains: [
      "ERP-Daten nicht nutzbar",
      "Reporting braucht Tage",
      "Keine Kostenstellentransparenz",
    ],
    services: ["ERP-Analyse", "Kostenrechnung", "Management Reporting"],
    cta: "ERP-Audit starten →",
    desc: "Für etablierte Unternehmen, die ihre Finanzdaten endlich verstehen und nutzen wollen.",
  },
  {
    id: "investor-backed",
    label: "Investor-backed SME",
    icon: "◇",
    pains: [
      "Board-Reporting zu zeitaufwendig",
      "KPIs nicht sauber definiert",
      "Exit-Vorbereitung offen",
    ],
    services: ["Board Reporting", "KPI Framework", "Exit Advisory"],
    cta: "Board-Readiness prüfen →",
    desc: "Für PE/VC-gestützte Unternehmen mit hohen Anforderungen an Transparenz und Governance.",
  },
];

export function AudienceSelector() {
  const [selected, setSelected] = useState("startup");
  const prefersReduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  const active = audiences.find((a) => a.id === selected) ?? audiences[0];

  return (
    <section className="py-28 bg-void overflow-hidden">
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
            Für wen ist Fleximo?
          </span>
          <h2 className="text-display-sm font-space text-snow mb-4">
            Maßgeschneidert für{" "}
            <span className="text-teal-gradient">jede Wachstumsphase.</span>
          </h2>
          <p className="text-mist font-inter text-lg leading-relaxed">
            Wählen Sie Ihre Situation — wir zeigen Ihnen, wie Fleximo konkret hilft.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Selector tiles */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {audiences.map((aud) => (
              <motion.button
                key={aud.id}
                onClick={() => setSelected(aud.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                  selected === aud.id
                    ? "border-neon/60 bg-card"
                    : "border-wire bg-card/50 hover:border-wire/80"
                }`}
                whileHover={prefersReduced ? {} : { x: 4 }}
                whileTap={prefersReduced ? {} : { scale: 0.98 }}
                aria-pressed={selected === aud.id}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xl transition-colors duration-300 ${
                      selected === aud.id ? "text-neon" : "text-azure"
                    }`}
                  >
                    {aud.icon}
                  </span>
                  <span
                    className={`font-space font-600 text-sm transition-colors duration-300 ${
                      selected === aud.id ? "text-snow" : "text-mist"
                    }`}
                  >
                    {aud.label}
                  </span>
                  <span
                    className={`ml-auto transition-all duration-300 ${
                      selected === aud.id ? "text-neon" : "text-wire"
                    }`}
                  >
                    →
                  </span>
                </div>
                {selected === aud.id && (
                  <p className="mt-3 text-xs font-inter text-mist leading-relaxed">
                    {aud.desc}
                  </p>
                )}
              </motion.button>
            ))}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                className="bg-card border border-wire rounded-2xl p-8"
                initial={prefersReduced ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4, ease }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl text-neon">{active.icon}</span>
                  <h3 className="text-xl font-space font-700 text-snow">{active.label}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pain points */}
                  <div>
                    <p className="text-xs font-mono text-mist/50 uppercase tracking-widest mb-4">
                      Typische Herausforderungen
                    </p>
                    <div className="flex flex-col gap-2.5">
                      {active.pains.map((pain) => (
                        <div key={pain} className="flex items-start gap-2.5">
                          <span className="text-red-400 font-mono text-sm mt-0.5 flex-shrink-0">×</span>
                          <span className="text-sm font-mono text-mist">{pain}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <p className="text-xs font-mono text-mist/50 uppercase tracking-widest mb-4">
                      Fleximo-Lösung
                    </p>
                    <div className="flex flex-col gap-2.5">
                      {active.services.map((svc) => (
                        <div key={svc} className="flex items-start gap-2.5">
                          <span className="text-neon font-mono text-sm mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-sm font-space font-600 text-snow">{svc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-wire">
                  <motion.a
                    href="/contact"
                    className="btn-teal rounded-sm inline-flex text-xs"
                    whileHover={{ scale: prefersReduced ? 1 : 1.02 }}
                    whileTap={{ scale: prefersReduced ? 1 : 0.97 }}
                  >
                    <span>{active.cta}</span>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
