"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string | null;
  driveId: string | null;
}

const certifications: Certification[] = [
  {
    name: "Bootcamp BIA STEP",
    issuer: "Pemerintah Daerah Kota Bogor",
    date: "29 Oktober 2025",
    credentialId: null,
    driveId: "1R0vcuvMlFc9XXT5f1n-x6AmKp6gclIia",
  },
  {
    name: "Participant of Junior Competitive Programming",
    issuer: "CodeFest 001",
    date: "14 Mei 2025",
    credentialId: null,
    driveId: "1j3pPF1S7wCiKvIXeB88ZYnkIiEZwYl9d",
  },
  {
    name: "Webinar Series #53: PHP di 2024, Emang Masih Laku?",
    issuer: "Dunia Coding",
    date: "29 Februari 2024",
    credentialId: null,
    driveId: "1-Kln6d2QWeb8zad_ecKRpoxhNlgzdfHl",
  },
  {
    name: "Sertifikat Praktik Kerja Lapangan (PKL)",
    issuer: "Artificial Intelligence Center Indonesia (AiCI)",
    date: "April 2026",
    credentialId: "007/MGN/AICI/IV/2026",
    driveId: "1upGIRuWS3-3kDaTQH-CTAibGglGewnlF",
  },
  {
    name: "Penghargaan Prestasi Bidang Akademik",
    issuer: "SMKN 4 Bogor",
    date: "21 Mei 2026",
    credentialId: null,
    driveId: "1evumIgXAoTbopLbbBgAqCey9XrFu1gkO",
  },
  {
    name: "Penghargaan Anggota Ekstrakurikuler Inovasi IT",
    issuer: "SMKN 4 Bogor",
    date: "21 Mei 2026",
    credentialId: null,
    driveId: "1a2V3h_Z2ooSdPTfU_CzIL-MvuwO1awGm",
  },
  {
    name: "Red Hat Application Development I: Programming in Java EE (AD183)",
    issuer: "Red Hat Academy",
    date: "November 2024",
    credentialId: null,
    driveId: "1hlk60ky-mIxoex7C4bQ_8RDVWXu9rK4h",
  },
  {
    name: "Olimpiade Bahasa Indonesia",
    issuer: "Lembaga Sains Terapan",
    date: "16 Juni 2026",
    credentialId: "004-1128-SMA/Esrf/Olimbas/VI/2026",
    driveId: "1_d_BD8jz28CBDil3COtZmuX3hQRn3vZC",
  },
  {
    name: "Sehari Belajar Menulis Esai",
    issuer: "Pikiran Rakyat",
    date: "5 Juli 2026",
    credentialId: "0997/SP/EI/VII/2026",
    driveId: "1dFPmBClMVjhmD5X6z6P8GPQYiMbIAsfR",
  },
  {
    name: "Introduction to IT Programming: Video Games",
    issuer: "Accelist Edukasi Indonesia",
    date: "26 Agustus 2023",
    credentialId: null,
    driveId: "1-ZOqK8qun7jZdUtfb8Bw23mdemV7roXS",
  },
  {
    name: "Webinar ORM with Sequelize + Express and Node JS",
    issuer: "Skilvul",
    date: "16 Februari 2024",
    credentialId: null,
    driveId: "1-Zni30XY0nTg2LrGA81Uf4YDU8YUJ6Qj",
  },
  {
    name: "Workshop NodeJS: Membuat CRUD Basic RESTful API",
    issuer: "Dunia Coding",
    date: "17 Mei 2024",
    credentialId: null,
    driveId: "1KrgQIIjWf5oot-vti3rTKCX-PxTZ31Qi",
  },
  {
    name: "Introduction to JavaScript",
    issuer: "sololearn",
    date: "18 Januari 2024",
    credentialId: "CC-VEDL8RIT",
    driveId: "1-Ovr_0SMu-RuczxO5vZWcgfLLJ6yZdMr",
  },
  {
    name: "PHP",
    issuer: "sololearn",
    date: "10 Juli 2023",
    credentialId: "CT-EHH1JMVH",
    driveId: "1-Xax6MKIgOdgy2vYAB9gX9BpFQMSp8eC",
  },
  {
    name: "Introduction to C++",
    issuer: "sololearn",
    date: "22 April 2025",
    credentialId: "CC-MFLDNDXQ",
    driveId: "1k6pbG652upnvcZ6sezU9yrh4OqmpO-br",
  },
  {
    name: "Introduction to C#",
    issuer: "sololearn",
    date: "27 Oktober 2024",
    credentialId: "CC-R8NC7JXM",
    driveId: "1DHEc5COTfjud1mt88reXQERXrHTmq1Jj",
  },
  {
    name: "Introduction to HTML",
    issuer: "sololearn",
    date: "08 Juli 2023",
    credentialId: "CC-PHPU8TZH",
    driveId: "1-eCc-WKRawXdFhB8ZUlHH7UBAswJwCJF",
  },
  {
    name: "Introduction to CSS",
    issuer: "sololearn",
    date: "09 Juli 2023",
    credentialId: "CC-TBUWNWYU",
    driveId: "1-gAXrsX9i8KPgnDEIsDkSGv3OzsD2_Kg",
  }
];

