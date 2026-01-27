"use client";
import FadeIn from "./FadeIn";
import { SiAdobepremierepro, SiDavinciresolve, SiAdobeaftereffects } from "react-icons/si";

const experiences = [
  {
    id: 1,
    role: "Video Editor",
    company: "Edolvmedia - Remote",
    period: "Jan 2024 - March 2025",
    description: "Leading post-production for high-end commercials and brand campaigns. Managing workflow between editors, colorists, and sound designers.",
    tools: [
      { icon: SiAdobepremierepro, color: "text-[#9999FF]", name: "Premiere Pro" },
      { icon: SiDavinciresolve, color: "text-blue-500", name: "DaVinci Resolve" },
      { icon: SiAdobeaftereffects, color: "text-[#D291FF]", name: "After Effects" },
    ]
  },    
];

export default function Experience() {
  return (
    <section id="experience" className="px-8 md:px-20 py-20 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-neutral-900 dark:text-white">Work Experience</h2>
      </FadeIn>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <FadeIn key={exp.id} delay={index * 0.1}>
            <div className="group relative p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 transition-all duration-300 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-neutral-500 font-medium">{exp.company}</p>
                </div>
                <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  {exp.period}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mb-6">
                {exp.description}
              </p>
              
              {/* Tools Used */}
              <div className="flex flex-wrap gap-3">
                {exp.tools.map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm">
                    <tool.icon className={`w-4 h-4 ${tool.color}`} />
                    <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
