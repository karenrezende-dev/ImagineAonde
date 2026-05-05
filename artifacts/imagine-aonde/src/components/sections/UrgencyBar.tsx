import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function UrgencyBar() {
  const [visible, setVisible] = useState(true);
  const [time, setTime] = useState({ h: 4, m: 0, s: 0 });

  useEffect(() => {
    const key = "urgency_end";
    const stored = localStorage.getItem(key);
    let end: number;
    if (stored) {
      end = parseInt(stored, 10);
    } else {
      end = Date.now() + 4 * 60 * 60 * 1000;
      localStorage.setItem(key, String(end));
    }
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      setTime({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = (n: number) => n.toString().padStart(2, "0");
  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-3 px-4"
      style={{ background: "linear-gradient(90deg, #EC4899, #A855F7, #60A5FA)", minHeight: "38px" }}
    >
      <span className="text-white text-xs font-semibold whitespace-nowrap">
        🔥 Oferta termina em:
        <span className="font-mono ml-1.5 font-bold tracking-wider">
          {fmt(time.h)}:{fmt(time.m)}:{fmt(time.s)}
        </span>
      </span>
      <button
        onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
        className="bg-white font-bold text-xs px-3 py-1 rounded-full hover:bg-purple-50 transition-all shrink-0"
        style={{ color: "#A855F7" }}
      >
        R$ 39,90 — Garantir
      </button>
      <button onClick={() => setVisible(false)} className="absolute right-3 text-white/70 hover:text-white transition-colors">
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
