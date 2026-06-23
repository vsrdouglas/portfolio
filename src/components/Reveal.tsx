import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  readonly children: ReactNode;
  /** Seconds to wait before this element animates in. Used to stagger groups. */
  readonly delay?: number;
  readonly className?: string;
}

/**
 * Fades and lifts its children into place the first time they scroll into view.
 * Honours `prefers-reduced-motion`: motion-averse visitors see the content
 * appear with no movement at all.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
