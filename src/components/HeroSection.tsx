"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Crown, Gift, Calendar, ArrowDown, Edit3, Check } from "lucide-react";
import { launchFireworkConfetti, launchHeartConfetti } from "./ConfettiLauncher";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSection() {
  const [gfName, setGfName] = useState("SUDU");
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState("SUDU");
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Load custom name if stored in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("birthday_gf_name");
    if (saved) {
      setGfName(saved);
      setTempName(saved);
    }

    // Auto-launch celebratory effect when hero mounts
    launchFireworkConfetti();
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
    launchHeartConfetti();
  };

  // Dynamic countdown timer
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    let target = new Date(currentYear, new Date().getMonth(), new Date().getDate() + 1, 0, 0, 0);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target.getTime() - now;

      if (difference <= 0) {
        target = new Date(currentYear, new Date().getMonth(), new Date().getDate() + 1, 0, 0, 0);
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      id="hero"
      aria-label="Birthday Hero Celebration"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 pb-14 sm:pb-16 px-3 sm:px-6 overflow-hidden"
    >
      {/* Dynamic Animated Background Patterns & Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-16 sm:-left-20 w-72 sm:w-96 h-72 sm:h-96 bg-pink-600/30 rounded-full blur-[100px] sm:blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-16 sm:-right-20 w-80 sm:w-[30rem] h-80 sm:h-[30rem] bg-indigo-600/25 rounded-full blur-[110px] sm:blur-[140px] animate-float" />
        <div className="absolute bottom-10 left-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-amber-500/20 rounded-full blur-[90px] animate-float-reverse" />
        <div className="absolute top-10 right-1/4 w-60 sm:w-72 h-60 sm:h-72 bg-teal-500/25 rounded-full blur-[100px] animate-pulse" />

        {/* Animated Stardust Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Floating Confetti / Heart / Sparkle Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400/40 text-xs sm:text-sm select-none"
            initial={{
              x: `${(i * 8) % 100}vw`,
              y: `${(i * 12) % 100}vh`,
              scale: 0.6 + (i % 3) * 0.4,
              opacity: 0.2 + (i % 4) * 0.2,
            }}
            animate={{
              y: ["0vh", "-12vh", "0vh"],
              x: ["0vw", `${i % 2 === 0 ? 2 : -2}vw`, "0vw"],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 7 + (i % 5) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {i % 4 === 0 ? "✨" : i % 4 === 1 ? "💖" : i % 4 === 2 ? "✝️" : "⭐"}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
        {/* Catholic Blessing Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-panel border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs md:text-sm font-semibold mb-5 shadow-lg shadow-amber-500/10"
        >
          <span className="text-sm">✝️</span>
          <span className="tracking-wider uppercase">God&apos;s Beloved Daughter • Blessed by Grace</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </motion.div>

        {/* Main Title: HAPPY BIRTHDAY [GF'S NAME]! 💖 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative group mb-3 w-full"
        >
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight px-1">
            <span className="block text-zinc-100 drop-shadow-sm text-2xl sm:text-4xl md:text-6xl mb-1">
              HAPPY BIRTHDAY
            </span>
            <span className="text-gradient-rainbow drop-shadow-lg inline-flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              {gfName}! <span className="animate-pulse">💖</span>
            </span>
          </h1>

          {/* Inline Edit Name Button */}
          <div className="mt-2 flex items-center justify-center gap-2">
            {!isEditingName ? (
              <button
                onClick={() => setIsEditingName(true)}
                className="text-[10px] sm:text-[11px] text-zinc-400 hover:text-pink-300 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                title="Personalize Name"
              >
                <Edit3 className="w-3 h-3 text-pink-400" />
                <span>Change Name</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 bg-zinc-900/90 p-1.5 rounded-full border border-pink-500/40 shadow-xl backdrop-blur-xl">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  placeholder="Enter Name..."
                  className="bg-transparent text-xs font-semibold px-3 py-1 text-white focus:outline-none w-28 sm:w-32 uppercase"
                  autoFocus
                  onKeyDown={(e) => e.key === "Enter" && saveName()}
                />
                <button
                  onClick={saveName}
                  className="p-1 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors"
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
          className="mb-8 px-2 max-w-2xl"
        >
          <p className="font-script text-xl sm:text-2xl md:text-3xl text-pink-200/95 leading-relaxed mb-1.5">
            &ldquo;Wishing you a day as unique, breathtaking, and bright as you are.&rdquo;
          </p>
          <p className="text-[11px] sm:text-xs text-amber-300/80 italic font-body">
            &ldquo;The Lord bless you and keep you; the Lord make His face shine upon you and give you peace.&rdquo; — Numbers 6:24-26
          </p>
        </motion.div>

        {/* Core Image Feature: Centrally featured birthday photo (Responsive on phone) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 90 }}
          className="relative group my-2 mb-10"
        >
          {/* Animated Radiant Rings & Halo Glow */}
          <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-pink-500 via-amber-400 to-teal-400 rounded-full blur-xl sm:blur-2xl opacity-40 group-hover:opacity-75 transition duration-700 animate-spin-slow" />
          <div className="absolute -inset-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-300 rounded-full opacity-70 blur-sm animate-pulse-glow" />

          {/* Central Portrait Container */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-88 md:h-88 rounded-full overflow-hidden p-2 sm:p-2.5 bg-gradient-to-tr from-pink-500/80 via-purple-500/40 to-amber-400/80 shadow-2xl shadow-rose-950/80 border-2 border-white/20">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/birthday/home/birthday_main.jpg"
                alt="Birthday Queen Portrait"
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 352px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-1 sm:right-2 glass-panel-warm px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl border border-pink-400/40 shadow-xl flex items-center gap-2"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-pink-500/30 flex items-center justify-center text-pink-300">
              <Heart className="w-3.5 h-3.5 fill-current text-pink-400 animate-ping" />
            </div>
            <div className="text-left">
              <p className="text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">Special Day</p>
              <p className="text-[11px] sm:text-xs font-bold text-white">Forever Beautiful</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-1 -left-1 sm:left-2 glass-panel-gold px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl border border-amber-400/40 shadow-xl flex items-center gap-2"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-500/30 flex items-center justify-center text-amber-300">
              <Crown className="w-3.5 h-3.5 text-amber-300" />
            </div>
            <div className="text-left">
              <p className="text-[9px] sm:text-[10px] text-amber-300 uppercase tracking-widest font-semibold">Our Blessing</p>
              <p className="text-[11px] sm:text-xs font-bold text-white">Pure Radiance</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Pulsating Countdown Timer (Optimized for Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full max-w-lg mx-auto mb-8 px-2"
        >
          <div className="glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-pink-500 to-amber-400" />

            <div className="flex items-center justify-center gap-2 mb-3">
              <Calendar className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-pink-200">
                Celebration Live Countdown
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-black/40 border border-white/10 hover:border-pink-500/40 transition-colors shadow-inner"
                >
                  <span className="font-display text-xl sm:text-3xl md:text-4xl font-black text-white tracking-wider tabular-nums">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] sm:text-[11px] uppercase font-medium text-zinc-400 tracking-wider mt-0.5 sm:mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] sm:text-xs text-zinc-400 mt-3 italic text-center">
              ✨ Every second celebrates the blessing of having you in this world ✨
            </p>
          </div>
        </motion.div>

        {/* Interactive Action Buttons (Stacked cleanly on phone) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md px-2 mb-4"
        >
          <button
            onClick={launchFireworkConfetti}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Gift className="w-4 h-4 animate-bounce" />
            <span>Launch Birthday Fireworks! 🎆</span>
          </button>

          <a
            href="#dad-wish"
            className="w-full sm:w-auto px-5 py-3.5 rounded-full glass-panel hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 border border-white/20 flex items-center justify-center gap-2 shadow-lg"
          >
            <Heart className="w-4 h-4 text-amber-400 fill-amber-400/50" />
            <span>Read Dad&apos;s Wish</span>
          </a>

          <a
            href="#gallery"
            className="w-full sm:w-auto px-5 py-3.5 rounded-full glass-panel hover:bg-white/10 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all hover:scale-105 border border-white/15 flex items-center justify-center gap-1.5"
          >
            <span>Memories</span>
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </header>
  );
}
