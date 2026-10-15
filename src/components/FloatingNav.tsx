"use client";

import React, { useState, useEffect } from "react";
import { Heart, Sparkles, Image as ImageIcon, Users, MessageSquareQuote, Crown } from "lucide-react";
import { launchSunflowerAndRoseConfetti } from "./ConfettiLauncher";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems: NavItem[] = [
    { id: "hero", label: "Celebration", icon: <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" /> },
    { id: "my-wish", label: "My Love", icon: <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 fill-rose-500" /> },
    { id: "dad-wish", label: "Dad's Pride", icon: <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" /> },
    { id: "grandparents-wish", label: "Blessings", icon: <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600" /> },
    { id: "gallery", label: "Moments", icon: <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500" /> },
    { id: "wishbook", label: "Wishbook", icon: <MessageSquareQuote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside aria-label="Quick Page Navigation" className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[96vw]">
      <div className="bg-white/95 rounded-full p-1 sm:p-1.5 flex items-center gap-0.5 sm:gap-1 border border-stone-200/90 shadow-2xl shadow-stone-900/10 backdrop-blur-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white shadow-md scale-105"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-100/80"
              }`}
            >
              {item.icon}
              <span className={`hidden md:inline ${isActive ? "font-semibold" : ""}`}>
                {item.label}
              </span>
            </button>
          );
        })}

        <div className="w-px h-5 bg-stone-200 mx-0.5" />

        <button
          onClick={launchSunflowerAndRoseConfetti}
          className="p-1.5 sm:p-2 rounded-full bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white transition-all hover:scale-110 active:scale-95 border border-amber-200"
          title="Shower Sunflowers & Roses!"
          aria-label="Shower sunflowers and roses"
        >
          <span className="text-xs">🌻</span>
        </button>
      </div>
    </aside>
  );
}
