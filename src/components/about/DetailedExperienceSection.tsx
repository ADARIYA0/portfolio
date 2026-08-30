"use client";

import { motion } from "framer-motion";

interface DetailedExperience {
  company: string;
  companyShort?: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  impacts: string[];
  tech: string[];
}

const detailedExperiences: DetailedExperience[] = [
  {
    company: "Artificial Intelligence Center Indonesia (PT Artifisial Intelegensia Indonesia)",
    companyShort: "AiCI",
    role: "Technical Support Intern",
    period: "Jan 2026 - Apr 2026",
    location: "Universitas Indonesia · On-site",
    description: "During my internship, I was responsible for setting up and maintaining robotics educational kits including uKit and uCode platforms. My role involved ensuring seamless execution of weekly training sessions and special AI Day demonstrations by supporting both instructors and participants with technical guidance.",
    impacts: [
      "Beyond core responsibilities, I contributed to general IT operations through troubleshooting hardware issues, configuring systems, and resolving technical problems to maintain smooth day-to-day activities."
    ],
    tech: ["Educational Robotics", "uKit Platform", "uCode Programming", "Technical Assistance", "IT Support"]
  },
  {
    company: "Tanipintar",
    companyShort: "TaniPintar",
    role: "Mobile Engineer",
    period: "Mar 2025 - Sep 2025",
    location: "Bogor, West Java, Indonesia · Hybrid",
    description: "Led the development of an IoT-connected mobile platform designed to revolutionize precision agriculture. The solution provides farmers with instant access to critical soil metrics such as moisture content, nutrient composition, and NPK values, empowering data-driven decisions for enhanced crop yield.",
    impacts: [
      "Cross-platform mobile development using modern frameworks",
      "Database design and management for IoT sensor data",
      "RESTful API integration and real-time data synchronization",
      "IoT device communication protocols",
      "UI/UX implementation focused on farmer usability"
    ],
    tech: ["Flutter", "Node.js", "PostgreSQL", "IoT Integration", "Agritech"]
  }
];

export default function DetailedExperienceSection() {
  return (
    <section className="py-20 md:py-32 relative" id="detailed-experience">
      <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
        <div className="md:col-span-4 lg:col-span-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider sticky top-32"
          >
            02. Detailed Experience
          </motion.h2>
        </div>

        <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-12">
          {detailedExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col gap-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 p-6 md:p-8 hover:shadow-lg dark:hover:shadow-none transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-blue-600 dark:text-blue-400 font-medium mt-1">
                    {exp.companyShort || exp.company}
                  </div>
                  {exp.location && (
                    <div className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
                      {exp.location}
                    </div>
                  )}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 text-sm font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap w-fit h-fit">
                  {exp.period}
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {exp.description}
              </p>

              {exp.impacts && exp.impacts.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                    {exp.impacts.length === 1 && !exp.impacts[0].includes('•') ? 'Additional Responsibilities' : 'Skills & Responsibilities'}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {exp.impacts.map((impact, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 mt-2.5 flex-shrink-0" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/50 flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
