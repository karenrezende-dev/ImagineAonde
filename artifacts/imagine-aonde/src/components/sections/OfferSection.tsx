import { motion } from "framer-motion";
import { ShieldCheck, Lock, CreditCard, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OfferSection() {
  return (
    <section id="comprar" className="py-24 relative scroll-mt-10 overflow-hidden" style={{ background: "linear-gradient(180deg, #f0f9ff 0%, #faf5ff 100%)" }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100"
        >
          <div className="grid md:grid-cols-2">

            {/* Left panel — gradient */}
            <div className="p-10 md:p-12 flex flex-col justify-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #7b1fa2, #ad1457, #0288d1)" }}>
              <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')" }} />
              <div className="relative z-10 text-center md:text-left space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-2">
                  <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-200" />
                  <span className="text-sm font-semibold text-white">Acesso Imediato</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white leading-tight">
                  Sua viagem dos sonhos começa aqui.
                </h2>

                <ul className="space-y-3 pt-2">
                  {["Guia Completo em PDF", "Acesso vitalício", "Atualizações gratuitas 2024", "Suporte VIP via WhatsApp"].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                      <span className="text-white/90 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right panel — price */}
            <div className="p-10 md:p-12 flex flex-col justify-center items-center text-center">
              <p className="text-purple-500 font-semibold uppercase tracking-widest text-xs mb-3">Oferta Especial</p>

              <div className="flex flex-col items-center justify-center mb-8">
                <span className="text-gray-400 line-through text-2xl font-medium mb-1">R$ 97,00</span>
                <div className="flex items-start text-pink-600">
                  <span className="text-3xl font-bold mt-2 mr-1">R$</span>
                  <span className="text-7xl font-bold font-serif tracking-tighter leading-none">29</span>
                  <span className="text-3xl font-bold mt-2 ml-1">,90</span>
                </div>
                <span className="text-sm text-emerald-700 font-bold mt-3 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full">
                  Você economiza R$ 67,10
                </span>
              </div>

              <Button
                size="lg"
                className="w-full max-w-sm font-bold text-xl h-16 rounded-2xl shadow-xl text-white transition-all hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0)",
                  boxShadow: "0 12px 40px -10px rgba(233,30,99,0.50)",
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
                onClick={() => window.open("https://pay.hotmart.com/example", "_blank")}
                data-testid="button-buy-ebook"
              >
                QUERO MEU EBOOK AGORA
              </Button>

              <div className="mt-8 flex flex-col items-center space-y-4 w-full">
                <div className="flex items-center space-x-2 text-purple-500 text-sm">
                  <Lock className="w-4 h-4 text-emerald-500" />
                  <span>Pagamento 100% Seguro</span>
                  <span className="text-purple-200">•</span>
                  <CreditCard className="w-4 h-4 text-purple-400" />
                  <span>Pix, Boleto ou Cartão</span>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-2xl border border-purple-100 bg-purple-50 w-full max-w-sm text-left">
                  <ShieldCheck className="w-8 h-8 text-purple-500 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-purple-900 text-sm">Garantia de 7 dias</p>
                    <p className="text-xs text-purple-500">Se não gostar, devolvemos seu dinheiro. Risco zero.</p>
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
