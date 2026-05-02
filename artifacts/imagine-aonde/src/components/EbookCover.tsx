import { motion } from "framer-motion";

const LETTERS = ["O","R","L","A","N","D","O"];
const COLORS  = ["#EC4899","#A855F7","#60A5FA","#EC4899","#A855F7","#60A5FA","#EC4899"];

export function EbookCover() {
  return (
    <div
      className="w-full rounded-3xl overflow-hidden flex flex-col select-none"
      style={{
        aspectRatio: "3/4",
        background: "linear-gradient(160deg, #ffffff 0%, #FDF4FF 40%, #FFF0F8 100%)",
        border: "1.5px solid #EDE9FE",
        boxShadow: "0 32px 80px -16px rgba(168,85,247,0.22), 0 8px 24px rgba(236,72,153,0.1)",
      }}
    >
      {/* Top band */}
      <div
        className="shrink-0 py-2.5 flex items-center justify-center"
        style={{ background: "linear-gradient(90deg, #F9A8D4, #C084FC, #93C5FD)" }}
      >
        <span className="text-white text-[8.5px] font-bold tracking-[0.45em] uppercase drop-shadow-sm">
          ✦ IMAGINE AONDE ✦
        </span>
      </div>

      {/* Castle illustration area */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden px-4">
        {/* Soft background circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #DDD6FE, transparent)" }} />
        </div>

        {/* Simple castle SVG */}
        <svg viewBox="0 0 200 150" className="w-full max-w-[180px] relative z-10" style={{ filter: "drop-shadow(0 4px 12px rgba(168,85,247,0.15))" }}>
          {/* Sky */}
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EDE9FE" />
              <stop offset="100%" stopColor="#FDF4FF" />
            </linearGradient>
            <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5F3FF" />
              <stop offset="100%" stopColor="#EDE9FE" />
            </linearGradient>
            <linearGradient id="spire" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="spire2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          <rect width="200" height="150" fill="url(#sky)" rx="4" />

          {/* Stars */}
          {[[20,15],[50,8],[80,18],[120,10],[155,14],[175,8],[190,20],[30,30],[70,25],[140,22],[165,30]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r={i%3===0?1.2:0.8} fill={i%2===0?"#C084FC":"#93C5FD"} opacity="0.7" />
          ))}

          {/* Outer small towers */}
          <rect x="28" y="88" width="16" height="52" fill="url(#wall)" />
          <polygon points="28,88 36,72 44,88" fill="url(#spire2)" />
          <rect x="30" y="94" width="5" height="7" fill="#C4B5FD" opacity="0.5" rx="0.5" />

          <rect x="156" y="88" width="16" height="52" fill="url(#wall)" />
          <polygon points="156,88 164,72 172,88" fill="url(#spire2)" />
          <rect x="158" y="94" width="5" height="7" fill="#C4B5FD" opacity="0.5" rx="0.5" />

          {/* Side towers */}
          <rect x="46" y="76" width="22" height="64" fill="url(#wall)" />
          <polygon points="46,76 57,58 68,76" fill="url(#spire)" />
          <rect x="49" y="82" width="6" height="9" fill="#A78BFA" opacity="0.4" rx="1" />
          <rect x="58" y="82" width="6" height="9" fill="#A78BFA" opacity="0.4" rx="1" />
          {[45,52,59,66].map((x,i)=><rect key={i} x={x} y="72" width="5" height="6" fill="#F5F3FF" />)}
          <line x1="57" y1="58" x2="57" y2="52" stroke="#DDD6FE" strokeWidth="1" />
          <polygon points="57,52 64,55 57,58" fill="#EC4899" />

          <rect x="132" y="76" width="22" height="64" fill="url(#wall)" />
          <polygon points="132,76 143,58 154,76" fill="url(#spire)" />
          <rect x="135" y="82" width="6" height="9" fill="#A78BFA" opacity="0.4" rx="1" />
          <rect x="144" y="82" width="6" height="9" fill="#A78BFA" opacity="0.4" rx="1" />
          {[131,138,145,152].map((x,i)=><rect key={i} x={x} y="72" width="5" height="6" fill="#F5F3FF" />)}
          <line x1="143" y1="58" x2="143" y2="52" stroke="#DDD6FE" strokeWidth="1" />
          <polygon points="143,52 150,55 143,58" fill="#EC4899" />

          {/* Main body */}
          <rect x="68" y="96" width="64" height="44" fill="url(#wall)" />
          {[67,75,83,91,99,107,115,123,131].map((x,i)=><rect key={i} x={x} y="91" width="6" height="7" fill="#F5F3FF" />)}
          <rect x="86" y="110" width="28" height="30" fill="#A78BFA" opacity="0.25" />
          <ellipse cx="100" cy="110" rx="14" ry="8" fill="#A78BFA" opacity="0.25" />
          <rect x="91" y="104" width="8" height="11" fill="#A78BFA" opacity="0.3" rx="1" />
          <rect x="101" y="104" width="8" height="11" fill="#A78BFA" opacity="0.3" rx="1" />

          {/* Center main tower */}
          <rect x="80" y="64" width="40" height="76" fill="url(#wall)" />
          <polygon points="78,64 100,22 122,64" fill="url(#spire)" />
          <line x1="100" y1="22" x2="93" y2="64" stroke="#7C3AED" strokeWidth="0.4" opacity="0.4"/>
          <line x1="100" y1="22" x2="107" y2="64" stroke="#7C3AED" strokeWidth="0.4" opacity="0.4"/>
          <rect x="91" y="74" width="8" height="12" fill="#A78BFA" opacity="0.35" rx="1" />
          <rect x="101" y="74" width="8" height="12" fill="#A78BFA" opacity="0.35" rx="1" />
          <rect x="91" y="92" width="8" height="12" fill="#A78BFA" opacity="0.3" rx="1" />
          <rect x="101" y="92" width="8" height="12" fill="#A78BFA" opacity="0.3" rx="1" />
          {[79,87,95,103,111,119].map((x,i)=><rect key={i} x={x} y="59" width="6" height="7" fill="#F5F3FF" />)}
          <line x1="100" y1="22" x2="100" y2="15" stroke="#DDD6FE" strokeWidth="1.5" />
          <polygon points="100,15 109,19 100,23" fill="#F472B6" />
          <circle cx="100" cy="22" r="3" fill="#FEF9C3" opacity="0.9" />

          {/* Ground */}
          <ellipse cx="100" cy="142" rx="90" ry="10" fill="#E9D5FF" opacity="0.5" />
          <ellipse cx="40" cy="138" rx="18" ry="10" fill="#BBF7D0" opacity="0.6" />
          <ellipse cx="160" cy="138" rx="18" ry="10" fill="#BBF7D0" opacity="0.6" />

          {/* Sparkles */}
          {[[57,58,"#F472B6"],[143,58,"#93C5FD"],[100,22,"#FEF9C3"]].map(([x,y,c],i)=>(
            <g key={i}>
              <line x1={+x-4} y1={+y} x2={+x+4} y2={+y} stroke={c as string} strokeWidth="1.2" opacity="0.9" />
              <line x1={+x} y1={+y-4} x2={+x} y2={+y+4} stroke={c as string} strokeWidth="1.2" opacity="0.9" />
            </g>
          ))}
        </svg>
      </div>

      {/* Text content */}
      <div className="shrink-0 flex flex-col items-center text-center px-4 pb-3 gap-1.5">
        <p className="text-[8px] font-semibold tracking-[0.3em] uppercase" style={{ color: "#A855F7" }}>
          Guia Completo de
        </p>

        <div className="flex items-center justify-center">
          {LETTERS.map((l, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
              className="font-serif font-bold leading-none inline-block"
              style={{ fontSize: "clamp(1.8rem, 8vw, 3rem)", color: COLORS[i], textShadow: `0 2px 8px ${COLORS[i]}44` }}
            >
              {l}
            </motion.span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 w-full justify-center">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #F9A8D4)" }} />
          <span style={{ color: "#C084FC", fontSize: 9 }}>✦</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #93C5FD)" }} />
        </div>

        <div className="flex gap-1.5 flex-wrap justify-center">
          {[["Disney","#EC4899"],["Universal","#A855F7"],["SeaWorld","#60A5FA"],["Orlando","#34D399"]].map(([t,c],i)=>(
            <span key={i} className="text-[7px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${c}18`, border: `1px solid ${c}55`, color: c as string }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom band */}
      <div className="shrink-0 py-2 flex items-center justify-center"
        style={{ background: "linear-gradient(90deg, #EC4899, #A855F7, #60A5FA)" }}>
        <p className="text-[8px] font-bold tracking-[0.3em] uppercase text-white opacity-95">
          ✨ Sua viagem mágica começa aqui ✨
        </p>
      </div>
    </div>
  );
}
