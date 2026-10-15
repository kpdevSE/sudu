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
  LayoutGrid,
  Film,
} from "lucide-react";
import { launchSunflowerAndRoseConfetti } from "./ConfettiLauncher";

interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  category: "smiles" | "candids" | "specials";
  caption: string;
  tag: string;
  featured?: boolean; // Spans 2 columns on mobile for dynamic bento look!
  aspect?: string;
  rotation?: string;
}

export default function PhotoGallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"mosaic" | "reel">("mosaic");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [photoLikes, setPhotoLikes] = useState<Record<number, number>>({
    1: 42,
    2: 56,
    3: 98,
    4: 67,
    5: 49,
    6: 52,
    7: 88,
    8: 94,
  });

  const photos: GalleryPhoto[] = [
    {
      id: 3,
      src: "/birthday/home/birthday_main.jpg",
      title: "The Lady in Red",
      category: "specials",
      caption: "The breathtaking queen of the day. A vision of beauty, grace, and confidence.",
      tag: "Queen Energy 👑",
      featured: true,
      aspect: "aspect-[16/10]",
      rotation: "rotate-0",
    },
    {
      id: 1,
      src: "/birthday/photogallery/imageone.jpg",
      title: "Cozy Café Sunshine",
      category: "smiles",
      caption: "Sitting across from you, mesmerized by how effortlessly you light up the whole room.",
      tag: "Pure Elegance ✨",
      aspect: "aspect-[3/4]",
      rotation: "-rotate-1",
    },
    {
      id: 2,
      src: "/birthday/photogallery/IMG-20230616-WA0067.jpg",
      title: "Summer Breeze",
      category: "candids",
      caption: "The wind caught your hair and your sweet laughter made the entire afternoon magical.",
      tag: "Sweet Vibes 🌻",
      aspect: "aspect-[3/4]",
      rotation: "rotate-1",
    },
    {
      id: 4,
      src: "/birthday/photogallery/IMG-20230616-WA0068.jpg",
      title: "Radiant & Unfiltered",
      category: "smiles",
      caption: "Your natural, genuine smile that can instantly melt away any worry in the universe.",
      tag: "Heart Melter 🌹",
      aspect: "aspect-[4/5]",
      rotation: "-rotate-1",
    },
    {
      id: 5,
      src: "/birthday/photogallery/IMG-20230616-WA0070.jpg",
      title: "Golden Hour Glow",
      category: "smiles",
      caption: "When the evening light kissed your face and highlighted that gentle, gorgeous glow.",
      tag: "Sunset Glow 🌅",
      aspect: "aspect-[4/5]",
      rotation: "rotate-1",
    },
    {
      id: 8,
      src: "/birthday/dad/dads_photo.jpg",
      title: "Daddy's Pride & Joy",
      category: "specials",
      caption: "Feeding birthday cake to Dad—a moment of pure love and sacred blessings.",
      tag: "Family Love ✝️",
      featured: true,
      aspect: "aspect-[16/10]",
      rotation: "rotate-0",
    },
    {
      id: 6,
      src: "/birthday/photogallery/IMG-20230616-WA0071.jpg",
      title: "Daydreaming",
      category: "candids",
      caption: "Lost in your own whimsical thoughts, effortlessly looking like a work of art.",
      tag: "Dreamer 💭",
      aspect: "aspect-[3/4]",
      rotation: "-rotate-1",
    },
    {
      id: 7,
      src: "/birthday/photogallery/IMG-20230616-WA0072.jpg",
      title: "Gentle Gaze",
      category: "candids",
      caption: "Eyes filled with stars, dreams, and endless kindness.",
      tag: "Starry Eyes ⭐",
      aspect: "aspect-[3/4]",
      rotation: "rotate-1",
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

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-28 px-3 sm:px-6 overflow-hidden bg-gradient-to-b from-[#fff5f8] via-[#ffffff] to-[#fffaf6]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 sm:w-[36rem] h-72 sm:h-[36rem] bg-rose-200/35 rounded-full blur-[110px] animate-pulse-glow" />
        <div className="absolute bottom-10 left-6 sm:left-10 w-72 sm:w-[30rem] h-72 sm:h-[30rem] bg-amber-200/35 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-16 left-6 text-3xl opacity-75 select-none animate-float">🌻</div>
        <div className="absolute bottom-16 right-6 text-3xl opacity-75 select-none animate-float-reverse">🌹</div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-panel border border-rose-300 text-rose-800 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-sm"
          >
            <ImageIcon className="w-3.5 h-3.5 text-rose-600" />
            <span>Interactive Photo Collage</span>
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
            A vibrant scrapbook of your dazzling beauty, radiant smiles, and sweetest memories.
          </motion.p>

          {/* Mobile Stories Highlight Bar (Instagram Story Style) */}
          <div className="mb-6 -mx-3 px-3 overflow-x-auto scrollbar-none flex items-center justify-start sm:justify-center gap-3.5 py-2">
            {photos.map((item) => (
              <button
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="flex flex-col items-center gap-1.5 shrink-0 group focus:outline-none"
              >
                <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white bg-stone-100">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-stone-700 max-w-[68px] truncate">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* Controls Bar: Category Pills + Mobile View Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-3xl mx-auto">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {[
                { id: "all", label: "All Moments" },
                { id: "smiles", label: "Smiles ✨" },
                { id: "candids", label: "Candids 📸" },
                { id: "specials", label: "Highlights 💖" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-300 border ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white border-transparent shadow-md scale-105"
                      : "bg-white/90 text-stone-700 hover:bg-white border-stone-200 shadow-xs"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle: Mosaic Collage vs Swipe Reel */}
            <div className="flex items-center gap-1 bg-stone-100/90 p-1 rounded-full border border-stone-200">
              <button
                onClick={() => setViewMode("mosaic")}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                  viewMode === "mosaic"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-500 hover:text-stone-900"
                }`}
                title="Mosaic Collage View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Collage</span>
              </button>
              <button
                onClick={() => setViewMode("reel")}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                  viewMode === "reel"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-500 hover:text-stone-900"
                }`}
                title="Swipe Reel View"
              >
                <Film className="w-3.5 h-3.5" />
                <span>Swipe Reel</span>
              </button>
            </div>
          </div>
        </div>

        {/* VIEW 1: SUPER ASYMMETRICAL BENTO COLLAGE (2-Columns on Mobile, 3-Columns on Desktop) */}
        {viewMode === "mosaic" ? (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5"
          >
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                key={photo.id}
                onClick={() => openLightbox(photo.id)}
                className={`relative group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-white border-2 border-stone-100 shadow-md hover:shadow-xl hover:border-rose-300 transition-all duration-300 ${
                  photo.featured ? "col-span-2 aspect-[16/10] sm:aspect-[16/11]" : `${photo.aspect || "aspect-[3/4]"} col-span-1`
                } ${photo.rotation || ""}`}
              >
                {/* Golden Tape Accent on Featured Cards */}
                {photo.featured && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 px-3 py-0.5 bg-amber-300/80 backdrop-blur-md rounded-xs border border-amber-400 text-[9px] font-bold text-amber-950 uppercase tracking-widest shadow-xs">
                    ⭐ Featured Highlight ⭐
                  </div>
                )}

                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay for Text Readability on Mobile without needing hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/15 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Category Badge */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] uppercase font-bold tracking-wider bg-white/90 backdrop-blur-md text-stone-800 border border-white/80 shadow-xs">
                      {photo.tag}
                    </span>
                  </div>

                  {/* Quick Adoration Heart Button (Tappable right on mobile!) */}
                  <div className="absolute top-2 right-2 z-10">
                    <button
                      onClick={(e) => likePhoto(photo.id, e)}
                      className="p-1.5 rounded-full bg-white/90 backdrop-blur-md text-rose-500 hover:text-white hover:bg-rose-500 transition-colors border border-white/80 shadow-xs active:scale-90"
                      title="Send Love"
                      aria-label="Send adoration"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>

                  {/* Bottom Info: ALWAYS VISIBLE ON MOBILE so user doesn't miss anything! */}
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-4 z-10">
                    <h3 className="font-display text-xs sm:text-base font-bold text-white leading-tight drop-shadow-sm mb-0.5">
                      {photo.title}
                    </h3>

                    {/* Full caption visible on featured / larger cards */}
                    {photo.featured && (
                      <p className="text-[10px] sm:text-xs text-stone-200 line-clamp-2 leading-relaxed mb-1 hidden sm:block">
                        {photo.caption}
                      </p>
                    )}

                    <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-rose-300 font-semibold pt-0.5">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3 fill-current text-rose-400" />
                        <span>{photoLikes[photo.id] || 0}</span>
                      </span>
                      <span className="text-stone-300 flex items-center gap-0.5">
                        <Maximize2 className="w-2.5 h-2.5" />
                        <span>Tap</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* VIEW 2: HORIZONTAL SWIPEABLE REEL (Super fun thumb-swipe for lazy mobile users!) */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <div className="flex gap-3.5 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-1 scrollbar-none">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => openLightbox(photo.id)}
                  className="shrink-0 w-[78vw] sm:w-[340px] snap-center cursor-pointer rounded-3xl overflow-hidden bg-white p-2.5 border-2 border-stone-200/90 shadow-xl"
                >
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-stone-100 shadow-inner">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 80vw, 340px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-65" />

                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-stone-800 shadow-xs">
                        {photo.tag}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 px-1.5 flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-sm font-bold text-stone-900">{photo.title}</h4>
                      <p className="text-[11px] text-stone-500 line-clamp-1">{photo.caption}</p>
                    </div>
                    <button
                      onClick={(e) => likePhoto(photo.id, e)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold border border-rose-200 active:scale-95"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                      <span>{photoLikes[photo.id] || 0}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-stone-500 mt-1">
              👈 Swipe horizontally to flip through all memories 👉
            </p>
          </motion.div>
        )}

        {/* Interactive Lightbox Modal */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/85 backdrop-blur-xl"
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
                className="relative max-w-3xl max-h-[88vh] w-full flex flex-col md:flex-row items-center gap-4 sm:gap-6 bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/40 overflow-y-auto"
              >
                <div className="relative w-full md:w-3/5 h-[42vh] sm:h-[50vh] md:h-[65vh] rounded-2xl overflow-hidden bg-stone-100">
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