function isDirectUrl(url: string | null) {
  return url ? url.startsWith('http') : false;
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

export default function CertificationsSection() {
  const [selectedDriveId, setSelectedDriveId] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, number>>({}); 

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1,
    }));
  };

  return (
    <>
      <section className="pb-20 relative" id="certifications">
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
              02. Certifications
            </motion.h2>
          </div>

          <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:shadow-md transition-all duration-300"
              >
                {cert.driveId ? (
                  <div
                    className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden cursor-pointer bg-zinc-100 dark:bg-zinc-800"
                    onClick={() => setSelectedDriveId(cert.driveId)}
                  >
                    {(() => {
                      const attempts = failedImages[cert.driveId] ?? 0;
                      if (attempts >= 3) {
                        // All thumbnail URLs failed — show styled placeholder
                        return (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-200 dark:bg-zinc-800 p-6 text-center transition-transform duration-500 group-hover:scale-105">
                            <span className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold mb-2 leading-relaxed line-clamp-3">{cert.name}</span>
                            <span className="text-zinc-400 dark:text-zinc-500 text-[10px]">Preview not available</span>
                          </div>
                        );
                      }
                      return (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={getThumbnailUrl(cert.driveId, attempts)}
                          alt={cert.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={() => handleImageError(cert.driveId!)}
                        />
                      );
                    })()}
                    
                    <div className="absolute inset-0 bg-black/5 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-semibold text-white shadow-sm pointer-events-none">
                      {cert.date}
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full aspect-[4/3] rounded-t-2xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <span className="text-zinc-400 dark:text-zinc-500 text-xs font-medium">No Preview</span>
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-semibold text-white shadow-sm">
                      {cert.date}
                    </div>
                  </div>
                )}

                <div className="flex-1 flex flex-col p-4 md:p-5 relative z-10 bg-zinc-50 dark:bg-zinc-900/40 rounded-b-2xl">
                  <div className="mb-3">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.name}
                    </h3>
                    <div className="text-xs font-medium text-blue-600 dark:text-blue-500 mt-1.5">
                      {cert.issuer}
                    </div>
                  </div>

                  {cert.credentialId && (
                    <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-500 font-mono truncate">
                        ID: {cert.credentialId}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedDriveId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedDriveId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {isDirectUrl(selectedDriveId) ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={selectedDriveId} alt="Certification" className="w-full h-full object-contain" />
              ) : (
                <iframe src={getPreviewUrl(selectedDriveId)} className="w-full h-full border-0 bg-white" />
              )}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors z-10"
                onClick={() => setSelectedDriveId(null)}
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
