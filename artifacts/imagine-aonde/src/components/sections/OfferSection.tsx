import { motion } from "framer-motion";
import { ShieldCheck, Lock, CreditCard, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OfferSection() {
  return (
    <section id="comprar" className="py-24 bg-gray-50 relative scroll-mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-primary/10 overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            
            <div className="p-10 md:p-12 bg-primary text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/80" />
              
              <div className="relative z-10 text-center md:text-left space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">Acesso Imediato</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight">
                  Sua viagem dos sonhos começa aqui.
                </h2>
                
                <ul className="space-y-3 pt-4">
                  {["Guia Completo em PDF", "Acesso vitalício", "Atualizações gratuitas 2024", "Suporte VIP via WhatsApp"].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-white/90 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-10 md:p-12 flex flex-col justify-center items-center text-center">
              <p className="text-gray-500 font-medium uppercase tracking-wider text-sm mb-2">Oferta Especial</p>
              
              <div className="flex flex-col items-center justify-center mb-8">
                <span className="text-gray-400 line-through text-2xl font-medium mb-1">R$ 97,00</span>
                <div className="flex items-start text-primary">
                  <span className="text-3xl font-bold mt-2 mr-1">R$</span>
                  <span className="text-7xl font-bold font-serif tracking-tighter">29</span>
                  <span className="text-3xl font-bold mt-2 ml-1">,90</span>
                </div>
                <span className="text-sm text-green-600 font-semibold mt-2 bg-green-50 px-3 py-1 rounded-full">
                  Você economiza R$ 67,10
                </span>
              </div>

              <Button 
                size="lg" 
                className="w-full max-w-sm bg-accent hover:bg-accent/90 text-primary-foreground font-bold text-xl h-16 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.5)] animate-pulse"
                style={{ animationDuration: '2s' }}
                onClick={() => window.open('https://pay.hotmart.com/example', '_blank')}
              >
                QUERO MEU EBOOK AGORA
              </Button>

              <div className="mt-8 flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <Lock className="w-4 h-4 text-green-500" />
                  <span>Pagamento 100% Seguro</span>
                  <span className="text-gray-300">•</span>
                  <CreditCard className="w-4 h-4 text-gray-400" />
                  <span>Pix, Boleto ou Cartão</span>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100 w-full max-w-sm text-left">
                  <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Garantia de 7 dias</p>
                    <p className="text-xs text-gray-500">Se não gostar, devolvemos seu dinheiro. Risco zero.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}