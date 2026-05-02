import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all group flex items-center justify-center"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        Dúvidas? Fale com a gente!
      </span>
    </motion.a>
  );
}