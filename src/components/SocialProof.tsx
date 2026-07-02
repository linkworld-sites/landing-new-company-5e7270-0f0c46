"use client";

import { motion, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Endlich wissen wir jeden Montag, wo wir finanziell stehen. Fleximo hat unsere Reporting-Zeit von 3 Tagen auf 2 Stunden reduziert.",
    attribution: "Gründer, B2B SaaS · €4M ARR",
  },
  {
    quote:
      "Die Cash-Flow-Szenarien haben uns geholfen, eine Finanzierungslücke 6 Monate im Voraus zu erkennen und zu schließen. Das war existenziell.",
    attribution: "CEO, Mittelstandsunternehmen · €18M Umsatz",
  },
  {
    quote:
      "Kein Berater, der uns mit Buzzwords abspeist — Fleximo denkt wie ein Unternehmer und liefert Zahlen, die wir sofort verstehen.",
    attribution: "Geschäftsführerin, Retail-Gruppe · €7M Umsatz",
  },
];

const metrics = [
  { value: "+34%", label: "Cash Runway" },
  { value: "−60%", label: "Reporting-Zeit" },
  { value: "48h", label: "Onboarding" },
  { value: "100%", label: "Kunden halten Fleximo" },
];

export function SocialProof() {
  const prefersReduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="py-28 bg-card relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,229,200,0.04) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Metrics band */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 pb-16 border-b border-wire"
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="text-center"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <div className="text-3xl lg:text-4xl font-space font-800 text-neon mb-2">
                {m.value}
              </div>
              <div className="text-xs font-mono text-mist/60 uppercase tracking-widest">
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-xs font-mono text-neon uppercase tracking-widest block mb-4">
            Was Gründer sagen
          </span>
          <h2 className="text-display-sm font-space text-snow">
            Finanzen, die mit Ihrem<br />
            <span className="text-teal-gradient">Unternehmen wachsen.</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative bg-void border border-wire rounded-2xl p-8 flex flex-col gap-6"
              initial={prefersReduced ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              whileHover={prefersReduced ? {} : { y: -4, borderColor: "rgba(0,229,200,0.3)" }}
            >
              {/* Quote mark */}
              <div
                className="text-5xl font-space font-extrabold text-neon/20 leading-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <blockquote className="text-base font-space font-500 text-snow leading-relaxed italic -mt-4">
                {t.quote}
              </blockquote>

              <footer className="pt-4 border-t border-wire/50">
                <p className="text-xs font-mono text-mist/60">{t.attribution}</p>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
