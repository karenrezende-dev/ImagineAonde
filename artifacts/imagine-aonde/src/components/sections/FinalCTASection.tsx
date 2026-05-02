import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-36 relative overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(145deg, #5e0078 0%, #ad1457 45%, #0d47a1 100%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572091942004-98506da3df1f?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(145deg, rgba(94,0,120,0.90) 0%, rgba(173,20,87,0.85) 45%, rgba(13,71,161,0.88) 100%)" }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,143,177,0.8), transparent)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(165,214,167,0.8), transparent)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.15, 0.25] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,200,255,0.5), transparent)" }}
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-dark border border-white/20 rounded-full px-5 py-2 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-200" />
            <span className="text-white font-medium text-sm">Comece sua aventura hoje mesmo</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.05]">
            Sua viagem começa{" "}
            <br className="hidden md:block" />
            <em className="text-yellow-200 not-italic">antes do embarque.</em>
          </h2>

          <p className="text-xl md:text-2xl text-white/75 font-light mb-12 leading-relaxed">
            Tenha Orlando na palma da sua mão e viaje com a segurança e confiança de quem conhece todos os segredos da cidade.
          </p>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1.5 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-white/60 ml-2 font-light">+5.000 viajantes felizes</span>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: "0 0 80px -10px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-shimmer inline-flex items-center gap-3 font-bold text-2xl h-18 px-14 py-5 rounded-full text-purple-900 shadow-2xl transition-all"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #fce4ec 100%)",
              boxShadow: "0 0 60px -10px rgba(255,255,255,0.35)",
            }}
            data-testid="button-final-cta"
          >
            Comprar Agora
            <ArrowRight className="w-6 h-6" />
          </motion.button>

          <p className="mt-6 text-white/50 text-sm font-light">
            Risco Zero • Garantia de 7 dias • Acesso Imediato
          </p>

          {/* Price callout */}
          <div className="mt-8 inline-flex items-center gap-3 glass-dark border border-white/15 rounded-2xl px-6 py-3">
            <span className="text-white/50 line-through text-sm">R$ 97,00</span>
            <span className="text-yellow-300 font-serif font-bold text-2xl">R$ 29,90</span>
            <span className="bg-yellow-300/20 text-yellow-200 text-xs font-bold px-2 py-0.5 rounded-full">70% OFF</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
