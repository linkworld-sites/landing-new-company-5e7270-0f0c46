"use client";

import { motion, useReducedMotion } from "framer-motion";

const painPoints = [
  "× Kein Echtzeit-Überblick über Cash Flow",
  "× Reporting kostet Tage statt Stunden",
  "× Finanzentscheidungen basieren auf Bauchgefühl",
];

export function ProblemSection() {
  const prefersReduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative py-28 bg-void overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(27,79,255,0.08) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Big stat */}
          <motion.div
            className="relative"
            initial={prefersReduced ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="relative bg-card border border-wire rounded-2xl p-10 noise overflow-hidden">
              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-neon rounded-l-2xl" />

              <div className="mb-6">
                <span
                  className="font-space font-extrabold text-snow block leading-none"
                  style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
                >
                  68<span className="text-neon">%</span>
                </span>
              </div>

              <p className="text-xl font-space font-600 text-snow leading-tight mb-4">
                der KMU haben keinen<br />
                Echtzeit-Überblick über<br />
                ihre Liquidität.
              </p>

              <p className="text-mist font-inter text-base leading-relaxed">
                Dabei ist Cash-Flow-Transparenz keine Kür — sie ist die
                Grundvoraussetzung für jede unternehmerische Entscheidung.
              </p>

              <div className="mt-8 pt-6 border-t border-wire">
                <p className="text-xl font-space font-700 text-neon italic">
                  &ldquo;Kein Overhead. Keine Overheads. Nur Ergebnisse.&rdquo;
                </p>
              </div>

              {/* Decorative corner glow */}
              <div
                className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-15 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #00E5C8 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Right — Pain points */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="text-xs font-mono text-mist/60 uppercase tracking-widest block mb-4">
                Das kennen Sie?
              </span>
              <h2 className="text-display-sm font-space text-snow mb-6">
                Cash Flow ist keine Überraschung —<br />
                <span className="text-teal-gradient">wenn Sie die richtigen Systeme haben.</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-4">
              {painPoints.map((point, i) => (
                <motion.div
                  key={point}
                  className="flex items-start gap-4 p-5 bg-card border border-wire rounded-xl"
                  initial={prefersReduced ? false : { opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                >
                  <span className="text-lg font-mono text-red-400 font-bold mt-0.5 flex-shrink-0">×</span>
                  <p className="font-mono text-sm text-mist leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-mist font-inter text-base leading-relaxed mt-4"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              Fleximo Finance bringt CFO-Level-Klarheit in Ihr Unternehmen —
              ohne die Fixkosten eines Vollzeit-Finanzchefs.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
