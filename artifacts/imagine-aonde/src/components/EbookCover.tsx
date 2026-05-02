import { motion } from "framer-motion";

const parks = [
  { label: "Disney", color: "#EC4899" },
  { label: "Universal", color: "#A855F7" },
  { label: "SeaWorld", color: "#60A5FA" },
  { label: "Orlando", color: "#34D399" },
];

export function EbookCover() {
  return (
    <div
      className="w-full rounded-3xl overflow-hidden flex flex-col select-none"
      style={{
        aspectRatio: "3/4",
        background: "#ffffff",
        border: "1px solid #E9D5FF",
        boxShadow: "0 24px 60px -12px rgba(168,85,247,0.18), 0 8px 20px rgba(236,72,153,0.08)",
      }}
    >
      {/* Header strip */}
      <div
        className="shrink-0 flex items-center justify-center py-2"
        style={{ background: "linear-gradient(90deg, #F9A8D4, #C084FC, #93C5FD)" }}
      >
        <span className="text-white text-[8px] font-bold tracking-[0.5em] uppercase drop-shadow-sm">
          ✦ IMAGINE AONDE ✦
        </span>
      </div>

      {/* Real Magic Kingdom photo */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src="/magic-kingdom.jpg"
          alt="Magic Kingdom - Disney World Orlando"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft gradient overlay so the text below reads cleanly */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
          style={{ background: "linear-gradient(0deg, #ffffff 0%, transparent 100%)" }}
        />
      </div>

      {/* Content section */}
      <div className="shrink-0 flex flex-col items-center text-center px-5 pt-3 pb-2 gap-2 bg-white">
        <p className="text-[8.5px] font-bold tracking-[0.35em] uppercase" style={{ color: "#A855F7" }}>
          Guia Completo de
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif font-bold leading-none"
          style={{
            fontSize: "clamp(2.2rem, 10vw, 3.2rem)",
            background: "linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #60A5FA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.01em",
          }}
        >
          ORLANDO
        </motion.h2>

        {/* Divider */}
        <div className="flex items-center gap-2 w-full justify-center">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #F9A8D4)" }} />
          <span className="text-[8px]" style={{ color: "#C084FC" }}>✦</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #93C5FD)" }} />
        </div>

        {/* Park tags */}
        <div className="flex gap-1 flex-wrap justify-center">
          {parks.map((p, i) => (
            <span
              key={i}
              className="text-[7px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${p.color}12`, border: `1px solid ${p.color}40`, color: p.color }}
            >
              {p.label}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom band */}
      <div
        className="shrink-0 py-2 flex items-center justify-center"
        style={{ background: "linear-gradient(90deg, #EC4899, #A855F7, #60A5FA)" }}
      >
        <p className="text-white text-[7.5px] font-bold tracking-[0.3em] uppercase opacity-95">
          ✨ Sua viagem mágica começa aqui ✨
        </p>
      </div>
    </div>
  );
}
