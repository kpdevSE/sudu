"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles, Heart } from "lucide-react";
import {
  launchFireworkConfetti,
  launchHeartConfetti,
  launchSunflowerAndRoseConfetti,
} from "./ConfettiLauncher";

interface SurpriseModalProps {
  onOpen: () => void;
}

export default function SurpriseModal({ onOpen }: SurpriseModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Auto-launch celebratory confetti when modal loads
  useEffect(() => {
    launchSunflowerAndRoseConfetti();
    const t = setTimeout(() => {
      launchHeartConfetti();
    }, 900);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    // 1. Immediately trigger audio in the active user gesture
    onOpen();

    // 2. Launch flower & firework celebrations
    launchSunflowerAndRoseConfetti();
    launchFireworkConfetti();
    setTimeout(() => launchHeartConfetti(), 600);

    // 3. Close modal smoothly
    setIsOpen(false);
  };

  // Floating background flowers for the light modal
  const modalFlowers = [
    { emoji: "🌻", x: "8%", y: "15%", size: "text-2xl sm:text-3xl", delay: 0 },
    { emoji: "🌹", x: "85%", y: "18%", size: "text-2xl sm:text-3xl", delay: 0.5 },
    { emoji: "🌻", x: "86%", y: "78%", size: "text-2xl sm:text-3xl", delay: 1 },
    { emoji: "🌹", x: "10%", y: "80%", size: "text-2xl sm:text-3xl", delay: 1.5 },
    { emoji: "✨", x: "48%", y: "8%", size: "text-lg sm:text-xl", delay: 0.3 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden p-3.5 sm:p-4 bg-white/80 backdrop-blur-2xl flex min-h-[100dvh] items-center justify-center"
          onClick={handleOpen}
        >
          {/* Luminous Light Theme Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 sm:w-[30rem] h-72 sm:h-[30rem] bg-gradient-to-r from-amber-200/50 via-rose-200/40 to-yellow-100/60 rounded-full blur-[100px] animate-pulse-glow" />
            <div className="absolute bottom-10 left-10 w-56 h-56 bg-pink-100/60 rounded-full blur-[80px]" />
            <div className="absolute top-10 right-10 w-56 h-56 bg-amber-100/60 rounded-full blur-[80px]" />

            {/* Drifting Sunflowers and Roses in the Light Modal Background */}
            {modalFlowers.map((flower, idx) => (
              <motion.div
                key={idx}
                className={`absolute ${flower.size} select-none drop-shadow-sm opacity-80`}
                style={{ left: flower.x, top: flower.y }}
                animate={{
                  y: ["0px", "-14px", "0px"],
                  rotate: [0, idx % 2 === 0 ? 15 : -15, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 5 + idx,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: flower.delay,
                }}
              >
                {flower.emoji}
              </motion.div>
            ))}
          </div>

          {/* Modal Card - Sized for Mobile iPhone and Desktop with Zero Cutoff */}
          <motion.div
            initial={{ scale: 0.9, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-sm sm:max-w-md bg-white/95 rounded-3xl p-5 sm:p-7 border-2 border-amber-300 text-center shadow-2xl shadow-amber-950/15 overflow-hidden backdrop-blur-xl"
          >
            {/* Top Catholic Blessing & Floral Motif */}
            <div className="flex items-center justify-center gap-1.5 mb-2.5 sm:mb-3 text-amber-800">
              <span className="text-xs sm:text-sm">🌻</span>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                ✝️ God&apos;s Special Blessing 🌹
              </span>
            </div>

            {/* Pulsating Gift Box Icon */}
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
              <div className="absolute inset-0 bg-amber-400/35 rounded-full blur-lg animate-ping" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-rose-500/25 border-2 border-white">
                <Gift className="w-7 h-7 sm:w-10 sm:h-10 animate-bounce" />
              </div>
            </div>

            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900 mb-1.5 leading-tight">
              A Special Birthday Surprise
            </h2>

            <p className="font-body text-xs sm:text-sm text-stone-600 mb-4 sm:mb-5 leading-relaxed">
              Crafted with boundless love, prayers, and sunshine just for you.
              <br />
              <span className="text-amber-800 font-semibold italic mt-1 block">
                &ldquo;The Lord bless you and protect you always.&rdquo; — Numbers 6:24-26 ✝️
              </span>
            </p>

            {/* Main Action Button */}
            <button
              onClick={handleOpen}
              className="w-full py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-amber-200 animate-spin-slow" />
              <span>Tap to Open Surprise &amp; Play Music 🎵</span>
            </button>

            <p className="text-[10px] sm:text-xs text-stone-500 mt-2.5 sm:mt-3 flex items-center justify-center gap-1">
              <Heart className="w-3 h-3 text-rose-500 fill-current" /> Tap anywhere to enter &amp; start celebration 🌻🌹
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
