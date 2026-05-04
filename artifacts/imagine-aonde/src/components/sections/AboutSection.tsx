import { motion } from "framer-motion";
import { Heart, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              {/* Main photo */}
              <div
                className="overflow-hidden rounded-3xl"
                style={{
                  width: "260px",
                  height: "320px",
                  boxShadow: "0 20px 50px rgba(168,85,247,0.15)",
                  border: "3px solid #EDE9FE",
                }}
              >
                <img
                  src="/photos/castle-autor.jpg"
                  alt="Autora em frente ao castelo da Disney"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Location badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-lg border border-pink-100 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-500" />
                <div>
                  <p className="text-xs font-bold text-gray-800">Orlando, EUA</p>
                  <p className="text-[10px] text-gray-400">já visitei várias vezes ✈️</p>
                </div>
              </div>

              {/* Heart badge */}
              <div
                className="absolute -top-4 -left-4 w-11 h-11 rounded-full flex items-center justify-center shadow-md"
                style={{ background: "linear-gradient(135deg, #FCE7F3, #EDE9FE)" }}
              >
                <Heart className="w-5 h-5 fill-pink-400 text-pink-400" />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div>
              <span className="text-sm font-semibold text-pink-500 tracking-widest uppercase">Quem sou eu</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold leading-tight" style={{ color: "#1F1F1F" }}>
                Olá, eu sou{" "}
                <span
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "2.2rem",
                    background: "linear-gradient(135deg, #EC4899 0%, #A855F7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Karen
                </span>{" "}
                👋
              </h2>
            </div>

            <p className="text-gray-500 leading-relaxed">
              {/* ✏️ Substitua este texto pela sua história */}
            Apaixonada por viagens e pelo universo Disney, encontrei em Orlando um lugar onde a magia realmente ganha vida e cada detalhe faz parte de uma experiência inesquecível.🏰✨

Depois de muito planejamento, pesquisas e experiências vividas na prática, reuni neste guia tudo o que aprendi para ajudar outras pessoas a realizarem esse sonho de forma mais leve, organizada e sem complicação ✈️
            </p>
            <p className="text-gray-500 leading-relaxed">
              {/* ✏️ Continue aqui */}
              Aqui você vai encontrar dicas práticas, informações úteis e estratégias que fazem diferença de verdade na viagem, para aproveitar melhor seu tempo, economizar e viver Orlando da forma mais mágica possível 💫

Porque eu acredito que, com planejamento e informação, sonhos podem sim sair do papel e virar memórias para a vida toda! 
            </p>

            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { emoji: "✈️", label: "Várias viagens a Orlando" },
                { emoji: "📖", label: "Guia sempre atualizado" },
                { emoji: "💬", label: "Suporte exclusivo" },
                { emoji: "🏰", label: "Disney, Universal e mais" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 border border-gray-100"
                  style={{ background: "#FAFAFA" }}
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-purple-300 italic mt-1">
             
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
