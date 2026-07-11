"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const roles = ["Freelancer", "Backend Engineer", "DevOps Enthusiast"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center md:items-start md:text-left py-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex flex-col items-center md:items-start max-w-4xl w-full"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[600px] h-[400px] bg-blue-600/20 dark:bg-blue-500/15 blur-[90px] md:blur-[120px] rounded-full pointer-events-none -z-10" />

        <motion.div variants={item} className="mb-6 flex flex-wrap items-center gap-3">
          <div className="px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm flex items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
            Available for work
          </div>
          <motion.div layout className="px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm flex items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 overflow-hidden">
            <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-500 shrink-0" />
            <div className="relative flex items-center h-4">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={roles[currentRoleIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="whitespace-nowrap"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight"
        >
          Architecting reliable and <br className="hidden md:block" />
          scalable backend systems
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed"
        >
          A software engineer passionate about backend architecture, system automation, and seamless deployment. I specialize in Linux, Docker, and building robust server-side applications
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-blue-700 dark:bg-blue-500 px-8 font-medium text-white dark:text-zinc-950 transition-all hover:bg-blue-800 dark:hover:bg-blue-400 w-full sm:w-auto shadow-md"
          >
            <span className="mr-2">Let&apos;s talk</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/projects"
            className="group inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 px-8 font-medium text-zinc-900 dark:text-white shadow-sm transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 w-full sm:w-auto"
          >
            <span className="mr-2">View Projects</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div variants={item} className="mt-12 md:mt-20 flex items-center gap-6 text-zinc-500 dark:text-zinc-500">
          <p className="text-sm font-medium">Follow me on</p>
          <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-800" />
          <Link href="https://github.com/ADARIYA0" target="_blank" className="hover:text-blue-700 dark:hover:text-white transition-colors" aria-label="GitHub">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/adrian-anugerah" target="_blank" className="hover:text-blue-700 dark:hover:text-white transition-colors" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
