import { motion } from "framer-motion";

const LETTER_COLORS = ["#F472B6", "#C084FC", "#60A5FA", "#F472B6", "#C084FC", "#60A5FA", "#F472B6"];
const ORLANDO = ["O", "R", "L", "A", "N", "D", "O"];

function CinderellaCastle() {
  return (
    <svg
      viewBox="0 0 320 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0520" />
          <stop offset="35%" stopColor="#1e0b4a" />
          <stop offset="65%" stopColor="#4a1272" />
          <stop offset="100%" stopColor="#8b1a6b" />
        </linearGradient>
        <linearGradient id="wallLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8f4ff" />
          <stop offset="100%" stopColor="#b8d4f0" />
        </linearGradient>
        <linearGradient id="wallMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d0e8ff" />
          <stop offset="100%" stopColor="#9dbfe8" />
        </linearGradient>
        <linearGradient id="spireBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a6fce" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="spireLightBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d6a4f" />
          <stop offset="100%" stopColor="#1b4332" />
        </linearGradient>
        <linearGradient id="moonGlow" cx="50%" cy="50%" r="50%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#fff9c4" />
          <stop offset="70%" stopColor="#fff176" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#fff176" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="moonRadial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fffde7" />
          <stop offset="60%" stopColor="#fff59d" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff59d" stopOpacity="0" />
        </radialGradient>
        <filter id="castleGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sparkGlow">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Sky */}
      <rect width="320" height="200" fill="url(#skyGrad)" />

      {/* Stars small */}
      {[
        [15,10],[35,6],[55,14],[80,5],[105,11],[130,7],[160,4],[185,12],[210,6],[235,10],[260,5],[290,13],[305,8],
        [22,22],[48,28],[73,19],[98,25],[125,18],[150,22],[175,16],[200,26],[225,20],[255,24],[280,18],[310,23],
        [8,38],[42,35],[67,42],[92,33],[118,39],[145,34],[170,40],[196,36],[220,32],[248,38],[272,34],[300,41],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y}
          r={i % 5 === 0 ? 1.3 : i % 3 === 0 ? 1.0 : 0.7}
          fill={i % 7 === 0 ? "#fff9c4" : i % 4 === 0 ? "#c4ddff" : "white"}
          opacity={0.55 + (i % 5) * 0.09}
        />
      ))}

      {/* Moon halo */}
      <circle cx="268" cy="25" r="26" fill="url(#moonRadial)" opacity="0.45" />
      {/* Moon */}
      <circle cx="268" cy="25" r="13" fill="#fffde7" opacity="0.95" />
      <circle cx="272" cy="21" r="10" fill="#fff9c4" opacity="0.35" />
      {/* Moon craters */}
      <circle cx="263" cy="29" r="2.2" fill="#fff176" opacity="0.25" />
      <circle cx="270" cy="22" r="1.4" fill="#fff176" opacity="0.2" />

      {/* Fireworks left */}
      {[0,40,80,120,160,200,240,280,320].map((angle, j) => {
        const rad = (angle * Math.PI) / 180;
        const r = 9 + (j % 2) * 4;
        return <circle key={j} cx={38 + Math.cos(rad) * r} cy={48 + Math.sin(rad) * r} r="1.1" fill="#f472b6" opacity="0.85" />;
      })}
      <circle cx="38" cy="48" r="2.2" fill="#f472b6" opacity="0.9" filter="url(#sparkGlow)" />

      {/* Fireworks right */}
      {[0,45,90,135,180,225,270,315].map((angle, j) => {
        const rad = (angle * Math.PI) / 180;
        const r = 10 + (j % 2) * 3;
        return <circle key={j} cx={290 + Math.cos(rad) * r} cy={44 + Math.sin(rad) * r} r="1.1" fill="#818cf8" opacity="0.85" />;
      })}
      <circle cx="290" cy="44" r="2.2" fill="#818cf8" opacity="0.9" filter="url(#sparkGlow)" />

      {/* Fireworks top center */}
      {[0,36,72,108,144,180,216,252,288,324].map((angle, j) => {
        const rad = (angle * Math.PI) / 180;
        return <circle key={j} cx={160 + Math.cos(rad) * 8} cy={30 + Math.sin(rad) * 8} r="0.9" fill="#34d399" opacity="0.8" />;
      })}
      <circle cx="160" cy="30" r="1.8" fill="#6ee7b7" opacity="0.9" filter="url(#sparkGlow)" />

      {/* =========== CASTLE =========== */}

      {/* Far background towers (left & right) */}
      <rect x="22" y="120" width="10" height="55" fill="#a8c8e8" opacity="0.5" />
      <polygon points="22,120 27,108 32,120" fill="#7eaed4" opacity="0.5" />
      <rect x="288" y="118" width="10" height="57" fill="#a8c8e8" opacity="0.5" />
      <polygon points="288,118 293,106 298,118" fill="#7eaed4" opacity="0.5" />

      {/* Far side small towers */}
      <rect x="42" y="130" width="16" height="45" fill="#b8d8f0" opacity="0.55" />
      <polygon points="42,130 50,116 58,130" fill="#2563eb" opacity="0.55" />
      <rect x="262" y="128" width="16" height="47" fill="#b8d8f0" opacity="0.55" />
      <polygon points="262,128 270,114 278,128" fill="#2563eb" opacity="0.55" />

      {/* Outer wings / base extensions */}
      <rect x="58" y="138" width="38" height="37" fill="url(#wallMid)" />
      {/* Wing battlements */}
      {[57,64,71,78,85,92].map((x, i) => (
        <rect key={i} x={x} y="134" width="5" height="6" fill="#d0e8ff" />
      ))}
      {/* Wing windows */}
      <rect x="64" y="146" width="8" height="11" fill="#2563eb" opacity="0.3" rx="1" />
      <rect x="78" y="146" width="8" height="11" fill="#2563eb" opacity="0.3" rx="1" />

      <rect x="224" y="138" width="38" height="37" fill="url(#wallMid)" />
      {[223,230,237,244,251,258].map((x, i) => (
        <rect key={i} x={x} y="134" width="5" height="6" fill="#d0e8ff" />
      ))}
      <rect x="230" y="146" width="8" height="11" fill="#2563eb" opacity="0.3" rx="1" />
      <rect x="244" y="146" width="8" height="11" fill="#2563eb" opacity="0.3" rx="1" />

      {/* ---- OUTER SIDE TOWERS ---- */}
      {/* Left outer tower */}
      <rect x="62" y="106" width="26" height="69" fill="url(#wallLight)" />
      <polygon points="62,106 75,82 88,106" fill="url(#spireBlue)" />
      {/* Cone detail lines */}
      <line x1="75" y1="82" x2="69" y2="106" stroke="#1e40af" strokeWidth="0.4" opacity="0.4" />
      <line x1="75" y1="82" x2="81" y2="106" stroke="#1e40af" strokeWidth="0.4" opacity="0.4" />
      {/* Windows */}
      <rect x="67" y="112" width="6" height="9" fill="#1e40af" opacity="0.35" rx="1" />
      <rect x="77" y="112" width="6" height="9" fill="#1e40af" opacity="0.35" rx="1" />
      <rect x="67" y="126" width="6" height="9" fill="#1e40af" opacity="0.3" rx="1" />
      {/* Battlements */}
      {[61,68,75,82,89].map((x, i) => (
        <rect key={i} x={x} y="102" width="5" height="6" fill="#e8f4ff" />
      ))}
      {/* Flag */}
      <line x1="75" y1="82" x2="75" y2="76" stroke="#93c5fd" strokeWidth="1.2" />
      <polygon points="75,76 84,79 75,82" fill="#3b82f6" opacity="0.8" />

      {/* Right outer tower */}
      <rect x="232" y="106" width="26" height="69" fill="url(#wallLight)" />
      <polygon points="232,106 245,82 258,106" fill="url(#spireBlue)" />
      <line x1="245" y1="82" x2="239" y2="106" stroke="#1e40af" strokeWidth="0.4" opacity="0.4" />
      <line x1="245" y1="82" x2="251" y2="106" stroke="#1e40af" strokeWidth="0.4" opacity="0.4" />
      <rect x="237" y="112" width="6" height="9" fill="#1e40af" opacity="0.35" rx="1" />
      <rect x="247" y="112" width="6" height="9" fill="#1e40af" opacity="0.35" rx="1" />
      <rect x="237" y="126" width="6" height="9" fill="#1e40af" opacity="0.3" rx="1" />
      {[231,238,245,252,259].map((x, i) => (
        <rect key={i} x={x} y="102" width="5" height="6" fill="#e8f4ff" />
      ))}
      <line x1="245" y1="82" x2="245" y2="76" stroke="#93c5fd" strokeWidth="1.2" />
      <polygon points="245,76 254,79 245,82" fill="#3b82f6" opacity="0.8" />

      {/* ---- MAIN BODY ---- */}
      <rect x="96" y="128" width="128" height="47" fill="url(#wallLight)" />
      {/* Body battlements */}
      {[95,103,111,119,127,135,143,151,159,167,175,183,191,199,207,215,223].map((x, i) => (
        <rect key={i} x={x} y="123" width="6" height="7" fill="#e8f4ff" />
      ))}
      {/* Body arch windows */}
      <rect x="105" y="136" width="10" height="14" fill="#2563eb" opacity="0.3" rx="1" />
      <rect x="123" y="136" width="10" height="14" fill="#2563eb" opacity="0.3" rx="1" />
      <rect x="197" y="136" width="10" height="14" fill="#2563eb" opacity="0.3" rx="1" />
      <rect x="215" y="136" width="10" height="14" fill="#2563eb" opacity="0.3" rx="1" />
      {/* Central arch gate */}
      <rect x="148" y="148" width="24" height="27" fill="#1e3a8a" opacity="0.45" />
      <ellipse cx="160" cy="148" rx="12" ry="8" fill="#1e3a8a" opacity="0.45" />
      {/* Gate arch highlight */}
      <ellipse cx="160" cy="148" rx="10" ry="6.5" fill="none" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />

      {/* ---- INNER TOWERS ---- */}
      {/* Inner left tower */}
      <rect x="96" y="90" width="36" height="85" fill="url(#wallLight)" />
      <polygon points="96,90 114,60 132,90" fill="url(#spireLightBlue)" />
      <line x1="114" y1="60" x2="105" y2="90" stroke="#1e40af" strokeWidth="0.5" opacity="0.5" />
      <line x1="114" y1="60" x2="123" y2="90" stroke="#1e40af" strokeWidth="0.5" opacity="0.5" />
      {/* Windows */}
      <rect x="102" y="98" width="8" height="11" fill="#1e40af" opacity="0.35" rx="1" />
      <rect x="118" y="98" width="8" height="11" fill="#1e40af" opacity="0.35" rx="1" />
      <rect x="102" y="114" width="8" height="11" fill="#1e40af" opacity="0.3" rx="1" />
      <rect x="118" y="114" width="8" height="11" fill="#1e40af" opacity="0.3" rx="1" />
      {[95,103,111,119,127,133].map((x, i) => (
        <rect key={i} x={x} y="86" width="6" height="7" fill="#e8f4ff" />
      ))}
      <line x1="114" y1="60" x2="114" y2="53" stroke="#93c5fd" strokeWidth="1.5" />
      <polygon points="114,53 124,57 114,61" fill="#60a5fa" />

      {/* Inner right tower */}
      <rect x="188" y="90" width="36" height="85" fill="url(#wallLight)" />
      <polygon points="188,90 206,60 224,90" fill="url(#spireLightBlue)" />
      <line x1="206" y1="60" x2="197" y2="90" stroke="#1e40af" strokeWidth="0.5" opacity="0.5" />
      <line x1="206" y1="60" x2="215" y2="90" stroke="#1e40af" strokeWidth="0.5" opacity="0.5" />
      <rect x="194" y="98" width="8" height="11" fill="#1e40af" opacity="0.35" rx="1" />
      <rect x="210" y="98" width="8" height="11" fill="#1e40af" opacity="0.35" rx="1" />
      <rect x="194" y="114" width="8" height="11" fill="#1e40af" opacity="0.3" rx="1" />
      <rect x="210" y="114" width="8" height="11" fill="#1e40af" opacity="0.3" rx="1" />
      {[187,195,203,211,219,225].map((x, i) => (
        <rect key={i} x={x} y="86" width="6" height="7" fill="#e8f4ff" />
      ))}
      <line x1="206" y1="60" x2="206" y2="53" stroke="#93c5fd" strokeWidth="1.5" />
      <polygon points="206,53 216,57 206,61" fill="#60a5fa" />

      {/* ---- CENTER MAIN TOWER ---- */}
      <rect x="132" y="72" width="56" height="103" fill="url(#wallLight)" />
      {/* Center windows */}
      <rect x="140" y="82" width="10" height="14" fill="#1e40af" opacity="0.3" rx="1" />
      <rect x="170" y="82" width="10" height="14" fill="#1e40af" opacity="0.3" rx="1" />
      <rect x="140" y="102" width="10" height="14" fill="#1e40af" opacity="0.28" rx="1" />
      <rect x="170" y="102" width="10" height="14" fill="#1e40af" opacity="0.28" rx="1" />
      <rect x="154" y="82" width="12" height="18" fill="#1e40af" opacity="0.32" rx="2" />
      {/* Center arch */}
      <ellipse cx="160" cy="82" rx="6" ry="4" fill="#1e40af" opacity="0.32" />
      {/* Center battlements */}
      {[131,140,149,158,167,176,185].map((x, i) => (
        <rect key={i} x={x} y="67" width="7" height="8" fill="#e8f4ff" />
      ))}

      {/* ---- MAIN TALL SPIRE (Cinderella) ---- */}
      {/* Spire base cone */}
      <polygon points="136,72 160,5 184,72" fill="url(#spireBlue)" filter="url(#castleGlow)" />
      {/* Spire ridge lines for realism */}
      <line x1="160" y1="5" x2="148" y2="72" stroke="#1e40af" strokeWidth="0.5" opacity="0.5" />
      <line x1="160" y1="5" x2="172" y2="72" stroke="#1e40af" strokeWidth="0.5" opacity="0.5" />
      {/* Spire band decorations */}
      <rect x="145" y="52" width="30" height="3" fill="#93c5fd" opacity="0.4" />
      <rect x="140" y="64" width="40" height="3" fill="#93c5fd" opacity="0.4" />
      {/* Spire arched windows */}
      <rect x="154" y="42" width="12" height="16" fill="#1e40af" opacity="0.35" rx="2" />
      <ellipse cx="160" cy="42" rx="6" ry="4" fill="#1e40af" opacity="0.35" />
      {/* Spire window light glow */}
      <ellipse cx="160" cy="48" rx="4" ry="6" fill="#fde68a" opacity="0.12" />
      {/* Small turrets at spire base */}
      <polygon points="132,72 136,60 140,72" fill="#2563eb" />
      <polygon points="180,72 184,60 188,72" fill="#2563eb" />
      {/* Spire finial + flag */}
      <line x1="160" y1="5" x2="160" y2="-3" stroke="#bfdbfe" strokeWidth="1.5" />
      <polygon points="160,-3 172,2 160,7" fill="#f472b6" />
      {/* Glowing star at top */}
      <circle cx="160" cy="5" r="3.5" fill="#fef9c3" opacity="0.95" filter="url(#softGlow)" />
      <line x1="156" y1="5" x2="164" y2="5" stroke="#fef9c3" strokeWidth="1.5" filter="url(#sparkGlow)" />
      <line x1="160" y1="1" x2="160" y2="9" stroke="#fef9c3" strokeWidth="1.5" filter="url(#sparkGlow)" />
      <line x1="157.2" y1="2.2" x2="162.8" y2="7.8" stroke="#fef9c3" strokeWidth="1" opacity="0.7" />
      <line x1="162.8" y1="2.2" x2="157.2" y2="7.8" stroke="#fef9c3" strokeWidth="1" opacity="0.7" />

      {/* Sparkle accents on tower tips */}
      {[
        { x: 114, y: 60, c: "#fde68a" },
        { x: 206, y: 60, c: "#f9a8d4" },
        { x: 75, y: 82, c: "#a5b4fc" },
        { x: 245, y: 82, c: "#6ee7b7" },
      ].map((s, i) => (
        <g key={i} filter="url(#sparkGlow)">
          <line x1={s.x - 3.5} y1={s.y} x2={s.x + 3.5} y2={s.y} stroke={s.c} strokeWidth="1.3" />
          <line x1={s.x} y1={s.y - 3.5} x2={s.x} y2={s.y + 3.5} stroke={s.c} strokeWidth="1.3" />
          <line x1={s.x - 2.5} y1={s.y - 2.5} x2={s.x + 2.5} y2={s.y + 2.5} stroke={s.c} strokeWidth="0.8" opacity="0.6" />
          <line x1={s.x + 2.5} y1={s.y - 2.5} x2={s.x - 2.5} y2={s.y + 2.5} stroke={s.c} strokeWidth="0.8" opacity="0.6" />
        </g>
      ))}

      {/* Ground */}
      <ellipse cx="160" cy="176" rx="145" ry="16" fill="url(#groundGrad)" opacity="0.85" />
      {/* Trees silhouette left */}
      <ellipse cx="52" cy="170" rx="22" ry="14" fill="#1b4332" opacity="0.7" />
      <ellipse cx="30" cy="174" rx="16" ry="11" fill="#2d6a4f" opacity="0.7" />
      <ellipse cx="70" cy="173" rx="14" ry="10" fill="#2d6a4f" opacity="0.6" />
      {/* Trees silhouette right */}
      <ellipse cx="268" cy="170" rx="22" ry="14" fill="#1b4332" opacity="0.7" />
      <ellipse cx="290" cy="174" rx="16" ry="11" fill="#2d6a4f" opacity="0.7" />
      <ellipse cx="250" cy="173" rx="14" ry="10" fill="#2d6a4f" opacity="0.6" />

      {/* Reflection glow at base of castle */}
      <ellipse cx="160" cy="178" rx="80" ry="5" fill="#60a5fa" opacity="0.12" />
    </svg>
  );
}

