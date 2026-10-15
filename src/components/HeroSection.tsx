"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Gift, ArrowDown, Edit3, Check } from "lucide-react";
import {
  launchFireworkConfetti,
  launchHeartConfetti,
  launchSunflowerAndRoseConfetti,
} from "./ConfettiLauncher";

export default function HeroSection() {
  const [gfName, setGfName] = useState("SUDU");
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState("SUDU");

  // Load custom name if stored in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("birthday_gf_name");
    if (saved) {
      setGfName(saved);
      setTempName(saved);
    }

    launchSunflowerAndRoseConfetti();
    const timer = setTimeout(() => {
      launchHeartConfetti();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const saveName = () => {
    const trimmed = tempName.trim() || "SUDU";
    setGfName(trimmed.toUpperCase());
    setIsEditingName(false);
    localStorage.setItem("birthday_gf_name", trimmed.toUpperCase());
    launchSunflowerAndRoseConfetti();
  };

  // Rich field of Sunflower 🌻 and Rose 🌹 emojis drifting in the background
  const backgroundFlowers = [
    // Top-left cluster
    { emoji: "🌻", size: "text-3xl sm:text-4xl md:text-5xl", x: "6vw", y: "12vh", duration: 8, delay: 0 },
    { emoji: "🌹", size: "text-2xl sm:text-3xl md:text-4xl", x: "18vw", y: "24vh", duration: 10, delay: 1 },
    { emoji: "🌻", size: "text-xl sm:text-2xl md:text-3xl", x: "28vw", y: "10vh", duration: 7.5, delay: 2 },
    // Top-right cluster
    { emoji: "🌹", size: "text-3xl sm:text-4xl md:text-5xl", x: "78vw", y: "14vh", duration: 9, delay: 0.5 },
    { emoji: "🌻", size: "text-2xl sm:text-3xl md:text-4xl", x: "88vw", y: "22vh", duration: 11, delay: 1.5 },
    { emoji: "🌹", size: "text-xl sm:text-2xl md:text-3xl", x: "68vw", y: "8vh", duration: 8, delay: 2.5 },
    // Mid-left cluster
    { emoji: "🌹", size: "text-3xl sm:text-4xl md:text-5xl", x: "4vw", y: "45vh", duration: 9.5, delay: 0.8 },
    { emoji: "🌻", size: "text-2xl sm:text-3xl md:text-4xl", x: "15vw", y: "58vh", duration: 11.5, delay: 1.8 },
    // Mid-right cluster
    { emoji: "🌻", size: "text-3xl sm:text-4xl md:text-5xl", x: "86vw", y: "48vh", duration: 10, delay: 1.2 },
    { emoji: "🌹", size: "text-2xl sm:text-3xl md:text-4xl", x: "74vw", y: "62vh", duration: 8.5, delay: 2.2 },
    // Bottom-left cluster
    { emoji: "🌻", size: "text-4xl sm:text-5xl md:text-6xl", x: "8vw", y: "78vh", duration: 11, delay: 0.4 },
    { emoji: "🌹", size: "text-2xl sm:text-3xl md:text-4xl", x: "22vw", y: "85vh", duration: 9, delay: 1.6 },
    // Bottom-right cluster
    { emoji: "🌹", size: "text-4xl sm:text-5xl md:text-6xl", x: "84vw", y: "82vh", duration: 10.5, delay: 0.7 },
    { emoji: "🌻", size: "text-3xl sm:text-4xl md:text-5xl", x: "64vw", y: "86vh", duration: 8, delay: 2.1 },
    // Center ambient accents
    { emoji: "🌻", size: "text-xl sm:text-2xl", x: "34vw", y: "74vh", duration: 9.2, delay: 1.4 },
    { emoji: "🌹", size: "text-xl sm:text-2xl", x: "48vw", y: "90vh", duration: 8.8, delay: 2.6 },
  ];

  return (
    <header
      id="hero"
      aria-label="Birthday Hero Celebration"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-24 pb-20 sm:pb-24 px-3 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-[#fffdf9] to-[#fff5f8]"
    >
      {/* Luminous Light Background with Sunflower & Rose Garden Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft Sunlit Honey & Rose Radiance Orbs */}
        <div className="absolute top-1/4 -left-20 w-80 sm:w-[34rem] h-80 sm:h-[34rem] bg-amber-200/40 rounded-full blur-[100px] sm:blur-[130px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-20 w-80 sm:w-[34rem] h-80 sm:h-[34rem] bg-rose-200/40 rounded-full blur-[100px] sm:blur-[130px] animate-float" />
        <div className="absolute bottom-10 left-1/3 w-80 sm:w-[28rem] h-80 sm:h-[28rem] bg-yellow-100/60 rounded-full blur-[90px] animate-float-reverse" />
        <div className="absolute top-10 right-1/4 w-72 sm:w-88 h-72 sm:h-88 bg-pink-100/50 rounded-full blur-[90px]" />

        {/* Delicate Golden Polka Dot Matrix */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d97706 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Dynamic Sunflowers 🌻 and Roses 🌹 Drifting in the Background */}
        {backgroundFlowers.map((flower, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${flower.size} select-none drop-shadow-md opacity-85 hover:opacity-100 cursor-pointer transition-opacity`}
            style={{ left: flower.x, top: flower.y }}
            animate={{
              y: ["0px", "-26px", "0px"],
              x: ["0px", idx % 2 === 0 ? "16px" : "-16px", "0px"],
              rotate: [0, idx % 2 === 0 ? 20 : -20, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: flower.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: flower.delay,
            }}
            whileHover={{ scale: 1.35, rotate: 25 }}
          >
            {flower.emoji}
          </motion.div>
        ))}

        {/* Sparkling Gold Stardust */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-amber-500/60 text-xs sm:text-sm select-none"
            style={{
              left: `${(i * 10 + 7) % 94}vw`,
              top: `${(i * 12 + 8) % 88}vh`,
            }}
            animate={{
              scale: [0.7, 1.4, 0.7],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: 3.5 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
        {/* Catholic Blessing Badge with Sunflower & Rose Motif */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-gold border border-amber-300 text-amber-950 text-[11px] sm:text-xs md:text-sm font-semibold mb-5 shadow-sm"
        >
          <span className="text-sm">🌻</span>
          <span className="text-sm">✝️</span>
          <span className="tracking-wider uppercase">God&apos;s Beloved Daughter • Blessed Under Mother Mary&apos;s Mantle</span>
          <span className="text-sm">🌹</span>
        </motion.div>

        {/* Main Title: HAPPY BIRTHDAY [GF'S NAME]! 💖 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative group mb-3 w-full"
        >
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight px-1 text-stone-900">
            <span className="block text-stone-800 text-2xl sm:text-4xl md:text-6xl mb-1 drop-shadow-xs">
              HAPPY BIRTHDAY
            </span>
            <span className="text-gradient-rainbow inline-flex items-center gap-2 sm:gap-3 flex-wrap justify-center drop-shadow-xs">
              {gfName}! <span className="animate-pulse">💖</span>
            </span>
          </h1>

          {/* Inline Edit Name Button */}
          <div className="mt-2.5 flex items-center justify-center gap-2">
            {!isEditingName ? (
              <button
                onClick={() => setIsEditingName(true)}
                className="text-[10px] sm:text-[11px] text-stone-600 hover:text-rose-600 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 hover:bg-white transition-all border border-amber-200 shadow-sm"
                title="Personalize Name"
              >
                <Edit3 className="w-3 h-3 text-rose-500" />
                <span>Change Name</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 bg-white p-1.5 rounded-full border border-rose-300 shadow-lg">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  placeholder="Enter Name..."
                  className="bg-transparent text-xs font-semibold px-3 py-1 text-stone-800 focus:outline-none w-28 sm:w-32 uppercase"
                  autoFocus
                  onKeyDown={(e) => e.key === "Enter" && saveName()}
                />
                <button
                  onClick={saveName}
                  className="p-1 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors"
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Catholic Scripture & Sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-7 px-2 max-w-2xl"
        >
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-rose-700 leading-relaxed mb-2">
            &ldquo;Wishing you a day as radiant as sunflowers and as beautiful as roses.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-stone-600 italic font-body">
            &ldquo;The Lord bless you and keep you; the Lord make His face shine upon you and give you peace.&rdquo; — Numbers 6:24-26 ✝️
          </p>
        </motion.div>

        {/* Core Image Feature: Centrally featured portrait with Golden Sunflower & Rose Aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 90 }}
          className="relative group my-2 mb-9"
        >
          {/* Animated Radiant Rings & Sun-Kissed Halo */}
          <div className="absolute -inset-4 sm:-inset-5 bg-gradient-to-r from-amber-300 via-rose-300 to-yellow-300 rounded-full blur-xl sm:blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 animate-spin-slow" />
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-rose-400 via-amber-300 to-yellow-200 rounded-full opacity-75 blur-xs animate-pulse-glow" />

          {/* Central Portrait Container */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-84 md:h-84 rounded-full overflow-hidden p-2 sm:p-2.5 bg-gradient-to-tr from-amber-200 via-rose-200 to-yellow-100 shadow-2xl shadow-rose-950/15 border-4 border-white">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/birthday/home/birthday_main.jpg"
                alt="Birthday Queen Portrait"
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 336px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          </div>

          {/* Floating Rose Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-1 sm:right-2 glass-panel-warm px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl border border-rose-300 shadow-lg flex items-center gap-2"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
              <span className="text-sm">🌹</span>
            </div>
            <div className="text-left">
              <p className="text-[9px] sm:text-[10px] text-stone-500 uppercase tracking-widest font-semibold">Special Day</p>
              <p className="text-[11px] sm:text-xs font-bold text-stone-900">Forever Beautiful</p>
            </div>
          </motion.div>

          {/* Floating Sunflower Badge */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-1 -left-1 sm:left-2 glass-panel-gold px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl border border-amber-300 shadow-lg flex items-center gap-2"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <span className="text-sm">🌻</span>
            </div>
            <div className="text-left">
              <p className="text-[9px] sm:text-[10px] text-amber-800 uppercase tracking-widest font-semibold">Our Blessing</p>
              <p className="text-[11px] sm:text-xs font-bold text-stone-900">Pure Sunshine</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl px-2"
        >
          {/* Shower Sunflowers & Roses Celebration Button */}
          <button
            onClick={launchSunflowerAndRoseConfetti}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span className="text-base">🌻</span>
            <span>Shower Sunflowers &amp; Roses! 🌹</span>
          </button>

          {/* Launch Fireworks Button */}
          <button
            onClick={launchFireworkConfetti}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs sm:text-sm border border-rose-200 shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Gift className="w-4 h-4 text-rose-500 animate-bounce" />
            <span>Birthday Fireworks 🎆</span>
          </button>

          {/* Jump to Wishes */}
          <a
            href="#my-wish"
            className="w-full sm:w-auto px-5 py-3.5 rounded-full glass-panel hover:bg-white text-stone-700 hover:text-stone-900 font-medium text-xs sm:text-sm transition-all hover:scale-105 border border-stone-200 shadow-sm flex items-center justify-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Read Wishes</span>
            <ArrowDown className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </header>
  );
}
