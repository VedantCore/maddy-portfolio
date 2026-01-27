"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: "Work", target: "#work" },
    { name: "Experience", target: "#experience" },
    { name: "Contact", target: "#contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 h-24 z-50 flex items-center justify-center pointer-events-none mt-6"
    >
      <div className="pointer-events-auto flex items-center justify-between gap-8 px-10 py-5 rounded-full border border-white/20 bg-white/10 dark:bg-black/10 backdrop-blur-xl shadow-lg ring-1 ring-black/5 dark:ring-white/5">
        
        {/* Logo */}
        <Link 
            href="/" 
            className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white hover:opacity-70 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            MADDY
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 text-base font-medium text-neutral-600 dark:text-neutral-300">
           {links.map((link) => (
             <Link 
               key={link.name} 
               href={link.target}
               className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
               onClick={(e) => {
                 e.preventDefault();
                 const element = document.querySelector(link.target);
                 if (element) {
                   element.scrollIntoView({ behavior: "smooth" });
                 }
               }}
             >
               {link.name}
             </Link>
           ))}
        </div>

        {/* Call to Action (Small) */}
        <Link
          href="#contact"
          className="hidden md:block px-6 py-2.5 text-sm font-semibold text-white bg-black dark:bg-white dark:text-black rounded-full hover:scale-105 transition-transform"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Let's Talk
        </Link>
      </div>
    </motion.nav>
  );
}
