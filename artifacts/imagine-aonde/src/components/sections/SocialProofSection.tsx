import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Economizei muito na minha viagem! As dicas de outlet e os cupons que encontrei no guia pagaram o valor do e-book umas 50 vezes.",
    author: "Mariana S.",
    role: "Viajou em Jan/2024",
    color: "from-pink-400 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    text: "Melhor compra que fiz antes de viajar. Fui com meu marido e dois filhos pequenos e o roteiro pronto salvou nossa sanidade nos parques.",
    author: "Carlos E.",
    role: "Viajou em Nov/2023",
    color: "from-purple-400 to-violet-500",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    text: "Me salvou nos outlets, vale cada centavo! Achei que sabia comprar nos EUA mas as dicas de cupons são surreais.",
    author: "Amanda T.",
    role: "Viajou em Mar/2024",
    color: "from-sky-400 to-cyan-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    text: "A Disney ficou muito mais fácil com o guia. Entendi como funcionam as filas virtuais e conseguimos ir em todas as atrações principais.",
    author: "Juliana M.",
    role: "Primeira viagem",
    color: "from-teal-400 to-emerald-500",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f3e5f5 0%, #fce4ec 35%, #e3f2fd 70%, #e8f5e9 100%)" }}>
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #a5d6a7, #81d4fa, #ce93d8, #f48fb1)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-purple-950 font-serif mb-4"
          >
            Quem comprou, recomenda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-purple-700/80"
          >
            Junte-se a milhares de brasileiros que transformaram suas viagens.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${t.bg} border ${t.border} p-8 rounded-3xl relative shadow-sm hover:shadow-md transition-shadow`}
              data-testid={`testimonial-card-${idx}`}
            >
              <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-5 shadow`}>
                <Quote className="w-5 h-5 text-white" />
              </div>
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-purple-800 text-base leading-relaxed mb-6 font-light italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-purple-950">{t.author}</p>
                <p className="text-sm text-purple-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
