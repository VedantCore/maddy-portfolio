"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeIn({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.7, 
        delay: delay, 
        ease: [0.25, 0.4, 0.25, 1] // Custom cubic-bezier for smoother animation
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}