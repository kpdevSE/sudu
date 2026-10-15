"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles, Heart, Cross } from "lucide-react";
import { launchFireworkConfetti, launchHeartConfetti } from "./ConfettiLauncher";

interface SurpriseModalProps {
  onOpen: () => void;
}

export default function SurpriseModal({ onOpen }: SurpriseModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Auto-launch confetti when the page first loads
  useEffect(() => {
    // Initial celebration blast right when page opens
    launchFireworkConfetti();
    const t = setTimeout(() => {
      launchHeartConfetti();
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    setIsOpen(false);
    launchFireworkConfetti();
    setTimeout(() => launchHeartConfetti(), 800);
    onOpen();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070611]/90 backdrop-blur-2xl"
        >
          {/* Animated Background Glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-r from-pink-600/30 via-rose-500/20 to-amber-500/30 rounded-full blur-[100px] animate-pulse-glow" />
          </div>

          <motion.div
            initial={{ scale: 0.85, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 border border-pink-500/30 text-center shadow-2xl shadow-pink-500/20 overflow-hidden"
          >
            {/* Top Catholic Blessing Icon */}
            <div className="flex items-center justify-center gap-2 mb-3 text-amber-300">
              <span className="text-sm font-semibold tracking-widest uppercase flex items-center gap-1.5">
                ✝️ God&apos;s Special Blessing
              </span>
            </div>

            {/* Pulsating Gift Box Icon */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-pink-500/30 rounded-full blur-xl animate-ping" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 flex items-center justify-center text-white shadow-xl shadow-pink-500/40">
                <Gift className="w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
              </div>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              A Special Birthday Surprise
            </h2>

            <p className="font-body text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed">
              Created with infinite love and prayers just for you.
              <br />
              <span className="text-amber-200 font-medium italic">
                &ldquo;May the Lord bless you and protect you always.&rdquo;
              </span>
            </p>

            <button
              onClick={handleOpen}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-bold text-base shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-5 h-5 text-amber-200 animate-spin-slow" />
              <span>Tap to Open Surprise &amp; Play Music 🎵</span>
            </button>

            <p className="text-[11px] text-zinc-400 mt-4 flex items-center justify-center gap-1">
              <Heart className="w-3 h-3 text-pink-400 fill-current" /> Tap anywhere to enter &amp; start music
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
