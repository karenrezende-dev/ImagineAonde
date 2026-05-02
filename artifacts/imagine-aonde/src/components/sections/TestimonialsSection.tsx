import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ana Carolina",
    city: "São Paulo, SP",
    avatar: "AC",
    color: "#EC4899",
    text: "Esse guia mudou completamente minha viagem! Economizei muito nos parques e descobri restaurantes incríveis que nunca teria encontrado sozinha.",
    stars: 5,
  },
  {
    name: "Juliana Ferreira",
    city: "Belo Horizonte, MG",
    avatar: "JF",
    color: "#A855F7",
    text: "Fui para Orlando pela primeira vez com minha família e o guia foi essencial. Cada dica fez diferença, desde os FastPasses até as melhores fotos.",
    stars: 5,
  },
  {
    name: "Mariana Costa",
    city: "Rio de Janeiro, RJ",
    avatar: "MC",
    color: "#60A5FA",
    text: "Vou de volta a Orlando e já comprei o guia de novo para relembrar as dicas. Vale muito mais do que o preço! Suporte incrível também.",
    stars: 5,
  },
  {
    name: "Patricia Lima",
    city: "Curitiba, PR",
    avatar: "PL",
    color: "#34D399",
    text: "Fiz a viagem dos meus sonhos usando o guia. As dicas do SeaWorld e da Universal foram as melhores — atrações que eu nem sabia que existiam!",
    stars: 5,
  },
  {
    name: "Fernanda Souza",
    city: "Salvador, BA",
    avatar: "FS",
    color: "#F59E0B",
    text: "Super completo e em português! Não precisei ficar pesquisando em mil lugares diferentes. Tudo que precisei estava no guia.",
    stars: 5,
  },
  {
    name: "Camila Oliveira",
    city: "Porto Alegre, RS",
    avatar: "CO",
    color: "#8B5CF6",
    text: "O guia é sempre atualizado, então mesmo viajando meses depois da compra, as informações estavam todas corretas. Amei!",
    stars: 5,
  },
];

export function TestimonialsSection() {
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
          <span className="text-sm font-semibold text-purple-500 tracking-widest uppercase">Depoimentos</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1F1F1F" }}>
            Quem já foi adorou 💜
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Mais de 5.000 viajantes brasileiros usaram este guia para viver Orlando do seu jeito.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-clean p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}88)` }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.city}</p>
                  </div>
                </div>
                <Quote className="w-5 h-5 text-gray-200 shrink-0" />
              </div>
              <div className="flex gap-0.5">
                {[...Array(r.stars)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">"{r.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
