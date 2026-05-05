import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="bg-white border-t border-purple-100 px-4 py-3 shadow-lg flex items-center gap-3">
            <div className="flex-1">
              <p className="text-xs text-gray-500">Guia completo de Orlando</p>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-gray-400 line-through">R$ 97,00</span>
                <span className="font-bold text-pink-600 text-lg">R$ 39,90</span>
              </div>
            </div>
            <button
              onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary px-5 py-2.5 text-sm shrink-0"
            >
              Garantir ✈️
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
