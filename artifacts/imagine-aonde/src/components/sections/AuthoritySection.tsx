import { motion } from "framer-motion";
import { CheckCircle2, Instagram, Plane, Map } from "lucide-react";

export function AuthoritySection() {
  const stats = [
    { icon: Map, value: "15+", label: "Viagens a Orlando" },
    { icon: Instagram, value: "120k", label: "Seguidores" },
    { icon: Plane, value: "5.000+", label: "Roteiros ajudados" },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
              A autoridade que você precisa para uma viagem sem erros
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Criado pela <strong className="text-primary font-semibold">Imagine Aonde</strong>, perfil especializado em viagens com dicas reais e experiências validadas para brasileiros viajarem melhor. Não somos uma agência corporativa, somos viajantes que descobriram o caminho das pedras.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <stat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center space-x-2 text-sm font-medium text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-200"
          >
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Conteúdo 100% testado e validado em 2024</span>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}