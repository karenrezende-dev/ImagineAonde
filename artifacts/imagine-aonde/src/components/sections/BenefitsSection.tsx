import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  { text: "Evite os erros de primeira viagem que custam caro", emoji: "🚫" },
  { text: "Economize centenas de dólares em ingressos e compras", emoji: "💵" },
  { text: "Aproveite mais tempo nos parques sem ficar horas em filas", emoji: "⏱️" },
  { text: "Saiba exatamente onde comprar barato com os melhores cupons", emoji: "🏷️" },
  { text: "Monte o roteiro perfeito adaptado para o seu grupo", emoji: "📋" },
  { text: "Viaje com segurança e confiança, sem imprevistos", emoji: "🛡️" },
];

const cards = [
  { emoji: "😌", title: "Menos estresse", desc: "Tudo planejado, nada improvvisado" },
  { emoji: "🎉", title: "Mais diversão", desc: "Aproveite cada momento ao máximo" },
  { emoji: "💸", title: "Mais economia", desc: "Gaste menos, aproveite mais" },
];

export function BenefitsSection() {
  return (
    <section className="py-28 bg-white overflow-hidden relative">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse at right top, rgba(248,215,218,0.6) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 pointer-events-none opacity-30"
        style={{ background: "radial-gradient(ellipse at left bottom, rgba(207,232,255,0.6) 0%, transparent 60%)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-pink-500 mb-3">Por que vale a pena</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] leading-tight mb-4">
            Viaje Mais Leve, Gaste Menos{" "}
            <span className="gradient-text-pink italic">e Aproveite Mais</span>
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 max-w-5xl mx-auto">
          {/* Image left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 shrink-0"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute -inset-4 rounded-[40px] blur-2xl opacity-30 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(206,147,216,0.5), rgba(129,212,250,0.5))" }} />
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2070&auto=format&fit=crop"
                alt="Sacolas de marcas famosas dos outlets de Orlando"
                className="rounded-3xl object-cover w-full h-full shadow-2xl relative z-10"
              />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl px-6 py-4 shadow-xl border border-green-100 z-20"
              >
                <p className="text-xs text-purple-500 font-semibold uppercase tracking-wider">Economia média</p>
                <p className="text-3xl font-serif font-bold text-pink-600">R$ 800+</p>
                <p className="text-xs text-purple-400">por viagem em família</p>
              </motion.div>

              {/* Floating mini card */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass rounded-2xl px-5 py-3 shadow-xl border border-pink-100 z-20"
              >
                <p className="text-xs text-pink-500 font-semibold">✅ Garantia 7 dias</p>
                <p className="text-xs text-purple-400">Risco zero</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Benefits list right */}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg text-[#2D2D2D]/60 font-light leading-relaxed"
            >
              Uma viagem para Orlando é um investimento alto. Nosso guia garante que você tire o máximo proveito de cada dólar gasto.
            </motion.p>

            <div className="space-y-3">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-pink-50/50 transition-colors duration-200 group"
                  data-testid={`benefit-item-${i}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-xl">{benefit.emoji}</span>
                    <p className="text-[#2D2D2D]/80 font-medium">{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mini benefit cards */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl mb-2">{card.emoji}</div>
                  <p className="font-bold text-[#2D2D2D] text-xs leading-tight">{card.title}</p>
                  <p className="text-[#2D2D2D]/45 text-[10px] mt-0.5">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
