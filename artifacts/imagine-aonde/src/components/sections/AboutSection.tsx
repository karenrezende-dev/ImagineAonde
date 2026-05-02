import { motion } from "framer-motion";
import { Heart, MapPin, Camera } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
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
              {/* Main photo slot */}
              <div
                className="photo-slot rounded-3xl flex flex-col items-center justify-center text-center gap-3"
                style={{ width: "260px", height: "320px" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(196,181,253,0.2)" }}
                >
                  <Camera className="w-7 h-7" style={{ color: "#A78BFA" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#A855F7" }}>Sua foto aqui</p>
                  <p className="text-xs text-purple-300 px-6 mt-1">Substitua por uma foto sua em Orlando 🏰</p>
                </div>
              </div>

              {/* Location badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-lg border border-pink-100 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-500" />
                <div>
                  <p className="text-xs font-bold text-gray-800">Orlando, EUA</p>
                  <p className="text-[10px] text-gray-400">já visitei mais de 5x ✈️</p>
                </div>
              </div>

              {/* Heart badge */}
              <div className="absolute -top-4 -left-4 w-11 h-11 rounded-full flex items-center justify-center shadow-md"
                style={{ background: "linear-gradient(135deg, #FCE7F3, #EDE9FE)" }}>
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
                <span className="gradient-text-pink italic">seu nome aqui</span> 👋
              </h2>
            </div>

            <p className="text-gray-500 leading-relaxed">
              {/* ✏️ Substitua este texto pela sua história */}
              Escreva aqui sobre você — como surgiu seu amor por Orlando, quantas vezes foi, o que te levou a criar este guia. Seja autêntica e conecte-se com quem vai ler!
            </p>

            <p className="text-gray-500 leading-relaxed">
              {/* ✏️ Continue sua história aqui */}
              Adicione mais um parágrafo contando sua missão: ajudar brasileiras a viver a melhor viagem possível a Orlando, sem desperdício de tempo ou dinheiro.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { emoji: "✈️", label: "+5 viagens a Orlando" },
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

            {/* Edit hint */}
            <p className="text-xs text-purple-300 italic mt-1">
              ✏️ Personalize este bloco com seu nome, história e número de viagens
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
