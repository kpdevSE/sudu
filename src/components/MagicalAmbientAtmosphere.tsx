"use client";

import React, { useEffect, useRef } from "react";

export default function MagicalAmbientAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Magical particles array: golden sparkles, fairy dust, and soft glowing bubbles
    interface Sparkle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      alpha: number;
      maxAlpha: number;
      alphaDirection: number;
      color: string;
      spin: number;
      rotation: number;
    }

    const COLORS = [
      "rgba(251, 191, 36, ",  // amber/gold
      "rgba(244, 63, 94, ",   // rose/pink
      "rgba(253, 224, 71, ",  // warm yellow
      "rgba(249, 168, 212, ", // soft pink
      "rgba(217, 119, 6, ",   // warm honey
    ];

    const particleCount = Math.min(36, Math.floor(window.innerWidth / 30));
    const particles: Sparkle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3.5 + 1.2,
        speedY: -(Math.random() * 0.45 + 0.15),
        speedX: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.7,
        maxAlpha: Math.random() * 0.6 + 0.3,
        alphaDirection: Math.random() > 0.5 ? 0.008 : -0.008,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        spin: (Math.random() - 0.5) * 0.02,
        rotation: Math.random() * Math.PI * 2,
      });
    }

    // Touch / Pointer sparkle trail (effortless magic as user scrolls or touches without clicking any buttons!)
    const pointerTrail: { x: number; y: number; size: number; alpha: number; color: string }[] = [];

    const addPointerSparkle = (clientX: number, clientY: number) => {
      if (pointerTrail.length > 25) pointerTrail.shift();
      pointerTrail.push({
        x: clientX,
        y: clientY,
        size: Math.random() * 4 + 2,
        alpha: 0.85,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    };

    const handlePointerMove = (e: MouseEvent) => {
      addPointerSparkle(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        addPointerSparkle(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw floating sparkles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.spin;

        p.alpha += p.alphaDirection;
        if (p.alpha > p.maxAlpha) {
          p.alpha = p.maxAlpha;
          p.alphaDirection = -p.alphaDirection;
        } else if (p.alpha < 0.05) {
          p.alpha = 0.05;
          p.alphaDirection = -p.alphaDirection;
        }

        // Wrap around borders
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw 4-point golden star sparkle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `${p.color}${p.alpha})`;

        // Glow halo
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${p.color}0.5)`;

        ctx.beginPath();
        const r = p.size;
        ctx.moveTo(0, -r * 2);
        ctx.quadraticCurveTo(0, 0, r * 2, 0);
        ctx.quadraticCurveTo(0, 0, 0, r * 2);
        ctx.quadraticCurveTo(0, 0, -r * 2, 0);
        ctx.quadraticCurveTo(0, 0, 0, -r * 2);
        ctx.fill();

        ctx.restore();
      }

      // Draw interactive pointer sparkle trail
      for (let i = pointerTrail.length - 1; i >= 0; i--) {
        const t = pointerTrail[i];
        t.alpha -= 0.025;
        t.size *= 0.96;

        if (t.alpha <= 0) {
          pointerTrail.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = `${t.color}${t.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `${t.color}0.8)`;
        ctx.beginPath();
        ctx.arc(t.x, t.y, Math.max(0.8, t.size), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
