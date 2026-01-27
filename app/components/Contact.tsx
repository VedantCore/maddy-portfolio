"use client";
import FadeIn from "./FadeIn";
import { SiInstagram, SiX, SiLinkedin, SiMinutemailer } from "react-icons/si";
import { IconType } from "react-icons";

interface Social {
  name: string;
  value: string;
  icon: IconType;
  link: string;
  color: string;
  bg: string;
}

const socials: Social[] = [
  {
    name: "Email",
    value: "max46878@gmail.com", // Replace with actual email
    icon: SiMinutemailer,
    link: "mailto:max46878@gmail.com",
    color: "group-hover:text-red-500",
    bg: "group-hover:bg-red-500/10",
  },
  {
    name: "Instagram",
    value: "@maddyfps17", // Replace with actual handle
    icon: SiInstagram,
    link: "https://www.instagram.com/maddyfps17/",
    color: "group-hover:text-pink-500",
    bg: "group-hover:bg-pink-500/10",
  },
  {
    name: "X (Twitter)",
    value: "@maddyfps17", // Replace with actual handle
    icon: SiX,
    link: "https://x.com",
    color: "group-hover:text-black dark:group-hover:text-white",
    bg: "group-hover:bg-black/5 dark:group-hover:bg-white/10",
  },
  {
    name: "LinkedIn",
    value: "in/ChaurvindMamodiya", // Replace with actual handle
    icon: SiLinkedin,
    link: "https://linkedin.com",
    color: "group-hover:text-blue-600",
    bg: "group-hover:bg-blue-600/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-20 py-20 max-w-6xl mx-auto">
      <FadeIn>
        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-[2.5rem] p-8 md:p-16 text-center overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white relative z-10">
              Let's create something <span className="text-purple-600 dark:text-purple-400">extraordinary.</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-12 max-w-xl mx-auto relative z-10">
              Open for freelance opportunities and collaborations. Feel free to reach out if you have a project in mind.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center justify-center p-6 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-transparent ${social.bg}`}
                >
                  <social.icon className={`w-8 h-8 mb-4 text-neutral-400 transition-colors duration-300 ${social.color}`} />
                  <span className="font-semibold text-neutral-900 dark:text-white text-sm">
                    {social.name}
                  </span>
                  <span className="text-xs text-neutral-500 mt-1">
                    {social.value}
                  </span>
                </a>
              ))}
            </div>
        </div>
      </FadeIn>
    </section>
  );
}
