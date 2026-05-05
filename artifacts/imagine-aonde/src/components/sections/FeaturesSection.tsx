import { motion } from "framer-motion";
import { CalendarCheck, Headphones, RefreshCw, BookOpen, Globe } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-purple-500 tracking-widest uppercase">Sobre o guia</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-800">
            Como funciona
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: BookOpen, title: "Completo", desc: "Tudo que você precisa em um só lugar" },
            { icon: RefreshCw, title: "Atualizado", desc: "Sempre com informações recentes" },
            { icon: Headphones, title: "Suporte", desc: "Tire suas dúvidas a qualquer momento" },
            { icon: Globe, title: "Para brasileiros", desc: "Em português, do Brasil" },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <Icon className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}