"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowUp } from "lucide-react";

const WA_BASE = "/birthday/photogallery/WhatsApp Unknown 2026-10-16 at 10.47.39";

const garlandPhotos = [
  {
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.15.jpeg`,
    title: "Sunlit Soul ✨",
    rotation: "-rotate-3",
  },
  {
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.16 (1).jpeg`,
    title: "Tropical Palms 🌴",
    rotation: "rotate-2",
  },
  {
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.33.jpeg`,
    title: "Golden Hour ☀️",
    rotation: "-rotate-2",
  },
  {
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.47.jpeg`,
    title: "Road Trips 🌲",
    rotation: "rotate-3",
  },
  {
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.48.jpeg`,
    title: "Endless Laughs 🤪",
    rotation: "-rotate-2",
  },
  {
    src: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.49.jpeg`,
    title: "Café Smoothies 🍔",
    rotation: "rotate-2",
  },
];

export default function FooterSection() {
  const [wishSent, setWishSent] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinalWish = () => {
    setWishSent(true);
    setTimeout(() => setWishSent(false), 4000);
  };

  return (
    <footer className="relative pt-16 sm:pt-20 pb-24 sm:pb-28 px-3 sm:px-6 border-t border-rose-100 overflow-hidden bg-gradient-to-b from-[#fff5f8] via-[#ffffff] to-[#fff0f4]/50">
      {/* Background Floral Glow with Sunflowers, Roses, and Hearts */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-56 bg-rose-200/35 rounded-full blur-[90px]" />
        <div className="absolute top-10 left-10 text-3xl opacity-80 select-none animate-float">🌻</div>
        <div className="absolute top-14 right-12 text-2xl opacity-80 select-none animate-float-reverse">💖</div>
        <div className="absolute bottom-12 left-16 text-2xl opacity-80 select-none animate-float">🌹</div>
        <div className="absolute bottom-14 right-14 text-3xl opacity-80 select-none animate-float-reverse">🌻</div>
        <div className="absolute top-1/2 left-6 text-2xl opacity-70 select-none animate-float-reverse">💖</div>
        <div className="absolute top-1/2 right-6 text-2xl opacity-70 select-none animate-float">🌹</div>
      </div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Memory Ribbon Garland Clothesline */}
        <div className="w-full mb-10 overflow-hidden">
          <p className="text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-4 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>A Garland of Sweet Memories</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap px-2">
            {garlandPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.12, rotate: 0 }}
                className={`relative bg-white p-2 rounded-2xl border-2 border-stone-200/80 shadow-md transition-transform duration-300 ${photo.rotation}`}
              >
                {/* Clothespin accent */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-3 h-5 bg-amber-400 rounded-xs shadow-xs border border-amber-500" />

                <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden bg-stone-100">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
                <p className="font-script text-[11px] font-bold text-stone-700 mt-1 truncate max-w-[80px]">
                  {photo.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Automatic Enchanted Birthday Candle Flame & Prayer */}
        <div className="mb-6 flex flex-col items-center">
          <div className="relative w-12 h-16 flex flex-col items-center justify-end">
            {/* Candle glow */}
            <div className="absolute -top-2 w-10 h-10 bg-amber-400/40 rounded-full blur-md animate-ping" />
            {/* Candle flame */}
            <motion.div
              animate={{
                scale: [1, 1.15, 0.95, 1],
                y: [0, -2, 1, 0],
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-4 h-6 bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 rounded-full blur-[0.5px] shadow-lg shadow-amber-400/60"
            />
            {/* Candle body */}
            <div className="w-5 h-8 bg-gradient-to-b from-rose-100 to-rose-200 rounded-t-sm border border-rose-300 shadow-sm" />
          </div>
          <p className="text-xs font-semibold text-amber-900 mt-2 flex items-center gap-1">
            <span>✨ May your flame of joy burn bright forever 🎂</span>
          </p>
        </div>

        {/* Catholic Blessing Closing Headline */}
        <p className="font-script text-2xl sm:text-4xl md:text-5xl text-rose-700 mb-3 sm:mb-4 leading-relaxed px-2">
          &ldquo;May the Lord guide, protect, and bless every day of your life.&rdquo;
        </p>

        <p className="font-body text-stone-600 text-xs sm:text-sm max-w-md mb-6 sm:mb-8 leading-relaxed px-2">
          Wrapped with heartfelt prayers, unconditional love, and blessings from your family.
          Happy Birthday, our precious Sudu! 🌻🌹✝️
        </p>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 sm:p-3 rounded-full bg-white hover:bg-rose-50 text-stone-600 hover:text-rose-600 transition-all hover:scale-110 active:scale-95 border border-stone-200 shadow-sm mb-6 sm:mb-8"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs text-stone-500">
          <span>✝️ God Bless You</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-rose-600 font-medium">
            With Love &amp; Prayers for Sudu 🌻
          </span>
          <span>•</span>
          <span>Happy Birthday 2026</span>
        </div>
      </div>
    </footer>
  );
}
