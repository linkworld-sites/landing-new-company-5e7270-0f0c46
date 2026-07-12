import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ConversionForm from "@/components/ConversionForm";
import { Navigation } from "@/components/Navigation";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Kontakt — Summit CFO Services",
  description:
    "Starten Sie mit einem kostenlosen Erstgespräch. Wir analysieren Ihre Finanzsituation und zeigen Ihnen, wie Summit CFO Services konkret helfen kann.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-void pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — Copy */}
            <div>
              <span className="text-xs font-mono text-neon uppercase tracking-widest block mb-6">
                Erstgespräch
              </span>
              <h1 className="text-display-sm font-space text-snow mb-6">
                Lassen Sie uns sprechen.
              </h1>
              <p className="text-mist font-inter text-lg leading-relaxed mb-8">
                Erzählen Sie uns von Ihrer Situation. Wir zeigen Ihnen in 30
                Minuten, wie Summit CFO Services Ihnen helfen kann — konkret,
                zahlenbasiert und ohne Consulting-Floskeln.
              </p>

              <div className="flex flex-col gap-5 mb-10">
                {[
                  {
                    icon: "◈",
                    title: "Kostenlos & unverbindlich",
                    desc: "Das Erstgespräch ist kostenlos. Kein Commitment, kein Kleingedrucktes.",
                  },
                  {
                    icon: "⚡",
                    title: "Antwort in 24h",
                    desc: "Wir melden uns garantiert innerhalb eines Werktages.",
                  },
                  {
                    icon: "◎",
                    title: "Maßgeschneidert",
                    desc: "Keine Standardlösungen. Jedes Erstgespräch ist individuell auf Ihre Situation zugeschnitten.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="text-neon text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-space font-600 text-snow text-sm mb-1">{item.title}</p>
                      <p className="font-inter text-mist text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden border border-wire opacity-70">
                <Image
                  src="/images/products/product-0.jpg"
                  alt="Summit CFO Services Beratung"
                  width={600}
                  height={300}
                  className="w-full object-cover h-48"
                />
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-card border border-wire rounded-2xl p-8 lg:p-10">
              <h2 className="text-xl font-space font-700 text-snow mb-2">
                Anfrage senden
              </h2>
              <p className="text-sm font-inter text-mist mb-8">
                Alle Felder mit * sind Pflichtfelder.
              </p>

              <div className="contact-form-wrap">
                <ConversionForm
                  startStep="form_start"
                  submitStep="lead"
                  cta="Anfrage absenden →"
                  fields={[
                    { name: "name", label: "Ihr Name *", required: true },
                    { name: "email", label: "E-Mail-Adresse *", type: "email", required: true },
                    { name: "company", label: "Unternehmen" },
                    { name: "message", label: "Wie können wir helfen?", type: "textarea" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
