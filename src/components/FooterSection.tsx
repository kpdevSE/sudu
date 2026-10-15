"use client";

import React from "react";
import { Heart, Sparkles, ArrowUp } from "lucide-react";
import { launchFireworkConfetti, launchHeartConfetti } from "./ConfettiLauncher";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinalCelebration = () => {
    launchFireworkConfetti();
    setTimeout(() => launchHeartConfetti(), 800);
  };

  return (
    <footer className="relative pt-16 sm:pt-20 pb-24 sm:pb-28 px-3 sm:px-6 border-t border-white/10 overflow-hidden bg-gradient-to-b from-transparent via-[#090814]/80 to-[#04030a]">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-56 bg-pink-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Celebration Finale Button */}
        <div className="mb-8 sm:mb-10 w-full px-2">
          <button
            onClick={handleFinalCelebration}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-bold text-xs sm:text-base shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden"
          >
            <span className="text-lg sm:text-xl animate-bounce">🎂</span>
            <span>Blow Out The Candles &amp; Make A Wish!</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-spin-slow" />
          </button>
        </div>

        {/* Catholic Blessing Closing Headline */}
        <p className="font-script text-2xl sm:text-4xl md:text-5xl text-rose-200 mb-3 sm:mb-4 leading-relaxed px-2">
          &ldquo;May the Lord guide, protect, and bless every day of your life.&rdquo;
        </p>

        <p className="font-body text-zinc-400 text-xs sm:text-sm max-w-md mb-6 sm:mb-8 leading-relaxed px-2">
          Wrapped with heartfelt prayers, unconditional love, and blessings from your family.
          Happy Birthday, our precious Sudu! ✝️💖
        </p>

        {/* Back To Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 sm:p-3 rounded-full glass-panel hover:bg-white/10 text-zinc-300 hover:text-white transition-all hover:scale-110 active:scale-95 border border-white/15 mb-6 sm:mb-8"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs text-zinc-500">
          <span>✝️ God Bless You</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-pink-400">
            With Love &amp; Prayers for Sudu
          </span>
          <span>•</span>
          <span>Happy Birthday 2026</span>
        </div>
      </div>
    </footer>
  );
}
