"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Sun, Church, Compass } from "lucide-react";

interface MagicalWishCard {
  id: string;
  photoSrc: string;
  photoAlt: string;
  title: string;
  subtitle: string;
  wishText: string;
  scripture?: string;
  badge: string;
  emoji: string;
  accentBorder: string;
  accentBg: string;
  glowColor: string;
  rotation: string;
}

const WA_BASE = "/birthday/photogallery/WhatsApp Unknown 2026-10-16 at 10.47.39";

const MAGICAL_WISHES: MagicalWishCard[] = [
  {
    id: "wish-radiance",
    photoSrc: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.15.jpeg`,
    photoAlt: "Sudu in black dress with golden necklace",
    title: "Wish of Grace & Heavenly Beauty",
    subtitle: "Radiance from within",
    wishText:
      "May Almighty God preserve the pure innocence of your soul, your gentle kindness that touches everyone, and that radiant smile that turns any rainy morning into sunshine.",
    scripture: "“You are all together beautiful, my darling; there is no flaw in you.” — Song of Songs 4:7",
    badge: "Crown of Grace 👑",
    emoji: "✨",
    accentBorder: "border-rose-300 hover:border-rose-500",
    accentBg: "bg-gradient-to-br from-rose-50/90 via-white to-pink-50/80",
    glowColor: "from-rose-400/25 via-pink-400/20 to-amber-300/20",
    rotation: "-rotate-1",
  },
  {
    id: "wish-horizon",
    photoSrc: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.16 (2).jpeg`,
    photoAlt: "Sudu overlooking vast green paddy fields and golden clouds",
    title: "Wish of Endless Horizons & Peace",
    subtitle: "A future as wide and green as fields",
    wishText:
      "Just as the green fields stretch without limits toward the sun-drenched clouds, may God's blessings, good health, and peace stretch across all the beautiful chapters of your life.",
    scripture: "“The Lord will guide you continually, giving you water when you are dry and restoring your strength.” — Isaiah 58:11",
    badge: "Open Horizons 🌅",
    emoji: "🕊️",
    accentBorder: "border-teal-300 hover:border-teal-500",
    accentBg: "bg-gradient-to-br from-teal-50/90 via-white to-sky-50/80",
    glowColor: "from-teal-400/25 via-emerald-400/20 to-sky-300/20",
    rotation: "rotate-1",
  },
  {
    id: "wish-roadtrip",
    photoSrc: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.47.jpeg`,
    photoAlt: "Couple road trip leaning against car in the forest",
    title: "Wish of Safe Journeys & Love",
    subtitle: "By your side on every path",
    wishText:
      "No matter which highways or country roads life takes us down, may guardian angels walk beside you, holding your hand and sheltering you in unconditional love.",
    scripture: "“For He will command His angels concerning you to guard you in all your ways.” — Psalm 91:11",
    badge: "Sweet Journey 🌲",
    emoji: "💑",
    accentBorder: "border-emerald-300 hover:border-emerald-500",
    accentBg: "bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/80",
    glowColor: "from-emerald-400/25 via-green-400/20 to-amber-300/20",
    rotation: "-rotate-1",
  },
  {
    id: "wish-laughter",
    photoSrc: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.48.jpeg`,
    photoAlt: "Goofy cartoon face filter sharing silly moments",
    title: "Wish of Boundless Joy & Giggles",
    subtitle: "Laughter that makes your soul dance",
    wishText:
      "May your life always be blessed with belly-aching laughter, goofy filters, silly dances, and uncontainable giggles with the people who cherish you most.",
    scripture: "“A joyful heart is good medicine, and a cheerful mind brings healing.” — Proverbs 17:22",
    badge: "Pure Giggles 🤪",
    emoji: "🎉",
    accentBorder: "border-amber-300 hover:border-amber-500",
    accentBg: "bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/80",
    glowColor: "from-amber-400/25 via-yellow-400/20 to-orange-300/20",
    rotation: "rotate-1",
  },
  {
    id: "wish-cafe",
    photoSrc: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.49.jpeg`,
    photoAlt: "Cozy café date with burgers, smoothies and church in background",
    title: "Wish of Sweet Dates & Daily Magic",
    subtitle: "Everyday moments turned to gold",
    wishText:
      "To sharing crispy fries, sweet mango smoothies, watching movies, and seeing churches in the distance. May our simplest moments always taste like heavenly bliss.",
    scripture: "“They broke bread in their homes and ate together with glad and sincere hearts.” — Acts 2:46",
    badge: "Café Sunshine 🍔",
    emoji: "💖",
    accentBorder: "border-pink-300 hover:border-pink-500",
    accentBg: "bg-gradient-to-br from-pink-50/90 via-white to-rose-50/80",
    glowColor: "from-pink-400/25 via-rose-400/20 to-amber-300/20",
    rotation: "-rotate-1",
  },
  {
    id: "wish-mantle",
    photoSrc: `${WA_BASE}/WhatsApp Image 2026-10-16 at 10.46.45.jpeg`,
    photoAlt: "Full body sunset balcony portrait bathed in golden solar flare",
    title: "Wish of Blessed Mother Mary's Mantle",
    subtitle: "Devi Pihitai mage sudu",
    wishText:
      "Wrapped forever beneath Mother Mary's holy mantle, protected from all darkness and showered with God's celestial peace. Happy Birthday, our precious Sudu!",
    scripture: "“The Lord bless you and keep you; the Lord make His face shine upon you.” — Numbers 6:24-25",
    badge: "Sacred Blessing ✝️",
    emoji: "🌹",
    accentBorder: "border-amber-400 hover:border-amber-600",
    accentBg: "bg-gradient-to-br from-amber-50/95 via-white to-rose-50/80",
    glowColor: "from-amber-400/30 via-rose-400/25 to-yellow-300/20",
    rotation: "rotate-0",
  },
];

export default function MagicalBirthdayWishes() {
  return (
    <section
      id="magical-wishes"
      className="relative py-20 sm:py-28 px-3 sm:px-6 overflow-hidden bg-gradient-to-b from-[#fff5f8] via-[#ffffff] to-[#fffaf6]"
    >
      {/* Background Floral & Golden Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/3 w-80 sm:w-[38rem] h-80 sm:h-[38rem] bg-amber-100/50 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 sm:w-[34rem] h-80 sm:h-[34rem] bg-rose-100/60 rounded-full blur-[110px] animate-float" />
        <div className="absolute top-12 left-6 text-3xl opacity-85 select-none animate-float">🌻</div>
        <div className="absolute top-20 right-8 text-2xl opacity-85 select-none animate-float-reverse">🌹</div>
        <div className="absolute bottom-20 left-10 text-3xl opacity-85 select-none animate-float">💖</div>
        <div className="absolute bottom-12 right-12 text-3xl opacity-85 select-none animate-float-reverse">🌻</div>
        <div className="absolute top-1/2 left-4 text-2xl opacity-75 select-none animate-float">🌹</div>
        <div className="absolute top-1/2 right-4 text-2xl opacity-75 select-none animate-float-reverse">💖</div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-gold border border-amber-300 text-amber-950 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
            <span>Enchanted Birthday Wishes &amp; Blessings</span>
            <span className="text-sm">✝️</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-stone-900 mb-3"
          >
            Wishes That <span className="text-gradient-rainbow">Come Alive</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-stone-600 max-w-2xl mx-auto text-xs sm:text-sm sm:text-base px-2"
          >
            No buttons required — as you float through these pages, each photo blooms with a sacred blessing,
            tender wish, and eternal love crafted just for you.
          </motion.p>
        </div>

        {/* 6 Enchanted Wish Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {MAGICAL_WISHES.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative rounded-3xl p-4 sm:p-5 border-2 ${card.accentBorder} ${card.accentBg} shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden group ${card.rotation}`}
            >
              {/* Top Glow Halo behind Card */}
              <div
                className={`absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br ${card.glowColor} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div>
                {/* Card Header Badge */}
                <div className="flex items-center justify-between mb-3.5 relative z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-stone-800 border border-white/80 shadow-xs flex items-center gap-1">
                    <span>{card.emoji}</span>
                    <span>{card.badge}</span>
                  </span>

                  {/* Pulsing Love Heart Badge */}
                  <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center border border-rose-200/80 shadow-xs group-hover:scale-110 transition-transform">
                    <Heart className="w-3.5 h-3.5 fill-rose-500 animate-pulse" />
                  </div>
                </div>

                {/* Photo Container from WhatsApp folder with Polaroid Styling */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border-2 border-white shadow-md mb-4 bg-stone-100 group-hover:shadow-xl transition-shadow duration-500">
                  <Image
                    src={card.photoSrc}
                    alt={card.photoAlt}
                    fill
                    className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300" />

                  {/* Photo Corner Ribbon */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-semibold drop-shadow-md">
                    <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                      {card.subtitle}
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
                  </div>
                </div>

                {/* Title & Heartfelt Birthday Wish */}
                <h3 className="font-display text-base sm:text-lg font-bold text-stone-900 leading-snug mb-2">
                  {card.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-stone-700 leading-relaxed mb-3">
                  {card.wishText}
                </p>
              </div>

              {/* Catholic Scripture / Blessing Seal at Bottom */}
              {card.scripture && (
                <div className="pt-3 border-t border-stone-200/60 mt-1">
                  <p className="font-body text-[11px] text-amber-900/90 italic font-medium leading-relaxed">
                    {card.scripture}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
