import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Recebo o guia na hora?",
    a: "Sim! Assim que o pagamento for aprovado (Pix ou Cartão é instantâneo), você receberá o link para baixar o e-book no seu e-mail em segundos.",
    emoji: "⚡"
  },
  {
    q: "Serve para quem está indo pela primeira vez?",
    a: "Com certeza! O guia foi criado exatamente para pegar na sua mão e evitar os erros clássicos de quem vai pela primeira vez, explicando tudo do zero de forma bem didática.",
    emoji: "🙋"
  },
  {
    q: "Posso usar no celular durante a viagem?",
    a: "Sim, o arquivo é em formato PDF otimizado, ideal para ler no celular, tablet ou computador. Você pode baixar e consultar offline durante toda a viagem.",
    emoji: "📱"
  },
  {
    q: "Tem roteiro para quem viaja com crianças?",
    a: "Sim! Os roteiros prontos possuem indicações e adaptações para quem viaja com crianças pequenas, idosos ou apenas adultos. Tem opção para todos os perfis.",
    emoji: "👨‍👩‍👧‍👦"
  },
  {
    q: "Vale para casal sem filhos?",
    a: "Totalmente. Destacamos restaurantes românticos, atrações mais radicais, dicas de vida noturna e experiências exclusivas perfeitas para casais.",
    emoji: "💑"
  },
  {
    q: "Tem garantia de devolução?",
    a: "Sim. Você tem 7 dias de garantia incondicional. Se comprar, ler e achar que não te ajudou em nada, basta enviar um e-mail que devolvemos 100% do seu dinheiro. Sem perguntas.",
    emoji: "🛡️"
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-pink-200 bg-gradient-to-br from-pink-50/80 to-purple-50/50 shadow-md"
          : "border-[#2D2D2D]/10 bg-white hover:border-pink-200 hover:shadow-sm"
      }`}
      data-testid={`faq-item-${index}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{faq.emoji}</span>
          <span className={`font-semibold text-base transition-colors ${open ? "text-pink-700" : "text-[#2D2D2D]"}`}>
            {faq.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${open ? "text-pink-500" : "text-[#2D2D2D]/40"}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6 pl-16">
              <p className="text-[#2D2D2D]/70 leading-relaxed font-light">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(243,229,245,0.7) 0%, transparent 60%)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-pink-500 mb-3">Tire suas dúvidas</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] leading-tight mb-4">
            Perguntas{" "}
            <span className="gradient-text-pink italic">Frequentes</span>
          </h2>
          <div className="section-divider mb-5"></div>
          <p className="text-lg text-[#2D2D2D]/60 font-light">
            Tudo o que você precisa saber antes de comprar.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[#2D2D2D]/55 mb-4">Ainda tem dúvidas? Fale com a gente.</p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sm text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
            style={{ background: "#25D366" }}
          >
            💬 Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
