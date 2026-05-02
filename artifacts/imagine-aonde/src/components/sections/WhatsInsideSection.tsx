import { motion } from "framer-motion";
import { Ticket, Utensils, ShoppingBag, MapIcon, Car, Calendar, Smartphone, Lightbulb, Moon } from "lucide-react";

export function WhatsInsideSection() {
  const features = [
    { icon: Ticket, title: "Melhores parques Disney", desc: "Estratégias exclusivas para enfrentar filas menores e aproveitar mais." },
    { icon: Utensils, title: "Onde comer barato", desc: "Restaurantes imperdíveis e opções econômicas que os guias não contam." },
    { icon: ShoppingBag, title: "Outlets que valem a pena", desc: "Onde encontrar os melhores descontos e cupons escondidos." },
    { icon: MapIcon, title: "Compras inteligentes", desc: "Lista do que realmente vale a pena comprar e o que levar na mala." },
    { icon: Car, title: "Transporte fácil", desc: "Como se locomover em Orlando sem dor de cabeça (com ou sem carro)." },
    { icon: Calendar, title: "Roteiros Prontos", desc: "Planejamento passo a passo para 5, 7 e 10 dias de viagem." },
    { icon: Smartphone, title: "Apps úteis", desc: "Os aplicativos que vão salvar sua viagem e ajudar a economizar em dólar." },
    { icon: Lightbulb, title: "Dicas secretas", desc: "Macacos de quem conhece Orlando como a palma da mão." },
    { icon: Moon, title: "O que fazer à noite", desc: "As melhores opções de entretenimento fora dos parques." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="conteudo" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4"
          >
            O que você vai encontrar no guia
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Um material direto ao ponto, sem enrolação, feito para ser lido rápido e consultado durante a viagem.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-start text-left group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}