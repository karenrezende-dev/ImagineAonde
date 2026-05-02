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
                className="photo-slot w-64 h-80 rounded-3xl text-center"
                style={{ width: "260px", height: "320px" }}
              >
                <Camera className="w-10 h-10 opacity-50" />
                <p className="text-sm font-medium opacity-70 px-6">Adicione sua foto aqui</p>
                <p className="text-xs opacity-50 px-6">(substitua este espaço pela sua foto)</p>
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-lg border border-pink-100 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-500" />
                <div>
                  <p className="text-xs font-bold text-gray-800">Orlando, EUA</p>
                  <p className="text-[10px] text-gray-400">já visitei 8x ✈️</p>
                </div>
              </div>
              {/* Floating heart */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
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
                <span className="gradient-text-pink italic">sua nome aqui</span> 👋
              </h2>
            </div>

            <p className="text-gray-500 leading-relaxed">
              Sou apaixonada por viagens e já estive em Orlando mais de 8 vezes. Cada visita me ensinou algo novo — um restaurante escondido, um atalho nos parques, uma promoção que a maioria não conhece.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Criei este guia para compartilhar tudo o que aprendi ao longo dos anos, com informações atualizadas e dicas reais de quem vive e respira Orlando.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { emoji: "✈️", label: "+8 viagens a Orlando" },
                { emoji: "📖", label: "Guia sempre atualizado" },
                { emoji: "💬", label: "Suporte exclusivo" },
                { emoji: "🏰", label: "Disney, Universal e mais" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
                  <span className="text-lg">{item.emoji}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