export function EbookCover() {
  return (
    <div
      className="w-full rounded-[28px] overflow-hidden flex flex-col relative"
      style={{
        aspectRatio: "3/4",
        background: "linear-gradient(160deg, #0a0520 0%, #1e0b4a 25%, #4a1272 55%, #8b1a6b 80%, #be185d 100%)",
        boxShadow:
          "0 48px 100px -20px rgba(168,85,247,0.5), 0 20px 40px -10px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
        border: "1.5px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.02) 100%)",
        }}
      />

      {/* TOP HEADER BAND */}
      <div
        className="relative z-20 py-2.5 px-4 flex items-center justify-center shrink-0"
        style={{ background: "linear-gradient(90deg, rgba(96,165,250,0.25), rgba(192,132,252,0.35), rgba(244,114,182,0.25))" }}
      >
        <div className="flex items-center gap-2 w-full justify-center">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.4))" }} />
          <span
            className="text-[9px] font-bold tracking-[0.4em] uppercase whitespace-nowrap"
            style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 0 10px rgba(96,165,250,0.8)" }}
          >
            ✦ IMAGINE AONDE ✦
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(255,255,255,0.4))" }} />
        </div>
      </div>

      {/* CASTLE — takes most of the space */}
      <div className="relative shrink-0 w-full flex-1 min-h-0">
        <CinderellaCastle />
        {/* Fade bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(0deg, rgba(139,26,107,0.95) 0%, transparent 100%)" }}
        />
      </div>

      {/* CONTENT BELOW */}
      <div className="relative z-20 flex flex-col items-center px-5 pb-1 gap-1.5 text-center -mt-4">
        {/* "Guia Completo de" in white */}
        <p
          className="text-[9px] font-bold tracking-[0.35em] uppercase"
          style={{ color: "#ffffff", textShadow: "0 0 14px rgba(255,255,255,0.6), 0 2px 6px rgba(0,0,0,0.4)" }}
        >
          Guia Completo de
        </p>

        {/* ORLANDO — colorful bouncing letters */}
        <div className="flex items-center justify-center gap-0.5">
          {ORLANDO.map((letter, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.13,
                ease: "easeInOut",
              }}
              className="font-serif font-bold leading-none inline-block"
              style={{
                fontSize: "clamp(2rem, 8.5vw, 3.4rem)",
                color: LETTER_COLORS[i],
                textShadow: `0 0 18px ${LETTER_COLORS[i]}99, 0 3px 10px rgba(0,0,0,0.5)`,
                letterSpacing: "-0.01em",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 w-full justify-center">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(96,165,250,0.7))" }} />
          <span style={{ color: "#c084fc", fontSize: 9, textShadow: "0 0 8px #c084fc" }}>✦</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(244,114,182,0.7))" }} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 justify-center">
          {[
            { label: "Disney", color: "244,114,182" },
            { label: "Outlets", color: "192,132,252" },
            { label: "Restaurantes", color: "96,165,250" },
            { label: "Roteiros", color: "52,211,153" },
          ].map((tag, i) => (
            <span
              key={i}
              className="text-[7.5px] font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: `rgba(${tag.color}, 0.18)`,
                border: `1px solid rgba(${tag.color}, 0.55)`,
                color: `rgb(${tag.color})`,
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM BAND */}
      <div
        className="relative z-20 py-2.5 shrink-0 flex items-center justify-center mt-1.5"
        style={{ background: "linear-gradient(90deg, #1d4ed8 0%, #7c3aed 50%, #be185d 100%)" }}
      >
        <p
          className="text-[9px] font-bold tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.95)", textShadow: "0 0 8px rgba(255,255,255,0.4)" }}
        >
          ✨ Sua viagem mágica começa aqui ✨
        </p>
      </div>
    </div>
  );
}
