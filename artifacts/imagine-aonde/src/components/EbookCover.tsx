import { motion } from "framer-motion";

const LETTER_COLORS = ["#F472B6", "#C084FC", "#60A5FA", "#F472B6", "#C084FC", "#60A5FA", "#F472B6"];
const ORLANDO = ["O", "R", "L", "A", "N", "D", "O"];

function Castle() {
  return (
    <svg
      viewBox="0 0 320 180"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ filter: "drop-shadow(0 8px 24px rgba(180,100,200,0.35))" }}
    >
      {/* Sky gradient */}
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0535" />
          <stop offset="40%" stopColor="#3b0764" />
          <stop offset="75%" stopColor="#6d28d9" />
          <stop offset="100%" stopColor="#be185d" />
        </linearGradient>
        <linearGradient id="castleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8e8ff" />
          <stop offset="50%" stopColor="#ede9fe" />
          <stop offset="100%" stopColor="#ddd6fe" />
        </linearGradient>
        <linearGradient id="castleShadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef9c3" stopOpacity="1" />
          <stop offset="60%" stopColor="#fde68a" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="groundGrad" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4c1d95" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Sky */}
      <rect width="320" height="180" fill="url(#skyGrad)" />

      {/* Stars */}
      {[
        [20, 12], [45, 8], [70, 18], [95, 6], [130, 14], [160, 9],
        [190, 16], [220, 7], [250, 13], [280, 10], [300, 20],
        [35, 30], [80, 25], [115, 35], [150, 28], [200, 32],
        [240, 22], [270, 35], [310, 28], [12, 40], [55, 45],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 1.2 : 0.8}
          fill={i % 4 === 0 ? "#fde68a" : "white"}
          opacity={0.7 + (i % 3) * 0.1}
        />
      ))}

      {/* Moon glow */}
      <circle cx="260" cy="28" r="22" fill="url(#moonGlow)" opacity="0.5" />
      <circle cx="260" cy="28" r="12" fill="#fef9c3" opacity="0.9" />
      <circle cx="265" cy="24" r="9" fill="#fde68a" opacity="0.4" />

      {/* Fireworks dots */}
      {[
        { cx: 40, cy: 50, c: "#f472b6" },
        { cx: 285, cy: 55, c: "#818cf8" },
        { cx: 155, cy: 40, c: "#34d399" },
      ].map((fw, i) => (
        <g key={i}>
          {[0,45,90,135,180,225,270,315].map((angle, j) => {
            const rad = (angle * Math.PI) / 180;
            const r = 8 + (j % 2) * 4;
            return (
              <circle
                key={j}
                cx={fw.cx + Math.cos(rad) * r}
                cy={fw.cy + Math.sin(rad) * r}
                r="1.2"
                fill={fw.c}
                opacity="0.8"
              />
            );
          })}
          <circle cx={fw.cx} cy={fw.cy} r="2" fill={fw.c} opacity="0.9" filter="url(#glow)" />
        </g>
      ))}

      {/* ——— CASTLE ——— */}

      {/* Far background towers */}
      <rect x="60" y="90" width="14" height="55" fill="#c4b5fd" opacity="0.5" />
      <polygon points="60,90 67,75 74,90" fill="#ddd6fe" opacity="0.5" />
      <rect x="246" y="88" width="14" height="57" fill="#c4b5fd" opacity="0.5" />
      <polygon points="246,88 253,73 260,88" fill="#ddd6fe" opacity="0.5" />

      {/* Side wings */}
      <rect x="82" y="105" width="32" height="40" fill="url(#castleShadow)" />
      <rect x="84" y="108" width="6" height="8" fill="#7c3aed" opacity="0.5" rx="1" />
      <rect x="94" y="108" width="6" height="8" fill="#7c3aed" opacity="0.5" rx="1" />
      <rect x="104" y="108" width="6" height="8" fill="#7c3aed" opacity="0.5" rx="1" />

      <rect x="206" y="105" width="32" height="40" fill="url(#castleShadow)" />
      <rect x="208" y="108" width="6" height="8" fill="#7c3aed" opacity="0.5" rx="1" />
      <rect x="218" y="108" width="6" height="8" fill="#7c3aed" opacity="0.5" rx="1" />
      <rect x="228" y="108" width="6" height="8" fill="#7c3aed" opacity="0.5" rx="1" />

      {/* Left side tower */}
      <rect x="88" y="80" width="22" height="65" fill="url(#castleGrad)" />
      <polygon points="88,80 99,58 110,80" fill="#f3e8ff" />
      <rect x="91" y="84" width="5" height="7" fill="#7c3aed" opacity="0.4" rx="1" />
      <rect x="102" y="84" width="5" height="7" fill="#7c3aed" opacity="0.4" rx="1" />
      {/* Battlements left */}
      <rect x="87" y="76" width="5" height="6" fill="#ede9fe" />
      <rect x="95" y="76" width="5" height="6" fill="#ede9fe" />
      <rect x="103" y="76" width="5" height="6" fill="#ede9fe" />
      <rect x="111" y="76" width="4" height="6" fill="#ede9fe" />

      {/* Right side tower */}
      <rect x="210" y="80" width="22" height="65" fill="url(#castleGrad)" />
      <polygon points="210,80 221,58 232,80" fill="#f3e8ff" />
      <rect x="213" y="84" width="5" height="7" fill="#7c3aed" opacity="0.4" rx="1" />
      <rect x="223" y="84" width="5" height="7" fill="#7c3aed" opacity="0.4" rx="1" />
      {/* Battlements right */}
      <rect x="209" y="76" width="5" height="6" fill="#ede9fe" />
      <rect x="217" y="76" width="5" height="6" fill="#ede9fe" />
      <rect x="225" y="76" width="5" height="6" fill="#ede9fe" />
      <rect x="233" y="76" width="4" height="6" fill="#ede9fe" />

      {/* Main body */}
      <rect x="114" y="95" width="92" height="50" fill="url(#castleGrad)" />
      {/* Main body windows */}
      <rect x="120" y="100" width="8" height="12" fill="#7c3aed" opacity="0.35" rx="1" />
      <rect x="136" y="100" width="8" height="12" fill="#7c3aed" opacity="0.35" rx="1" />
      <rect x="192" y="100" width="8" height="12" fill="#7c3aed" opacity="0.35" rx="1" />
      <rect x="176" y="100" width="8" height="12" fill="#7c3aed" opacity="0.35" rx="1" />
      {/* Arch gate */}
      <rect x="148" y="118" width="24" height="27" fill="#7c3aed" opacity="0.5" />
      <ellipse cx="160" cy="118" rx="12" ry="8" fill="#7c3aed" opacity="0.5" />

      {/* Inner left tower */}
      <rect x="114" y="68" width="28" height="77" fill="url(#castleGrad)" />
      <polygon points="114,68 128,46 142,68" fill="#f3e8ff" />
      <rect x="118" y="74" width="6" height="9" fill="#7c3aed" opacity="0.35" rx="1" />
      <rect x="130" y="74" width="6" height="9" fill="#7c3aed" opacity="0.35" rx="1" />
      {/* Battlements */}
      {[113, 121, 129, 137].map((x, i) => (
        <rect key={i} x={x} y="64" width="6" height="6" fill="#ede9fe" />
      ))}

      {/* Inner right tower */}
      <rect x="178" y="68" width="28" height="77" fill="url(#castleGrad)" />
      <polygon points="178,68 192,46 206,68" fill="#f3e8ff" />
      <rect x="182" y="74" width="6" height="9" fill="#7c3aed" opacity="0.35" rx="1" />
      <rect x="194" y="74" width="6" height="9" fill="#7c3aed" opacity="0.35" rx="1" />
      {/* Battlements */}
      {[177, 185, 193, 201].map((x, i) => (
        <rect key={i} x={x} y="64" width="6" height="6" fill="#ede9fe" />
      ))}

      {/* CENTER MAIN TOWER */}
      <rect x="140" y="52" width="40" height="93" fill="url(#castleGrad)" />
      {/* Center windows */}
      <rect x="147" y="60" width="8" height="12" fill="#7c3aed" opacity="0.3" rx="1" />
      <rect x="165" y="60" width="8" height="12" fill="#7c3aed" opacity="0.3" rx="1" />
      <rect x="147" y="78" width="8" height="12" fill="#7c3aed" opacity="0.3" rx="1" />
      <rect x="165" y="78" width="8" height="12" fill="#7c3aed" opacity="0.3" rx="1" />
      {/* Center battlements */}
      {[139, 148, 157, 166, 175].map((x, i) => (
        <rect key={i} x={x} y="48" width="7" height="7" fill="#f3e8ff" />
      ))}

      {/* SPIRE / Pinnacle */}
      <polygon points="148,52 160,10 172,52" fill="#f9a8d4" />
      {/* Spire windows */}
      <ellipse cx="160" cy="28" rx="3" ry="4" fill="#7c3aed" opacity="0.3" />
      {/* Flag */}
      <line x1="160" y1="10" x2="160" y2="3" stroke="#f9a8d4" strokeWidth="1.5" />
      <polygon points="160,3 172,8 160,13" fill="#f472b6" />

      {/* Glimmer on spire tip */}
      <circle cx="160" cy="10" r="3" fill="#fef9c3" opacity="0.9" filter="url(#glow)" />

      {/* Ground / hill */}
      <ellipse cx="160" cy="148" rx="130" ry="18" fill="url(#groundGrad)" />

      {/* Sparkle stars on castle */}
      {[
        { x: 160, y: 10, c: "#fef9c3" },
        { x: 99, y: 58, c: "#f9a8d4" },
        { x: 221, y: 58, c: "#a5b4fc" },
        { x: 128, y: 46, c: "#fde68a" },
        { x: 192, y: 46, c: "#6ee7b7" },
      ].map((s, i) => (
        <g key={i} filter="url(#glow)">
          <line x1={s.x - 4} y1={s.y} x2={s.x + 4} y2={s.y} stroke={s.c} strokeWidth="1.5" />
          <line x1={s.x} y1={s.y - 4} x2={s.x} y2={s.y + 4} stroke={s.c} strokeWidth="1.5" />
          <line x1={s.x - 3} y1={s.y - 3} x2={s.x + 3} y2={s.y + 3} stroke={s.c} strokeWidth="0.8" opacity="0.7" />
          <line x1={s.x + 3} y1={s.y - 3} x2={s.x - 3} y2={s.y + 3} stroke={s.c} strokeWidth="0.8" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

export function EbookCover() {
  return (
    <div
      className="w-full rounded-[28px] overflow-hidden flex flex-col relative"
      style={{
        aspectRatio: "3/4",
        background: "linear-gradient(160deg, #1a0535 0%, #3b0764 30%, #6d28d9 65%, #be185d 100%)",
        boxShadow:
          "0 48px 100px -20px rgba(168,85,247,0.45), 0 20px 40px -10px rgba(233,30,99,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
        border: "1.5px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* Animated shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.02) 100%)",
          backgroundSize: "200% 200%",
          animation: "gradientShift 6s ease infinite",
        }}
      />

      {/* TOP HEADER BAND */}
      <div
        className="relative z-10 py-2.5 px-4 flex items-center justify-center shrink-0"
        style={{ background: "linear-gradient(90deg, rgba(244,114,182,0.3), rgba(192,132,252,0.4), rgba(96,165,250,0.3))" }}
      >
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 w-8" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.5))" }} />
          <span
            className="text-[9px] font-bold tracking-[0.4em] uppercase"
            style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 0 10px rgba(244,114,182,0.8)" }}
          >
            ✦ IMAGINE AONDE ✦
          </span>
          <div className="h-px flex-1 w-8" style={{ background: "linear-gradient(to left, transparent, rgba(255,255,255,0.5))" }} />
        </div>
      </div>

      {/* CASTLE */}
      <div className="relative shrink-0 w-full">
        <Castle />
        {/* Gradient fade at bottom of castle */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
          style={{ background: "linear-gradient(0deg, rgba(109,40,217,0.9) 0%, transparent 100%)" }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 pb-2 gap-2 text-center">
        {/* Subtitle */}
        <p
          className="text-[9px] font-bold tracking-[0.35em] uppercase"
          style={{ color: "rgba(253,230,138,0.9)", textShadow: "0 0 12px rgba(253,230,138,0.6)" }}
        >
          Guia Completo de
        </p>

        {/* ORLANDO — each letter its own color */}
        <div className="flex items-center justify-center gap-0.5">
          {ORLANDO.map((letter, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.12,
                ease: "easeInOut",
              }}
              className="font-serif font-bold leading-none inline-block"
              style={{
                fontSize: "clamp(2.2rem, 9vw, 3.6rem)",
                color: LETTER_COLORS[i],
                textShadow: `0 0 20px ${LETTER_COLORS[i]}88, 0 4px 12px rgba(0,0,0,0.4)`,
                letterSpacing: "-0.02em",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-2 w-full justify-center my-0.5">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(244,114,182,0.6))" }} />
          <span style={{ color: "#c084fc", fontSize: 10, textShadow: "0 0 8px #c084fc" }}>✦</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(96,165,250,0.6))" }} />
        </div>

        {/* Icons row */}
        <div className="flex gap-3 text-2xl">
          <motion.span
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >🏰</motion.span>
          <motion.span
            animate={{ rotate: [3, -3, 3] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >🛍️</motion.span>
          <motion.span
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity }}
          >🎢</motion.span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 justify-center">
          {["Disney", "Outlets", "Restaurantes", "Roteiros"].map((tag, i) => (
            <span
              key={i}
              className="text-[8px] font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: `rgba(${[
                  "244,114,182",
                  "192,132,252",
                  "96,165,250",
                  "52,211,153",
                ][i]}, 0.2)`,
                border: `1px solid rgba(${[
                  "244,114,182",
                  "192,132,252",
                  "96,165,250",
                  "52,211,153",
                ][i]}, 0.5)`,
                color: `rgba(${[
                  "244,114,182",
                  "192,132,252",
                  "96,165,250",
                  "52,211,153",
                ][i]}, 1)`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM BAND */}
      <div
        className="relative z-10 py-2.5 shrink-0 flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(90deg, #be185d 0%, #7c3aed 50%, #1d4ed8 100%)" }}
      >
        <p
          className="text-[9px] font-bold tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.95)", textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
        >
          ✨ Sua viagem mágica começa aqui ✨
        </p>
      </div>
    </div>
  );
}
