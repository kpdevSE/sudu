"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Sun } from "lucide-react";
import { launchHeartConfetti, launchSunflowerAndRoseConfetti } from "./ConfettiLauncher";

export default function GrandparentsWishSection() {
  const [achchiBlessings, setAchchiBlessings] = useState(108);
  const [seeyaBlessings, setSeeyaBlessings] = useState(108);

  const slideLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const slideRightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="grandparents-wish"
      className="relative py-20 sm:py-28 px-3 sm:px-6 overflow-hidden bg-gradient-to-b from-[#fffbf5] via-[#ffffff] to-[#fff5f8]"
    >
      {/* Background Ambience: Soft Emerald Mint & Honey Gold Warmth */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-teal-100/50 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 sm:w-[30rem] h-80 sm:h-[30rem] bg-rose-100/50 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-16 left-6 text-3xl opacity-75 select-none animate-float">🌻</div>
        <div className="absolute bottom-16 right-6 text-3xl opacity-75 select-none animate-float-reverse">🌹</div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-panel-cyan border border-teal-300 text-teal-900 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-sm"
          >
            <span className="text-sm">✝️</span>
            <span>Sacred Grandparents&apos; Catholic Blessings</span>
            <span className="text-sm">🌻</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-3"
          >
            Grandmother &amp; Grandfather&apos;s <span className="text-gradient-rainbow">Wishes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-stone-600 max-w-xl mx-auto text-xs sm:text-sm sm:text-base px-2"
          >
            The unconditional prayers and divine blessings from Achchi and Seeya that shelter and light your path always.
          </motion.p>
        </div>

        {/* Two-Column Grid Layout with Opposite Slide-In Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Achchi (Grandmother) - Slides in from Left */}
          <motion.div
            variants={slideLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="glass-panel rounded-3xl p-5 sm:p-7 border border-teal-200/80 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-teal-400 transition-all duration-300"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm shadow-xs">
                    👵
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">Achchi&apos;s Loving Blessing</h3>
                    <p className="text-[10px] sm:text-[11px] text-teal-700 uppercase tracking-widest font-semibold">
                      Grandmother&apos;s Rosary &amp; Prayers
                    </p>
                  </div>
                </div>
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-teal-100 text-teal-800 border border-teal-200">
                  Devi Pihitai 🙏
                </span>
              </div>

              {/* Photo of Achchi */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border-2 border-white shadow-md mb-4 sm:mb-6 group-hover:shadow-teal-500/10 transition-all">
                <Image
                  src="/birthday/grandmotherfather/grandmother_photo.jpg"
                  alt="Grandmother (Achchi) smiling in the garden"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-script text-xl sm:text-2xl text-rose-200">Devi Pihitai Mage Duwata ✝️</p>
                  <p className="text-[10px] sm:text-xs text-stone-200">Under Mother Mary&apos;s Holy Mantle</p>
                </div>
              </div>

              {/* Achchi's Catholic Prayer Message */}
              <div className="space-y-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed font-body">
                <p>
                  To my darling granddaughter, your smile is like morning sunshine and your heart is filled with pure kindness.
                  I thank Almighty God every day in my daily prayers for bringing you into our family.
                </p>
                <p>
                  May Our Blessed Mother Mary protect you every step you take, may the Good Lord shower you with divine peace,
                  good health, and joy, and may every dream you pray for be granted with grace.
                </p>
              </div>
            </div>

            {/* Bottom Blessing Bar */}
            <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] sm:text-xs text-stone-500">Prayers whispered:</p>
                <p className="text-xs sm:text-sm font-bold text-teal-700">{achchiBlessings} Rosary Blessings</p>
              </div>
              <button
                onClick={() => {
                  setAchchiBlessings((p) => p + 1);
                  launchSunflowerAndRoseConfetti();
                }}
                className="px-3.5 py-1.5 sm:py-2 rounded-xl bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white transition-all text-xs font-semibold border border-teal-200 flex items-center gap-1.5 active:scale-95 shadow-xs"
              >
                <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                <span>Receive Blessing 🌻</span>
              </button>
            </div>
          </motion.div>

          {/* Card 2: Seeya (Grandfather) - Slides in from Right */}
          <motion.div
            variants={slideRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="glass-panel rounded-3xl p-5 sm:p-7 border border-amber-200/80 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-amber-400 transition-all duration-300"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shadow-xs">
                    👴
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">Seeya&apos;s Proud Blessing</h3>
                    <p className="text-[10px] sm:text-[11px] text-amber-700 uppercase tracking-widest font-semibold">
                      Grandfather&apos;s Wisdom &amp; Guidance
                    </p>
                  </div>
                </div>
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                  God Bless You 🌟
                </span>
              </div>

              {/* Photo of Seeya */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border-2 border-white shadow-md mb-4 sm:mb-6 group-hover:shadow-amber-500/10 transition-all">
                <Image
                  src="/birthday/grandmotherfather/grandfather_photo.jpg"
                  alt="Grandfather (Seeya) sitting proudly"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-script text-xl sm:text-2xl text-amber-200">Suba Upandinayak Mage Duwata ✝️</p>
                  <p className="text-[10px] sm:text-xs text-stone-200">Walk fearlessly under the Lord&apos;s light</p>
                </div>
              </div>

              {/* Seeya's Catholic Blessing Message */}
              <div className="space-y-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed font-body">
                <p>
                  My wonderful granddaughter, watching you grow into such a resilient, intelligent, and upright young woman
                  fills my heart with profound pride. You carry dignity, respect, and strength.
                </p>
                <p>
                  May the Holy Spirit guide your intellect and judgment, may God Almighty bless your studies and future,
                  and may courage accompany your footsteps wherever life takes you. Always remain faithful and true.
                </p>
              </div>
            </div>

            {/* Bottom Blessing Bar */}
            <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] sm:text-xs text-stone-500">Blessings received:</p>
                <p className="text-xs sm:text-sm font-bold text-amber-800">{seeyaBlessings} Strong Prayers</p>
              </div>
              <button
                onClick={() => {
                  setSeeyaBlessings((p) => p + 1);
                  launchSunflowerAndRoseConfetti();
                }}
                className="px-3.5 py-1.5 sm:py-2 rounded-xl bg-amber-50 hover:bg-amber-500 text-amber-800 hover:text-white transition-all text-xs font-semibold border border-amber-200 flex items-center gap-1.5 active:scale-95 shadow-xs"
              >
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>Receive Blessing 🌹</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
