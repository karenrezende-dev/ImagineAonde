import { motion } from "framer-motion";
import { Ticket, Utensils, ShoppingBag, MapIcon, Car, Calendar, Smartphone, Lightbulb, Moon } from "lucide-react";

const features = [
  { icon: Ticket, title: "Melhores parques Disney", desc: "Estratégias exclusivas para enfrentar filas menores e aproveitar mais.", color: "from-pink-400 to-rose-400", bg: "bg-pink-50", border: "border-pink-100" },
  { icon: Utensils, title: "Onde comer barato", desc: "Restaurantes imperdíveis e opções econômicas que os guias não contam.", color: "from-orange-400 to-amber-400", bg: "bg-orange-50", border: "border-orange-100" },
  { icon: ShoppingBag, title: "Outlets que valem a pena", desc: "Onde encontrar os melhores descontos e cupons escondidos.", color: "from-purple-400 to-violet-500", bg: "bg-purple-50", border: "border-purple-100" },
  { icon: MapIcon, title: "Compras inteligentes", desc: "Lista do que realmente vale a pena comprar e o que levar na mala.", color: "from-sky-400 to-cyan-400", bg: "bg-sky-50", border: "border-sky-100" },
  { icon: Car, title: "Transporte fácil", desc: "Como se locomover em Orlando sem dor de cabeça (com ou sem carro).", color: "from-teal-400 to-emerald-400", bg: "bg-teal-50", border: "border-teal-100" },
  { icon: Calendar, title: "Roteiros Prontos", desc: "Planejamento passo a passo para 5, 7 e 10 dias de viagem.", color: "from-indigo-400 to-blue-400", bg: "bg-indigo-50", border: "border-indigo-100" },
  { icon: Smartphone, title: "Apps úteis", desc: "Os aplicativos que vão salvar sua viagem e ajudar a economizar em dólar.", color: "from-fuchsia-400 to-pink-400", bg: "bg-fuchsia-50", border: "border-fuchsia-100" },
  { icon: Lightbulb, title: "Dicas secretas", desc: "Macacos de quem conhece Orlando como a palma da mão.", color: "from-yellow-400 to-amber-400", bg: "bg-yellow-50", border: "border-yellow-100" },
  { icon: Moon, title: "O que fazer à noite", desc: "As melhores opções de entretenimento fora dos parques.", color: "from-violet-400 to-purple-500", bg: "bg-violet-50", border: "border-violet-100" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function WhatsInsideSection() {
  return (
    <section id="conteudo" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #fdf2f8 0%, #faf5ff 50%, #f0f9ff 100%)" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-purple-950 font-serif mb-4"
          >
            O que você vai encontrar no guia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-purple-700/80"
          >
            Um material direto ao ponto, sem enrolação, feito para ser lido rápido e consultado durante a viagem.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border ${feature.border} flex flex-col items-start text-left group hover:-translate-y-1`}
              data-testid={`feature-card-${idx}`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-purple-950 mb-2">{feature.title}</h3>
              <p className="text-purple-600/80 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
