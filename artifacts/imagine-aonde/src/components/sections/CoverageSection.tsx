import { motion } from "framer-motion";

const parks = [
  {
    emoji: "🏰",
    name: "Disney World",
    color: "#EC4899",
    bg: "#FFF0F8",
    border: "#FBCFE8",
    items: ["Magic Kingdom", "EPCOT", "Hollywood Studios", "Animal Kingdom", "Disney Springs", "Resorts e hotéis", "FastPass e filas", "Melhores restaurantes"],
  },
  {
    emoji: "🎬",
    name: "Universal Orlando",
    color: "#A855F7",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    items: ["Islands of Adventure", "Universal Studios", "Wizarding World of Harry Potter", "Epic Universe", "CityWalk", "Shows e atrações", "Ingressos e combos", "Melhores épocas"],
  },
  {
    emoji: "🐬",
    name: "SeaWorld",
    color: "#60A5FA",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    items: ["Manta e Kraken", "Shows de animais", "Aquática waterpark", "Discovery Cove", "Busch Gardens Tampa", "Ingressos com desconto", "Dicas exclusivas", "Melhor roteiro"],
  },
  {
    emoji: "🌴",
    name: "Orlando City",
    color: "#34D399",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    items: ["International Drive", "Premium Outlets", "Restaurantes imperdíveis", "Supermercados e compras", "Transporte e Uber", "Farmácias e emergências", "Passeios alternativos", "Dicas de economia"],
  },
];

export function CoverageSection() {
  return (
    <section id="conteudo" className="py-20 section-soft scroll-mt-[70px]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-purple-500 tracking-widest uppercase">O que está incluído</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1F1F1F" }}>
            Tudo que você precisa saber
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Orlando, Disney, Universal e SeaWorld — cobertos em detalhes, com dicas reais de quem já foi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {parks.map((park, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl p-5 flex flex-col gap-4"
              style={{ background: park.bg, border: `1.5px solid ${park.border}` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${park.color}15`, border: `1.5px solid ${park.color}30` }}>
                  {park.emoji}
                </div>
                <h3 className="font-bold text-base" style={{ color: park.color }}>{park.name}</h3>
              </div>
              <ul className="space-y-1.5">
                {park.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: park.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
