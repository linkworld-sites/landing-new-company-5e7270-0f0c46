import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FunnelTracker } from "@/components/FunnelTracker";
import { CookieConsent } from "@/components/CookieConsent";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Summit CFO Services — Fractional CFO On Demand",
  description:
    "Fractional CFO firepower ohne Full-Time-Preis. Strategische Finanzführung, KI-gestützte Analysen und Cash-Flow-Klarheit — genau dann, wenn Ihr Unternehmen es braucht.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Fractional CFO",
    "Finanzberatung",
    "Cash Flow Planning",
    "ERP Analyse",
    "AI Finance",
    "KI Buchhaltung",
  ],
  openGraph: {
    title: "Summit CFO Services — Ihr CFO. On Demand. Powered by AI.",
    description:
      "CFO-Level-Finanzführung ohne Festanstellung. Flexibel, datengetrieben, sofort einsatzbereit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        <FunnelTracker />
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
