import { motion } from "framer-motion";

const IMG = "/magic-kingdom.jpg";

function PhoneMockup({ delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
      style={{ width: 90, flexShrink: 0 }}
    >
      {/* Phone body */}
      <div
        className="relative w-full overflow-hidden flex flex-col"
        style={{
          aspectRatio: "9/19",
          background: "#18181b",
          borderRadius: "22px",
          padding: "5px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.12)",
        }}
      >
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-2 rounded-full z-20"
          style={{ background: "#18181b" }} />
        {/* Screen */}
        <div className="w-full h-full rounded-[18px] overflow-hidden relative"
          style={{ background: "#111" }}>
          <img src={IMG} alt="Magic Kingdom" className="w-full h-full object-cover" />
          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 px-2"
            style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 60%)" }}>
            <p className="text-white font-bold text-[9px] tracking-widest uppercase text-center">Orlando 🏰</p>
          </div>
        </div>
      </div>
      {/* Side button */}
      <div className="absolute right-[-3px] top-[30%] w-1 h-7 rounded-full"
        style={{ background: "#2d2d30" }} />
      <div className="absolute left-[-3px] top-[22%] w-1 h-5 rounded-full"
        style={{ background: "#2d2d30" }} />
      <div className="absolute left-[-3px] top-[32%] w-1 h-7 rounded-full"
        style={{ background: "#2d2d30" }} />
    </motion.div>
  );
}

function TabletMockup({ delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
      style={{ width: 130, flexShrink: 0 }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "3/4",
          background: "#1c1c1e",
          borderRadius: "18px",
          padding: "6px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.1)",
        }}
      >
        {/* Camera dot */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full z-20"
          style={{ background: "#333" }} />
        {/* Screen */}
        <div className="w-full h-full rounded-[14px] overflow-hidden"
          style={{ background: "#000" }}>
          <img src={IMG} alt="Magic Kingdom" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 px-3"
            style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 55%)" }}>
            <p className="text-white text-[9px] font-bold tracking-widest uppercase">Guia de Orlando</p>
            <p className="text-pink-300 text-[8px] mt-0.5">Disney · Universal · SeaWorld</p>
          </div>
        </div>
      </div>
      {/* Home button */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-1 rounded-full"
        style={{ background: "#1c1c1e" }} />
    </motion.div>
  );
}

function LaptopMockup({ delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      style={{ width: "100%", maxWidth: 360 }}
    >
      {/* Lid */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "16/10",
          background: "#1c1c1e",
          borderRadius: "12px 12px 0 0",
          padding: "8px 8px 0 8px",
          boxShadow: "0 -2px 0 rgba(255,255,255,0.08) inset",
        }}
      >
        {/* Webcam */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full z-20"
          style={{ background: "#333" }} />
        {/* Screen */}
        <div className="w-full h-full rounded-[6px] overflow-hidden" style={{ background: "#000" }}>
          <img src={IMG} alt="Magic Kingdom" className="w-full h-full object-cover object-center" />
          {/* Overlay title */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 px-4"
            style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 50%)" }}>
            <p className="text-white font-bold text-xs tracking-widest uppercase">✨ Guia Completo de Orlando</p>
            <p className="text-pink-300 text-[10px] mt-1">Disney · Universal · SeaWorld · Orlando</p>
          </div>
        </div>
      </div>
      {/* Base hinge */}
      <div className="w-full h-1.5 z-10 relative"
        style={{ background: "linear-gradient(180deg, #2a2a2d 0%, #1a1a1d 100%)" }} />
      {/* Base */}
      <div className="w-full flex items-end justify-center"
        style={{
          height: "18px",
          background: "linear-gradient(180deg, #232325 0%, #1a1a1c 100%)",
          borderRadius: "0 0 8px 8px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
        }}>
        {/* Trackpad */}
        <div className="w-16 h-3 rounded-sm mb-1"
          style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>
      {/* Shadow */}
      <div className="absolute -bottom-3 left-4 right-4 h-6 blur-lg rounded-full -z-10"
        style={{ background: "rgba(0,0,0,0.2)" }} />
    </motion.div>
  );
}

export function DeviceMockups() {
  return (
    <div className="relative flex items-end justify-center" style={{ minHeight: 300 }}>
      {/* Background glow */}
      <div className="absolute inset-0 blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, #DDD6FE 0%, #FBCFE8 50%, transparent 75%)" }} />

      {/* Layout: tablet left-behind, laptop center, phone right-front */}
      <div className="relative flex items-end justify-center gap-3">
        {/* Tablet — slightly tilted, behind */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="relative z-10 mb-2"
          style={{ transform: "rotate(-4deg)" }}
        >
          <TabletMockup delay={0.2} />
        </motion.div>

        {/* Laptop — center, front */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20"
        >
          <LaptopMockup delay={0} />
        </motion.div>

        {/* Phone — right, front */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="relative z-10 mb-4"
          style={{ transform: "rotate(3deg)" }}
        >
          <PhoneMockup delay={0.15} />
        </motion.div>
      </div>
    </div>
  );
}
