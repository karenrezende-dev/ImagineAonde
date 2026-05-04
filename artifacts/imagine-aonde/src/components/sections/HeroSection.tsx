import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { DeviceMockups } from "@/components/DeviceMockups";
import { GreetingComponent } from "@/components/GreetingComponent";

export function HeroSection() {
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

  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(165deg, #ffffff 0%, #FDF4FF 45%, #FFF0F8 100%)" }}
    >
      {/* Soft blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #E9D5FF, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #BFDBFE, transparent)" }}
      />

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-purple-100 rounded-full px-4 py-2 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse-soft" />
              <span className="text-sm font-medium text-purple-700">Guia para Brasileiros em Orlando</span>
            </div>

            {/* Headline with cursive */}
            <div className="space-y-1">
              <GreetingComponent />
              <h1
                className="font-bold leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", fontFamily: "'Poppins', sans-serif", color: "#1F1F1F" }}
              >
                Descubra Orlando
              </h1>
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(2.6rem, 5.5vw, 4rem)",
                  background: "linear-gradient(135deg, #EC4899 0%, #A855F7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.2,
                }}
              >
                como eu descobri
              </p>
              <p className="text-lg text-gray-500 leading-relaxed font-light max-w-md pt-2">
                Um guia completo com tudo que você precisa saber para aproveitar ao máximo sua viagem —{" "}
                <strong className="text-purple-600 font-medium">Disney, Universal, SeaWorld e muito mais.</strong>
              </p>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3.5 w-fit border border-pink-100 shadow-sm">
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  Oferta especial expira em
                </p>
                <div className="flex items-center gap-1 font-mono font-bold text-xl text-gray-800">
                  <span>{fmt(time.h)}</span>
                  <span className="text-pink-400 animate-pulse-soft">:</span>
                  <span>{fmt(time.m)}</span>
                  <span className="text-pink-400 animate-pulse-soft">:</span>
                  <span>{fmt(time.s)}</span>
                </div>
              </div>
              <div className="h-10 w-px bg-pink-100" />
              <div>
                <p className="text-xs text-gray-400 line-through">R$ 97,00</p>
                <p className="text-xl font-bold" style={{ color: "#EC4899" }}>R$ 29,90</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary text-base px-8 flex items-center justify-center gap-2"
                style={{ height: "52px" }}
              >
                ✈️ Quero meu guia agora
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <button
                onClick={() => document.getElementById("conteudo")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 rounded-full border border-purple-200 text-purple-600 font-medium text-base hover:bg-purple-50 transition-all"
                style={{ height: "52px" }}
              >
                Ver o que está incluído
              </button>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                Mais de <strong className="text-gray-700">5.000</strong> viajantes felizes
              </span>
            </div>
          </motion.div>

          {/* Right — device mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[420px]">
              <DeviceMockups />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
