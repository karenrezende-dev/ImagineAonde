import { motion } from "framer-motion";
import { Check, Download, Star, Users, MapPin, Clock, Copy, Shield, Zap } from "lucide-react";

export function PurchaseSection() {
  return (
    <section
      id="comprar"
      className="py-20 bg-white scroll-mt-[70px]"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        {/* Guide Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100 shadow-lg">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  ✨ Novo formato
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Guia em formato digital
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Acesse de qualquer dispositivo, celular, tablet ou computador. 
                  Perfeito para consultar durante a viagem, mesmo sem internet.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Zap, text: "Acesso imediato" },
                    { icon: Shield, text: "7 dias de garantia" },
                    { icon: Clock, text: "1 ano de acesso" },
                  ].map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-purple-100">
                      <Icon className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-80 md:w-56 md:h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <span className="text-5xl">📖</span>
                      <p className="mt-2 font-bold">Imagine Aonde</p>
                      <p className="text-xs opacity-80">Guia de Orlando</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-xs font-bold text-gray-800">Em português</p>
                    <p className="text-[10px] text-gray-500">100% brasileiro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-purple-500 tracking-widest uppercase">Adquirir Guia</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
            Leve este guia com você
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Tenha acesso a todas as dicas e estratégias para sua viagem a Orlando. 
            O guia está disponível em formato digital para acessar quando e onde quiser.
          </p>
        </motion.div>

        

        {/* Coupon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl p-4 border-2 border-dashed border-purple-200 max-w-md mx-auto">
            <p className="text-center text-sm text-gray-600 mb-2">Use este cupom para garantir o preço com desconto:</p>
            <div className="flex items-center justify-center gap-2">
              <code className="bg-purple-50 text-purple-700 font-bold px-4 py-2 rounded-lg text-lg">
                IMAGINE10
              </code>
              <button 
                onClick={() => navigator.clipboard.writeText("IMAGINE10")}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Copiar cupom"
              >
                <Copy className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-10 border border-purple-100 max-w-lg mx-auto"
        >
          {/* Badge */}
          

          <div className="text-center mb-8">
            <p className="text-gray-400 line-through text-lg mb-1">De R$ 97,00</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold text-gray-800">R$ 39</span>
              <span className="text-2xl font-bold text-gray-600">,90</span>
            </div>
            <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mt-3">
              🏷️ 59% de desconto
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {[
              "Guia completo em português",
              "Acesso por 12 meses",
              "Sempre atualizado",
              "Suporte para dúvidas",
              "Dicas de economia em dólar",
              "Roteiros prontos por dia",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <motion.a
            href="https://pay.kiwify.com.br/seu-link-aqui"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full py-4 px-6 rounded-full text-white font-bold text-center text-lg"
            style={{ background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)" }}
          >
            Eu quero
          </motion.a>

          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Pagamento seguro
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Acesso imediato
            </span>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            7 dias de garantia. Satisfação ou dinheiro de volta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}