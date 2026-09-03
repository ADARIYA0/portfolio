"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const recentTechnologies = [
  "TypeScript",
  "Go",
  "Node.js",
  "Linux & Bash",
  "Docker & CI/CD"
];

export default function AboutMeSection() {
  return (
    <section className="pb-16 md:pb-0" id="about-me">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-4 relative z-10">
        
        <div className="lg:col-span-8 lg:col-start-1 lg:row-start-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 lg:mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
              <span className="text-blue-600 dark:text-blue-500 font-mono text-lg md:text-xl mr-2 font-medium">01.</span>
              About Me
            </h2>
            <div className="h-px w-full md:w-64 bg-zinc-200 dark:bg-zinc-800" />
          </motion.div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 lg:row-span-2 flex justify-center lg:justify-end lg:pt-38">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 group cursor-pointer"
          >
            <div className="absolute inset-0 border-2 border-blue-600 dark:border-blue-500 rounded-xl translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />
            <div className="absolute inset-0 rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 z-10">
              <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply lg:group-hover:bg-transparent transition-colors duration-300 z-20 lg:opacity-100 opacity-0" />
              <Image
                src="/images/about-profile.jpg"
                alt="Adrian Anugerah Maulana"
                fill
                className="object-cover filter lg:grayscale lg:group-hover:grayscale-0 grayscale-0 transition-all duration-300"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                priority
              />
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-8 lg:col-start-1 lg:row-start-2 text-zinc-600 dark:text-zinc-400">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4 text-base md:text-lg leading-relaxed"
          >
            <p>
              Hello! My name is Adrian (or you can call me Iyan) and I enjoy creating things that live on the internet. My interest in software engineering started back when I was fascinated by how computers worked—it wasn&apos;t just about using them, but figuring out how the pieces fit together behind the screen.
            </p>

            <p>
              When I began my journey, I quickly realized that while creating beautiful user interfaces is rewarding, my true passion lies in the hidden layers—the databases, APIs, and servers that power the digital world. I became obsessed with performance, reliability, and how data moves across networks.
            </p>

            <p>
              Fast-forward to today, I focus on building resilient infrastructure and clean, maintainable backend services. Whether it&apos;s optimizing a slow SQL query, orchestrating Docker containers, or architecting a microservice, I approach every problem with a mindset geared towards long-term scalability and developer experience.
            </p>

            <p className="mb-2">
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 text-sm font-mono mt-2">
              {recentTechnologies.map((tech, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-500 text-xs">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
