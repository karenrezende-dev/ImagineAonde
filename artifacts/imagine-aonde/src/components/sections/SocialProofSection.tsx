import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Economizei muito na minha viagem! As dicas de outlet e os cupons que encontrei no guia pagaram o valor do e-book umas 50 vezes. Vale MUITO a pena!",
    author: "Mariana S.",
    role: "Viajou em Jan/2025",
    avatar: "MS",
    color: "#f48fb1",
    bg: "from-pink-50 to-rose-50",
    border: "border-pink-100",
  },
  {
    text: "Melhor compra que fiz antes de viajar. Fui com meu marido e dois filhos pequenos e o roteiro pronto salvou nossa sanidade nos parques. Recomendo demais!",
    author: "Carlos E.",
    role: "Viajou em Nov/2024",
    avatar: "CE",
    color: "#ce93d8",
    bg: "from-purple-50 to-violet-50",
    border: "border-purple-100",
  },
  {
    text: "Me salvou nos outlets, vale cada centavo! Achei que sabia comprar nos EUA mas as dicas de cupons são surreais. Economizei mais de R$1.000 em compras!",
    author: "Amanda T.",
    role: "Viajou em Mar/2025",
    avatar: "AT",
    color: "#81d4fa",
    bg: "from-sky-50 to-cyan-50",
    border: "border-sky-100",
  },
  {
    text: "A Disney ficou muito mais fácil com o guia. Entendi como funcionam as filas virtuais e conseguimos ir em todas as atrações principais sem estresse!",
    author: "Juliana M.",
    role: "Primeira viagem em 2025",
    avatar: "JM",
    color: "#a5d6a7",
    bg: "from-teal-50 to-emerald-50",
    border: "border-teal-100",
  },
  {
    text: "Comprei esperando algo básico e fui surpreendida pela qualidade. As dicas de restaurantes fora dos parques foram um achado — comemos muito bem e barato!",
    author: "Fernanda L.",
    role: "Viajou com a família",
    avatar: "FL",
    color: "#ffcc80",
    bg: "from-orange-50 to-amber-50",
    border: "border-orange-100",
  },
  {
    text: "O guia de transporte me salvou. Não sabia nada sobre como se locomover em Orlando e o guia explica tudo de forma super clara. Gratidão demais!",
    author: "Roberto A.",
    role: "Viajou a trabalho",
    avatar: "RA",
    color: "#b39ddb",
    bg: "from-indigo-50 to-purple-50",
    border: "border-indigo-100",
  },
];

export function SocialProofSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #f9f0ff 0%, #fff0f5 40%, #f0f5ff 70%, #f0fff8 100%)" }}
    >
      {/* Top rainbow */}
      <div className="absolute top-0 left-0 right-0 h-1.5"
        style={{ background: "linear-gradient(90deg, #a5d6a7, #81d4fa, #ce93d8, #f48fb1, #ffcc80, #a5d6a7)" }} />

      {/* Bg orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ce93d8, transparent)" }} />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #81d4fa, transparent)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-pink-500 mb-3">Depoimentos reais</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] leading-tight mb-4">
            Quem comprou,{" "}
            <span className="gradient-text-pink italic">recomenda</span>
          </h2>
          <div className="section-divider mb-5"></div>
          <p className="text-lg text-[#2D2D2D]/60 font-light">
            Junte-se a milhares de brasileiros que transformaram suas viagens.
          </p>
        </motion.div>

        {/* Stars summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <span className="text-4xl font-serif font-bold text-[#2D2D2D]">4.9</span>
            <span className="text-[#2D2D2D]/50 ml-2 font-light">de 5 — baseado em +500 avaliações</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`flex-shrink-0 w-[300px] md:w-[360px] bg-gradient-to-br ${t.bg} border ${t.border} p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 snap-start`}
                data-testid={`testimonial-card-${i}`}
              >
                {/* Quote icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md" style={{ background: t.color }}>
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-[#2D2D2D]/75 text-base leading-relaxed mb-6 font-light italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                    style={{ background: `linear-gradient(135deg, ${t.color}, #9c27b0)` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#2D2D2D]">{t.author}</p>
                    <p className="text-sm text-[#2D2D2D]/50">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full glass border border-white/60 shadow-lg flex items-center justify-center hover:scale-110 transition-transform hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5 text-purple-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full glass border border-white/60 shadow-lg flex items-center justify-center hover:scale-110 transition-transform hidden md:flex"
          >
            <ChevronRight className="w-5 h-5 text-purple-700" />
          </button>
        </div>

        {/* Scroll hint */}
        <p className="text-center text-xs text-[#2D2D2D]/40 mt-5 md:hidden">← deslize para ver mais →</p>
      </div>
    </section>
  );
}
