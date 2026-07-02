"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function AnimatedNumber({ target, duration = 2000, prefix = "", suffix = "" }: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [current, setCurrent] = useState(0);
  const started = useRef(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (started.current || prefersReduced) {
      setCurrent(target);
      return;
    }
    started.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCurrent(Math.round(ease * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, prefersReduced]);

  return <span>{prefix}{current.toLocaleString("de-DE")}{suffix}</span>;
}

const sparklineD = "M0,48 C15,44 25,28 45,30 C65,32 75,18 95,20 C115,22 125,10 145,12 C165,14 175,6 195,8";

const tasks = [
  { label: "Cash Gap Nov erkannt", status: "warn" },
  { label: "Q3 Verbindlichkeiten optimiert", status: "ok" },
  { label: "EBITDA-Ziel auf Kurs", status: "ok" },
  { label: "Liquiditätsreserve analysiert", status: "ok" },
];

export function DashboardMock() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="w-full max-w-md mx-auto bg-card border border-wire rounded-2xl overflow-hidden shadow-2xl"
      style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,229,200,0.08)" }}
      initial={prefersReduced ? false : { opacity: 0, rotateX: 15, y: 40 }}
      animate={{ opacity: 1, rotateX: 8, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top bar */}
      <div className="bg-void/80 border-b border-wire px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-neon animate-pulse_glow" />
          <span className="text-xs font-inter text-mist font-500 tracking-wider uppercase">Live CFO Dashboard</span>
        </div>
        <span className="text-[10px] font-inter text-mist/60 font-mono">Q3 2024</span>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-3 divide-x divide-wire border-b border-wire">
        {[
          { label: "Revenue YTD", value: 2.4, prefix: "€", suffix: "M" },
          { label: "Cash Runway", value: 14, suffix: "M" },
          { label: "EBITDA", value: 22, suffix: "%" },
        ].map((kpi) => (
          <div key={kpi.label} className="px-3 py-3 flex flex-col gap-1">
            <span className="text-[9px] font-inter text-mist/60 uppercase tracking-wider">{kpi.label}</span>
            <span className="text-base font-space font-700 text-neon">
              <AnimatedNumber
                target={kpi.label === "Revenue YTD" ? 24 : kpi.value as number}
                prefix={kpi.prefix}
                suffix={kpi.suffix}
              />
            </span>
          </div>
        ))}
      </div>

      {/* Sparkline */}
      <div className="px-4 pt-3 pb-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-inter text-mist/60 uppercase tracking-wider">Cash Flow — 6M</span>
          <span className="text-[9px] font-mono text-neon">+34% ↑</span>
        </div>
        <svg viewBox="0 0 200 60" className="w-full h-12" aria-hidden="true">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00E5C8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00E5C8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${sparklineD} L195,60 L0,60 Z`} fill="url(#chartFill)" />
          <path d={sparklineD} stroke="#00E5C8" strokeWidth="1.5" fill="none" />
          {/* Highlight dot */}
          <circle cx="145" cy="12" r="3" fill="#00E5C8" />
          <circle cx="145" cy="12" r="6" fill="#00E5C8" fillOpacity="0.2" />
        </svg>
      </div>

      {/* AI Tasks */}
      <div className="px-4 pt-2 pb-4 border-t border-wire mt-1">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-[9px] font-mono text-azure uppercase tracking-wider">⚡ KI-Einblicke</span>
        </div>
        <div className="space-y-1.5">
          {tasks.map((task) => (
            <div key={task.label} className="flex items-center gap-2">
              <span className={`w-1 h-1 rounded-full flex-shrink-0 ${task.status === "warn" ? "bg-gold" : "bg-neon"}`} />
              <span className="text-[10px] font-mono text-mist/80">{task.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
