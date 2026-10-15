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
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    // 1. Immediately trigger audio in the active user gesture
    onOpen();

    // 2. Launch flower & firework celebrations
    launchSunflowerAndRoseConfetti();
    launchFireworkConfetti();
    setTimeout(() => launchHeartConfetti(), 700);

    // 3. Close modal smoothly
    setIsOpen(false);
  };

  // Floating background flowers for the light modal
  const modalFlowers = [
    { emoji: "🌻", x: "12%", y: "18%", size: "text-3xl sm:text-4xl", delay: 0 },
    { emoji: "🌹", x: "82%", y: "22%", size: "text-2xl sm:text-3xl", delay: 0.5 },
    { emoji: "🌻", x: "85%", y: "75%", size: "text-3xl sm:text-4xl", delay: 1 },
    { emoji: "🌹", x: "15%", y: "78%", size: "text-2xl sm:text-3xl", delay: 1.5 },
    { emoji: "✨", x: "48%", y: "10%", size: "text-xl sm:text-2xl", delay: 0.3 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/75 backdrop-blur-2xl"
          onClick={handleOpen}
        >
          {/* Luminous Light Theme Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 sm:w-[32rem] h-80 sm:h-[32rem] bg-gradient-to-r from-amber-200/50 via-rose-200/40 to-yellow-100/60 rounded-full blur-[110px] animate-pulse-glow" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-100/60 rounded-full blur-[90px]" />
            <div className="absolute top-10 right-10 w-64 h-64 bg-amber-100/60 rounded-full blur-[90px]" />

            {/* Drifting Sunflowers and Roses in the Light Modal Background */}
            {modalFlowers.map((flower, idx) => (
              <motion.div
                key={idx}
                className={`absolute ${flower.size} select-none drop-shadow-sm opacity-80`}
                style={{ left: flower.x, top: flower.y }}
                animate={{
                  y: ["0px", "-16px", "0px"],
                  rotate: [0, idx % 2 === 0 ? 15 : -15, 0],
                  scale: [1, 1.1, 1],
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

          {/* Modal Card - Pure White Luxury Light Theme */}
          <motion.div
            initial={{ scale: 0.88, y: 25 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white/95 rounded-3xl p-6 sm:p-9 border-2 border-amber-200/90 text-center shadow-2xl shadow-amber-950/15 overflow-hidden backdrop-blur-xl"
          >
            {/* Top Catholic Blessing & Floral Motif */}
            <div className="flex items-center justify-center gap-1.5 mb-4 text-amber-800">
              <span className="text-sm">🌻</span>
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">
                ✝️ God&apos;s Special Blessing 🌹
              </span>
            </div>

            {/* Pulsating Gift Box Icon */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-5">
              <div className="absolute inset-0 bg-amber-400/35 rounded-full blur-xl animate-ping" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 flex items-center justify-center text-white shadow-xl shadow-rose-500/25 border-4 border-white">
                <Gift className="w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
              </div>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 mb-2 leading-tight">
              A Special Birthday Surprise
            </h2>

            <p className="font-body text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
              Crafted with boundless love, prayers, and sunshine just for you.
              <br />
              <span className="text-amber-800 font-semibold italic mt-1.5 block">
                &ldquo;The Lord bless you and protect you always.&rdquo; — Numbers 6:24-26 ✝️
              </span>
            </p>

            {/* Main Action Button */}
            <button
              onClick={handleOpen}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-5 h-5 text-amber-200 animate-spin-slow" />
              <span>Tap to Open Surprise &amp; Play Music 🎵</span>
            </button>

            <p className="text-[11px] sm:text-xs text-stone-500 mt-4 flex items-center justify-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> Tap anywhere to enter &amp; start celebration 🌻🌹
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
