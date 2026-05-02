import { motion } from "framer-motion";
import { Camera, Plus } from "lucide-react";

const slots = [
  { label: "Disney — Magic Kingdom", aspect: "square" },
  { label: "Universal — Harry Potter", aspect: "tall" },
  { label: "SeaWorld — com golfinhos", aspect: "square" },
  { label: "Orlando — International Drive", aspect: "square" },
  { label: "EPCOT — Mundo", aspect: "tall" },
  { label: "Disney Springs — compras", aspect: "square" },
];

export function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-pink-500 tracking-widest uppercase">Minhas fotos</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1F1F1F" }}>
            Momentos que eu vivi lá
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Substitua estes espaços pelas suas fotos favoritas de Orlando — torne este guia ainda mais seu!
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {slots.map((slot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className={`photo-slot cursor-pointer ${slot.aspect === "tall" ? "row-span-2" : ""}`}
              style={{
                minHeight: slot.aspect === "tall" ? "320px" : "152px",
              }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
                style={{ background: "rgba(167,139,250,0.15)" }}>
                <Camera className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-xs font-semibold text-purple-500 text-center px-3">{slot.label}</p>
              <div className="flex items-center gap-1 text-purple-300 mt-1">
                <Plus className="w-3 h-3" />
                <span className="text-[10px]">Adicionar foto</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          💡 Dica: adicione suas próprias fotos aqui para personalizar seu guia
        </p>
      </div>
    </section>
  );
}
