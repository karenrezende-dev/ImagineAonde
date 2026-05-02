import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Evite erros de primeira viagem que custam caro",
  "Economize centenas de dólares em ingressos e compras",
  "Aproveite mais tempo nos parques sem ficar horas em filas",
  "Saiba exatamente onde comprar barato com os melhores cupons",
  "Monte o roteiro perfeito adaptado para o seu grupo",
  "Viaje com segurança e confiança, sem imprevistos",
];

const checkColors = [
  "bg-pink-100 text-pink-600",
  "bg-purple-100 text-purple-600",
  "bg-sky-100 text-sky-600",
  "bg-emerald-100 text-emerald-600",
  "bg-violet-100 text-violet-600",
  "bg-teal-100 text-teal-600",
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none" style={{ background: "linear-gradient(270deg, rgba(232,245,233,0.4) 0%, transparent 100%)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full blur-3xl transform -translate-x-6 translate-y-6 opacity-50" style={{ background: "linear-gradient(135deg, rgba(206,147,216,0.4), rgba(129,212,250,0.4))" }} />
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2070&auto=format&fit=crop"
                alt="Sacolas de marcas famosas dos outlets de Orlando"
                className="rounded-3xl object-cover w-full h-full shadow-2xl relative z-10"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-pink-100 z-20">
                <p className="text-xs text-purple-500 font-medium uppercase tracking-wider">Economia média</p>
                <p className="text-2xl font-bold text-pink-600">R$ 800+</p>
                <p className="text-xs text-purple-400">por viagem em família</p>
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-950 font-serif mb-4 leading-tight">
                Planeje melhor e{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #e91e63, #9c27b0)" }}>
                  gaste menos
                </span>
              </h2>
              <p className="text-lg text-purple-700/75 font-light">
                Uma viagem para Orlando é um investimento alto. O nosso guia garante que você tire o máximo de proveito de cada dólar gasto.
              </p>
            </motion.div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start space-x-4"
                  data-testid={`benefit-item-${index}`}
                >
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 ${checkColors[index]}`}>
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-purple-800 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
