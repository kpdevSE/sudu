"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 z-50 bg-black/30 backdrop-blur-sm">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-teal-400 via-pink-500 to-amber-400 shadow-[0_0_12px_rgba(244,63,94,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
}
