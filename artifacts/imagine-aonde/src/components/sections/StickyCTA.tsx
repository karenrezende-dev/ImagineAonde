import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div
            className="glass border-t border-pink-200/60 shadow-[0_-12px_40px_-8px_rgba(233,30,99,0.2)] p-4"
            style={{ backdropFilter: "blur(20px)" }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs text-gray-400 line-through">R$ 97,00</span>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">70% OFF</span>
                </div>
                <span className="text-2xl font-serif font-bold text-pink-600">R$ 29,90</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] text-gray-400">Garantia 7 dias</span>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-shimmer flex items-center gap-2 font-bold text-white text-sm px-5 py-3.5 rounded-2xl shadow-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #e91e63, #9c27b0)" }}
                data-testid="button-sticky-cta"
              >
                Quero Agora ✈️
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
