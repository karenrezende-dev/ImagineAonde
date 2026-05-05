import { useState, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, MessageCircle, Zap } from "lucide-react";

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
    <section id="faq" className="py-24 section-soft scroll-mt-[70px]">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-pink-500 tracking-widest uppercase bg-pink-50 px-4 py-2 rounded-full">
            <MessageCircle className="w-4 h-4" />
            Dúvidas frequentes
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1F1F1F" }}>
            Tudo o que você precisa saber
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            Tire todas as suas dúvidas antes de fazer sua compra. Estou aqui para ajudar você a realizar a viagem dos seus sonhos!
          </p>
        </motion.div>

        {/* Benefits highlight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {[
            { icon: Zap, title: "Acesso imediato", desc: "Comece a usar em minutos" },
            { icon: Check, title: "7 dias de garantia", desc: "Risco zero para você" },
            { icon: MessageCircle, title: "Suporte exclusivo", desc: "Tire dúvidas a qualquer momento" },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-bold text-gray-800">{title}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
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
                <span className="font-semibold text-gray-800 text-base pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-purple-500" />
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
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gradient-to-r from-purple-200 to-pink-200 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {faq.a}
                      </p>
                    </div>
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
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-10 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Pronto para viver a magia de Orlando?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Descubra como aproveitar Orlando ao máximo!
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary px-10 py-4 text-lg font-bold inline-flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)" }}
            >
              Eu quero
            </motion.button>
            <p className="text-xs text-gray-400 mt-4">
              🔒 Pagamento 100% seguro • 7 dias de garantia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}