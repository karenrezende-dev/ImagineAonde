import { motion } from "framer-motion";

const features = [
  {
    emoji: "🏰",
    title: "Disney sem filas",
    desc: "Estratégias exclusivas para aproveitar mais e esperar menos. O caminho das pedras que só quem foi muitas vezes conhece.",
    color: "from-pink-400 to-rose-500",
    shadow: "hover:shadow-pink-100"
  },
  {
    emoji: "🎢",
    title: "Universal Studios",
    desc: "Roteiro completo dos parques, melhores atrações, dicas de Butterbeer e como otimizar seu tempo no Wizarding World.",
    color: "from-orange-400 to-amber-500",
    shadow: "hover:shadow-orange-100"
  },
  {
    emoji: "🛍️",
    title: "Melhores outlets",
    desc: "Onde encontrar os melhores descontos, cupons escondidos e lojas que valem cada dólar investido.",
    color: "from-purple-400 to-violet-500",
    shadow: "hover:shadow-purple-100"
  },
  {
    emoji: "🍽️",
    title: "Onde comer bem",
    desc: "Restaurantes imperdíveis, opções econômicas e os lugares que os guias tradicionais nunca contam.",
    color: "from-red-400 to-orange-400",
    shadow: "hover:shadow-red-100"
  },
  {
    emoji: "💰",
    title: "Cupons e economia",
    desc: "Lista completa de apps, sites e estratégias para economizar centenas de dólares em ingressos e compras.",
    color: "from-green-400 to-emerald-500",
    shadow: "hover:shadow-green-100"
  },
  {
    emoji: "📋",
    title: "Roteiros prontos",
    desc: "Planejamento passo a passo para 5, 7 e 10 dias — para famílias, casais e grupos de amigos.",
    color: "from-blue-400 to-indigo-500",
    shadow: "hover:shadow-blue-100"
  },
  {
    emoji: "🚗",
    title: "Transporte fácil",
    desc: "Como se locomover em Orlando sem dor de cabeça, com ou sem carro. Uber, shuttle e mais.",
    color: "from-teal-400 to-cyan-500",
    shadow: "hover:shadow-teal-100"
  },
  {
    emoji: "📱",
    title: "Apps úteis",
    desc: "Os aplicativos que vão salvar sua viagem e te ajudar a economizar na hora certa.",
    color: "from-fuchsia-400 to-pink-500",
    shadow: "hover:shadow-fuchsia-100"
  },
  {
    emoji: "🌙",
    title: "Lugares escondidos",
    desc: "Spots secretos, restaurantes fora dos parques e experiências que 99% dos turistas não conhecem.",
    color: "from-violet-400 to-purple-500",
    shadow: "hover:shadow-violet-100"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export function WhatsInsideSection() {
  return (
    <section
      id="conteudo"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #fdf2f8 0%, #faf5ff 40%, #f0f5ff 70%, #f0fff8 100%)" }}
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(180deg, white 0%, transparent 100%)" }} />

      {/* Background dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#9c27b0 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-pink-500 mb-3">O que você recebe</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] leading-tight mb-4">
            Tudo que você precisa para uma{" "}
            <span className="gradient-text-pink italic">viagem perfeita</span>
          </h2>
          <div className="section-divider mb-5"></div>
          <p className="text-lg text-[#2D2D2D]/65 leading-relaxed font-light">
            Um material direto ao ponto, sem enrolação, feito para ser lido rápido e consultado durante a viagem.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl ${f.shadow} transition-all duration-400 border border-white group relative overflow-hidden`}
              data-testid={`feature-card-${i}`}
            >
              {/* Gradient top strip on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400`} />

              <div className="flex flex-col gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-3xl shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {f.emoji}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2D2D2D] mb-2 group-hover:text-pink-700 transition-colors duration-200">{f.title}</h3>
                  <p className="text-[#2D2D2D]/55 leading-relaxed text-sm font-light">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-[#2D2D2D]/50 text-sm font-light mb-4">E muito mais dentro do guia...</p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-shimmer inline-flex items-center gap-2 font-bold text-base h-12 px-8 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(135deg, #e91e63, #9c27b0)" }}
          >
            ✈️ Quero o Guia Completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
