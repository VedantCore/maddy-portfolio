"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-neutral-900 text-white overflow-hidden py-12 mt-12 md:py-20 md:mt-20">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center">
        
        {/* Animated Big Text */}
        <motion.div 
          className="relative w-full max-w-6xl mx-auto flex justify-center items-center py-8 md:py-24 select-none"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Main Text with masking and gradient */}
          <h1 
            className="text-[18vw] md:text-[15vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#4A8FE7] to-white/5 opacity-30 blur-sm"
          >
            MADDY
          </h1>
          
          {/* Overlay text for sharpness */}
          <h1 
             className="absolute inset-0 flex justify-center items-center text-[18vw] md:text-[15vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-t from-white/10 to-transparent mix-blend-overlay"
             aria-hidden="true"
          >
            MADDY
          </h1>
        </motion.div>

        <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
             <p className="text-sm md:text-base font-medium text-neutral-400">© {new Date().getFullYear()} Portfolio. Built with Next.js.</p>
             <p className="text-[10px] md:text-xs text-neutral-600">Designed & Developed with ♥</p>
        </div>
      </div>
    </footer>
  );
}
