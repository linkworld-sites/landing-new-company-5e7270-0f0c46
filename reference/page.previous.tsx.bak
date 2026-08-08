import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AIAdvantage } from "@/components/AIAdvantage";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { AudienceSelector } from "@/components/AudienceSelector";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Summit CFO Services",
  url: SITE_URL,
  description:
    "Fractional CFO firepower ohne Full-Time-Preis. Strategische Finanzführung, KI-gestützte Analysen und Cash-Flow-Klarheit für wachsende Unternehmen.",
  areaServed: "DE",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesGrid />
        <AIAdvantage />
        <HowItWorks />
        <SocialProof />
        <AudienceSelector />
        <PricingSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
