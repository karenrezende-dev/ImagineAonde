import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #7b1fa2 0%, #ad1457 40%, #0288d1 100%)" }}>
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572091942004-98506da3df1f?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(123,31,162,0.85) 0%, rgba(173,20,87,0.80) 40%, rgba(2,136,209,0.80) 100%)" }} />

      {/* Floating glow orbs */}
      <div className="absolute top-10 left-20 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(244,143,177,0.6), transparent)" }} />
      <div className="absolute bottom-10 right-20 w-72 h-72 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(165,214,167,0.5), transparent)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-200" />
            <span className="text-white font-medium text-sm">Comece sua aventura hoje</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight">
            Sua viagem começa{" "}
            <br className="hidden md:block" />
            <span className="text-yellow-200 italic">antes do embarque.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/85 font-light mb-12">
            Tenha Orlando na palma da mão e viaje com a segurança de quem conhece todos os segredos da cidade.
          </p>

          <Button
            size="lg"
            className="font-bold text-xl h-16 px-14 rounded-full shadow-2xl text-purple-900 transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ffffff, #fce4ec)",
              boxShadow: "0 0 48px -8px rgba(255,255,255,0.4)",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
            onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-final-cta"
          >
            Comprar Agora
          </Button>

          <p className="mt-8 text-white/60 text-sm">
            Risco Zero • Garantia de 7 dias • Acesso imediato
          </p>
        </motion.div>
      </div>
    </section>
  );
}
