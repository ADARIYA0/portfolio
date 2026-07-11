/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPhp,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiLaravel,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiMariadb,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiNpm
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const techStack = [
  { name: "VScode", category: "Tools", icon: <TbBrandVscode className="w-6 h-6 text-[#007ACC]" /> },
  { name: "PHP", category: "Programming Language", icon: <SiPhp className="w-6 h-6 text-[#777BB4]" /> },
  { name: "MySQL", category: "Database", icon: <img src="https://upload.wikimedia.org/wikipedia/id/a/a9/MySQL.png" alt="MySQL" className="w-8 h-8 object-contain" /> },
  { name: "PhpMyAdmin", category: "Tools", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/PhpMyAdmin_logo.svg" alt="PhpMyAdmin" className="w-8 h-8 object-contain" /> },
  { name: "GitHub", category: "Tools", icon: <SiGithub className="w-6 h-6 text-zinc-900 dark:text-white" /> },
  { name: "Composer", category: "Tools", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Logo-composer-transparent.png" alt="Composer" className="w-8 h-8 object-contain" /> },
  { name: "Laravel", category: "Framework & Runtime", icon: <SiLaravel className="w-6 h-6 text-[#FF2D20]" /> },
  { name: "C/C++", category: "Programming Language", icon: <SiCplusplus className="w-6 h-6 text-[#00599C]" /> },
  { name: "Android Studio", category: "Tools", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Android_Studio_Logo_(2023).svg/1280px-Android_Studio_Logo_(2023).svg.png" alt="Android Studio" className="w-8 h-8 object-contain" /> },
  { name: "Java", category: "Programming Language", icon: <img src="https://education.oracle.com/file/general/p-80-java.png" alt="Java" className="w-8 h-8 object-contain" /> },
  { name: "C#", category: "Programming Language", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1280px-C_Sharp_Logo_2023.svg.png" alt="C#" className="w-8 h-8 object-contain" /> },
  { name: "Dotnet", category: "Framework & Runtime", icon: <SiDotnet className="w-6 h-6 text-[#512BD4]" /> },
  { name: "Git", category: "Tools", icon: <SiGit className="w-6 h-6 text-[#F05032]" /> },
  { name: "Node.js", category: "Framework & Runtime", icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" /> },
  { name: "Npm", category: "Tools", icon: <SiNpm className="w-6 h-6 text-[#CB3837]" /> },
  { name: "JavaScript", category: "Programming Language", icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" /> },
  { name: "Express", category: "Framework & Runtime", icon: <SiExpress className="w-6 h-6 text-zinc-900 dark:text-white" /> },
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql className="w-6 h-6 text-[#4169E1]" /> },
  { name: "TypeScript", category: "Programming Language", icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" /> },
  { name: "MariaDB", category: "Database", icon: <SiMariadb className="w-6 h-6 text-[#003545] dark:text-white" /> },
  { name: "Supabase", category: "Database", icon: <SiSupabase className="w-6 h-6 text-[#3ECF8E]" /> },
  { name: "Go", category: "Programming Language", icon: <SiGo className="w-6 h-6 text-[#00ADD8]" /> },
  { name: "Gin", category: "Framework & Runtime", icon: <img src="https://raw.githubusercontent.com/gin-gonic/logo/master/color.png" alt="Gin" className="w-8 h-8 object-contain" /> },
];

const categories = ["All", "Programming Language", "Framework & Runtime", "Database", "Tools"];

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="py-20 md:py-32 relative" id="stack">
      <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4 lg:col-span-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider sticky top-32">
            03. Tech Stack
          </h2>
        </div>

        <div className="md:col-span-8 lg:col-span-9">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {techStack
                .filter((tech) => selectedCategory === "All" || tech.category === selectedCategory)
                .map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:bg-white dark:hover:bg-zinc-800/60 hover:shadow-md dark:hover:shadow-none overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-100/50 dark:group-hover:from-blue-500/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />

                    <div className="transition-transform duration-300 mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-sm flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
