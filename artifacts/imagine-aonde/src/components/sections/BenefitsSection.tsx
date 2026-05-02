import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    "Evite erros de primeira viagem que custam caro",
    "Economize centenas de dólares em ingressos e compras",
    "Aproveite mais tempo nos parques sem ficar horas em filas",
    "Saiba exatamente onde comprar barato com os melhores cupons",
    "Monte o roteiro perfeito adaptado para o seu grupo",
    "Viaje com segurança e confiança, sem imprevistos"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
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
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform -translate-x-10 translate-y-10" />
              <img 
                src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop" 
                alt="Família feliz em viagem" 
                className="rounded-3xl object-cover w-full h-full shadow-2xl relative z-10"
              />
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-serif mb-4 leading-tight">
                Planeje melhor e <span className="text-primary">gaste menos</span>
              </h2>
              <p className="text-lg text-gray-600 font-light">
                Uma viagem para Orlando é um investimento alto. O nosso guia garante que você tire o máximo de proveito de cada dólar gasto.
              </p>
            </motion.div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}