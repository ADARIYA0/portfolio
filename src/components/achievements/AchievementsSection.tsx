"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface Achievement {
  title: string;
  event: string;
  date: string;
  description: string;
  driveIds: string[];
}

const achievements: Achievement[] = [
  {
    title: "Juara III Bogor Innovation Award (BIA)",
    event: "Pemerintah Daerah Kota Bogor",
    date: "26 September 2025",
    description: "Meraih Juara 3 pada Bogor Innovation Award (BIA) 2025.",
    driveIds: [
      "1MLnEON1Qzjp5dVUYRUGrqtHZjrWVDdIZ", 
      "1uc_VgYVNgcNZdW592z3xB2qfofqOCPlx",
      "https://smkn4bogor.sch.id/assets/static/img/thumbnails/img_2025-09-29_23.jpg"
    ]
  },
  {
    title: "Juara III LKS SMK Tingkat Kota Bogor",
    event: "Provinsi Jawa Barat",
    date: "18 Maret 2025",
    description: "Meraih Juara III Lomba Kompetensi Siswa (LKS) SMK Tingkat Kota Bogor pada bidang IT Software Solution for Business.",
    driveIds: [
      "1dwL97jcv8MEDmRYgWnSq1pquVL-Uih81",
      "https://smkn4bogor.sch.id/assets/static/img/thumbnails/img_2025-03-19_79.jpg",
      "1Zp0ys3_shk88stQCGzWegL1BY1InJBqx"
    ]
  }
];

function isDirectUrl(url: string) {
  return url.startsWith('http');
}

function getThumbnailUrl(driveIdOrUrl: string, attempt = 0): string {
  if (isDirectUrl(driveIdOrUrl)) return driveIdOrUrl;
  switch (attempt) {
    case 1:
      return `https://lh3.googleusercontent.com/d/${driveIdOrUrl}=w800`;
    case 2:
      return `https://drive.google.com/uc?export=view&id=${driveIdOrUrl}`;
    default:
      return `https://drive.google.com/thumbnail?id=${driveIdOrUrl}&sz=w800`;
  }
}

function getPreviewUrl(driveIdOrUrl: string): string {
  return isDirectUrl(driveIdOrUrl) ? driveIdOrUrl : `https://drive.google.com/file/d/${driveIdOrUrl}/preview`;
}

