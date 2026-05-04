"use client";

import { useRef, type ReactNode, type ElementType } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

/**
 * AnimatedSection - Wrapper component that animates children on scroll
 * 
 * Validates: Requirements 2.1, 2.3
 * - Fade-in-up animation when section enters viewport (0.6s)
 * - Staggered children animation (0.08s delay between each child)
 * - Respects prefers-reduced-motion
 */
export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = shouldReduceMotion
    ? {
        visible: {
          transition: { staggerChildren: 0 },
        },
      }
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          },
        },
      };

  const itemVariants: Variants = shouldReduceMotion
    ? {
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  return (
    <Component ref={ref} className={className}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <motion.div key={index} variants={itemVariants}>
                {child}
              </motion.div>
            ))
          : children && (
              <motion.div variants={itemVariants}>
                {children}
              </motion.div>
            )}
      </motion.div>
    </Component>
  );
}