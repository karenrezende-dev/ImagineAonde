import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572091942004-98506da3df1f?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/80" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight">
            Sua viagem começa <br className="hidden md:block" />
            <span className="text-accent italic">antes do embarque.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-light mb-12">
            Tenha Orlando na palma da mão e viaje com a segurança de quem conhece todos os segredos da cidade.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 font-bold text-xl h-16 px-12 rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
            onClick={() => document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })}
          >
            Comprar Agora
          </Button>
          
          <p className="mt-6 text-white/60 text-sm">
            Risco Zero • Garantia de 7 dias • Acesso imediato
          </p>
        </motion.div>
      </div>
    </section>
  );
}