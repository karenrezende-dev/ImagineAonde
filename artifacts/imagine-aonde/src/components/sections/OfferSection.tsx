import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, CreditCard, CheckCircle2, Sparkles, Clock, Zap } from "lucide-react";

function Countdown() {
  const [t, setT] = useState({ hours: 23, minutes: 59, seconds: 59 });
  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
      const diff = end.getTime() - now.getTime();
      return {
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  const fmt = (n: number) => n.toString().padStart(2, "0");
  return (
    <div className="flex items-center justify-center gap-2">
      {[{ v: t.hours, l: "h" }, { v: t.minutes, l: "m" }, { v: t.seconds, l: "s" }].map(({ v, l }, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="flex flex-col items-center">
            <span className="bg-white/20 backdrop-blur-sm text-white font-bold font-mono text-2xl px-3 py-1 rounded-xl tabular-nums">
              {fmt(v)}
            </span>
            <span className="text-white/60 text-[10px] uppercase tracking-wider mt-0.5">{l}</span>
          </span>
          {i < 2 && <span className="text-white/70 font-bold text-xl mb-3">:</span>}
        </span>
      ))}
    </div>
  );
}

const includes = [
  "Guia Completo em PDF (200+ páginas)",
  "Acesso vitalício e sem mensalidades",
  "Atualizações gratuitas 2025",
  "Suporte via WhatsApp",
  "Roteiros prontos para 5, 7 e 10 dias",
  "Mapa interativo dos parques",
];

export function OfferSection() {
  return (
    <section
      id="comprar"
      className="py-28 relative scroll-mt-10 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f0f5ff 0%, #f9f0ff 50%, #fff0f5 100%)" }}
    >
      {/* Bg orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(233,30,99,0.4), rgba(156,39,176,0.3), transparent)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-pink-500 mb-3">Oferta especial</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] leading-tight mb-4">
            Comece sua{" "}
            <span className="gradient-text-pink italic">aventura hoje</span>
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto rounded-[32px] overflow-hidden"
          style={{ boxShadow: "0 40px 100px -20px rgba(233,30,99,0.2), 0 20px 40px -10px rgba(156,39,176,0.15)" }}
        >
          <div className="grid md:grid-cols-2">
            {/* Left — dark gradient */}
            <div
              className="p-10 md:p-12 flex flex-col justify-between relative overflow-hidden"
              style={{ background: "linear-gradient(145deg, #5e0078 0%, #ad1457 50%, #0d47a1 100%)" }}
            >
              {/* Bg pattern */}
              <div className="absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.2) 0%, transparent 100%)" }} />

              <div className="relative z-10 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-1.5 mb-4">
                    <Zap className="w-3.5 h-3.5 text-yellow-300 fill-yellow-200" />
                    <span className="text-sm font-semibold text-white/90">Acesso Imediato</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                    Sua viagem dos sonhos{" "}
                    <span className="italic text-yellow-200">começa aqui.</span>
                  </h3>
                </div>

                <ul className="space-y-3">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-300/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                      </div>
                      <span className="text-white/85 font-light text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Countdown */}
              <div className="relative z-10 mt-8 p-5 glass-dark rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-yellow-300" />
                  <p className="text-white/75 text-xs font-semibold uppercase tracking-wider">Oferta expira em</p>
                </div>
                <Countdown />
              </div>
            </div>

            {/* Right — price & CTA */}
            <div className="p-10 md:p-12 flex flex-col justify-center items-center text-center bg-white">
              <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="w-4 h-4 text-pink-500 fill-pink-200" />
                <span className="text-sm font-bold text-pink-600 uppercase tracking-wider">70% OFF — Hoje</span>
              </div>

              <div className="flex flex-col items-center mb-8">
                <span className="text-gray-400 line-through text-2xl font-medium mb-1">R$ 97,00</span>
                <div className="flex items-start text-pink-600 leading-none">
                  <span className="text-3xl font-bold mt-2 mr-0.5">R$</span>
                  <span className="text-8xl font-serif font-bold tracking-tighter">29</span>
                  <div className="flex flex-col items-start mt-2 ml-0.5">
                    <span className="text-3xl font-bold">,90</span>
                  </div>
                </div>
                <div className="mt-4 bg-green-50 border border-green-200 rounded-full px-5 py-2">
                  <span className="text-sm text-green-700 font-bold">🎉 Você economiza R$ 67,10</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 20px 60px -10px rgba(233,30,99,0.6)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open("https://pay.hotmart.com/example", "_blank")}
                className="btn-shimmer w-full max-w-sm font-bold text-xl h-16 rounded-2xl text-white transition-all animate-pulse-glow"
                style={{ background: "linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)" }}
                data-testid="button-buy-ebook"
              >
                QUERO AGORA ✈️
              </motion.button>

              <div className="mt-8 space-y-4 w-full max-w-sm">
                <div className="flex items-center justify-center gap-4 text-sm text-[#2D2D2D]/50">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-green-500" /> Pagamento Seguro
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span className="flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-purple-400" /> Pix, Cartão ou Boleto
                  </span>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl border border-purple-100 bg-purple-50">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-purple-900 text-sm">Garantia incondicional de 7 dias</p>
                    <p className="text-xs text-purple-500 mt-0.5">Se não gostar, devolvemos 100% do seu dinheiro. Risco zero.</p>
                  </div>
                </div>

                {/* Payment icons */}
                <div className="flex items-center justify-center gap-3 mt-2">
                  {["Pix", "Visa", "Master", "Boleto"].map((p) => (
                    <div key={p} className="px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
