import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap } from "lucide-react";

export function UrgencyBar() {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const KEY = "ia_offer_end";
    let end = Number(localStorage.getItem(KEY));
    if (!end || end < Date.now()) {
      end = Date.now() + 4 * 60 * 60 * 1000;
      localStorage.setItem(KEY, String(end));
    }

    const calc = () => {
      const diff = Math.max(0, end - Date.now());
      return {
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = (n: number) => n.toString().padStart(2, "0");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50"
          style={{ background: "linear-gradient(90deg, #7b1fa2 0%, #ad1457 50%, #0288d1 100%)" }}
        >
          {/* Shimmer overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s linear infinite",
            }}
          />

          <div className="relative flex items-center justify-center gap-3 px-4 py-2.5 flex-wrap">
            {/* Icon */}
            <div className="flex items-center gap-1.5 shrink-0">
              <Zap className="w-4 h-4 text-yellow-300 fill-yellow-200" />
              <span className="text-white font-bold text-sm hidden sm:inline">
                🔥 Oferta especial expira em:
              </span>
              <span className="text-white font-bold text-sm sm:hidden">⏳</span>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-1 font-mono font-bold text-base">
              {[
                { v: timeLeft.hours, l: "h" },
                { v: timeLeft.minutes, l: "m" },
                { v: timeLeft.seconds, l: "s" },
              ].map(({ v, l }, i) => (
                <span key={i} className="flex items-center gap-1">
                  <span className="bg-white/15 text-white px-2 py-0.5 rounded-lg tabular-nums text-sm">
                    {fmt(v)}
                    <span className="text-white/60 text-[10px] ml-0.5">{l}</span>
                  </span>
                  {i < 2 && <span className="text-white/50 text-xs">:</span>}
                </span>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() =>
                document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-shimmer flex items-center gap-1.5 bg-white text-pink-700 font-bold text-xs px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all shrink-0"
            >
              R$ 29,90 — Garantir agora ✈️
            </motion.button>

            {/* Close */}
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
