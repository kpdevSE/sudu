"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";

export default function MagicalWishesMarquee() {
  const wishesList = [
    {
      text: "Happy Birthday Sudu!",
      sub: "May your day be filled with heaven's greatest joys",
      avatar: "/birthday/photogallery/WhatsApp Unknown 2026-10-16 at 10.47.39/WhatsApp Image 2026-10-16 at 10.46.15.jpeg",
      icon: "👑",
      gradient: "from-rose-500/10 via-pink-500/10 to-amber-500/15 border-rose-200",
    },
    {
      text: "God's Richest Blessings",
      sub: "Devi Pihitai mage duwata • Mother Mary's Mantle",
      avatar: "/birthday/photogallery/WhatsApp Unknown 2026-10-16 at 10.47.39/WhatsApp Image 2026-10-16 at 10.46.16 (1).jpeg",
      icon: "✝️",
      gradient: "from-amber-500/10 via-yellow-500/10 to-emerald-500/15 border-amber-200",
    },
    {
      text: "Radiant Golden Sunshine",
      sub: "As warm as sunflowers and sweet as roses",
      avatar: "/birthday/photogallery/WhatsApp Unknown 2026-10-16 at 10.46.45.jpeg",
      icon: "🌻",
      gradient: "from-yellow-500/10 via-amber-500/10 to-rose-500/15 border-amber-200",
    },
    {
      text: "Forever My Heart's Anchor",
      sub: "Thank you for bringing color into my whole world",
      avatar: "/birthday/photogallery/WhatsApp Unknown 2026-10-16 at 10.47.39/WhatsApp Image 2026-10-16 at 10.46.47.jpeg",
      icon: "💖",
      gradient: "from-pink-500/10 via-rose-500/10 to-purple-500/15 border-pink-200",
    },
    {
      text: "Endless Laughter & Silliness",
      sub: "Here's to a lifetime of funny filters & inside jokes",
      avatar: "/birthday/photogallery/WhatsApp Unknown 2026-10-16 at 10.47.39/WhatsApp Image 2026-10-16 at 10.46.48.jpeg",
      icon: "🤪",
      gradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/15 border-orange-200",
    },
    {
      text: "Cozy Café Memories",
      sub: "Juicy burgers, sweet smoothies & your sparkling eyes",
      avatar: "/birthday/photogallery/WhatsApp Unknown 2026-10-16 at 10.47.39/WhatsApp Image 2026-10-16 at 10.46.49.jpeg",
      icon: "🍔",
      gradient: "from-amber-500/10 via-yellow-500/10 to-rose-500/15 border-amber-200",
    },
  ];

  // Duplicate for seamless infinite loop
  const doubleList = [...wishesList, ...wishesList];

  return (
    <div className="relative w-full py-4 overflow-hidden bg-gradient-to-r from-rose-50/60 via-amber-50/50 to-pink-50/60 border-y border-rose-100/80 shadow-xs my-2">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-100/30 to-transparent pointer-events-none" />

      {/* Infinite scrolling ribbon */}
      <div className="flex gap-4 animate-marquee hover:pause-animation w-max">
        {doubleList.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md border ${item.gradient} shadow-xs shrink-0 select-none hover:scale-105 transition-transform duration-300`}
          >
            {/* Avatar Photo from WhatsApp folder */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs shrink-0 bg-stone-100">
              <Image
                src={item.avatar}
                alt={item.text}
                fill
                className="object-cover object-top"
                sizes="40px"
              />
            </div>

            {/* Wish Text */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs">{item.icon}</span>
                <span className="text-xs font-bold text-stone-900 tracking-tight">
                  {item.text}
                </span>
              </div>
              <span className="text-[10px] text-stone-600 font-medium tracking-tight">
                {item.sub}
              </span>
            </div>

            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse ml-1 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
