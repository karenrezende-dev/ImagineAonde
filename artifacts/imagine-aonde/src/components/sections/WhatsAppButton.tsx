import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 flex items-center justify-center rounded-full shadow-2xl group"
      aria-label="Fale conosco no WhatsApp"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 8px 32px -8px rgba(37,211,102,0.5)" }}
    >
      <div className="p-4">
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
          <path d="M16 0C7.164 0 0 7.164 0 16c0 2.826.738 5.476 2.027 7.774L0 32l8.47-2.002A15.938 15.938 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.564 0-4.974-.69-7.046-1.893l-.505-.3-5.027 1.188 1.214-4.897-.33-.526A13.29 13.29 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zM23.2 19.467c-.4-.2-2.356-1.162-2.72-1.295-.364-.133-.629-.2-.893.2-.267.4-1.028 1.295-1.261 1.562-.232.267-.464.3-.864.1-.4-.2-1.688-.623-3.214-1.984-1.188-1.06-1.99-2.37-2.222-2.77-.232-.4-.025-.616.175-.815.179-.18.4-.464.6-.696.2-.232.267-.4.4-.664.133-.267.067-.5-.033-.7-.1-.2-.893-2.156-1.224-2.95-.323-.776-.65-.67-.893-.682-.232-.011-.496-.013-.76-.013-.264 0-.696.1-1.06.5-.364.4-1.391 1.359-1.391 3.315 0 1.956 1.425 3.846 1.623 4.113.2.267 2.804 4.277 6.792 5.998.95.41 1.69.654 2.268.837.952.304 1.819.261 2.504.158.764-.114 2.356-.963 2.688-1.893.333-.93.333-1.727.233-1.893-.1-.167-.364-.267-.764-.467z"/>
        </svg>
      </div>
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none hidden md:block border border-gray-100">
        💬 Dúvidas? Fale com a gente!
      </span>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: "#25D366" }}></span>
    </motion.a>
  );
}
