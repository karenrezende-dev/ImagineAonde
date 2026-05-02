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

      {/* Photo area — scenic "window" */}
      <div
        className="relative flex-1 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #fce7f3 0%, #ede9fe 40%, #dbeafe 80%, #d1fae5 100%)",
        }}
      >
        {/* Sunset sky layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #fce7f3 0%, #ede9fe 35%, #dbeafe 65%, #e0f2fe 100%)" }} />

          {/* Abstract horizon / cityscape silhouette */}
          <svg viewBox="0 0 300 200" className="absolute bottom-0 w-full" preserveAspectRatio="xMidYMax meet">
            {/* Clouds */}
            <ellipse cx="60" cy="50" rx="30" ry="12" fill="white" opacity="0.6" />
            <ellipse cx="80" cy="45" rx="20" ry="10" fill="white" opacity="0.5" />
            <ellipse cx="220" cy="40" rx="25" ry="10" fill="white" opacity="0.55" />
            <ellipse cx="240" cy="36" rx="18" ry="9" fill="white" opacity="0.45" />
            <ellipse cx="150" cy="60" rx="22" ry="9" fill="white" opacity="0.4" />

            {/* Stars / sparkles */}
            {[[30,20],[100,15],[180,22],[250,18],[270,35],[15,40],[140,30]].map(([x,y],i)=>(
              <g key={i} opacity="0.7">
                <line x1={x-3} y1={y} x2={x+3} y2={y} stroke={i%2===0?"#F9A8D4":"#C4B5FD"} strokeWidth="1"/>
                <line x1={x} y1={y-3} x2={x} y2={y+3} stroke={i%2===0?"#F9A8D4":"#C4B5FD"} strokeWidth="1"/>
              </g>
            ))}

            {/* Ground / hills */}
            <ellipse cx="150" cy="200" rx="180" ry="30" fill="#E9D5FF" opacity="0.5" />
            <ellipse cx="50" cy="190" rx="60" ry="22" fill="#FBCFE8" opacity="0.45" />
            <ellipse cx="250" cy="192" rx="55" ry="20" fill="#BFDBFE" opacity="0.45" />

            {/* Silhouette palm trees */}
            <line x1="40" y1="200" x2="40" y2="140" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
            <ellipse cx="40" cy="140" rx="14" ry="10" fill="#C084FC" opacity="0.3"/>
            <ellipse cx="30" cy="148" rx="10" ry="6" fill="#C084FC" opacity="0.25" transform="rotate(-20,30,148)"/>
            <ellipse cx="50" cy="148" rx="10" ry="6" fill="#C084FC" opacity="0.25" transform="rotate(20,50,148)"/>

            <line x1="260" y1="200" x2="260" y2="145" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
            <ellipse cx="260" cy="145" rx="14" ry="10" fill="#93C5FD" opacity="0.3"/>
            <ellipse cx="250" cy="153" rx="10" ry="6" fill="#93C5FD" opacity="0.25" transform="rotate(-20,250,153)"/>
            <ellipse cx="270" cy="153" rx="10" ry="6" fill="#93C5FD" opacity="0.25" transform="rotate(20,270,153)"/>

            {/* Sparkle sun */}
            <circle cx="150" cy="90" r="16" fill="#FDE68A" opacity="0.35"/>
            <circle cx="150" cy="90" r="10" fill="#FEF3C7" opacity="0.6"/>
            {[0,45,90,135,180,225,270,315].map((a,i)=>{
              const r = a*Math.PI/180;
              return <line key={i} x1={150+Math.cos(r)*12} y1={90+Math.sin(r)*12} x2={150+Math.cos(r)*19} y2={90+Math.sin(r)*19} stroke="#FDE68A" strokeWidth="1.5" opacity="0.5"/>
            })}
          </svg>
        </div>

        {/* Overlay gradient fade to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
          style={{ background: "linear-gradient(0deg, #ffffff 0%, transparent 100%)" }} />

        {/* Center emoji icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl"
            style={{ filter: "drop-shadow(0 4px 12px rgba(168,85,247,0.2))" }}
          >
            🏰
          </motion.div>
        </div>
      </div>

      {/* Content section */}
      <div className="shrink-0 flex flex-col items-center text-center px-5 pt-3 pb-2 gap-2 bg-white">
        {/* Subtitle */}
        <p className="text-[8.5px] font-bold tracking-[0.35em] uppercase" style={{ color: "#A855F7" }}>
          Guia Completo de
        </p>

        {/* ORLANDO — elegant serif gradient */}
        <h2
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
        </h2>

        {/* Divider */}
        <div className="flex items-center gap-2 w-full justify-center">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #F9A8D4)" }} />
          <span className="text-[8px]" style={{ color: "#C084FC" }}>✦</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #93C5FD)" }} />
        </div>

        {/* Tags */}
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
