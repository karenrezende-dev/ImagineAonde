import { useState, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Para quem é esse guia?",
    a: "Para qualquer brasileiro que queira viajar a Orlando — seja pela primeira vez ou para quem já foi e quer aproveitar ainda mais. O guia é em português e pensado para a realidade de quem vem do Brasil.",
  },
  {
    q: "O guia inclui Disney, Universal e SeaWorld?",
    a: "Sim! O guia cobre Disney World (Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom), Universal Orlando (incluindo Epic Universe), SeaWorld Orlando e toda a cidade de Orlando — outlets, restaurantes, transporte e muito mais.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Você tem acesso completo por 1 ano a partir da data da compra. Durante esse período, pode acessar quantas vezes quiser e também receberá todas as atualizações do guia.",
  },
  {
    q: "O guia é atualizado com frequência?",
    a: "Sim! O guia é atualizado constantemente com novas informações, mudanças nos parques, novos preços e dicas. Você sempre terá a versão mais recente durante seu período de acesso.",
  },
  {
    q: "Como funciona o suporte exclusivo?",
    a: "Após a compra, você terá acesso ao suporte exclusivo para tirar dúvidas sobre sua viagem. Pode perguntar sobre roteiros, atrações, restaurantes ou qualquer dúvida que surgir.",
  },
  {
    q: "Tem garantia?",
    a: "Sim! Se por qualquer motivo você não ficar satisfeita, basta pedir o reembolso em até 7 dias após a compra. Sem perguntas e sem burocracia.",
  },
  {
    q: "Como acesso o guia após a compra?",
    a: "O acesso é imediato! Assim que a compra for confirmada, você receberá o link de acesso no seu e-mail. Disponível 24 horas por dia, de qualquer dispositivo.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 section-soft">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-purple-500 tracking-widest uppercase">Dúvidas frequentes</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1F1F1F" }}>
            Ainda com dúvidas?
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="card-clean overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen(open === i ? null : i);
                  }
                }}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                role="button"
                tabIndex={0}
              >
                <span className="font-medium text-gray-800 text-sm leading-snug">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-4 h-4 text-purple-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Ainda tem dúvidas? Fale comigo no WhatsApp!</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-8 py-3.5 text-sm inline-flex items-center gap-2"
          >
            ✈️ Quero meu guia — R$ 29,90
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
