"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Sun, Cross } from "lucide-react";
import { launchHeartConfetti } from "./ConfettiLauncher";

export default function GrandparentsWishSection() {
  const [achchiBlessings, setAchchiBlessings] = useState(108);
  const [seeyaBlessings, setSeeyaBlessings] = useState(108);

  const slideLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const slideRightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="grandparents-wish"
      className="relative py-20 sm:py-28 px-3 sm:px-6 overflow-hidden"
    >
      {/* Background Ambience: Emerald Teal & Soft Gold Warmth */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-teal-500/15 rounded-full blur-[100px] sm:blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 sm:w-[30rem] h-80 sm:h-[30rem] bg-indigo-500/15 rounded-full blur-[110px] sm:blur-[140px] animate-float" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-panel-cyan border border-teal-400/40 text-teal-300 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-lg shadow-teal-500/10"
          >
            <span className="text-sm">✝️</span>
            <span>Sacred Grandparents&apos; Catholic Blessings</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3"
          >
            Grandmother &amp; Grandfather&apos;s <span className="text-gradient-rainbow">Wishes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-zinc-300 max-w-xl mx-auto text-xs sm:text-sm sm:text-base px-2"
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
            className="glass-panel rounded-3xl p-5 sm:p-7 border border-teal-400/30 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-teal-400/50 transition-all duration-300"
          >
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-sm">
                    👵
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">Achchi&apos;s Loving Blessing</h3>
                    <p className="text-[10px] sm:text-[11px] text-teal-300 uppercase tracking-widest font-semibold">
                      Grandmother&apos;s Rosary &amp; Prayers
                    </p>
                  </div>
                </div>
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-teal-500/20 text-teal-300 border border-teal-400/30">
                  Devi Pihitai 🙏
                </span>
              </div>

              {/* Photo of Achchi */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg mb-4 sm:mb-6 group-hover:shadow-teal-500/20 transition-all">
                <Image
                  src="/birthday/grandmotherfather/grandmother_photo.jpg"
                  alt="Grandmother (Achchi) smiling in the garden"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-script text-xl sm:text-2xl text-rose-200">Devi Pihitai Mage Duwata ✝️</p>
                  <p className="text-[10px] sm:text-xs text-zinc-300">Under Mother Mary&apos;s Holy Mantle</p>
                </div>
              </div>

              {/* Achchi's Catholic Prayer Message */}
              <div className="space-y-2.5 text-xs sm:text-sm text-zinc-200 leading-relaxed font-body">
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
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[10px] sm:text-xs text-zinc-400">Prayers whispered:</p>
                <p className="text-xs sm:text-sm font-bold text-teal-300">{achchiBlessings} Rosary Blessings</p>
              </div>
              <button
                onClick={() => {
                  setAchchiBlessings((p) => p + 1);
                  launchHeartConfetti();
                }}
                className="px-3.5 py-1.5 sm:py-2 rounded-xl bg-teal-500/20 hover:bg-teal-500 text-teal-300 hover:text-white transition-all text-xs font-semibold border border-teal-400/40 flex items-center gap-1.5 active:scale-95"
              >
                <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
                <span>Receive Blessing</span>
              </button>
            </div>
          </motion.div>

          {/* Card 2: Seeya (Grandfather) - Slides in from Right */}
          <motion.div
            variants={slideRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="glass-panel rounded-3xl p-5 sm:p-7 border border-amber-400/30 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-amber-400/50 transition-all duration-300"
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-sm">
                    👴
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">Seeya&apos;s Proud Blessing</h3>
                    <p className="text-[10px] sm:text-[11px] text-amber-300 uppercase tracking-widest font-semibold">
                      Grandfather&apos;s Wisdom &amp; Guidance
                    </p>
                  </div>
                </div>
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  God Bless You 🌟
                </span>
              </div>

              {/* Photo of Seeya */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg mb-4 sm:mb-6 group-hover:shadow-amber-500/20 transition-all">
                <Image
                  src="/birthday/grandmotherfather/grandfather_photo.jpg"
                  alt="Grandfather (Seeya) sitting proudly"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-script text-xl sm:text-2xl text-amber-200">Suba Upandinayak Mage Duwata ✝️</p>
                  <p className="text-[10px] sm:text-xs text-zinc-300">Walk fearlessly under the Lord&apos;s light</p>
                </div>
              </div>

              {/* Seeya's Catholic Blessing Message */}
              <div className="space-y-2.5 text-xs sm:text-sm text-zinc-200 leading-relaxed font-body">
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
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[10px] sm:text-xs text-zinc-400">Blessings received:</p>
                <p className="text-xs sm:text-sm font-bold text-amber-300">{seeyaBlessings} Strong Prayers</p>
              </div>
              <button
                onClick={() => {
                  setSeeyaBlessings((p) => p + 1);
                  launchHeartConfetti();
                }}
                className="px-3.5 py-1.5 sm:py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-black transition-all text-xs font-semibold border border-amber-400/40 flex items-center gap-1.5 active:scale-95"
              >
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Receive Blessing</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
