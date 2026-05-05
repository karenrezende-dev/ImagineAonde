import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

const pages = [
  {
    label: "Sumário",
    emoji: "📚",
    color: "#e91e63",
    leftTitle: "Índice do Guia",
    leftContent: [
      { num: "01", text: "Planejamento e Documentos" },
      { num: "02", text: "Disney — Roteiro Completo" },
      { num: "03", text: "Universal Studios" },
      { num: "04", text: "Melhores Outlets de Orlando" },
      { num: "05", text: "Onde Comer Bem e Barato" },
      { num: "06", text: "Transporte e Logística" },
      { num: "07", text: "Cupons e Apps Essenciais" },
      { num: "08", text: "Roteiros Prontos (5, 7 e 10 dias)" },
    ],
    rightTitle: "Bem-vinda ao Guia",
    rightSubtitle: "Imagine Aonde — Orlando 2025",
    rightContent:
      "Este guia foi criado com carinho para transformar a sua viagem a Orlando em uma experiência inesquecível. Cada página foi pensada para te dar segurança, economia e diversão desde o primeiro dia de planejamento até a última hora nos parques.",
    rightHighlight: "200+ páginas de dicas reais, testadas e aprovadas!",
  },
  {
    label: "Disney",
    emoji: "🏰",
    color: "#9c27b0",
    leftTitle: "Magic Kingdom",
    leftContent: [
      { num: "🎢", text: "Melhores atrações por faixa etária" },
      { num: "⏰", text: "Horários estratégicos para evitar filas" },
      { num: "🍽️", text: "Onde comer dentro do parque" },
      { num: "📱", text: "Como usar o Disney Genie+" },
      { num: "💡", text: "Truques exclusivos dos Cast Members" },
      { num: "🌙", text: "Dicas para a Fantasy Parade noturna" },
    ],
    rightTitle: "Segredo das Filas Virtuais",
    rightSubtitle: "Economize horas preciosas",
    rightContent:
      "A maioria dos turistas brasileiros perde de 3 a 5 horas por dia esperando em filas. Com nossa estratégia de chegada antecipada + Lightning Lane + roteiro otimizado, você consegue fazer 2x mais atrações no mesmo tempo.",
    rightHighlight: "Nossa estratégia reduz o tempo de fila em até 70%!",
  },
  {
    label: "Outlets",
    emoji: "🛍️",
    color: "#0288d1",
    leftTitle: "Premium Outlets",
    leftContent: [
      { num: "🏷️", text: "Cupons VIP de até 30% extra" },
      { num: "🕐", text: "Melhor horário para ir (sem filas)" },
      { num: "💳", text: "Cartões que dão desconto extra" },
      { num: "📦", text: "O que realmente vale trazer na mala" },
      { num: "✈️", text: "Como calcular limite da bagagem" },
      { num: "🔑", text: "Lojas menos conhecidas com ótimos preços" },
    ],
    rightTitle: "Lista das Melhores Lojas",
    rightSubtitle: "Orlando Premium Outlets & Vineland",
    rightContent:
      "Não é qualquer loja que vale a pena. Mapeamos as 40+ lojas com maior economia para brasileiros, levando em conta câmbio, taxas de importação e o que pode entrar na mala sem problema. Economize tempo e dinheiro indo direto ao ponto.",
    rightHighlight: "Economia média de R$ 1.200 por família nas compras!",
  },
  {
    label: "Roteiros",
    emoji: "📋",
    color: "#388e3c",
    leftTitle: "Roteiro de 7 Dias",
    leftContent: [
      { num: "D1", text: "Chegada + Disney Springs" },
      { num: "D2", text: "Magic Kingdom (dia inteiro)" },
      { num: "D3", text: "EPCOT — Afternoon + Festival" },
      { num: "D4", text: "Universal Studios + Islands" },
      { num: "D5", text: "Premium Outlets (manhã) + Hollywood Studios" },
      { num: "D6", text: "Animal Kingdom + Disney Springs" },
      { num: "D7", text: "Compras finais + Partida" },
    ],
    rightTitle: "Roteiro Feito Para Você",
    rightSubtitle: "Adaptado para famílias, casais e grupos",
    rightContent:
      "Cada roteiro foi testado pessoalmente diversas vezes e otimizado para o máximo de aproveitamento com o mínimo de cansaço. Inclui horários de entrada, ordem das atrações, dicas de alimentação e pausas estratégicas.",
    rightHighlight: "3 roteiros prontos: 5, 7 e 10 dias de viagem!",
  },
  {
    label: "Economia",
    emoji: "💰",
    color: "#f57c00",
    leftTitle: "Apps que Salvam sua Viagem",
    leftContent: [
      { num: "📱", text: "My Disney Experience (obrigatório)" },
      { num: "🗺️", text: "Google Maps offline configurado" },
      { num: "💵", text: "Wise — câmbio sem taxas abusivas" },
      { num: "🍔", text: "OpenTable — reservas de restaurantes" },
      { num: "🚗", text: "Uber vs. Lyft — qual usar em Orlando" },
      { num: "☁️", text: "Weather Channel — planeje os dias de chuva" },
    ],
    rightTitle: "Economize em Tudo",
    rightSubtitle: "De passagens a ingressos",
    rightContent:
      "Revelamos os melhores sites para comprar ingressos com desconto, como usar o CityPASS, quando abastecer o carro mais barato, supermercados que os brasileiros adoram (Publix, Walmart, Costco) e muito mais.",
    rightHighlight: "Economize em média R$800 por viagem seguindo nossas dicas!",
  },
];

