"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, RotateCw, Quote, Heart } from "lucide-react";
import { launchFireworkConfetti } from "./ConfettiLauncher";

export default function DadWishSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section
      id="dad-wish"
      className="relative py-20 sm:py-28 px-3 sm:px-6 overflow-hidden"
    >
      {/* Warm Accent Background: Rich Gold & Deep Sapphire Blue Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-6 sm:left-10 w-72 sm:w-[32rem] h-72 sm:h-[32rem] bg-amber-500/15 rounded-full blur-[100px] sm:blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-6 sm:right-10 w-80 sm:w-[36rem] h-80 sm:h-[36rem] bg-blue-700/20 rounded-full blur-[110px] sm:blur-[150px] animate-float" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-panel-gold border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-lg shadow-amber-500/10"
          >
            <span className="text-sm">✝️</span>
            <span>A Father&apos;s Eternal Pride &amp; Catholic Blessing</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3"
          >
            Dad&apos;s Wish <span className="text-gradient-gold">For His Little Girl</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-zinc-300 max-w-xl mx-auto text-xs sm:text-sm sm:text-base px-2"
          >
            Tap anywhere on the card to flip between Dad&apos;s cake memory and his heartfelt prayer for you!
          </motion.p>
        </div>

        {/* 3D Flip Card Container Effect (Phone Responsive) */}
        <div className="perspective-1000 w-full max-w-2xl mx-auto min-h-[530px] sm:min-h-[500px]">
          <motion.div
            className="relative w-full h-full transform-style-3d cursor-pointer transition-transform duration-700 ease-out"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            onClick={toggleFlip}
            whileHover={{ scale: 1.01 }}
          >
            {/* FRONT SIDE: Dad & Daughter Cake Moment */}
            <div
              className={`w-full h-full rounded-3xl glass-panel-gold p-4 sm:p-7 border-2 border-amber-400/30 shadow-2xl flex flex-col justify-between overflow-hidden relative ${
                isFlipped ? "pointer-events-none opacity-0" : "opacity-100"
              } transition-opacity duration-300 backface-hidden`}
            >
              {/* Golden Stardust Accents */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-amber-300">
                    <span className="text-base">🎂</span>
                    <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest">
                      Cherished Memory: Feeding Birthday Cake
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] sm:text-xs text-amber-200/90 bg-amber-500/20 px-2.5 py-1 rounded-full border border-amber-400/30">
                    <RotateCw className="w-3 h-3 animate-spin-slow" />
                    <span>Tap to Flip</span>
                  </span>
                </div>

                {/* Photo of Dad and Daughter */}
                <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-amber-300/30 shadow-xl mb-3 sm:mb-4 group">
                  <Image
                    src="/birthday/dad/dads_photo.jpg"
                    alt="Dad and daughter sharing birthday cake"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 95vw, 700px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-65" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div>
                      <p className="font-display text-sm sm:text-lg font-bold text-amber-100 drop-shadow">
                        Feeding Birthday Cake To My Hero
                      </p>
                      <p className="text-[10px] sm:text-xs text-amber-200/90 font-medium">
                        A sacred bond blessed by heaven
                      </p>
                    </div>
                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500/30 backdrop-blur-md flex items-center justify-center text-amber-300 border border-amber-300/40 text-sm">
                      ✝️
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="text-[11px] sm:text-xs text-zinc-300 italic text-center sm:text-left">
                  &ldquo;A daughter is a father&apos;s proudest joy and God&apos;s greatest gift.&rdquo;
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFlip();
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Read Dad&apos;s Letter &amp; Prayer</span>
                </button>
              </div>
            </div>

            {/* BACK SIDE: Dad's Loving and Proud Birthday Message with Catholic Blessing */}
            <div
              className={`absolute inset-0 w-full h-full rounded-3xl glass-panel-gold p-5 sm:p-8 border-2 border-amber-400/40 shadow-2xl flex flex-col justify-between overflow-y-auto rotate-y-180 ${
                !isFlipped ? "pointer-events-none opacity-0" : "opacity-100"
              } transition-opacity duration-300 backface-hidden`}
              style={{
                background: "linear-gradient(135deg, rgba(16, 20, 38, 0.96) 0%, rgba(32, 22, 10, 0.96) 100%)",
              }}
            >
              {/* Royal Sapphire & Gold Aura */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
              <Quote className="w-12 h-12 text-amber-400/15 absolute top-5 right-5 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-base">✝️</span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-amber-300">
                      Fatherly Blessing &amp; Prayer
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFlip();
                    }}
                    className="flex items-center gap-1 text-[11px] text-amber-300 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full border border-amber-400/30 transition-colors"
                  >
                    <RotateCw className="w-3 h-3" />
                    <span>View Photo</span>
                  </button>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                  My Precious Daughter, May Almighty God Always Watch Over You
                </h3>

                <div className="space-y-2.5 font-body text-zinc-200 text-xs sm:text-sm leading-relaxed">
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
                  <p className="text-amber-200 font-semibold italic">
                    Devi Pihitai mage duwata. Whatever dreams you chase, remember that your father is always praying for you
                    and standing proudly beside you.
                  </p>
                </div>
              </div>

              {/* Sign-off & Seal */}
              <div className="pt-4 mt-2 border-t border-amber-400/20 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest">With Everlasting Love &amp; Catholic Prayers,</p>
                  <p className="font-script text-2xl sm:text-3xl text-amber-300 mt-0.5">Your Loving Dad ❤️✝️</p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    launchFireworkConfetti();
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-xs shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Blessing Confetti</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
