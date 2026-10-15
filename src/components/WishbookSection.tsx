"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquareQuote, Send, Sparkles, Heart, Star } from "lucide-react";
import { launchFireworkConfetti, launchHeartConfetti } from "./ConfettiLauncher";

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
      color: "border-amber-500/40 bg-amber-950/30",
    },
    {
      id: "w2",
      author: "Achchi & Seeya",
      message: "Devi Pihitai! May Almighty God watch over you every second. Long life, joyful smile, and heavenly blessings throughout all your years ahead! 🙏✨",
      emoji: "🌸",
      timestamp: "Today",
      color: "border-teal-500/40 bg-teal-950/30",
    },
    {
      id: "w3",
      author: "Family & Loved Ones",
      message: "Wishing the most beautiful birthday to our angel! May God's grace guide your bright path and fulfill all the desires of your heart! 💖🎂",
      emoji: "🎂",
      timestamp: "Today",
      color: "border-rose-500/40 bg-rose-950/30",
    },
    {
      id: "w4",
      author: "Bestie Squad",
      message: "HAPPY BIRTHDAY QUEEN! Never stop glowing, dancing, and lighting up every room with your infectious laugh. God bless you always! 🥳✨",
      emoji: "✨",
      timestamp: "Today",
      color: "border-purple-500/40 bg-purple-950/30",
    },
  ];

  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("💖");

  useEffect(() => {
    const saved = localStorage.getItem("birthday_wishes_board_v2");
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
      "border-pink-500/40 bg-pink-950/30",
      "border-amber-500/40 bg-amber-950/30",
      "border-teal-500/40 bg-teal-950/30",
      "border-purple-500/40 bg-purple-950/30",
      "border-rose-500/40 bg-rose-950/30",
      "border-cyan-500/40 bg-cyan-950/30",
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
    localStorage.setItem("birthday_wishes_board_v2", JSON.stringify(updated));

    setAuthor("");
    setMessage("");
    launchFireworkConfetti();
  };

  return (
    <section id="wishbook" className="relative py-20 sm:py-28 px-3 sm:px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/3 w-72 sm:w-[34rem] h-72 sm:h-[34rem] bg-purple-600/15 rounded-full blur-[110px] sm:blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-rose-600/15 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-panel border border-purple-400/40 text-purple-300 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-lg shadow-purple-500/10"
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-purple-300" />
            <span>Interactive Birthday Wish Wall</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3"
          >
            Leave Your <span className="text-gradient-rainbow">Birthday Blessings</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-zinc-300 max-w-xl mx-auto text-xs sm:text-sm sm:text-base px-2"
          >
            Add a personal wish, prayer, or celebratory sticker to her digital memory board.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Wish Submission Form (Responsive on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-5 sm:p-7 border border-white/15 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
                <Star className="w-4 h-4 text-amber-400" />
              </span>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">Write a Blessing</h3>
                <p className="text-[11px] sm:text-xs text-zinc-400">Post a loving prayer or wish for her</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                  Your Name / Relationship
                </label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Loving Friend / Cousin"
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-pink-500/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                  Choose a Sticker
                </label>
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  {["💖", "👑", "🎂", "✝️", "🌸", "✨", "🥂"].map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-base sm:text-lg transition-all ${
                        selectedEmoji === emoji
                          ? "bg-pink-500/30 border-2 border-pink-400 scale-105 shadow-lg"
                          : "bg-white/5 border border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                  Your Birthday Message &amp; Prayer
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="May God bless you with abundant health, peace, and love..."
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-pink-500/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2"
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
                className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl glass-panel border ${item.color} shadow-lg relative flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xl sm:text-2xl">{item.emoji}</span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-widest">{item.timestamp}</span>
                  </div>
                  <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed mb-3.5 font-body">
                    &ldquo;{item.message}&rdquo;
                  </p>
                </div>

                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                  <p className="text-[11px] sm:text-xs font-bold text-white tracking-wide">
                    — {item.author}
                  </p>
                  <button
                    onClick={launchHeartConfetti}
                    className="text-pink-400 hover:text-white p-1 transition-colors"
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
