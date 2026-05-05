import { motion } from "framer-motion";
import { Ticket, ShoppingBag, Car, Sparkles, Star } from "lucide-react";

const guideSections = [
  {
    id: "parques",
    icon: Ticket,
    title: "Parques",
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    items: [
      "Todas as atrações com vídeos e restrições",
      "Onde encontrar os personagens",
      "Estratégias para o dia do parque",
      "Melhores restaurantes nos parques"
    ]
  },
  {
    id: "compras",
    icon: ShoppingBag,
    title: "Compras",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    items: [
      "Guia completo de outlets",
      "Todas as lojas que você precisa conhecer",
      "Farmácias e mercados",
      "Dicas de economia"
    ]
  },
  {
    id: "transporte",
    icon: Car,
    title: "Transporte",
    color: "text-teal-500",
    bgColor: "bg-teal-50",
    items: [
      "Quando alugar carro compensa",
      "Alternativas de transporte",
      "Dicas de estacionamento",
      "Uber e custos"
    ]
  },
  {
    id: "dicas",
    icon: Sparkles,
    title: "Dicas extras",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
    items: [
      "Ver fogos de graça",
      "Lugares que poucos conhecem",
      "Montar roteiro perfeito",
      "Calendário de lotação"
    ]
  }
];

export function WhatsInsideSection() {
  return (
    <section
      id="conteudo"
      className="py-16 relative overflow-hidden scroll-mt-[70px]"
      style={{ background: "linear-gradient(180deg, #faf5ff 0%, #f5f3ff 50%, #f0f9ff 100%)" }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-pink-500 mb-2">📖 O Guia</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            O que você encontra
          </h2>
        </motion.div>

        {/* Sections with brief explanations */}
        <div className="max-w-4xl mx-auto space-y-6">
          {guideSections.map((section, index) => {
            const Icon = section.icon;
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${section.bgColor} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${section.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
                </div>
                
                <ul className="grid md:grid-cols-2 gap-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <Star className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}