"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 relative" id="about">
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
            01. About Me
          </motion.h2>
        </div>

        <div className="md:col-span-8 lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6 text-zinc-600 dark:text-zinc-400"
          >
            <p className="text-2xl md:text-3xl leading-relaxed text-zinc-800 dark:text-zinc-300 font-medium mb-4">
              I'm a Software Engineer passionate about crafting robust backend systems and streamlining infrastructure with modern DevOps practices
            </p>

            <p className="text-lg leading-relaxed">
              My journey in software engineering stems from a deep curiosity about how large-scale systems operate.
              I enjoy designing robust APIs, optimizing databases, and setting up automated deployment pipelines.
              To me, the beauty of engineering lies in creating clean, maintainable systems that work flawlessly behind the scenes.
            </p>

            <p className="text-lg leading-relaxed">
              As a DevOps enthusiast, I love working with Linux, constantly exploring new ways to improve infrastructure
              and streamline automation processes. I am always eager to learn new technologies and embrace best practices to deliver
              high-quality software solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
