import { motion } from "framer-motion";
import { CalendarCheck, Headphones, RefreshCw, BookOpen, Download, Globe } from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    color: "#EC4899",
    bg: "#FFF0F8",
    border: "#FBCFE8",
    title: "Acesso por 1 ano",
    desc: "Você tem acesso completo ao guia por 12 meses. Volte sempre que precisar se preparar ou relembrar.",
  },
  {
    icon: Headphones,
    color: "#A855F7",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    title: "Suporte exclusivo",
    desc: "Pode perguntar! Oferecemos suporte exclusivo para tirar todas as suas dúvidas sobre a viagem.",
  },
  {
    icon: RefreshCw,
    color: "#60A5FA",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    title: "Sempre atualizado",
    desc: "O guia é atualizado constantemente com novas informações, preços, atrações e dicas fresquinhas.",
  },
  {
    icon: BookOpen,
    color: "#34D399",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    title: "Conteúdo completo",
    desc: "Disney, Universal, SeaWorld, Orlando City — tudo em um único lugar, organizado e fácil de navegar.",
  },
  {
    icon: Download,
    color: "#F59E0B",
    bg: "#FFFBEB",
    border: "#FDE68A",
    title: "Acesso imediato",
    desc: "Após a compra, o acesso é liberado instantaneamente. Comece a planejar sua viagem agora mesmo.",
  },
  {
    icon: Globe,
    color: "#8B5CF6",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    title: "Feito para brasileiros",
    desc: "Dicas em português, adaptadas à realidade de quem vem do Brasil — câmbio, compras e economia.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 section-soft">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-purple-500 tracking-widest uppercase">Por que este guia?</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1F1F1F" }}>
            Tudo pensado para você
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Não é só um PDF, é um guia vivo, com suporte real e acesso garantido por um ano.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-clean p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: f.bg, border: `1.5px solid ${f.border}` }}
                >
                  <Icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-base mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
