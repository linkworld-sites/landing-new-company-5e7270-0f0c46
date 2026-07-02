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

export default function Home() {
  return (
    <>
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
