"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Trophy } from "lucide-react";

const educations = [
  {
    institution: "Politeknik Elektronika Negeri Surabaya",
    degree: "Bachelor of Informatics Engineering",
    period: "2026 - Present",
    icon: GraduationCap,
    iconSize: "w-5 h-5"
  },
  {
    institution: "SMKN 4 Bogor",
    degree: "Software Engineering Major",
    period: "2023 - 2026",
    gpa: "88,62 / 100",
    description: "Established core programming competencies through C++, Java, and foundational web technologies. Engaged in multiple regional software development contests.",
    achievements: [
      "Achieved 3rd Place at LKS 2025 IT Software Solution competition with a mobile attendance application.",
      "Won 3rd Place at Bogor Innovation Award 2025 for TaniPintar, an IoT-integrated mobile app for soil monitoring.",
      "Scored 95 on final Competency Test (UjiKom/UKK) by developing an integrated Event Management platform.",
      "Led Student IT Committee and delivered a company website for Leanbot-AICI during industry internship."
    ],
    icon: BookOpen,
    iconSize: "w-5 h-5"
  }
];

export default function EducationSection() {
  return (
    <section className="py-20 md:py-32 relative" id="education">
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
            03. Education
          </motion.h2>
        </div>

        <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-12">
          {educations.map((edu, index) => {
            const Icon = edu.icon;
            const iconSize = edu.iconSize || "w-5 h-5";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row md:gap-8"
              >
                {/* Timeline icon and connecting line */}
                <div className="hidden md:block absolute -left-[3.25rem] xl:-left-[4.25rem] top-1">
                  <div className="w-10 h-10 rounded-full border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-zinc-950 z-10 flex items-center justify-center relative">
                    <Icon className={`${iconSize} text-blue-600 dark:text-blue-500`} />
                  </div>
                  {/* Vertical line connecting to next icon - only show if not last item */}
                  {index !== educations.length - 1 && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-10 w-px bg-zinc-200 dark:bg-zinc-800 md:h-[130px] lg:h-[120px]" />
                  )}
                </div>

                <div className="md:w-1/4 mb-4 md:mb-0 pt-2">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 font-mono block mb-1">
                    {edu.period}
                  </span>
                  {edu.gpa && (
                    <span className="inline-block px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 text-xs font-semibold text-blue-700 dark:text-blue-300">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>

                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {edu.institution}
                  </div>

                  {edu.description && (
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg mb-6">
                      {edu.description}
                    </p>
                  )}

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-amber-500" />
                        Key Achievements
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
