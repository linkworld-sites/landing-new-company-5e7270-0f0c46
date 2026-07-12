"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";
import { FUNNEL_API, FUNNEL_COMPANY_ID } from "@/funnel-config";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const prefersReduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    track("intent");
    setStatus("loading");
    try {
      const res = await fetch(
        `${FUNNEL_API}/api/companies/${FUNNEL_COMPANY_ID}/leads`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "cta_hero" }),
        }
      );
      if (res.ok) {
        track("convert");
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative py-28 bg-void overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/products/product-0.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
      </div>

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,229,200,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="text-xs font-mono text-neon uppercase tracking-widest block mb-6">
            Bereit anzufangen?
          </span>

          <h2
            className="font-space font-extrabold text-snow leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            Ihr CFO-System wartet.
            <br />
            <span className="text-teal-gradient">Starten Sie heute.</span>
          </h2>

          <p className="text-mist font-inter text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Hinterlassen Sie Ihre E-Mail für ein kostenloses Erstgespräch —
            wir melden uns innerhalb von 24 Stunden.
          </p>

          {/* Email form */}
          {status === "success" ? (
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-5 bg-neon/10 border border-neon/40 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease }}
            >
              <span className="text-neon text-xl">✓</span>
              <p className="text-snow font-space font-600 text-lg">
                Danke! Wir melden uns innerhalb von 24h.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div
                className="flex items-center gap-0 bg-card border border-wire rounded-xl overflow-hidden focus-within:border-neon/60 transition-colors duration-300"
                style={{ boxShadow: "0 0 0 0 rgba(0,229,200,0)" }}
              >
                <div className="flex items-center gap-2 pl-5 flex-shrink-0">
                  <span className="font-mono text-neon/60 text-sm terminal-cursor">
                    &gt;_
                  </span>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ihre E-Mail-Adresse"
                  required
                  className="flex-1 bg-transparent px-3 py-4 text-snow font-inter text-sm placeholder:text-mist/40 focus:outline-none"
                />
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-5 py-4 bg-neon text-void font-space font-700 text-xs uppercase tracking-widest hover:bg-neon/90 transition-colors duration-200 flex-shrink-0 disabled:opacity-60"
                  whileTap={prefersReduced ? {} : { scale: 0.97 }}
                >
                  {status === "loading" ? "…" : "Senden →"}
                </motion.button>
              </div>
              {status === "error" && (
                <p className="mt-3 text-xs font-mono text-red-400 text-center">
                  Fehler. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.
                </p>
              )}
            </form>
          )}

          <div className="mt-8 flex items-center justify-center gap-6">
            <Link
              href="/contact"
              onClick={() => track("intent")}
              className="text-sm font-space font-600 text-mist hover:text-snow transition-colors duration-200 underline underline-offset-4"
            >
              Vollständiges Kontaktformular →
            </Link>
            <span className="text-wire">|</span>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-space font-600 text-mist hover:text-snow transition-colors duration-200 underline underline-offset-4"
            >
              Termin buchen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
