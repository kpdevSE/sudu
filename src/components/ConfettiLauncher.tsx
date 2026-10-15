"use client";

import confetti from "canvas-confetti";

export const launchFireworkConfetti = () => {
  const duration = 3.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

  const interval: NodeJS.Timeout = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ["#ff2a85", "#f59e0b", "#06b6d4", "#a855f7", "#ffffff"],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ["#fb7185", "#f43f5e", "#ffd700", "#38bdf8", "#c084fc"],
    });
  }, 250);
};

export const launchHeartConfetti = () => {
  const scalar = 2;
  const heart = confetti.shapeFromText({ text: "💖", scalar });
  const star = confetti.shapeFromText({ text: "✨", scalar });

  confetti({
    shapes: [heart, star],
    scalar,
    particleCount: 40,
    spread: 100,
    origin: { y: 0.6 },
    ticks: 120,
    zIndex: 1000,
  });
};

export const launchRainbowRibbons = () => {
  confetti({
    particleCount: 100,
    spread: 160,
    origin: { y: 0.7 },
    colors: ["#ff007f", "#7928ca", "#00dfd8", "#ff0080", "#f5a623"],
    zIndex: 1000,
  });
};
