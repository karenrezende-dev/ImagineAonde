import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    // Client-side countdown reset daily
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

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0a0f1e] pt-20 pb-16 lg:pt-0">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Orlando Castle at Night" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-transparent to-[#0a0f1e]/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8 text-white max-w-xl"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 w-fit"
              >
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-medium tracking-wide text-white/90">O Guia #1 para Brasileiros</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-[1.1] tracking-tight">
                Descubra Orlando <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#fbbf24] to-accent">Como Quem Já Foi Muitas Vezes</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-lg">
                O guia definitivo da Imagine Aonde com dicas reais de Disney, outlets, restaurantes e roteiros para você economizar tempo e dinheiro.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold text-lg h-14 px-8 rounded-full shadow-[0_0_40px_-10px_rgba(217,119,6,0.5)] transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Quero Meu Guia Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white font-medium text-lg h-14 px-8 rounded-full backdrop-blur-sm"
                  onClick={() => document.getElementById("conteudo")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver o Que Tem Dentro
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-white/70">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0f1e] bg-secondary flex items-center justify-center text-[10px] font-bold">
                      {i === 5 ? "5k+" : <Star className="w-3 h-3 fill-white" />}
                    </div>
                  ))}
                </div>
                <span>Mais de 5.000 viajantes satisfeitos</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[3/4] w-full max-w-[380px] mx-auto z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-primary/30 rounded-3xl blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
              <img 
                src="/ebook-mockup.png" 
                alt="Guia Completo de Orlando" 
                className="w-full h-full object-contain filter drop-shadow-2xl animate-in fade-in zoom-in duration-1000"
              />
              
              {/* Urgency Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -right-6 -bottom-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 hidden md:block"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 uppercase">Oferta Expira Em</p>
                    <p className="text-xs text-gray-500">Preço promocional</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 text-xl font-bold font-mono text-gray-900">
                  <div className="bg-gray-100 rounded px-2 py-1">{formatTime(timeLeft.hours)}</div>
                  <span className="text-gray-400">:</span>
                  <div className="bg-gray-100 rounded px-2 py-1">{formatTime(timeLeft.minutes)}</div>
                  <span className="text-gray-400">:</span>
                  <div className="bg-red-50 text-red-600 rounded px-2 py-1">{formatTime(timeLeft.seconds)}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Mobile urgency bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-md border-t border-white/10 p-3 md:hidden flex justify-between items-center z-20">
        <span className="text-white font-medium text-sm flex items-center"><Clock className="w-4 h-4 mr-2" /> Expira em:</span>
        <span className="text-white font-bold font-mono tracking-wider">{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
      </div>
    </section>
  );
}