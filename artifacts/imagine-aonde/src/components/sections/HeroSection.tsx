import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, Sparkles } from "lucide-react";

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
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-16 lg:pt-0"
      style={{ background: "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 25%, #e3f2fd 55%, #e8f5e9 100%)" }}
    >
      {/* Background Image — light overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Castelo Disney"
          className="w-full h-full object-cover object-top opacity-15"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(252,228,236,0.75) 0%, rgba(243,229,245,0.65) 30%, rgba(227,242,253,0.60) 65%, rgba(232,245,233,0.70) 100%)" }} />
      </div>

      {/* Floating sparkle blobs */}
      <div className="absolute top-20 left-10 w-56 h-56 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, #f48fb1, #ce93d8)" }} />
      <div className="absolute bottom-24 right-16 w-72 h-72 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: "radial-gradient(circle, #81d4fa, #a5d6a7)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #ce93d8, #90caf9)" }} />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8 max-w-xl"
          >
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-purple-200 rounded-full px-4 py-1.5 w-fit shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-pink-500 fill-pink-200" />
                <span className="text-sm font-semibold text-purple-700 tracking-wide">O Guia #1 para Brasileiros</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-[1.1] tracking-tight text-purple-950">
                Descubra Orlando{" "}
                <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #9c27b0, #e91e63, #29b6f6)" }}>
                  Como Quem Já Foi Muitas Vezes
                </span>
              </h1>

              <p className="text-lg md:text-xl text-purple-800/80 leading-relaxed font-light max-w-lg">
                O guia definitivo da Imagine Aonde com dicas reais de Disney, outlets, restaurantes e roteiros para você economizar tempo e dinheiro.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="font-semibold text-lg h-14 px-8 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ background: "linear-gradient(135deg, #e91e63, #9c27b0)", boxShadow: "0 8px 32px -8px rgba(233,30,99,0.45)" }}
                  onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
                  data-testid="button-cta-hero-primary"
                >
                  Quero Meu Guia Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/60 border-purple-300 text-purple-700 hover:bg-white/80 hover:text-purple-800 font-medium text-lg h-14 px-8 rounded-full backdrop-blur-sm"
                  onClick={() => document.getElementById("conteudo")?.scrollIntoView({ behavior: "smooth" })}
                  data-testid="button-cta-hero-secondary"
                >
                  Ver o Que Tem Dentro
                </Button>
              </div>

              <div className="flex items-center space-x-3 text-sm text-purple-700/80">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold" style={{ background: ["#f48fb1","#ce93d8","#81d4fa","#a5d6a7"][i-1] }}>
                      <Star className="w-3 h-3 fill-white text-white" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-400 flex items-center justify-center text-[9px] font-bold text-white">5k+</div>
                </div>
                <span className="font-medium">Mais de 5.000 viajantes satisfeitos</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[3/4] w-full max-w-[360px] mx-auto z-10">
              <div className="absolute inset-0 rounded-3xl blur-3xl -z-10 animate-pulse opacity-60" style={{ background: "linear-gradient(135deg, rgba(206,147,216,0.5), rgba(129,212,250,0.5))", animationDuration: "4s" }} />

              {/* eBook cover — white bg, gold & pink */}
              <div className="w-full h-full rounded-2xl flex flex-col items-center justify-between overflow-hidden filter drop-shadow-2xl"
                style={{ background: "#ffffff", border: "2px solid #f9e4b7", boxShadow: "0 32px 80px -12px rgba(180,120,60,0.25), 0 8px 32px -4px rgba(233,30,99,0.15)" }}
              >
                {/* Top gold band */}
                <div className="w-full py-3 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #c9a227, #f0c93a, #c9a227)" }}
                >
                  <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase drop-shadow">✦ Imagine Aonde ✦</span>
                </div>

                {/* Main content */}
                <div className="flex flex-col items-center justify-center flex-1 px-6 text-center gap-3">
                  <p className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#c9a227" }}>Guia Completo de</p>

                  <h2 className="font-bold leading-none" style={{ fontSize: "clamp(2.8rem,10vw,3.8rem)", background: "linear-gradient(135deg, #b8860b, #f0c93a, #b8860b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    ORLANDO
                  </h2>

                  {/* Decorative divider */}
                  <div className="flex items-center gap-2 w-full justify-center">
                    <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #c9a227)" }} />
                    <span style={{ color: "#e91e63" }}>✦</span>
                    <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #c9a227)" }} />
                  </div>

                  {/* Icons row */}
                  <div className="flex gap-4 text-2xl my-1">
                    <span>🏰</span><span>🛍️</span><span>🎢</span>
                  </div>

                  <p className="text-[10px] font-medium leading-snug max-w-[160px]" style={{ color: "#9c27b0" }}>
                    Disney · Outlets · Restaurantes · Roteiros
                  </p>
                </div>

                {/* Bottom pink band */}
                <div className="w-full py-3 flex flex-col items-center gap-0.5"
                  style={{ background: "linear-gradient(135deg, #e91e63, #f06292)" }}
                >
                  <span className="text-white text-[9px] font-bold tracking-[0.2em] uppercase opacity-90">Sua viagem mágica</span>
                  <span className="text-white text-[9px] font-bold tracking-[0.2em] uppercase opacity-90">começa aqui ✨</span>
                </div>
              </div>

              {/* Countdown badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -right-6 -bottom-4 bg-white rounded-2xl p-4 shadow-xl border border-pink-100 hidden md:block"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-pink-100 p-2 rounded-full">
                    <Clock className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-purple-900 uppercase tracking-wide">Oferta Expira Em</p>
                    <p className="text-xs text-purple-400">Preço promocional</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 text-xl font-bold font-mono text-purple-900">
                  <div className="bg-purple-50 rounded-lg px-2 py-1">{formatTime(timeLeft.hours)}</div>
                  <span className="text-pink-400">:</span>
                  <div className="bg-purple-50 rounded-lg px-2 py-1">{formatTime(timeLeft.minutes)}</div>
                  <span className="text-pink-400">:</span>
                  <div className="bg-pink-50 text-pink-600 rounded-lg px-2 py-1">{formatTime(timeLeft.seconds)}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Mobile urgency bar */}
      <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md border-t border-pink-200 p-3 md:hidden flex justify-between items-center z-20 bg-white/80">
        <span className="font-medium text-sm text-pink-600 flex items-center"><Clock className="w-4 h-4 mr-2" /> Expira em:</span>
        <span className="font-bold font-mono tracking-wider text-purple-800">{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
      </div>
    </section>
  );
}
