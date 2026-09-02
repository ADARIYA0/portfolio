"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const certifications = [
  {
    name: "Solutions Architect",
    issuer: "AWS",
    date: "Dec 2025",
    credentialId: "AWS-SAA-12345",
    link: "https://aws.amazon.com/certification",
    image: "/images/certificates/dummy-cert.svg",
  },
  {
    name: "Cloud Developer",
    issuer: "Google Cloud",
    date: "Sep 2025",
    credentialId: "GCP-PCD-67890",
    link: "https://cloud.google.com/learn/certification",
    image: "/images/certificates/dummy-cert.svg",
  },
  {
    name: "Front-End Developer",
    issuer: "Meta",
    date: "May 2025",
    credentialId: "META-FED-54321",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    image: "/images/certificates/dummy-cert.svg",
  },
  {
    name: "FE Web Dev Expert",
    issuer: "Dicoding",
    date: "Feb 2025",
    credentialId: "DICODING-FE-98765",
    link: "https://www.dicoding.com",
    image: "/images/certificates/dummy-cert.svg",
  },
  {
    name: "BE Developer Expert",
    issuer: "Dicoding",
    date: "Oct 2024",
    credentialId: "DICODING-BE-11223",
    link: "https://www.dicoding.com",
    image: "/images/certificates/dummy-cert.svg",
  },
  {
    name: "Docker Associate",
    issuer: "Docker",
    date: "Aug 2024",
    credentialId: "DCA-44556",
    link: "https://www.docker.com",
    image: "/images/certificates/dummy-cert.svg",
  }
];

export default function CertificationsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                {cert.image && (
                  <div 
                    className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(cert.image)}
                  >
                    <Image 
                      src={cert.image} 
                      alt={cert.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-semibold text-white shadow-sm">
                      {cert.date}
                    </div>
                  </div>
                )}

                <div className="flex-1 flex flex-col p-4 md:p-5">
                  <div className="mb-3">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                      {cert.name}
                    </h3>
                    <div className="text-xs font-medium text-blue-600 dark:text-blue-500 mt-1.5">
                      {cert.issuer}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5">
                      Issued: {cert.date}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-500 font-mono truncate mr-2">
                      ID: {cert.credentialId}
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex-shrink-0"
                    >
                      View <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Certificate full view" fill className="object-contain" priority />
              <button 
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                onClick={() => setSelectedImage(null)}
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
