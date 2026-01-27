"use client";
import FadeIn from "./FadeIn";
import Link from "next/link";
import { projects } from "../data";

export default function WorkGrid() {
  return (
    <section id="work" className="px-8 md:px-20 py-20 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-neutral-900 dark:text-white">Work Showcase</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <FadeIn 
            key={project.id} 
            delay={index * 0.1} 
            className={`${project.colSpan} group relative overflow-hidden rounded-3xl h-64 ${project.color} transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer`}
          >
            <Link 
              href={`/work/${project.slug}`}
              className="absolute inset-0 flex flex-col justify-end p-8 w-full h-full"
            >
              {/* Hover Effect Overlay with smooth gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>
              
              <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <span className="text-xs font-medium uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold mt-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {project.title}
                </h3>
              </div>
              
              {/* Arrow indicator on hover */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}