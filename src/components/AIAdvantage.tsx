"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const panels = [
  {
    step: "01",
    badge: "Vor Summit CFO",
    title: "Manuelles Chaos",
    desc: "Spreadsheets, die niemand versteht. Reporting, das Tage dauert. Entscheidungen ohne Datenbasis.",
    visual: "chaos",
    accent: "#ef4444",
  },
  {
    step: "02",
    badge: "KI-Mapping",
    title: "KI-gestütztes Finanzmodell",
    desc: "Summit CFO verbindet Ihre ERP-Daten, modelliert Szenarien automatisch und liefert einen lebenden Finanzplan.",
    visual: "model",
    accent: "#1B4FFF",
  },
  {
    step: "03",
    badge: "Ihr Command Center",
    title: "Echtzeit CFO Dashboard",
    desc: "Sie sehen Cash Flow, EBITDA und KPIs in Echtzeit — und Ihr Summit CFO ist immer einen Anruf entfernt.",
    visual: "dashboard",
    accent: "#00E5C8",
  },
];

function VisualChaos() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-4 opacity-80">
      {[
        ["Q1_Plan_v3_FINAL.xlsx", "34 KB"],
        ["Liquidität_KORREKTUR.xlsx", "28 KB"],
        ["Budget_NEU_2024_final_v2.xlsx", "51 KB"],
        ["Reporting_Draft_NOCH_NICHT.xlsx", "19 KB"],
      ].map(([name, size]) => (
        <div key={name} className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <span className="text-lg">📊</span>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-mono text-red-400 truncate">{name}</p>
            <p className="text-[10px] text-mist/50">{size}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function VisualModel() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-azure animate-pulse" />
        <span className="text-xs font-mono text-azure">KI-Analyse läuft…</span>
      </div>
      <svg viewBox="0 0 240 120" className="w-full" aria-hidden="true">
        <defs>
          <linearGradient id="modelGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B4FFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1B4FFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Scenario paths */}
        <path d="M0,90 C40,80 80,50 120,55 C160,60 200,30 240,25" stroke="#1B4FFF" strokeWidth="2" fill="none" opacity="0.9" />
        <path d="M0,90 C40,82 80,60 120,65 C160,70 200,50 240,45" stroke="#00E5C8" strokeWidth="1.5" fill="none" strokeDasharray="4,3" opacity="0.6" />
        <path d="M0,90 C40,85 80,75 120,80 C160,85 200,70 240,68" stroke="#FFB547" strokeWidth="1.5" fill="none" strokeDasharray="2,4" opacity="0.5" />
        {/* Fill */}
        <path d="M0,90 C40,80 80,50 120,55 C160,60 200,30 240,25 L240,120 L0,120 Z" fill="url(#modelGrad)" />
      </svg>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Base Case", color: "#1B4FFF" },
          { label: "Bull Case", color: "#00E5C8" },
          { label: "Bear Case", color: "#FFB547" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-1.5">
            <div className="w-3 h-0.5" style={{ background: s.color }} />
            <span className="text-[10px] font-mono text-mist/70">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualDashboard() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Cash Runway", value: "+34%", good: true },
          { label: "Reporting", value: "−60%", good: true },
          { label: "EBITDA", value: "22%", good: true },
          { label: "Forecast Δ", value: "<2%", good: true },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-void/60 border border-wire rounded-lg p-3">
            <p className="text-[9px] font-mono text-mist/60 uppercase tracking-wider">{kpi.label}</p>
            <p className="text-base font-space font-700 text-neon mt-1">{kpi.value}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-neon/10 border border-neon/30 rounded-lg p-3">
        <span className="text-neon text-sm">⚡</span>
        <p className="text-xs font-mono text-neon/90">CFO-Briefing: Cash Peak in 6 Wochen. Investition empfohlen.</p>
      </div>
    </div>
  );
}

export function AIAdvantage() {
  const [active, setActive] = useState(0);
  const prefersReduced = useReducedMotion();
  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const observers = refs.map((ref, i) => {
      const el = ref.current;
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i); },
        { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ease = [0.16, 1, 0.3, 1] as const;

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
            Der KI-Vorteil
          </span>
          <h2 className="text-display-sm font-space text-snow mb-4">
            Von manuellem Chaos<br />
            <span className="text-teal-gradient">zum lebenden CFO-System.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Sticky visual */}
          <div className="hidden lg:block lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="bg-card border rounded-2xl overflow-hidden"
                style={{ borderColor: panels[active].accent + "40", boxShadow: `0 0 40px ${panels[active].accent}15` }}
                initial={prefersReduced ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease }}
              >
                {/* Header bar */}
                <div
                  className="flex items-center gap-3 px-5 py-4 border-b border-wire/50"
                  style={{ borderBottomColor: panels[active].accent + "20" }}
                >
                  <span
                    className="text-xs font-mono font-600 uppercase tracking-widest px-2.5 py-1 rounded-md"
                    style={{ color: panels[active].accent, background: panels[active].accent + "15" }}
                  >
                    {panels[active].badge}
                  </span>
                  <div className="flex gap-1.5 ml-auto">
                    {[0, 1, 2].map((dot) => (
                      <div
                        key={dot}
                        className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                        style={{ background: dot === active ? panels[active].accent : "#1E2A3A" }}
                      />
                    ))}
                  </div>
                </div>

                {/* Visual content */}
                <div className="h-64">
                  {active === 0 && <VisualChaos />}
                  {active === 1 && <VisualModel />}
                  {active === 2 && <VisualDashboard />}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Image below the active panel */}
            <div className="mt-6 rounded-xl overflow-hidden border border-wire/50 opacity-60">
              <Image
                src="/images/material.png"
                alt="Finanzanalyse mit KI"
                width={600}
                height={300}
                className="w-full object-cover h-36"
              />
            </div>
          </div>

          {/* Right — Scrollable steps */}
          <div className="flex flex-col gap-0">
            {panels.map((panel, i) => (
              <div
                key={panel.step}
                ref={refs[i]}
                className="py-12 border-b border-wire/30 last:border-b-0"
              >
                <motion.div
                  initial={prefersReduced ? false : { opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="text-xs font-mono font-700 tracking-widest uppercase"
                      style={{ color: panel.accent }}
                    >
                      {panel.step}
                    </span>
                    <div className="h-px flex-1 max-w-12" style={{ background: panel.accent + "40" }} />
                    <span
                      className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ color: panel.accent, background: panel.accent + "15" }}
                    >
                      {panel.badge}
                    </span>
                  </div>

                  <h3
                    className="text-2xl lg:text-3xl font-space font-700 mb-4 leading-tight"
                    style={{ color: i === 0 ? "#ef4444" : i === 2 ? "#00E5C8" : "#F4F6FF" }}
                  >
                    {panel.title}
                  </h3>

                  <p className="text-mist font-inter text-lg leading-relaxed">
                    {panel.desc}
                  </p>

                  {/* Mobile visual */}
                  <div
                    className="lg:hidden mt-6 bg-card border rounded-xl overflow-hidden"
                    style={{ borderColor: panel.accent + "30" }}
                  >
                    <div className="h-48">
                      {i === 0 && <VisualChaos />}
                      {i === 1 && <VisualModel />}
                      {i === 2 && <VisualDashboard />}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
