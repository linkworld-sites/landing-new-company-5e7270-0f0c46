"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { faqs } from "@/lib/faq-data";

export function FAQSection() {
  const prefersReduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 bg-void">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={prefersReduced ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="text-xs font-mono text-neon uppercase tracking-widest block mb-6">
            Häufige Fragen
          </span>
          <h2
            className="font-space font-extrabold text-snow leading-tight"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
          >
            Antworten, <span className="text-teal-gradient">bevor ihr fragt.</span>
          </h2>
        </motion.div>

        <motion.div
          className="space-y-3"
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="bg-card border border-wire rounded-2xl overflow-hidden"
              >
                <motion.button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  whileTap={{ scale: prefersReduced ? 1 : 0.99 }}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-space font-600 text-snow text-base leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 font-mono text-neon text-lg transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </motion.button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={prefersReduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={prefersReduced ? {} : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm font-inter text-mist leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
