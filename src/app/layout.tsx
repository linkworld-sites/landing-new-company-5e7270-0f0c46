import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FunnelTracker } from "@/components/FunnelTracker";
import { CookieConsent } from "@/components/CookieConsent";
import { SITE_URL } from "@/lib/site";
import { FUNNEL_META_PIXEL } from "@/funnel-config";
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
  verification: {
    google: "WlJ66mw7eszwjs5WXh-HAJ_3n22gXQA1yf23ABf0enE",
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
        {FUNNEL_META_PIXEL && (
          <>
            <script
              id="meta-pixel-base"
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FUNNEL_META_PIXEL}');
fbq('track', 'PageView');`,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                alt=""
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${FUNNEL_META_PIXEL}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
        <FunnelTracker />
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