export default function AchievementsSection() {
  const [selectedIds, setSelectedIds] = useState<string[] | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, number>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1,
    }));
  };

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
              const mainDriveId = achievement.driveIds[0];
              const secondDriveId = achievement.driveIds[1];
              const thirdDriveId = achievement.driveIds[2];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  className={`group flex flex-col ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"} items-center gap-6 sm:gap-10`}
                >
                  {/* Image Block */}
                  <div
                    className="relative w-full sm:w-1/2 aspect-[4/3] cursor-pointer group/image"
                    onClick={() => setSelectedIds(achievement.driveIds)}
                  >
                    {/* Background Layer 1 (Third Image) */}
                    {thirdDriveId ? (
                      <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 ease-out origin-center group-hover/image:rotate-[-5deg] group-hover/image:scale-[1.02] group-hover/image:-translate-x-3 group-hover/image:translate-y-2 opacity-0 group-hover/image:opacity-100 border border-zinc-200/50 dark:border-zinc-700/30 bg-zinc-100 dark:bg-zinc-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {(failedImages[thirdDriveId] ?? 0) >= 3 ? (
                          <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800" />
                        ) : (
                          <img src={getThumbnailUrl(thirdDriveId, failedImages[thirdDriveId] ?? 0)} alt="Third Layer" className="w-full h-full object-cover" loading="lazy" onError={() => handleImageError(thirdDriveId)} />
                        )}
                        <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay pointer-events-none" />
                      </div>
                    ) : (
                      <div className="absolute inset-0 rounded-3xl bg-blue-500/20 dark:bg-blue-400/20 border border-blue-500/30 transition-all duration-500 ease-out origin-center group-hover/image:rotate-[-5deg] group-hover/image:scale-[1.02] group-hover/image:-translate-x-3 group-hover/image:translate-y-2 opacity-0 group-hover/image:opacity-100" />
                    )}
                    
                    {/* Background Layer 2 (Second Image) */}
                    {secondDriveId ? (
                      <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 ease-out origin-center group-hover/image:rotate-[5deg] group-hover/image:scale-[1.02] group-hover/image:translate-x-3 group-hover/image:translate-y-2 opacity-0 group-hover/image:opacity-100 border border-zinc-200/50 dark:border-zinc-700/30 bg-zinc-100 dark:bg-zinc-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {(failedImages[secondDriveId] ?? 0) >= 3 ? (
                          <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800" />
                        ) : (
                          <img src={getThumbnailUrl(secondDriveId, failedImages[secondDriveId] ?? 0)} alt="Second Layer" className="w-full h-full object-cover" loading="lazy" onError={() => handleImageError(secondDriveId)} />
                        )}
                        <div className="absolute inset-0 bg-indigo-900/40 mix-blend-overlay pointer-events-none" />
                      </div>
                    ) : (
                      <div className="absolute inset-0 rounded-3xl bg-indigo-500/20 dark:bg-indigo-400/20 border border-indigo-500/30 transition-all duration-500 ease-out origin-center group-hover/image:rotate-[5deg] group-hover/image:scale-[1.02] group-hover/image:translate-x-3 group-hover/image:translate-y-2 opacity-0 group-hover/image:opacity-100" />
                    )}

                    {/* Main Image Container */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 ease-out border border-zinc-200/50 dark:border-zinc-700/30 bg-zinc-100 dark:bg-zinc-800 z-10 group-hover/image:-translate-y-3 group-hover/image:shadow-2xl group-hover/image:shadow-blue-500/20 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {(() => {
                        const attempts = failedImages[mainDriveId] ?? 0;
                        if (attempts >= 3) {
                          return (
                            <div className="w-full h-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 p-4">
                              <span className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold text-center">{achievement.title}</span>
                            </div>
                          );
                        }
                        return (
                          <img
                            src={getThumbnailUrl(mainDriveId, attempts)}
                            alt={achievement.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
                            loading="lazy"
                            onError={() => handleImageError(mainDriveId)}
                          />
                        );
                      })()}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-60 transition-opacity duration-500 group-hover/image:opacity-20 pointer-events-none" />

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-300 scale-90 group-hover/image:scale-100 pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>

                      {achievement.driveIds.length > 1 && (
                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold border border-white/20 pointer-events-none">
                          {achievement.driveIds.length} Files
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className={`flex flex-col flex-1 w-full ${isEven ? "sm:pr-4" : "sm:pl-4"}`}>
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
        {selectedIds && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIds(null)}
          >
            <div className="absolute inset-0 bg-zinc-900/95 backdrop-blur-3xl" />

            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110 z-20"
              onClick={() => setSelectedIds(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[85vh] rounded-3xl overflow-hidden bg-black/20 border border-zinc-700/50 shadow-2xl z-10 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedIds.length > 1 ? (
                <div className="w-full h-full overflow-y-auto p-4 sm:p-8 space-y-8">
                  {selectedIds.map((id, i) => (
                    isDirectUrl(id) ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img key={i} src={id} alt="Achievement" className="w-full h-auto max-h-[80vh] object-contain border border-zinc-800 rounded-xl bg-black" />
                    ) : (
                      <iframe key={i} src={getPreviewUrl(id)} className="w-full h-[60vh] md:h-[80vh] border border-zinc-800 rounded-xl bg-white" />
                    )
                  ))}
                </div>
              ) : (
                isDirectUrl(selectedIds[0]) ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={selectedIds[0]} alt="Achievement" className="w-full h-full object-contain" />
                ) : (
                  <iframe src={getPreviewUrl(selectedIds[0])} className="w-full h-full border-0 bg-white" />
                )
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
