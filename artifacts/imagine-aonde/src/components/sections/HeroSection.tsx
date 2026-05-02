import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles, Star, ChevronDown } from "lucide-react";
import { EbookCover } from "@/components/EbookCover";

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
      const diff = endOfDay.getTime() - now.getTime();
      return {
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const fmt = (n: number) => n.toString().padStart(2, "0");

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(145deg, #fff0f5 0%, #f9f0ff 30%, #f0f5ff 60%, #f0fff8 100%)" }}
    >
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Orlando"
          className="w-full h-full object-cover object-center opacity-[0.06]"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(255,240,245,0.6) 0%, transparent 50%, rgba(240,245,255,0.7) 100%)" }} />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20 blur-[100px] pointer-events-none animate-float"
        style={{ background: "radial-gradient(circle, #f48fb1 0%, #ce93d8 50%, transparent 70%)" }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-15 blur-[120px] pointer-events-none animate-float-reverse"
        style={{ background: "radial-gradient(circle, #81d4fa 0%, #a5d6a7 50%, transparent 70%)" }} />
      <div className="absolute top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #ce93d8, #90caf9)" }} />

      {/* Floating sparkles */}
      {[
        { top: "15%", left: "8%", delay: 0, size: 16 },
        { top: "25%", right: "12%", delay: 0.5, size: 12 },
        { top: "70%", left: "5%", delay: 1, size: 10 },
        { top: "60%", right: "8%", delay: 1.5, size: 14 },
        { top: "85%", left: "20%", delay: 0.8, size: 8 },
        { top: "10%", left: "45%", delay: 1.2, size: 10 },
      ].map((s, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ top: s.top, left: (s as any).left, right: (s as any).right }}
          animate={{ y: [-8, 8, -8], opacity: [0.4, 1, 0.4], rotate: [0, 180, 360] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: s.delay }}
        >
          <Sparkles style={{ width: s.size, height: s.size, color: ["#e91e63","#9c27b0","#2196f3","#4caf50","#ff9800","#e91e63"][i] }} />
        </motion.div>
      ))}

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-16 pt-24 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center max-w-6xl mx-auto">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 glass border border-pink-200/60 rounded-full px-5 py-2 w-fit shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
              </span>
              <span className="text-sm font-semibold text-pink-700 tracking-wide">O Guia #1 para Brasileiros em Orlando</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-[#2D2D2D]">
                Descubra{" "}
                <span className="italic" style={{ color: "#c9a227" }}>Orlando</span>
                <br />
                <span className="gradient-text-pink">
                  Como Quem Já Sabe Todos os Segredos
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#2D2D2D]/70 leading-relaxed font-light max-w-lg">
                O guia definitivo da <strong className="text-pink-600 font-semibold">Imagine Aonde</strong> com roteiros, Disney, outlets, restaurantes e dicas reais para economizar e aproveitar muito mais.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-shimmer relative font-bold text-lg h-14 px-8 rounded-full text-white shadow-xl flex items-center justify-center gap-2 animate-pulse-glow"
                style={{ background: "linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)" }}
                data-testid="button-cta-hero-primary"
              >
                ✈️ Quero Meu Guia Agora
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.9)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("conteudo")?.scrollIntoView({ behavior: "smooth" })}
                className="font-medium text-lg h-14 px-8 rounded-full text-purple-700 border border-purple-200 bg-white/60 backdrop-blur-sm transition-all"
                data-testid="button-cta-hero-secondary"
              >
                Ver o que tem dentro
              </motion.button>
            </div>

            {/* Social proof mini */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {["#f48fb1","#ce93d8","#81d4fa","#a5d6a7","#ffcc80"].map((c, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm" style={{ background: c }}>
                    <Star className="w-3.5 h-3.5 fill-white text-white" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-[#2D2D2D]/65 font-medium">+5.000 viajantes satisfeitos</p>
              </div>
            </div>
          </motion.div>

          {/* Right: eBook mockup — new castle cover */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center lg:justify-end"
            style={{ perspective: "1200px" }}
          >
            {/* Magical glow behind the book */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-50 animate-pulse"
              style={{
                background: "radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(236,72,153,0.35) 40%, rgba(59,130,246,0.2) 70%, transparent 90%)",
                animationDuration: "4s",
              }}
            />

            {/* Floating book */}
            <motion.div
              animate={{ y: [-14, 0, -14], rotateZ: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[300px] lg:max-w-[340px]"
            >
              <EbookCover timeLeft={timeLeft} />

              {/* Price badge — left side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                className="absolute -left-8 top-10 glass rounded-2xl p-4 shadow-2xl border border-green-100/80 hidden md:block"
                style={{ boxShadow: "0 12px 40px -8px rgba(76,175,80,0.15)" }}
              >
                <p className="text-[10px] text-gray-400 line-through">R$ 97,00</p>
                <p className="text-2xl font-bold text-pink-600">R$ 29,90</p>
                <p className="text-[10px] text-green-600 font-semibold mt-0.5">🏷 70% de desconto</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <p className="text-xs text-purple-400 font-medium tracking-widest uppercase">Rolar</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile countdown bar */}
      <div className="absolute bottom-0 left-0 right-0 glass border-t border-pink-200/60 p-3 md:hidden flex items-center justify-between z-20">
        <span className="font-medium text-sm text-pink-600 flex items-center gap-2">
          <Clock className="w-4 h-4" /> Oferta expira em:
        </span>
        <span className="font-bold font-mono tracking-wider text-purple-800">
          {fmt(timeLeft.hours)}:{fmt(timeLeft.minutes)}:{fmt(timeLeft.seconds)}
        </span>
      </div>
    </section>
  );
}
