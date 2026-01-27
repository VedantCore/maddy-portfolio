"use client";
import React, { use } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoArrowBack, IoPlay } from 'react-icons/io5';
import { projects } from '../../data';
import FadeIn from '../../components/FadeIn';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // Check the Next.js version notes for params handling.
  // In Next.js 15+, params in page components are promises.
  // We should unwrap it using React.use() - though standard destructuring often works in older versions, 
  // let's follow the modern convention if this is strict. 
  // However, simpler is just `params: { slug: string }` if we aren't sure of version.
  // Since I saw `next: 16.1.5` in package.json, we need to treat params as a Promise.
  
  const { slug } = use(params);
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white pb-20">
      
      {/* Header / Nav */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
           <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-purple-600 transition-colors">
             <IoArrowBack className="w-5 h-5" />
             <span>Back to Portfolio</span>
           </Link>
           <span className="text-sm font-bold opacity-50">{project.category}</span>
        </div>
      </div>

      {/* Hero Content */}
      <section className="px-4 md:px-8 py-12 md:py-20 max-w-4xl mx-auto text-center">
        <FadeIn>
           <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm font-medium mb-6">
              {project.category}
           </span>
           <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
             {project.title}
           </h1>
           <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
             {project.description}
           </p>
        </FadeIn>
      </section>

      {/* Video Grid */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {project.media.map((item, index) => (
             <FadeIn key={index} delay={index * 0.1}>
               <div className="group relative aspect-[9/16] bg-neutral-900 rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                  
                  {/* LOCAL VIDEO */}
                  {item.type === 'local' && (
                    <>
                      <video
                        src={item.url}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        controls
                        playsInline
                        loop
                      />
                      <div className="absolute top-4 right-4 z-10 pointer-events-none">
                        <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/70">
                          <IoPlay className="w-4 h-4 ml-0.5" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* YOUTUBE EMBED */}
                  {item.type === 'youtube' && (
                    <iframe
                      src={`https://www.youtube.com/embed/${item.url}?modestbranding=1&rel=0`}
                      className="w-full h-full"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}

                  {/* INSTAGRAM EMBED */}
                  {item.type === 'instagram' && (
                    <iframe 
                      src={`https://www.instagram.com/reel/${item.url}/embed`}
                      className="w-full h-full bg-white"
                      allowFullScreen
                    ></iframe>
                    // Note: Instagram embeds often require specific sizing or scripts. 
                    // The /embed endpoint is a clean way to get the post content.
                  )}

               </div>
             </FadeIn>
          ))}
        </div>
      </section>

    </main>
  );
}
