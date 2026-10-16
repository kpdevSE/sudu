"use client";

import React, { useState, useEffect } from "react";
import { Heart, Sparkles, Image as ImageIcon, Users, MessageSquareQuote, Crown } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: (active: boolean) => React.ReactNode;
  badge?: string;
}

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems: NavItem[] = [
    {
      id: "hero",
      label: "Celebration",
      icon: (active) => <Crown className={`w-5 h-5 transition-transform ${active ? "text-amber-600 scale-110" : "text-stone-600"}`} />,
      badge: "🌻",
    },
    {
      id: "magical-wishes",
      label: "Magic ✨",
      icon: (active) => <Sparkles className={`w-5 h-5 transition-transform ${active ? "text-amber-500 scale-110" : "text-stone-600"}`} />,
      badge: "✨",
    },
    {
      id: "my-wish",
      label: "My Love",
      icon: (active) => <Heart className={`w-5 h-5 transition-transform ${active ? "text-rose-600 fill-rose-600 scale-110" : "text-stone-600"}`} />,
      badge: "1",
    },
    {
      id: "dad-wish",
      label: "Dad",
      icon: (active) => <Sparkles className={`w-5 h-5 transition-transform ${active ? "text-amber-600 scale-110" : "text-stone-600"}`} />,
    },
    {
      id: "grandparents-wish",
      label: "Blessings",
      icon: (active) => <Users className={`w-5 h-5 transition-transform ${active ? "text-teal-600 scale-110" : "text-stone-600"}`} />,
    },
    {
      id: "gallery",
      label: "Moments",
      icon: (active) => <ImageIcon className={`w-5 h-5 transition-transform ${active ? "text-rose-500 scale-110" : "text-stone-600"}`} />,
    },
    {
      id: "wishbook",
      label: "Wishes",
      icon: (active) => <MessageSquareQuote className={`w-5 h-5 transition-transform ${active ? "text-purple-600 scale-110" : "text-stone-600"}`} />,
    },
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
    <nav
      aria-label="WhatsApp Style Bottom Navigation"
      className="fixed bottom-2 sm:bottom-4 left-2.5 right-2.5 sm:left-1/2 sm:-translate-x-1/2 sm:max-w-xl z-40 transition-all duration-300"
    >
      {/* WhatsApp Full-Width Frosted Glass Dock */}
      <div className="w-full whatsapp-glass rounded-[26px] sm:rounded-full px-1.5 sm:px-3 py-1.5 pb-[calc(env(safe-area-inset-bottom,0px)+6px)] flex items-center justify-around gap-0.5">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 group focus:outline-none"
            >
              {/* Top Icon with WhatsApp Active Pill Capsule */}
              <div className="relative flex items-center justify-center">
                <div
                  className={`flex items-center justify-center transition-all duration-200 ${
                    isActive
                      ? "bg-rose-100/90 text-rose-600 px-3.5 sm:px-4 py-1 rounded-full shadow-xs"
                      : "p-1 text-stone-600 group-hover:text-stone-900"
                  }`}
                >
                  {item.icon(isActive)}
                </div>

                {/* WhatsApp Green/Rose Notification Badge */}
                {item.badge && isActive && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-xs border border-white">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Text Label Underneath (Exact WhatsApp Typography) */}
              <span
                className={`text-[10px] sm:text-[11px] tracking-tight mt-0.5 transition-colors line-clamp-1 ${
                  isActive
                    ? "font-bold text-stone-900"
                    : "font-medium text-stone-500 group-hover:text-stone-800"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Rightmost Quick Floral Button (WhatsApp Avatar Style) */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex flex-col items-center justify-center py-1 px-1.5 rounded-2xl transition-all duration-200 group focus:outline-none"
          title="Back to Top Celebration"
          aria-label="Back to top celebration"
        >
          <div className="p-1 rounded-full bg-amber-100/80 text-amber-600 border border-amber-200 group-hover:scale-110 active:scale-95 transition-transform flex items-center justify-center w-7 h-7 shadow-xs">
            <span className="text-sm">🌻</span>
          </div>
          <span className="text-[10px] font-semibold text-amber-800 tracking-tight mt-0.5">
            Top
          </span>
        </button>
      </div>
    </nav>
  );
}