export function BookPreviewSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + pages.length) % pages.length);
  };

  const page = pages[current];

  const pageVariants = {
    enter: (d: number) => ({
      rotateY: d > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (d: number) => ({
      rotateY: d > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #fff8f0 0%, #fdf0f8 40%, #f0f5ff 100%)" }}
    >
      {/* Bg orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f48fb1, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #81d4fa, transparent)" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#9c27b0 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-pink-500 mb-3">Espie antes de comprar</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] leading-tight mb-4">
            Pré-visualização{" "}
            <span className="gradient-text-pink italic">do Guia</span>
          </h2>
          <div className="section-divider mb-5"></div>
          <p className="text-lg text-[#2D2D2D]/60 font-light">
            Veja o que está dentro antes de comprar. Cada página foi criada com cuidado para ser prática e objetiva.
          </p>
        </motion.div>

        {/* Book */}
        <div className="max-w-5xl mx-auto">
          {/* Chapter tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
            {pages.map((p, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background: i === current ? p.color : "white",
                  color: i === current ? "white" : "#2D2D2D",
                  border: `1.5px solid ${i === current ? p.color : "rgba(0,0,0,0.08)"}`,
                  boxShadow: i === current ? `0 4px 20px -4px ${p.color}60` : "none",
                  transform: i === current ? "scale(1.05)" : "scale(1)",
                }}
              >
                <span>{p.emoji}</span>
                <span>{p.label}</span>
              </button>
            ))}
          </div>

          {/* Book pages */}
          <div className="relative" style={{ perspective: "1200px" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 40px 100px -20px rgba(0,0,0,0.12), 0 20px 40px -10px rgba(0,0,0,0.06)" }}
              >
                {/* Left page */}
                <div
                  className="relative p-8 md:p-10 flex flex-col gap-6"
                  style={{ background: "linear-gradient(145deg, #2D2D2D 0%, #1a1a2e 100%)" }}
                >
                  {/* Page decoration */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl md:rounded-tl-3xl md:rounded-tr-none"
                    style={{ background: `linear-gradient(90deg, ${page.color}, ${page.color}88)` }} />
                  <div className="absolute top-0 bottom-0 right-0 w-px hidden md:block opacity-20"
                    style={{ background: "linear-gradient(180deg, transparent, white, transparent)" }} />

                  {/* Book spine effect */}
                  <div className="absolute top-0 bottom-0 left-8 w-px opacity-10"
                    style={{ background: "white" }} />

                  {/* Page number */}
                  <div className="absolute bottom-6 right-8 text-white/20 text-sm font-mono">
                    {String(current + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
                      style={{ background: `${page.color}22`, color: page.color, border: `1px solid ${page.color}44` }}>
                      <span>{page.emoji}</span> {page.label}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-1">{page.leftTitle}</h3>
                    <div className="h-0.5 w-12 rounded mt-2 mb-6" style={{ background: page.color }} />
                  </div>

                  <ul className="space-y-3 flex-1">
                    {page.leftContent.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.06 }}
                        className="flex items-center gap-3"
                      >
                        <span
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                          style={{ background: `${page.color}22`, color: page.color, border: `1px solid ${page.color}33` }}
                        >
                          {item.num}
                        </span>
                        <span className="text-white/75 text-sm font-light">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Right page */}
                <div className="relative p-8 md:p-10 flex flex-col gap-6 bg-white">
                  {/* Page number */}
                  <div className="absolute bottom-6 right-8 text-[#2D2D2D]/15 text-sm font-mono">
                    {String(current + 2).padStart(2, "0")}
                  </div>

                  {/* Lines decoration (notebook style) */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #9c27b0 31px, #9c27b0 32px)", backgroundSize: "100% 32px", backgroundPositionY: "48px" }} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="w-5 h-5" style={{ color: page.color }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: page.color }}>
                        {page.rightSubtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#2D2D2D] mb-4">{page.rightTitle}</h3>

                    <p className="text-[#2D2D2D]/65 leading-relaxed font-light text-base mb-6">{page.rightContent}</p>

                    {/* Highlighted tip */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="rounded-2xl p-5"
                      style={{ background: `${page.color}0d`, border: `1.5px solid ${page.color}33` }}
                    >
                      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: page.color }}>
                        💡 Dica Exclusiva
                      </p>
                      <p className="font-semibold text-[#2D2D2D] text-sm leading-snug">{page.rightHighlight}</p>
                    </motion.div>
                  </div>

                  {/* Blurred bottom CTA hint */}
                  <div className="relative mt-auto">
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/80 rounded-xl z-10 flex flex-col items-center justify-center gap-2">
                      <span className="text-2xl">🔒</span>
                      <p className="text-sm font-bold text-[#2D2D2D]">Conteúdo exclusivo para compradores</p>
                      <button
                        onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
                        className="text-xs font-bold px-4 py-2 rounded-full text-white mt-1"
                        style={{ background: page.color }}
                      >
                        Desbloquear tudo →
                      </button>
                    </div>
                    <div className="text-[#2D2D2D]/30 text-sm leading-relaxed blur-sm select-none pointer-events-none p-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-7 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-200 z-20"
            >
              <ChevronLeft className="w-5 h-5 text-[#2D2D2D]/60" />
            </button>
            <button
              onClick={() => navigate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-7 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-200 z-20"
            >
              <ChevronRight className="w-5 h-5 text-[#2D2D2D]/60" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {pages.map((p, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  background: i === current ? p.color : "rgba(0,0,0,0.12)",
                }}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-[#2D2D2D]/50 text-sm mb-5">
              Curtiu o que viu? Isso é só uma amostra. O guia completo tem 200+ páginas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-shimmer inline-flex items-center gap-2 font-bold text-lg h-14 px-10 rounded-full text-white shadow-xl animate-pulse-glow"
              style={{ background: "linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)" }}
            >
              ✈️ Quero o Guia Completo — R$ 39,90
            </motion.button>
            <p className="text-xs text-[#2D2D2D]/35 mt-3">Garantia de 7 dias • Acesso imediato • Risco zero</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
