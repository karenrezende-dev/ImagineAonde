import { motion } from "framer-motion";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 scroll-mt-[70px]"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            💬 Fale comigo
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
            Tem alguma dúvida?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl mx-auto text-lg">
            Estou aqui para ajudar! Entre em contato pelo canal de sua preferência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col items-center gap-4 p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-1">WhatsApp</h3>
              <p className="text-sm text-gray-500">Responder mais rápido</p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:contato@imagineaonde.com.br"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center gap-4 p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
              <Mail className="w-8 h-8 text-purple-500" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-1">E-mail</h3>
              <p className="text-sm text-gray-500">Para dúvidas detalhadas</p>
            </div>
          </motion.a>

          <motion.a
            href="https://instagram.com/imagineaonde"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center gap-4 p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-1">Instagram</h3>
              <p className="text-sm text-gray-500">Siga para dicas diárias</p>
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-purple-100 text-purple-600 text-sm font-medium shadow-sm">
            <HelpCircle className="w-4 h-4" />
            <span>Respondemos em até 24 horas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}