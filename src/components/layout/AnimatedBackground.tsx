"use client";

import { motion } from "framer-motion";


export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
      {/* Blob 1 */}
      <motion.div
        animate={{
          x: ["-20vw", "30vw", "-10vw", "-20vw"],
          y: ["-10vh", "20vh", "30vh", "-10vh"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[20%] w-full md:w-[600px] h-[400px] bg-blue-600/10 dark:bg-blue-500/5 blur-[100px] md:blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen"
      />
      
      {/* Blob 2 */}
      <motion.div
        animate={{
          x: ["20vw", "-30vw", "10vw", "20vw"],
          y: ["20vh", "-10vh", "40vh", "20vh"],
          scale: [0.9, 1.1, 1.3, 0.9],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[30%] right-[20%] w-[500px] h-[400px] bg-blue-500/10 dark:bg-blue-400/5 blur-[100px] md:blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: ["10vw", "-20vw", "30vw", "10vw"],
          y: ["30vh", "10vh", "-20vh", "30vh"],
          scale: [1.1, 0.9, 1.2, 1.1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-[20%] left-[40%] w-[600px] h-[300px] bg-indigo-600/10 dark:bg-indigo-500/5 blur-[100px] md:blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen"
      />
    </div>
  );
}
