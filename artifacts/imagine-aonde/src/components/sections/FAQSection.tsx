import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Recebo o guia na hora?",
    a: "Sim! Assim que o pagamento for aprovado (Pix ou Cartão é instantâneo), você receberá o link para baixar o e-book no seu e-mail.",
  },
  {
    q: "Serve para quem está indo pela primeira viagem?",
    a: "Com certeza. O guia foi desenhado exatamente para pegar na sua mão e evitar os erros clássicos de quem vai pela primeira vez, explicando tudo do zero.",
  },
  {
    q: "Posso usar no celular?",
    a: "Sim, o arquivo é em formato PDF otimizado, ideal para ler no celular, tablet ou computador. Você pode baixar e consultar offline durante a viagem.",
  },
  {
    q: "Tem roteiro infantil?",
    a: "Sim! Os roteiros prontos possuem indicações e adaptações para quem viaja com crianças pequenas, idosos ou apenas adultos.",
  },
  {
    q: "Vale para casal sem filhos?",
    a: "Totalmente. Destacamos restaurantes românticos, atrações mais radicais e dicas de vida noturna perfeitas para casais.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. Você tem 7 dias de garantia incondicional. Se comprar, ler e achar que não te ajudou em nada, basta enviar um e-mail que devolvemos 100% do seu dinheiro.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(243,229,245,0.5) 0%, transparent 60%)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-purple-950 font-serif mb-4"
          >
            Perguntas Frequentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-purple-600/80"
          >
            Tudo o que você precisa saber antes de comprar.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-purple-100 rounded-2xl px-6 bg-white shadow-sm data-[state=open]:border-pink-200 data-[state=open]:bg-pink-50/30 transition-colors"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left text-base font-semibold text-purple-900 hover:text-pink-600 transition-colors py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-purple-700/80 leading-relaxed text-base pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
