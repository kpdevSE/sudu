"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Flame, Star, Quote, CheckCircle2 } from "lucide-react";
import { launchHeartConfetti, launchSunflowerAndRoseConfetti } from "./ConfettiLauncher";

export default function BoyfriendWishSection() {
  const [heartsCount, setHeartsCount] = useState(1024);
  const [isAutoSending, setIsAutoSending] = useState(true);
  const [activeReason, setActiveReason] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number }[]>([]);

  const loveReasons = [
    {
      title: "Your Warm, Radiant Smile",
      desc: "How your entire face lights up whenever you laugh at our silly inside jokes—it brightens even the darkest days like pure sunshine.",
    },
    {
      title: "Your Tender, Caring Soul",
      desc: "The immense kindness and empathy you give so freely to everyone around you. You make the world a gentler, more beautiful place.",
    },
    {
      title: "Our Quiet Café Moments",
      desc: "Sitting across from you, talking about everything and nothing, lost in your eyes while the rest of the world fades into the background.",
    },
    {
      title: "Your Unstoppable Strength",
      desc: "The grace and resilience you carry every day. Seeing your courage, intellect, and big heart inspires me to be the best version of myself.",
    },
  ];

  // Auto-send kisses stream: increments love count automatically without needing manual clicks!
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAutoSending(true);
          if (!interval) {
            interval = setInterval(() => {
              setHeartsCount((prev) => prev + 1);

              // Spawn temporary floating heart
              const newHeart = { id: Date.now(), x: Math.random() * 40 - 20 };
              setFloatingHearts((prev) => [...prev.slice(-6), newHeart]);
            }, 1400);
          }
        } else {
          if (interval) {
            clearInterval(interval);
            interval = null;
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  const handleSendHeart = () => {
    setHeartsCount((prev) => prev + 5);
    launchHeartConfetti();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const tileVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="my-wish"
      className="relative py-20 sm:py-28 px-3 sm:px-6 overflow-hidden bg-gradient-to-b from-[#fff5f8] via-[#fffbf9] to-[#fff3f6]"
    >
      {/* Soft Luminous Warm Glow & Ambient Floating Flowers */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 sm:w-[34rem] h-80 sm:h-[34rem] bg-rose-200/40 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-amber-200/40 rounded-full blur-[110px] animate-float" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-pink-100/60 rounded-full blur-[90px]" />

        {/* Ambient Sunflowers & Roses */}
        <div className="absolute top-16 left-8 text-3xl opacity-75 select-none animate-float">🌻</div>
        <div className="absolute bottom-20 right-8 text-3xl opacity-75 select-none animate-float-reverse">🌹</div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-warm border border-rose-300 text-rose-800 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 shadow-sm"
          >
            <Flame className="w-4 h-4 text-rose-500 fill-current" />
            <span>From The Depths Of My Heart</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-3"
          >
            My Wish <span className="text-gradient-rose">For You, My Sudu</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-stone-600 max-w-xl mx-auto text-xs sm:text-sm sm:text-base px-2 mb-4"
          >
            To the one who holds my heart, turns ordinary days into poetry, and makes every tomorrow worth dreaming for.
          </motion.p>

          {/* Hands-Free Auto-Kiss Stream Live Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 border border-rose-300 text-rose-900 text-xs font-semibold shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span>Auto-Kiss Stream Active: Delivering kisses automatically so you don&apos;t have to click! 😘💋</span>
          </motion.div>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Couple Photo Card with Polaroid Style in White Theme */}
          <motion.div variants={tileVariants} className="lg:col-span-5 flex flex-col items-center sticky top-24">
            <div className="relative w-full max-w-md group">
              {/* Soft Radiant Halo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-300/40 via-amber-200/40 to-pink-300/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-500" />

              {/* Polaroid Frame */}
              <div className="relative bg-white/95 p-4 sm:p-5 rounded-3xl border-2 border-rose-200/80 shadow-2xl backdrop-blur-2xl">
                {/* Golden Tape Accent */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-amber-300/60 backdrop-blur-md rounded-sm border border-amber-300 rotate-1 shadow-sm flex items-center justify-center text-[10px] font-bold text-amber-900 uppercase tracking-widest">
                  Forever 💖
                </div>

                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-stone-200 shadow-inner">
                  <Image
                    src="/birthday/my/my_photo.jpg"
                    alt="Our Cherished Moments Together"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-40" />

                  {/* Photo Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                    <span className="font-semibold tracking-wide">You &amp; Me Always</span>
                    <span className="flex items-center gap-1 text-pink-300">
                      <Heart className="w-3.5 h-3.5 fill-current" /> Together
                    </span>
                  </div>
                </div>

                {/* Caption / Interactive Counter with Auto-Streaming Floating Hearts */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between relative">
                  <div>
                    <p className="font-script text-2xl text-rose-600">Our Favorite Memory</p>
                    <p className="text-[11px] text-stone-500">Auto-incrementing with love...</p>
                  </div>

                  <div className="relative">
                    {/* Floating mini hearts from auto-stream */}
                    <AnimatePresence>
                      {floatingHearts.map((h) => (
                        <motion.div
                          key={h.id}
                          initial={{ opacity: 1, y: 0, x: h.x, scale: 0.8 }}
                          animate={{ opacity: 0, y: -45, scale: 1.3 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.3, ease: "easeOut" }}
                          className="absolute -top-3 left-1/2 pointer-events-none text-rose-500 text-sm select-none"
                        >
                          💖
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    <button
                      onClick={handleSendHeart}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 hover:bg-rose-500 text-rose-600 hover:text-white transition-all text-xs font-bold border border-rose-200 hover:scale-105 active:scale-95 shadow-xs"
                      title="Tap for bonus kisses!"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current animate-pulse text-rose-500 group-hover:text-white" />
                      <span>{heartsCount.toLocaleString()} Kisses 💋</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Long-form Love Message Card in White Theme */}
          <motion.div variants={tileVariants} className="lg:col-span-7">
            <div className="relative bg-white/95 rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xl overflow-hidden backdrop-blur-xl">
              {/* Soft decorative gradient glow inside card */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-rose-100/50 rounded-full blur-3xl -z-10" />
              <Quote className="w-12 h-12 text-rose-300/30 absolute top-6 right-6" />

              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-rose-600 block mb-1">
                  A Love Letter For Your Special Day
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                  To My Sudu, My Best Friend &amp; Eternal Love
                </h3>
              </div>

              {/* Personal Long-Form Love Message */}
              <div className="space-y-4 font-body text-stone-700 text-xs sm:text-sm sm:text-base leading-relaxed">
                <p>
                  Happy Birthday to the girl who stole my heart and gave me a thousand reasons to smile every single day.
                  From the moment you came into my life, everything turned brighter, warmer, and so much more meaningful.
                </p>
                <p>
                  Your laughter is my favorite symphony, your eyes are my favorite view, and your kindness is the anchor
                  that keeps me grounded. Seeing you grow, thrive, and face every day with your breathtaking smile fills
                  me with endless pride and admiration.
                </p>
                <p>
                  On this milestone birthday, my greatest wish is for your life to be showered with all the boundless
                  joy, peace, laughter, and success that you bring into mine. Whatever the future holds, I promise to
                  stand by you, hold your hand through every chapter, and cherish you more with every sunrise.
                </p>
              </div>

              {/* Romantic handwritten sign-off */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-500 font-medium">Forever and always,</p>
                  <p className="font-script text-3xl sm:text-4xl text-rose-600 mt-0.5">Yours Truly 💖</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      handleSendHeart();
                      launchSunflowerAndRoseConfetti();
                    }}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-rose-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                    <span>Send Extra Kisses 💋</span>
                  </button>
                </div>
              </div>
            </div>

            {/* All 4 Sweet Reasons Always Expanded & Readable Without Clicking! */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3 px-1">
                <p className="text-xs font-bold uppercase tracking-widest text-stone-600">
                  4 Sweet Reasons Why I Adore You ✨
                </p>
                <span className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-rose-500" />
                  All open for you to read effortlessly
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {loveReasons.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={tileVariants}
                    onClick={() => setActiveReason(activeReason === idx ? null : idx)}
                    className={`p-4 rounded-2xl transition-all duration-300 border ${
                      activeReason === idx
                        ? "border-rose-400 bg-rose-50 shadow-md shadow-rose-900/5 scale-[1.01]"
                        : "bg-white/95 border-stone-200/90 hover:border-rose-200 hover:bg-white shadow-xs"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-1.5 rounded-lg bg-amber-50 text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">{item.title}</h4>
                    </div>

                    {/* Always visible description so she can read effortlessly without clicking! */}
                    <p className="text-xs text-stone-600 leading-relaxed font-body pl-1">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
