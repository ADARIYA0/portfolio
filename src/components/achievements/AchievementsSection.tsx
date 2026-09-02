"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const achievements = [
  {
    title: "1st Place, National Web Design Competition",
    event: "TechFest Indonesia 2025",
    date: "August 2025",
    description: "Won first place among 500+ participants by developing an accessible, high-performance web application focused on educational equality.",
    image: "/images/certificates/dummy-award.svg"
  },
  {
    title: "Top 10 Global Finalist",
    event: "Global Hackathon 2024",
    date: "November 2024",
    description: "Developed a scalable AI-driven solution for climate change data analysis, competing against 1000+ international teams.",
    image: "/images/certificates/dummy-award.svg"
  },
  {
    title: "Best UI/UX Design",
    event: "University Tech Fest 2024",
    date: "June 2024",
    description: "Awarded for designing the most intuitive and user-friendly interface for a campus marketplace app.",
    image: "/images/certificates/dummy-award.svg"
  }
];

export default function AchievementsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="pb-24 relative" id="achievements">
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
              01. Achievements
            </motion.h2>
          </div>

          <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-12 sm:gap-16">
            {achievements.map((achievement, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  className={`group flex flex-col ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center gap-6 sm:gap-10`}
                >
                  {/* Image Block */}
                  {achievement.image && (
                    <div 
                      className="relative w-full sm:w-1/2 aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-zinc-200/50 dark:border-zinc-700/30 group-hover:-translate-y-1"
                      onClick={() => setSelectedImage(achievement.image)}
                    >
                      <Image 
                        src={achievement.image} 
                        alt={achievement.title} 
                        fill 
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-60 transition-opacity duration-500 group-hover:opacity-20" />
                      
                      {/* Hover Overlay Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                        <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Content Block */}
                  <div className={`flex flex-col flex-1 w-full ${isEven ? 'sm:pr-4' : 'sm:pl-4'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {achievement.date}
                      </div>
                      <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                        {achievement.event}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white leading-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className="mt-6 h-0.5 w-12 bg-zinc-200 dark:bg-zinc-800 group-hover:w-24 group-hover:bg-blue-500 transition-all duration-500 ease-out" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-2xl" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-[4/3] rounded-3xl overflow-hidden bg-black/50 border border-zinc-700/50 shadow-2xl z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Achievement full view" fill className="object-contain" priority />
              <button 
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-black/40 hover:bg-black/80 text-white/90 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10 hover:scale-110"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
