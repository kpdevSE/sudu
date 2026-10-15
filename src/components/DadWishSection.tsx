"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, RotateCw, Quote, Heart, BookOpen, Camera } from "lucide-react";
import { launchFireworkConfetti, launchSunflowerAndRoseConfetti } from "./ConfettiLauncher";

export default function DadWishSection() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [autoFlipNotice, setAutoFlipNotice] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoFlippedRef = useRef(false);

  // Auto-flip for lazy readers: after 3 seconds of viewing photo, automatically reveal Dad's letter!
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !autoFlippedRef.current) {
          autoFlippedRef.current = true;
          const timer = setTimeout(() => {
            setIsFlipped(true);
            setAutoFlipNotice(true);
            launchSunflowerAndRoseConfetti();
            setTimeout(() => setAutoFlipNotice(false), 5000);
          }, 3200);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    setAutoFlipNotice(false);
  };

  return (
    <section
      ref={sectionRef}
      id="dad-wish"
      className="relative py-20 sm:py-28 px-3 sm:px-6 overflow-hidden bg-gradient-to-b from-[#fff3f6] via-[#ffffff] to-[#fffbf5]"
    >
      {/* Warm Accent Background: Sun-Kissed Gold & Soft Sky Warmth */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-6 sm:left-10 w-72 sm:w-[32rem] h-72 sm:h-[32rem] bg-amber-200/35 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-6 sm:right-10 w-80 sm:w-[36rem] h-80 sm:h-[36rem] bg-rose-200/35 rounded-full blur-[110px] animate-float" />
        <div className="absolute top-12 right-12 text-3xl opacity-75 select-none animate-float">🌻</div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-panel-gold border border-amber-300 text-amber-900 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-sm"
          >
            <span className="text-sm">✝️</span>
            <span>A Father&apos;s Eternal Pride &amp; Catholic Blessing</span>
            <span className="text-sm">🌻</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-3"
          >
            Dad&apos;s Wish <span className="text-gradient-gold">For His Little Girl</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-stone-600 max-w-xl mx-auto text-xs sm:text-sm sm:text-base px-2"
          >
            Auto-flips automatically so you don&apos;t have to lift a finger to read Dad&apos;s heartfelt prayer!
          </motion.p>

          {/* Quick Effortless View Switcher Tabs */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <button
              onClick={() => setIsFlipped(false)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                !isFlipped
                  ? "bg-amber-500 text-white shadow-md scale-105"
                  : "bg-white/90 text-stone-600 hover:bg-white border border-stone-200"
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>🎂 Cake Photo</span>
            </button>
            <button
              onClick={() => setIsFlipped(true)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                isFlipped
                  ? "bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-md scale-105"
                  : "bg-white/90 text-stone-600 hover:bg-white border border-stone-200"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>💌 Dad&apos;s Letter &amp; Prayer</span>
            </button>
          </div>

          {/* Auto-flip notification toast */}
          {autoFlipNotice && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300 shadow-sm"
            >
              <span>✨ Auto-opened Dad&apos;s letter for you! 💖</span>
            </motion.div>
          )}
        </div>

        {/* 3D Flip Card Container Effect (Light Mode & Phone Responsive) */}
        <div className="perspective-1000 w-full max-w-2xl mx-auto min-h-[530px] sm:min-h-[500px]">
          <motion.div
            className="relative w-full h-full transform-style-3d cursor-pointer transition-transform duration-700 ease-out"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            onClick={toggleFlip}
            whileHover={{ scale: 1.01 }}
          >
            {/* FRONT SIDE: Dad & Daughter Cake Moment */}
            <div
              className={`w-full h-full rounded-3xl glass-panel-gold p-4 sm:p-7 border-2 border-amber-300 shadow-xl flex flex-col justify-between overflow-hidden relative ${
                isFlipped ? "pointer-events-none opacity-0" : "opacity-100"
              } transition-opacity duration-300 backface-hidden`}
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-300/30 rounded-full blur-2xl" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-amber-800">
                    <span className="text-base">🎂</span>
                    <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest">
                      Cherished Memory: Feeding Birthday Cake
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] sm:text-xs text-amber-900 bg-amber-200/60 px-2.5 py-1 rounded-full border border-amber-300 font-medium">
                    <RotateCw className="w-3 h-3 animate-spin-slow text-amber-700" />
                    <span>Auto-flipping soon (or tap)</span>
                  </span>
                </div>

                {/* Photo of Dad and Daughter */}
                <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border-2 border-white shadow-lg mb-3 sm:mb-4 group">
                  <Image
                    src="/birthday/dad/dads_photo.jpg"
                    alt="Dad and daughter sharing birthday cake"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 95vw, 700px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-65" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div>
                      <p className="font-display text-sm sm:text-lg font-bold text-amber-100 drop-shadow">
                        Feeding Birthday Cake To My Hero
                      </p>
                      <p className="text-[10px] sm:text-xs text-amber-200 font-medium">
                        A sacred bond blessed by heaven
                      </p>
                    </div>
                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-amber-100 border border-white/40 text-sm">
                      ✝️
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="text-[11px] sm:text-xs text-stone-600 italic text-center sm:text-left">
                  &ldquo;A daughter is a father&apos;s proudest joy and God&apos;s greatest gift.&rdquo;
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFlip();
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md transition-transform active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Dad&apos;s Letter &amp; Prayer 💌</span>
                </button>
              </div>
            </div>

            {/* BACK SIDE: Dad's Loving Birthday Message (Warm Ivory Gold Light Aesthetic) */}
            <div
              className={`absolute inset-0 w-full h-full rounded-3xl p-5 sm:p-8 border-2 border-amber-300 shadow-xl flex flex-col justify-between overflow-y-auto rotate-y-180 ${
                !isFlipped ? "pointer-events-none opacity-0" : "opacity-100"
              } transition-opacity duration-300 backface-hidden`}
              style={{
                background: "linear-gradient(135deg, #fffdf8 0%, #fff7eb 100%)",
              }}
            >
              <Quote className="w-12 h-12 text-amber-300/30 absolute top-5 right-5 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-600 text-base">✝️</span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-amber-800">
                      Fatherly Blessing &amp; Prayer
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFlip();
                    }}
                    className="flex items-center gap-1 text-[11px] text-amber-800 bg-amber-100 hover:bg-amber-200 px-3 py-1 rounded-full border border-amber-300 transition-colors font-medium"
                  >
                    <RotateCw className="w-3 h-3" />
                    <span>View Photo</span>
                  </button>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                  My Precious Daughter, May Almighty God Always Watch Over You
                </h3>

                <div className="space-y-2.5 font-body text-stone-700 text-xs sm:text-sm leading-relaxed">
                  <p>
                    From the first moment I held you in my arms, I thanked Almighty God for blessing my life with such a pure
                    and radiant soul. Watching you grow into an intelligent, strong, compassionate, and beautiful woman has
                    been the greatest privilege of my life.
                  </p>
                  <p>
                    I pray that our Blessed Mother Mary wraps you under Her holy mantle of protection, that Saint Joseph grants
                    you strength and guidance, and that the Sacred Heart of Jesus fills every day of your life with heavenly peace,
                    unshakable happiness, and vibrant health.
                  </p>
                  <p className="text-amber-800 font-semibold italic">
                    Devi Pihitai mage duwata. Whatever dreams you chase, remember that your father is always praying for you
                    and standing proudly beside you.
                  </p>
                </div>
              </div>

              {/* Sign-off & Seal */}
              <div className="pt-4 mt-2 border-t border-amber-200 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-stone-500 uppercase tracking-widest">With Everlasting Love &amp; Catholic Prayers,</p>
                  <p className="font-script text-2xl sm:text-3xl text-amber-700 mt-0.5">Your Loving Dad ❤️✝️</p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    launchFireworkConfetti();
                    launchSunflowerAndRoseConfetti();
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-xs shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Blessing Confetti 🌻</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
