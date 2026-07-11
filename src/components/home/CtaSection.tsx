"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 relative flex flex-col items-center md:items-start text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative flex flex-col items-center md:items-start max-w-3xl w-full"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] md:h-[400px] bg-blue-600/20 dark:bg-blue-500/15 blur-[90px] md:blur-[120px] rounded-full pointer-events-none -z-10" />
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
          Let's build something <br className="hidden sm:block" />
          amazing together
        </h2>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl">
          I'm currently available for freelance work and full-time opportunities.
          If you have a project that needs a robust backend architecture, I'd love to hear about it
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="https://t.me/adariya0"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-blue-600 dark:bg-blue-500 px-8 font-medium text-white dark:text-zinc-950 transition-all hover:bg-blue-700 dark:hover:bg-blue-400 w-full sm:w-auto shadow-[0_0_30px_rgba(37,99,235,0.2)] dark:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]"
          >
            <FaTelegramPlane className="mr-2 h-5 w-5" />
            <span className="text-base">Chat on Telegram</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>


        </div>
      </motion.div>
    </section>
  );
}
