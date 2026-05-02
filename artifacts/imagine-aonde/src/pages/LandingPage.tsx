import { CustomCursor } from "@/components/CustomCursor";
import { UrgencyBar } from "@/components/sections/UrgencyBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { WhatsInsideSection } from "@/components/sections/WhatsInsideSection";
import { BookPreviewSection } from "@/components/sections/BookPreviewSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2D2D2D] selection:bg-pink-200/50">
      <CustomCursor />
      <UrgencyBar />
      <div className="pt-[42px]">
      <HeroSection />
      <AuthoritySection />
      <WhatsInsideSection />
      <BookPreviewSection />
      <BenefitsSection />
      <SocialProofSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
      <StickyCTA />
      <WhatsAppButton />
      </div>
    </div>
  );
}
