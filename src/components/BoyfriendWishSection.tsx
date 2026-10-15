"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, Flame, Star, Quote, ChevronRight } from "lucide-react";
import { launchHeartConfetti } from "./ConfettiLauncher";

export default function BoyfriendWishSection() {
  const [heartsCount, setHeartsCount] = useState(1024);
  const [activeReason, setActiveReason] = useState<number | null>(null);

  const loveReasons = [
    {
      title: "Your Warm, Radiant Smile",
      desc: "How your entire face lights up whenever you laugh at our silly inside jokes—it brightens even the darkest days.",
    },
    {
      title: "Your Tender, Caring Soul",
      desc: "The immense kindness and empathy you give so freely to everyone around you. You make the world a gentler place.",
    },
    {
      title: "Our Quiet Café Moments",
      desc: "Sitting across from you, talking about everything and nothing, lost in your eyes with time standing still.",
    },
    {
      title: "Your Unstoppable Strength",
      desc: "The grace and resilience you carry every day. Seeing your ambition and heart inspires me to be better.",
    },
  ];

  const handleSendHeart = () => {
    setHeartsCount((prev) => prev + 1);
    launchHeartConfetti();
  };

  // Container animation for fading tile cascade
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
      transition: { duration: 0.7, ease: [0.21, 0.45, 0.32, 0.9] },
    },
  };

  return (
    <section
      id="boyfriend-wish"
      className="relative py-28 px-4 overflow-hidden"
    >
      {/* Soft, Warm Candlelight Glow & Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[34rem] h-[34rem] bg-rose-600/20 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-pink-500/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-warm border border-rose-500/30 text-rose-300 text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 shadow-lg shadow-rose-500/10"
          >
            <Flame className="w-4 h-4 text-rose-400 fill-current" />
            <span>From The Depths Of My Heart</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            My Wish <span className="text-gradient-rose">For You, My Love</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-zinc-400 max-w-xl mx-auto text-sm sm:text-base"
          >
            To the one who holds my heart, turns ordinary days into poetry, and makes every tomorrow worth dreaming for.
          </motion.p>
        </div>

        {/* Fading Tile Cascade Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Couple Photo Card with Soft Warm Glow and Polaroid Style */}
          <motion.div variants={tileVariants} className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md group">
              {/* Warm Glow Background Accent */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/40 via-amber-400/30 to-pink-600/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-500" />

              {/* Polaroid Frame */}
              <div className="relative glass-panel-warm p-4 sm:p-5 rounded-3xl border border-rose-400/30 shadow-2xl backdrop-blur-2xl">
                {/* Golden Tape Accent */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-amber-400/30 backdrop-blur-md rounded-sm border border-amber-300/40 rotate-1 shadow-sm" />

                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                  <Image
                    src="/birthday/my/my_photo.jpg"
                    alt="Our Cherished Moments Together"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />

                  {/* Photo overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3 py-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
                    <span className="font-medium tracking-wide">You & Me Forever</span>
                    <span className="flex items-center gap-1 text-pink-300">
                      <Heart className="w-3.5 h-3.5 fill-current" /> Together
                    </span>
                  </div>
                </div>

                {/* Caption / Interactive Counter */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-script text-xl text-rose-200">Our Favorite Memory</p>
                    <p className="text-[11px] text-zinc-400">Captured in time, treasured forever</p>
                  </div>
                  <button
                    onClick={handleSendHeart}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white transition-all text-xs font-semibold border border-rose-500/30 hover:scale-105 active:scale-95"
                    title="Click to send love!"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current animate-pulse text-rose-400 group-hover:text-white" />
                    <span>{heartsCount.toLocaleString()}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Long-form Love Message Card */}
          <motion.div variants={tileVariants} className="lg:col-span-7">
            <div className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl relative overflow-hidden">
              {/* Soft decorative gradient glow inside card */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl -z-10" />
              <Quote className="w-12 h-12 text-rose-400/20 absolute top-6 right-6" />

              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-semibold text-rose-400 block mb-1">
                  A Love Letter For Your Special Day
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                  To My Sudu, My Best Friend & Eternal Love
                </h3>
              </div>

              {/* Personal Long-Form Love Message */}
              <div className="space-y-4 font-body text-zinc-200 text-sm sm:text-base leading-relaxed">
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
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400">Forever and always,</p>
                  <p className="font-script text-3xl sm:text-4xl text-rose-300 mt-1">Yours Truly 💖</p>
                </div>

                <button
                  onClick={handleSendHeart}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium text-xs sm:text-sm shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Send a Thousand Kisses</span>
                </button>
              </div>
            </div>

            {/* Micro-Interaction: Little Things I Love About You Cards */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3 px-1">
                4 Sweet Reasons Why I Adore You (Click to Read)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {loveReasons.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={tileVariants}
                    onClick={() => setActiveReason(activeReason === idx ? null : idx)}
                    className={`cursor-pointer p-3.5 rounded-2xl glass-panel transition-all duration-300 border ${
                      activeReason === idx
                        ? "border-rose-400/60 bg-rose-950/40 shadow-lg shadow-rose-900/30"
                        : "border-white/10 hover:border-rose-400/30 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className={`w-3.5 h-3.5 ${activeReason === idx ? "text-amber-300 fill-amber-300" : "text-zinc-400"}`} />
                        <h4 className="text-xs font-semibold text-white">{item.title}</h4>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${
                          activeReason === idx ? "rotate-90 text-rose-400" : ""
                        }`}
                      />
                    </div>
                    {activeReason === idx && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-xs text-zinc-300 mt-2 pl-5.5 leading-relaxed"
                      >
                        {item.desc}
                      </motion.p>
                    )}
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
