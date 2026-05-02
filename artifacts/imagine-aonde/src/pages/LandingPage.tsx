import { HeroSection } from "@/components/sections/HeroSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { UrgencyBar } from "@/components/sections/UrgencyBar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ color: "#1F1F1F" }}>
      <UrgencyBar />
      <div className="pt-[38px]">
        <HeroSection />
        <CoverageSection />
        <AboutSection />
        <FeaturesSection />
        <GallerySection />
        <TestimonialsSection />
        <OfferSection />
        <FAQSection />
        <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100">
          <p>© 2025 Imagine Aonde · Todos os direitos reservados</p>
          <p className="mt-1">Guia Digital · Acesso imediato após a compra</p>
        </footer>
        <WhatsAppButton />
        <StickyCTA />
      </div>
    </div>
  );
}
