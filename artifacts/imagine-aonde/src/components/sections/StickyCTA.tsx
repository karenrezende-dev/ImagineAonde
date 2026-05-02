import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 100vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)] p-4 md:hidden flex items-center justify-between"
        >
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 line-through">R$ 97,00</span>
            <span className="text-xl font-bold text-primary leading-none">R$ 29,90</span>
          </div>
          <Button 
            className="bg-accent hover:bg-accent/90 text-white font-bold animate-pulse"
            onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
          >
            Quero Agora
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}