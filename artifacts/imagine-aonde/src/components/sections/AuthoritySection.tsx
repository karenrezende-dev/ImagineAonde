import { motion } from "framer-motion";
import { CheckCircle2, Instagram, Plane, Map } from "lucide-react";

export function AuthoritySection() {
  const stats = [
    { icon: Map, value: "15+", label: "Viagens a Orlando", color: "from-pink-400 to-rose-400", bg: "bg-pink-50", iconColor: "text-pink-500" },
    { icon: Instagram, value: "120k", label: "Seguidores", color: "from-purple-400 to-violet-500", bg: "bg-purple-50", iconColor: "text-purple-500" },
    { icon: Plane, value: "5.000+", label: "Roteiros ajudados", color: "from-sky-400 to-cyan-400", bg: "bg-sky-50", iconColor: "text-sky-500" },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #a5d6a7)" }} />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-950 font-serif">
              A autoridade que você precisa para uma viagem sem erros
            </h2>
            <p className="text-lg md:text-xl text-purple-700/80 leading-relaxed font-light">
              Criado pela <strong className="text-pink-600 font-semibold">Imagine Aonde</strong>, perfil especializado em viagens com dicas reais e experiências validadas para brasileiros viajarem melhor. Não somos uma agência corporativa, somos viajantes que descobriram o caminho das pedras.
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
                className={`flex flex-col items-center justify-center p-8 rounded-3xl ${stat.bg} border border-white shadow-sm`}
                data-testid={`stat-card-${index}`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-md`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-purple-950 mb-1">{stat.value}</h3>
                <p className="text-purple-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center space-x-2 text-sm font-medium text-green-700 bg-green-50 px-5 py-2.5 rounded-full border border-green-200"
          >
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Conteúdo 100% testado e validado em 2024</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
