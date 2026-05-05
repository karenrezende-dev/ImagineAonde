import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { WhatsInsideSection } from "@/components/sections/WhatsInsideSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { PurchaseSection } from "@/components/sections/PurchaseSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { NavigationBar } from "@/components/NavigationBar";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ color: "#1F1F1F" }}>
      <NavigationBar />
      <ScrollProgress />
      <div>
        <HeroSection />
        <WhatsInsideSection />
        <AboutSection />
        <FeaturesSection />
        <GallerySection />
        <ContactSection />
        <OfferSection />
        <PurchaseSection />
        <FAQSection />
        <footer className="py-12 bg-gray-900 text-center">
          <div className="container mx-auto px-4">
            <p className="text-white font-bold text-lg mb-2">Imagine Aonde</p>
            <p className="text-gray-400 text-sm mb-4">Guia completo para brasileiros em Orlando</p>
            <p className="text-gray-500 text-xs">
              © 2025 Imagine Aonde · Este site não é afiliado à Disney ou Universal
            </p>
          </div>
        </footer>
        <WhatsAppButton />
      </div>
    </div>
  );
}
