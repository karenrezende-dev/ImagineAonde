import { motion } from "framer-motion";

const photos = [
  { src: "/photos/castle-autor.jpg",   label: "Magic Kingdom 🏰",           aspect: "tall" },
  { src: "/photos/universal-adventure.jpg", label: "Islands of Adventure 🎢", aspect: "square" },
  { src: "/photos/castle-couple.jpg",  label: "Disney — Cinderella Castle ✨", aspect: "square" },
  { src: "/photos/toy-story.jpg",      label: "Hollywood Studios — Toy Story 🎠", aspect: "tall" },
  { src: "/photos/volcano-bay.jpg",    label: "Volcano Bay 🌊",              aspect: "square" },
  { src: "/photos/goofy.jpg",          label: "Encontro com o Pateta 🐾",    aspect: "square" },
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
            Fotos reais das minhas viagens — Disney, Universal e muito mais!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                photo.aspect === "tall" ? "row-span-2" : ""
              }`}
              style={{ minHeight: photo.aspect === "tall" ? "340px" : "160px" }}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: "center top" }}
              />
              {/* Overlay on hover */}
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
              >
                <span className="text-white text-xs font-semibold drop-shadow">{photo.label}</span>
              </div>
              {/* Always-visible subtle label badge */}
              <div
                className="absolute bottom-2 left-2 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white"
                style={{ background: "rgba(0,0,0,0.38)", backdropFilter: "blur(4px)" }}
              >
                {photo.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
