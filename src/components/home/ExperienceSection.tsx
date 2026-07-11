"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Self-employed",
    role: "Freelance Developer & University Student",
    period: "Present",
    description: "Actively balancing academic pursuits with freelance software development, transforming client concepts into scalable digital solutions. Consistently delivering custom web and software applications while continuously expanding technical expertise in modern technology stacks.",
  },
  {
    company: "Artificial Intelligence Center Indonesia (PT Artifisial Intelegensia Indonesia)",
    role: "Technical Support Engineer (Internship)",
    period: "January 2026 - April 2026",
    description: "Spearheaded the technical setup and configuration of advanced robotics hardware (uKit and uCode) for regular educational programs and large-scale AI Day events. Delivered critical IT support and rapid hardware troubleshooting, ensuring zero technical downtime and facilitating seamless hands-on learning experiences.",
  },
  {
    company: "TaniPintar",
    role: "Mobile Engineer",
    period: "March 2025 - September 2025",
    description: "Architected and engineered a comprehensive smart farming mobile application seamlessly integrated with IoT devices. The solution empowered agricultural workers to monitor real-time soil health indicators—such as moisture, fertility, and NPK metrics—directly contributing to optimized crop yields and sustainable farming practices.",
  }
];

export default function ExperienceSection() {
  return (
    <section className="py-20 md:py-32 relative" id="experience">
      <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4 lg:col-span-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider sticky top-32"
          >
            02. Experience
          </motion.h2>
        </div>

        <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row md:gap-8"
            >
              <div className="hidden md:flex absolute -left-[3.25rem] xl:-left-[4.25rem] top-1 h-full flex-col items-center">
                <div className="w-3 h-3 rounded-full border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-zinc-950 z-10 group-hover:scale-150 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-all duration-300" />
              </div>

              <div className="md:w-1/4 mb-2 md:mb-0 pt-1">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 font-mono">
                  {exp.period}
                </span>
              </div>

              <div className="md:w-3/4 flex flex-col">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-base font-medium text-zinc-600 dark:text-zinc-300 mb-4">
                  {exp.company}
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
