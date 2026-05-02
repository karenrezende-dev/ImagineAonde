import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function SocialProofSection() {
  const testimonials = [
    {
      text: "Economizei muito na minha viagem! As dicas de outlet e os cupons que encontrei no guia pagaram o valor do e-book umas 50 vezes.",
      author: "Mariana S.",
      role: "Viajou em Jan/2024"
    },
    {
      text: "Melhor compra que fiz antes de viajar. Fui com meu marido e dois filhos pequenos e o roteiro pronto salvou nossa sanidade nos parques.",
      author: "Carlos E.",
      role: "Viajou em Nov/2023"
    },
    {
      text: "Me salvou nos outlets, vale cada centavo! Achei que sabia comprar nos EUA mas as dicas de cupons são surreais.",
      author: "Amanda T.",
      role: "Viajou em Mar/2024"
    },
    {
      text: "A Disney ficou muito mais fácil com o guia. Entendi como funcionam as filas virtuais e conseguimos ir em todas as atrações principais.",
      author: "Juliana M.",
      role: "Primeira viagem"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0f1e] text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop')] opacity-10 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/80 to-[#0a0f1e]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-serif mb-4"
          >
            Quem comprou, recomenda
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70"
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
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6 font-light italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}