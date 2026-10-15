"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquareQuote, Send, Sparkles, Heart, Star } from "lucide-react";
import { launchFireworkConfetti, launchHeartConfetti, launchSunflowerAndRoseConfetti } from "./ConfettiLauncher";

interface Wish {
  id: string;
  author: string;
  message: string;
  emoji: string;
  timestamp: string;
  color: string;
}

export default function WishbookSection() {
  const initialWishes: Wish[] = [
    {
      id: "w1",
      author: "Thaththa (Dad)",
      message: "Devi Pihitai mage suduma duwata! May Jesus and Mother Mary bless your life with eternal happiness, sound health, and peace. You will always be my little girl! ✝️❤️",
      emoji: "👑",
      timestamp: "Today",
      color: "border-amber-300 bg-amber-50/80 text-amber-950",
    },
    {
      id: "w2",
      author: "Achchi & Seeya",
      message: "Devi Pihitai! May Almighty God watch over you every second. Long life, joyful smile, and heavenly blessings throughout all your years ahead! 🙏✨",
      emoji: "🌻",
      timestamp: "Today",
      color: "border-teal-300 bg-teal-50/80 text-teal-950",
    },
    {
      id: "w3",
      author: "Family & Loved Ones",
      message: "Wishing the most beautiful birthday to our angel! May God's grace guide your bright path and fulfill all the desires of your heart! 💖🎂",
      emoji: "🌹",
      timestamp: "Today",
      color: "border-rose-300 bg-rose-50/80 text-rose-950",
    },
    {
      id: "w4",
      author: "Bestie Squad",
      message: "HAPPY BIRTHDAY QUEEN! Never stop glowing, dancing, and lighting up every room with your infectious laugh. God bless you always! 🥳✨",
      emoji: "✨",
      timestamp: "Today",
      color: "border-purple-300 bg-purple-50/80 text-purple-950",
    },
  ];

  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("💖");

  useEffect(() => {
    const saved = localStorage.getItem("birthday_wishes_board_v3");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      } catch {
        // ignore
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    const colors = [
      "border-rose-300 bg-rose-50/80 text-rose-950",
      "border-amber-300 bg-amber-50/80 text-amber-950",
      "border-teal-300 bg-teal-50/80 text-teal-950",
      "border-purple-300 bg-purple-50/80 text-purple-950",
      "border-yellow-300 bg-yellow-50/80 text-yellow-950",
    ];

    const newWish: Wish = {
      id: Date.now().toString(),
      author: author.trim(),
      message: message.trim(),
      emoji: selectedEmoji,
      timestamp: "Just now",
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem("birthday_wishes_board_v3", JSON.stringify(updated));

    setAuthor("");
    setMessage("");
    launchSunflowerAndRoseConfetti();
    launchFireworkConfetti();
  };

  return (
    <section id="wishbook" className="relative py-20 sm:py-28 px-3 sm:px-6 overflow-hidden bg-gradient-to-b from-[#fffaf6] via-[#ffffff] to-[#fff5f8]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/3 w-72 sm:w-[34rem] h-72 sm:h-[34rem] bg-purple-100/60 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-rose-100/60 rounded-full blur-[90px] animate-float" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-panel border border-purple-300 text-purple-900 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-sm"
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-purple-600" />
            <span>Interactive Birthday Wish Wall</span>
            <span className="text-sm">🌻</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-3"
          >
            Leave Your <span className="text-gradient-rainbow">Birthday Blessings</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-stone-600 max-w-xl mx-auto text-xs sm:text-sm sm:text-base px-2"
          >
            Add a personal wish, prayer, or celebratory sticker to her digital memory board.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Wish Submission Form (Light Theme) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-white/90 rounded-3xl p-5 sm:p-7 border border-stone-200/80 shadow-xl relative overflow-hidden backdrop-blur-md"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="p-2 rounded-xl bg-purple-100 text-purple-600">
                <Star className="w-4 h-4 text-amber-500" />
              </span>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">Write a Blessing</h3>
                <p className="text-[11px] sm:text-xs text-stone-500">Post a loving prayer or wish for her</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Your Name / Relationship
                </label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Loving Friend / Family"
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-2xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 text-xs sm:text-sm focus:outline-none focus:border-rose-400 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Choose a Sticker
                </label>
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  {["🌻", "🌹", "💖", "👑", "🎂", "✝️", "✨"].map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-base sm:text-lg transition-all ${
                        selectedEmoji === emoji
                          ? "bg-rose-100 border-2 border-rose-400 scale-105 shadow-sm"
                          : "bg-stone-50 border border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Your Birthday Message &amp; Prayer
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="May God bless you with abundant health, peace, and love..."
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-2xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 text-xs sm:text-sm focus:outline-none focus:border-rose-400 focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-all hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post Birthday Blessing</span>
              </button>
            </form>
          </motion.div>

          {/* Wishes Board Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 max-h-[560px] overflow-y-auto pr-1"
          >
            {wishes.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border ${item.color} shadow-sm relative flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xl sm:text-2xl">{item.emoji}</span>
                    <span className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-widest">{item.timestamp}</span>
                  </div>
                  <p className="text-stone-800 text-xs sm:text-sm leading-relaxed mb-3.5 font-body">
                    &ldquo;{item.message}&rdquo;
                  </p>
                </div>

                <div className="pt-2.5 border-t border-black/5 flex items-center justify-between">
                  <p className="text-[11px] sm:text-xs font-bold text-stone-900 tracking-wide">
                    — {item.author}
                  </p>
                  <button
                    onClick={launchHeartConfetti}
                    className="text-rose-500 hover:text-rose-700 p-1 transition-colors"
                    title="Send Love"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
