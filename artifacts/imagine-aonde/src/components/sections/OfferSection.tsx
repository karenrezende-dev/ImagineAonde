import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle2, CalendarCheck, Headphones, RefreshCw } from "lucide-react";

export function OfferSection() {
  const [time, setTime] = useState({ h: 4, m: 0, s: 0 });

  useEffect(() => {
    const key = "urgency_end";
    const stored = localStorage.getItem(key);
    let end: number;
    if (stored) end = parseInt(stored, 10);
    else { end = Date.now() + 4 * 60 * 60 * 1000; localStorage.setItem(key, String(end)); }
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      setTime({ h: Math.floor(diff / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = (n: number) => n.toString().padStart(2, "0");

  const includes = [
    "Orlando completo — Disney, Universal, SeaWorld",
    "Roteiros prontos por número de dias",
    "Dicas de economy em dólar",
    "Melhores restaurantes e onde comer",
    "Outlets e compras sem erro",
    "Transporte, hospedagem e logística",
    "Guia sempre atualizado",
    "Acesso por 1 ano completo",
    "Suporte exclusivo para dúvidas",
  ];

  return (
    <section id="comprar" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-pink-500 tracking-widest uppercase">Oferta especial</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1F1F1F" }}>
            Comece sua viagem agora
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Includes list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-semibold text-gray-800 text-lg">O que você recebe:</h3>
            <ul className="space-y-3">
              {includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#A855F7" }} />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { icon: CalendarCheck, label: "1 ano de acesso", color: "#EC4899" },
                { icon: Headphones, label: "Suporte exclusivo", color: "#A855F7" },
                { icon: RefreshCw, label: "Sempre atualizado", color: "#60A5FA" },
              ].map(({ icon: Icon, label, color }, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-2xl text-center"
                  style={{ background: `${color}10`, border: `1px solid ${color}25` }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                  <span className="text-xs font-medium text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Offer card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #FDF4FF 0%, #FFF0F8 100%)",
                border: "1.5px solid #E9D5FF",
                boxShadow: "0 8px 40px rgba(168,85,247,0.1)",
              }}
            >
              {/* Countdown */}
              <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-pink-100 shadow-sm">
                <div>
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Oferta expira em</p>
                  <div className="font-mono font-bold text-xl text-gray-800 tracking-wider">
                    {fmt(time.h)}:{fmt(time.m)}:{fmt(time.s)}
                  </div>
                </div>
                <div className="h-8 w-px bg-pink-100 mx-1" />
                <p className="text-xs text-gray-500">Preço promocional por tempo limitado</p>
              </div>

              {/* Price */}
              <div className="text-center">
                <p className="text-sm text-gray-400 line-through mb-1">De R$ 97,00</p>
                <div className="flex items-end justify-center gap-2">
                  <span className="text-lg font-semibold text-gray-600">Por apenas</span>
                </div>
                <div className="flex items-baseline justify-center gap-1 mt-1">
                  <span className="text-2xl font-bold text-gray-600">R$</span>
                  <span className="text-6xl font-bold" style={{ color: "#EC4899" }}>29</span>
                  <span className="text-2xl font-bold" style={{ color: "#EC4899" }}>,90</span>
                </div>
                <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mt-2">
                  🏷 70% de desconto
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("https://pay.hotmart.com/example", "_blank")}
                className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2"
              >
                ✈️ Quero meu guia agora
              </motion.button>

              {/* Guarantees */}
              <div className="flex items-center justify-center gap-5 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-green-500" />
                  <span>Pagamento seguro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>7 dias de garantia</span>
                </div>
              </div>

              <p className="text-center text-xs text-gray-400">
                Acesso imediato após a compra · Disponível 24h por dia
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
