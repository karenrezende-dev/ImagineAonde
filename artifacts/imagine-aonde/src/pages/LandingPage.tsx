import { HeroSection } from "@/components/sections/HeroSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { WhatsInsideSection } from "@/components/sections/WhatsInsideSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <HeroSection />
      <AuthoritySection />
      <WhatsInsideSection />
      <BenefitsSection />
      <SocialProofSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
      
      <StickyCTA />
      <WhatsAppButton />
    </div>
  );
}