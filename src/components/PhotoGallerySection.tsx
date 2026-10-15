"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image as ImageIcon,
  Sparkles,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { launchHeartConfetti, launchSunflowerAndRoseConfetti } from "./ConfettiLauncher";

interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  category: "smiles" | "candids" | "specials";
  caption: string;
  tag: string;
}

export default function PhotoGallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [photoLikes, setPhotoLikes] = useState<Record<number, number>>({
    1: 42,
    2: 56,
    3: 38,
    4: 67,
    5: 49,
    6: 52,
    7: 88,
    8: 94,
  });

  const photos: GalleryPhoto[] = [
    {
      id: 1,
      src: "/birthday/photogallery/imageone.jpg",
      title: "Cozy Café Sunshine",
      category: "smiles",
      caption: "Sitting across from you, mesmerized by how effortlessly you light up the whole room.",
      tag: "Pure Elegance",
    },
    {
      id: 2,
      src: "/birthday/photogallery/IMG-20230616-WA0067.jpg",
      title: "Playful Summer Breeze",
      category: "candids",
      caption: "The wind caught your hair and your sweet laughter made the entire afternoon feel like magic.",
      tag: "Sweet Vibes 🌻",
    },
    {
      id: 3,
      src: "/birthday/home/birthday_main.jpg",
      title: "The Lady in Red",
      category: "specials",
      caption: "The breathtaking queen of the day. A vision of beauty, grace, and confidence.",
      tag: "Queen Energy 👑",
    },
    {
      id: 4,
      src: "/birthday/photogallery/IMG-20230616-WA0068.jpg",
      title: "Radiant & Unfiltered",
      category: "smiles",
      caption: "Your natural, genuine smile that can instantly melt away any worry in the universe.",
      tag: "Heart Melter 🌹",
    },
    {
      id: 5,
      src: "/birthday/photogallery/IMG-20230616-WA0070.jpg",
      title: "Golden Hour Glow",
      category: "smiles",
      caption: "When the evening light kissed your face and highlighted that gentle, gorgeous glow.",
      tag: "Sunset Glow",
    },
    {
      id: 6,
      src: "/birthday/photogallery/IMG-20230616-WA0071.jpg",
      title: "Daydreaming Thoughts",
      category: "candids",
      caption: "Lost in your own whimsical thoughts, effortlessly looking like a work of art.",
      tag: "Dreamer",
    },
    {
      id: 7,
      src: "/birthday/photogallery/IMG-20230616-WA0072.jpg",
      title: "Gentle Gaze",
      category: "candids",
      caption: "Eyes filled with stars, dreams, and endless kindness.",
      tag: "Starry Eyes",
    },
    {
      id: 8,
      src: "/birthday/dad/dads_photo.jpg",
      title: "Daddy's Pride & Joy",
      category: "specials",
      caption: "Feeding birthday cake to Dad—a moment of pure love and blessings.",
      tag: "Family Love ✝️",
    },
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (id: number) => {
    const idx = filteredPhotos.findIndex((p) => p.id === id);
    if (idx !== -1) setSelectedPhotoIndex(idx);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const showNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
  };

  const showPrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const likePhoto = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    launchSunflowerAndRoseConfetti();
  };

  const sphereContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const sphereItemVariant = {
    hidden: { opacity: 0, scale: 0.5, rotate: -4 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-28 px-3 sm:px-6 overflow-hidden bg-gradient-to-b from-[#fff5f8] via-[#ffffff] to-[#fffaf6]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 sm:w-[36rem] h-72 sm:h-[36rem] bg-rose-200/40 rounded-full blur-[110px] animate-pulse-glow" />
        <div className="absolute bottom-10 left-6 sm:left-10 w-72 sm:w-[30rem] h-72 sm:h-[30rem] bg-amber-200/40 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-panel border border-rose-300 text-rose-800 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-sm"
          >
            <ImageIcon className="w-3.5 h-3.5 text-rose-600" />
            <span>Interactive Photo Gallery</span>
            <span className="text-sm">🌹</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-3"
          >
            Moments Frozen <span className="text-gradient-rainbow">In Forever</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-stone-600 max-w-xl mx-auto text-xs sm:text-sm sm:text-base mb-6 px-2"
          >
            A visual anthology celebrating your dazzling beauty, radiant smiles, and unforgettable snapshots.
          </motion.p>

          {/* Category Filter Pills (Light Mode) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5"
          >
            {[
              { id: "all", label: "All Memories" },
              { id: "smiles", label: "Radiant Smiles ✨" },
              { id: "candids", label: "Sweet Candids 📸" },
              { id: "specials", label: "Special Highlights 💖" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white border-transparent shadow-md scale-105"
                    : "bg-white/80 text-stone-700 hover:text-stone-900 hover:bg-white border-stone-200 shadow-xs"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Gallery Grid */}
        <motion.div
          layout
          variants={sphereContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6"
        >
          {filteredPhotos.map((photo) => (
            <motion.div
              layout
              key={photo.id}
              variants={sphereItemVariant}
              onClick={() => openLightbox(photo.id)}
              className="relative group cursor-pointer break-inside-avoid rounded-2xl sm:rounded-3xl overflow-hidden bg-white border-2 border-white/80 hover:border-rose-400/80 transition-all duration-500 shadow-md hover:shadow-xl hover:shadow-rose-400/15"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-wider bg-white/90 backdrop-blur-md text-stone-800 border border-stone-200 shadow-xs">
                    {photo.tag}
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => likePhoto(photo.id, e)}
                    className="p-1.5 rounded-full bg-white/90 backdrop-blur-md text-rose-500 hover:text-white hover:bg-rose-500 transition-colors border border-white shadow-xs"
                    title="Send Love"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </button>
                  <div className="p-1.5 rounded-full bg-white/90 backdrop-blur-md text-stone-800 border border-white shadow-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <h3 className="font-display text-sm sm:text-base font-bold text-white mb-0.5 drop-shadow">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-200 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-rose-300 font-semibold">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-current" /> {photoLikes[photo.id] || 0} Adorations
                    </span>
                    <span className="text-stone-300">Tap to expand</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Lightbox Modal */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/90 backdrop-blur-xl"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 p-2 sm:p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/20"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all border border-white/20 hover:scale-110 active:scale-95"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all border border-white/20 hover:scale-110 active:scale-95"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Lightbox Content Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl max-h-[85vh] w-full flex flex-col md:flex-row items-center gap-4 sm:gap-6 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/40 overflow-y-auto"
              >
                <div className="relative w-full md:w-3/5 h-[45vh] sm:h-[50vh] md:h-[65vh] rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100">
                  <Image
                    src={filteredPhotos[selectedPhotoIndex].src}
                    alt={filteredPhotos[selectedPhotoIndex].title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                </div>

                <div className="w-full md:w-2/5 flex flex-col justify-between py-1 text-left">
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold bg-rose-100 text-rose-700 border border-rose-200 mb-2">
                      {filteredPhotos[selectedPhotoIndex].tag}
                    </div>

                    <h3 className="font-display text-lg sm:text-2xl font-bold text-stone-900 mb-2">
                      {filteredPhotos[selectedPhotoIndex].title}
                    </h3>

                    <p className="font-body text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {filteredPhotos[selectedPhotoIndex].caption}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-stone-400">
                        Photo {selectedPhotoIndex + 1} of {filteredPhotos.length}
                      </p>
                      <p className="text-xs font-semibold text-stone-700">
                        {photoLikes[filteredPhotos[selectedPhotoIndex].id] || 0} Adorations ❤️
                      </p>
                    </div>

                    <button
                      onClick={(e) => likePhoto(filteredPhotos[selectedPhotoIndex].id, e)}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-semibold shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>Send Love</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
