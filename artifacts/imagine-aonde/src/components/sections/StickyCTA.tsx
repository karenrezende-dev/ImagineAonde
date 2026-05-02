import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-pink-200 shadow-[0_-8px_32px_-8px_rgba(206,147,216,0.3)] p-4 md:hidden flex items-center justify-between"
        >
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 line-through">R$ 97,00</span>
            <span className="text-xl font-bold text-pink-600 leading-none">R$ 29,90</span>
          </div>
          <Button
            className="font-bold text-white rounded-full"
            style={{ background: "linear-gradient(135deg, #e91e63, #9c27b0)" }}
            onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-sticky-cta"
          >
            Quero Agora
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
