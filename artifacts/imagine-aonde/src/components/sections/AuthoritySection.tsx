import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Instagram, Plane, Map, Star } from "lucide-react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString("pt-BR")}{suffix}</span>;
}

const stats = [
  {
    icon: Map,
    value: 15,
    suffix: "+",
    label: "Viagens a Orlando",
    sublabel: "e contando",
    color: "from-pink-400 to-rose-500",
    bg: "from-pink-50 to-rose-50",
    border: "border-pink-100",
    iconBg: "from-pink-400 to-rose-500",
    emoji: "🗺️"
  },
  {
    icon: Instagram,
    value: 120000,
    suffix: "+",
    label: "Seguidores",
    sublabel: "no Instagram",
    color: "from-purple-400 to-violet-500",
    bg: "from-purple-50 to-violet-50",
    border: "border-purple-100",
    iconBg: "from-purple-400 to-violet-500",
    emoji: "📸"
  },
  {
    icon: Plane,
    value: 5000,
    suffix: "+",
    label: "Viajantes",
    sublabel: "que usaram o guia",
    color: "from-sky-400 to-cyan-500",
    bg: "from-sky-50 to-cyan-50",
    border: "border-sky-100",
    iconBg: "from-sky-400 to-cyan-500",
    emoji: "✈️"
  },
];

export function AuthoritySection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Top rainbow border */}
      <div className="absolute top-0 left-0 right-0 h-1.5"
        style={{ background: "linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #a5d6a7, #f48fb1)" }} />

      {/* Bg decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ce93d8, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #81d4fa, transparent)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 space-y-4"
          >
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-pink-500">Quem faz esse guia</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] leading-tight">
              A autoridade que você precisa para uma{" "}
              <span className="gradient-text-pink italic">viagem perfeita</span>
            </h2>
            <div className="section-divider mt-4"></div>
            <p className="text-lg md:text-xl text-[#2D2D2D]/65 leading-relaxed font-light max-w-2xl mx-auto mt-4">
              Criado pela <strong className="text-pink-600 font-semibold">Imagine Aonde</strong>, perfil especializado em viagens com dicas reais e experiências validadas. Não somos uma agência — somos viajantes que descobriram o caminho das pedras em Orlando.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br ${stat.bg} border ${stat.border} shadow-sm transition-all duration-300 overflow-hidden`}
                data-testid={`stat-card-${i}`}
              >
                {/* Background emoji */}
                <div className="absolute right-4 bottom-4 text-6xl opacity-10 select-none">{stat.emoji}</div>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.iconBg} flex items-center justify-center mb-5 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-5xl font-serif font-bold text-[#2D2D2D] mb-1 tabular-nums">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-semibold text-[#2D2D2D]/80 text-base">{stat.label}</p>
                <p className="text-sm text-[#2D2D2D]/45 mt-0.5">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>

          {/* Instagram card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden p-8 md:p-12 text-center"
            style={{ background: "linear-gradient(135deg, #f9f0ff 0%, #fff0f5 50%, #f0f5ff 100%)", border: "1.5px solid rgba(206,147,216,0.3)" }}
          >
            <div className="absolute inset-0 opacity-5"
              style={{ backgroundImage: "radial-gradient(#9c27b0 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-widest text-purple-500 mb-1">Siga a comunidade</p>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2D2D2D]">@imagineaonde</h3>
                <p className="text-[#2D2D2D]/60 mt-1">Dicas diárias, promoções e conteúdo exclusivo sobre Orlando e Disney</p>
              </div>
              <div className="flex gap-1 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-10"
          >
            <div className="inline-flex items-center gap-2.5 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 px-6 py-3 rounded-full shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Conteúdo 100% testado e validado em 2025
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
