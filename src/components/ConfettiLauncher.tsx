"use client";

import confetti from "canvas-confetti";

export const launchFireworkConfetti = () => {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 25, spread: 360, ticks: 60, zIndex: 1000 };

  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

  const interval: NodeJS.Timeout = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 28 * (timeLeft / duration);

    // Warm celebratory colors (NO PURE WHITE so no white boxes appear over text on white background!)
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.15, 0.35), y: Math.random() * 0.4 },
      colors: ["#f43f5e", "#f59e0b", "#ec4899", "#d97706", "#fb7185"],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.65, 0.85), y: Math.random() * 0.4 },
      colors: ["#fb7185", "#f43f5e", "#f59e0b", "#e11d48", "#fbb03b"],
    });
  }, 280);
};

export const launchHeartConfetti = () => {
  const scalar = 1.8;
  const heart = confetti.shapeFromText({ text: "💖", scalar });
  const star = confetti.shapeFromText({ text: "✨", scalar });

  confetti({
    shapes: [heart, star],
    scalar,
    particleCount: 25,
    spread: 80,
    origin: { y: 0.65 },
    ticks: 100,
    zIndex: 1000,
  });
};

export const launchRainbowRibbons = () => {
  confetti({
    particleCount: 60,
    spread: 140,
    origin: { y: 0.7 },
    colors: ["#f43f5e", "#f59e0b", "#ec4899", "#d97706", "#be123c"],
    zIndex: 1000,
  });
};

export const launchSunflowerAndRoseConfetti = () => {
  const scalar = 2.0;
  const sunflower = confetti.shapeFromText({ text: "🌻", scalar });
  const rose = confetti.shapeFromText({ text: "🌹", scalar });
  const sparkle = confetti.shapeFromText({ text: "✨", scalar: 1.5 });

  // Left burst
  confetti({
    shapes: [sunflower, rose, sparkle],
    scalar,
    particleCount: 22,
    spread: 90,
    origin: { x: 0.3, y: 0.6 },
    ticks: 120,
    zIndex: 1000,
  });

  // Right burst
  confetti({
    shapes: [sunflower, rose, sparkle],
    scalar,
    particleCount: 22,
    spread: 90,
    origin: { x: 0.7, y: 0.6 },
    ticks: 120,
    zIndex: 1000,
  });
};
