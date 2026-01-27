"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "./TextReveal";
import { SiAdobepremierepro, SiDavinciresolve, SiAdobeaftereffects } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
} as const; // Add 'as const' to make it compatible with Framer Motion's strict Variant types

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 max-w-6xl mx-auto py-12 md:py-0">
      
      {/* Backdrop for Expanded Image */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md cursor-zoom-out"
          />
        )}
      </AnimatePresence>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start"
      >
        <motion.div
          variants={itemVariants}
          // Remove default whileHover here as it conflicts with the layout animation logic slightly
          // We can add it back conditionally or handle it within the image div
        >
          {/* 
            This container handles the positioning shift from "in-flow" to "fixed center".
            usage of `layout` prop ensures smooth transition between these states.
          */}
          <motion.div
            layout
            onClick={() => setIsExpanded(!isExpanded)}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`
              relative bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 
              rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800
              ${isExpanded 
                ? 'fixed inset-0 m-auto z-[60] w-64 h-64 md:w-96 md:h-96 cursor-zoom-out' 
                : 'w-24 h-24 md:w-32 md:h-32 mb-8 cursor-zoom-in hover:scale-105 transition-transform'
              }
            `}
          >
            {/* Placeholder Image - Replace src with your own image (e.g., /profile.jpg) */}
            <motion.img 
              layout
              src="/avatar.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 dark:text-white mb-6">
          <motion.span 
             variants={itemVariants}
             className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 inline-block mb-2"
          >
             Charuvind Mamodiya
          </motion.span>
          
          <motion.div 
            variants={itemVariants}
            className="text-lg md:text-xl font-medium text-neutral-500 dark:text-neutral-400 mb-6 flex items-center gap-3 tracking-normal"
          >
            <span>22</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
            <span>Rajasthan, IN</span>
          </motion.div>

          <div className="mb-2">
            <TextReveal text="Professional Video Editor" className="inline-block" delay={0.2} />
          </div>
          <TextReveal 
            text="Transforming visions into cinematic reality." 
            className="text-neutral-400 text-4xl md:text-6xl mt-2 leading-[1.1]" 
            delay={0.4} 
          />
        </h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed mb-8"
        >
          With over 5 years of experience, I craft engaging video content for top-tier brands in fashion, gaming, and hospitality. 
          From the initial cut to the final color grade in DaVinci Resolve and Premiere Pro, I deliver a seamless and high-quality post-production experience.
        </motion.p>
        
        {/* Software Chips - Glassmorphism */}
        <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
        >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/10 hover:border-purple-500/50 transition-all hover:bg-white/80 dark:hover:bg-white/5">
                <SiAdobepremierepro className="w-5 h-5 text-[#9999FF]" />
                <span>Premiere Pro</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/80 dark:hover:bg-white/5">
                <SiDavinciresolve className="w-5 h-5 text-blue-500" />
                <span>DaVinci Resolve</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/10 hover:border-[#D291FF]/50 transition-all hover:bg-white/80 dark:hover:bg-white/5">
                <SiAdobeaftereffects className="w-5 h-5 text-[#D291FF]" />
                <span>After Effects</span>
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
}