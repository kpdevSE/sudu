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
import { launchHeartConfetti } from "./ConfettiLauncher";

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
      tag: "Sweet Vibes",
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
      tag: "Heart Melter",
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

  // Keyboard navigation for Lightbox
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
    launchHeartConfetti();
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
    hidden: { opacity: 0, scale: 0.5, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-28 px-3 sm:px-6 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 sm:w-[36rem] h-72 sm:h-[36rem] bg-pink-600/15 rounded-full blur-[110px] sm:blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-10 left-6 sm:left-10 w-72 sm:w-[30rem] h-72 sm:h-[30rem] bg-cyan-600/15 rounded-full blur-[100px] sm:blur-[140px] animate-float" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-panel border border-cyan-400/40 text-cyan-300 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-lg shadow-cyan-500/10"
          >
            <ImageIcon className="w-3.5 h-3.5 text-cyan-300" />
            <span>Interactive Photo Gallery</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3"
          >
            Moments Frozen <span className="text-gradient-rainbow">In Forever</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-zinc-300 max-w-xl mx-auto text-xs sm:text-sm sm:text-base mb-6 px-2"
          >
            A visual anthology celebrating your dazzling beauty, radiant smiles, and unforgettable snapshots.
          </motion.p>

          {/* Category Filter Pills (Mobile Scrollable / Flex Wrap) */}
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
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-400 shadow-lg shadow-pink-500/25 scale-105"
                    : "glass-panel text-zinc-300 hover:text-white hover:bg-white/10 border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Gallery Grid (Phone Responsive: 1 column on small phones, 2 on sm, 3 on lg) */}
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
              className="relative group cursor-pointer break-inside-avoid rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20"
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#090818]/90 via-[#090818]/25 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-wider bg-black/60 backdrop-blur-md text-pink-300 border border-white/20">
                    {photo.tag}
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => likePhoto(photo.id, e)}
                    className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-pink-400 hover:text-white hover:bg-pink-500 transition-colors border border-white/20"
                    title="Send Love"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </button>
                  <div className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <h3 className="font-display text-sm sm:text-base font-bold text-white mb-0.5 drop-shadow">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-pink-300 font-semibold">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-current" /> {photoLikes[photo.id] || 0} Adorations
                    </span>
                    <span className="text-zinc-400">Tap to expand</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Lightbox Modal (Phone Optimized) */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 hover:scale-110 active:scale-95"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 hover:scale-110 active:scale-95"
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
                className="relative max-w-3xl max-h-[85vh] w-full flex flex-col md:flex-row items-center gap-4 sm:gap-6 glass-panel rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-white/20 overflow-y-auto"
              >
                <div className="relative w-full md:w-3/5 h-[45vh] sm:h-[50vh] md:h-[65vh] rounded-xl sm:rounded-2xl overflow-hidden bg-black/40">
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
                    <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold bg-pink-500/20 text-pink-300 border border-pink-400/30 mb-2">
                      {filteredPhotos[selectedPhotoIndex].tag}
                    </div>

                    <h3 className="font-display text-lg sm:text-2xl font-bold text-white mb-2">
                      {filteredPhotos[selectedPhotoIndex].title}
                    </h3>

                    <p className="font-body text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {filteredPhotos[selectedPhotoIndex].caption}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-zinc-400">
                        Photo {selectedPhotoIndex + 1} of {filteredPhotos.length}
                      </p>
                      <p className="text-xs font-semibold text-white">
                        {photoLikes[filteredPhotos[selectedPhotoIndex].id] || 0} Adorations ❤️
                      </p>
                    </div>

                    <button
                      onClick={(e) => likePhoto(filteredPhotos[selectedPhotoIndex].id, e)}
                      className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-semibold shadow-lg shadow-pink-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
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
