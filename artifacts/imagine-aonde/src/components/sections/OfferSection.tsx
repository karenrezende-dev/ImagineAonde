import { motion } from "framer-motion";
import { CheckCircle2, Headphones, RefreshCw } from "lucide-react";

export function OfferSection() {
  const includes = [
    "Orlando completo — Disney, Universal, SeaWorld",
    "Roteiros prontos por número de dias",
    "Dicas de economia em dólar",
    "Outlets e compras sem erro",
    "Transporte, hospedagem e logística",
    "Suporte exclusivo para dúvidas",
  ];

  return (
    <section id="comprar" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1F1F1F" }}>
            O que está incluído no guia
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Includes list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-semibold text-gray-800 text-lg">O que você recebe:</h3>
            <ul className="space-y-3">
              {includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#A855F7" }} />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { icon: Headphones, label: "Suporte exclusivo", color: "#A855F7" },
                { icon: RefreshCw, label: "Sempre atualizado", color: "#60A5FA" },
              ].map(({ icon: Icon, label, color }, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-2xl text-center"
                  style={{ background: `${color}10`, border: `1px solid ${color}25` }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                  <span className="text-xs font-medium text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}