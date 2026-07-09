"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

const BRAND_COLORS = ["#8B3A3A", "#C9707A", "#E8C4B8", "#F7EAE4", "#FFD6A5", "#FFFFFF"];

export default function SuccessConfetti() {
  useEffect(() => {
    const duration = 2500;
    const end = Date.now() + duration;

    confetti({
      particleCount: 100,
      spread: 80,
      startVelocity: 35,
      origin: { x: 0.5, y: 0.55 },
      colors: BRAND_COLORS,
      ticks: 200,
      gravity: 0.9,
      scalar: 1.1,
      zIndex: 9999,
    });

    const interval = window.setInterval(() => {
      if (Date.now() > end) {
        window.clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: BRAND_COLORS,
        zIndex: 9999,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: BRAND_COLORS,
        zIndex: 9999,
      });
    }, 180);

    return () => window.clearInterval(interval);
  }, []);

  return null;
}
