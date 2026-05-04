import { useState } from "react";
import { motion } from "framer-motion";

const GREETING_TEXT = " ";

export function GreetingComponent({ className = "" }: { className?: string }) {
  const [isAnimating, setIsAnimating] = useState(false);

  // Letter animation variants - staggered entrance on page load
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  // Wave animation on click - each letter rotates in sequence
  const waveAnimation = {
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 0.4,
    },
  };

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.h2
      className={`inline-flex cursor-default select-none ${className}`}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5 }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label="Saudação interativa: Olá eu sou Karen"
      style={{
        fontFamily: "'Great Vibes', cursive",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        color: "#1F1F1F",
      }}
    >
      {GREETING_TEXT.split("").map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          animate={isAnimating ? waveAnimation : undefined}
          style={{ display: "inline-block", whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
}

export default GreetingComponent;