"use client";

import React, { useState } from "react";
import { Heart, Sparkles, ArrowUp } from "lucide-react";

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

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Celebration Finale Button */}
        <div className="mb-8 sm:mb-10 w-full px-2">
          <button
            onClick={handleFinalWish}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white font-bold text-xs sm:text-base shadow-xl shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden"
          >
            <span className="text-lg sm:text-xl animate-bounce">🎂</span>
            <span>{wishSent ? "Birthday Prayer & Love Sent! 💖🙏" : "Blow Out The Candles & Make A Wish! 🎂"}</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-200 animate-spin-slow" />
          </button>
        </div>

        {/* Catholic Blessing Closing Headline */}
        <p className="font-script text-2xl sm:text-4xl md:text-5xl text-rose-700 mb-3 sm:mb-4 leading-relaxed px-2">
          &ldquo;May the Lord guide, protect, and bless every day of your life.&rdquo;
        </p>

        <p className="font-body text-stone-600 text-xs sm:text-sm max-w-md mb-6 sm:mb-8 leading-relaxed px-2">
          Wrapped with heartfelt prayers, unconditional love, and blessings from your family.
          Happy Birthday, our precious Sudu! 🌻🌹✝️
        </p>

        {/* Back To Top */}
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
