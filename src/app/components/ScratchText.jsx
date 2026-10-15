"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function ScratchText({ onReveal }) {
  const canvasRef = useRef(null);
  const onRevealRef = useRef(onReveal);

  useEffect(() => {
    onRevealRef.current = onReveal;
  }, [onReveal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 320;
    const height = 280;

    canvas.width = width;
    canvas.height = height;

    const drawLayer = () => {
      ctx.globalCompositeOperation = "source-over";

      // Gold foil background
      const gradient = ctx.createLinearGradient(0, 0, width, height);

      gradient.addColorStop(0, "#FFF6BF");
      gradient.addColorStop(0.15, "#FFE36A");
      gradient.addColorStop(0.35, "#F2C94C");
      gradient.addColorStop(0.55, "#CFA11A");
      gradient.addColorStop(0.75, "#A97800");
      gradient.addColorStop(1, "#FFE36A");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Metallic texture
      ctx.globalAlpha = 0.18;

      for (let i = 0; i < 5000; i++) {
        ctx.fillStyle =
          Math.random() > 0.5
            ? "rgba(255,255,255,.9)"
            : "rgba(120,80,0,.8)";

        ctx.fillRect(
          Math.random() * width,
          Math.random() * height,
          1,
          1
        );
      }

      ctx.globalAlpha = 1;

      // Shine effect
      const shine = ctx.createLinearGradient(0, 0, width, 0);

      shine.addColorStop(0, "transparent");
      shine.addColorStop(0.45, "rgba(255,255,255,.15)");
      shine.addColorStop(0.5, "rgba(255,255,255,.55)");
      shine.addColorStop(0.55, "rgba(255,255,255,.15)");
      shine.addColorStop(1, "transparent");

      ctx.fillStyle = shine;
      ctx.fillRect(0, 0, width, height);

      // Border
      ctx.strokeStyle = "rgba(255,255,255,.35)";
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, width - 2, height - 2);

      // Scratch instruction
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 22px Georgia";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("✨ Scratch to Reveal ✨", width / 2, height / 2);

      ctx.globalCompositeOperation = "destination-out";
    };

    drawLayer();

    let drawing = false;
    let completed = false;

    let lastX = 0;
    let lastY = 0;

    // Scratch brush
    const scratch = (x, y) => {
      ctx.save();

      ctx.globalCompositeOperation = "destination-out";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 32;

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Soft erase
      const gradient = ctx.createRadialGradient(
        x, y, 0,
        x, y, 22
      );

      gradient.addColorStop(0, "rgba(0,0,0,1)");
      gradient.addColorStop(0.7, "rgba(0,0,0,.8)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, 22, 0, Math.PI * 2);
      ctx.fill();

      // Scratch chips
      for (let i = 0; i < 10; i++) {
        const rx = x + (Math.random() - 0.5) * 28;
        const ry = y + (Math.random() - 0.5) * 28;

        ctx.beginPath();
        ctx.arc(rx, ry, Math.random() * 4 + 1, 0, Math.PI * 2);
        ctx.fill();
      }

      // Fine scratch lines
      for (let i = 0; i < 5; i++) {
        ctx.lineWidth = Math.random() * 2 + 1;

        ctx.beginPath();
        ctx.moveTo(
          x + (Math.random() - 0.5) * 20,
          y + (Math.random() - 0.5) * 20
        );

        ctx.lineTo(
          x + (Math.random() - 0.5) * 35,
          y + (Math.random() - 0.5) * 35
        );

        ctx.stroke();
      }

      lastX = x;
      lastY = y;

      ctx.restore();
    };

    // Reveal animation
    const reveal = () => {
      if (completed) return;

      completed = true;

      onRevealRef.current?.();

      confetti({
        particleCount: 300,
        spread: 100,
        startVelocity: 35,
        gravity: 0.8,
        scalar: 1,
        ticks: 250,
        origin: { x: 0.5, y: 0.5 },
        colors: [
          "#FF4D6D",
          "#FF6B6B",
          "#FFD93D",
          "#6BCB77",
          "#4D96FF",
          "#845EC2",
          "#FF9671",
          "#00C9A7",
          "#FFFFFF",
          "#FFD700",
        ],
      });

      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 120,
          startVelocity: 18,
          gravity: 0.8,
          scalar: 0.6,
          origin: { x: 0.5, y: 0.5 },
          colors: ["#FFD700", "#FFF4B9", "#FFFFFF"],
        });
      }, 150);

      canvas.style.transition = "opacity .5s ease";
      canvas.style.opacity = "0";

      setTimeout(() => {
        ctx.clearRect(0, 0, width, height);
        canvas.style.display = "none";
      }, 500);
    };

    // Check scratched percentage
    const checkScratch = () => {
      if (completed) return;

      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;

      let transparent = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparent++;
      }

      const scratched = transparent / (width * height);

      if (scratched > 0.12) {
        reveal();
      }
    };

    // Mouse and touch coordinates
    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();

      const scaleX = width / rect.width;
      const scaleY = height / rect.height;

      const point =
        e.touches && e.touches.length
          ? e.touches[0]
          : e;

      return {
        x: (point.clientX - rect.left) * scaleX,
        y: (point.clientY - rect.top) * scaleY,
      };
    };

    const start = (e) => {
      if (completed) return;

      drawing = true;

      const pos = getPos(e);

      lastX = pos.x;
      lastY = pos.y;

      scratch(pos.x, pos.y);
      checkScratch();
    };

    const move = (e) => {
      if (!drawing || completed) return;

      e.preventDefault();

      const pos = getPos(e);

      scratch(pos.x, pos.y);
      checkScratch();
    };

    const end = () => {
      drawing = false;
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);

    canvas.addEventListener("touchstart", start, {
      passive: false,
    });

    canvas.addEventListener("touchmove", move, {
      passive: false,
    });

    window.addEventListener("touchend", end);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);

      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
  }, []);

  return (
    <div
    className="relative inline-block select-none mt-12"
    style={{
      width: "240px",
      height: "210px",
      clipPath:
        "path('M 120 199 C 105 184 11 124 11 68 C 11 15 75 4 120 49 C 165 4 229 15 229 68 C 229 124 135 184 120 199 Z')",
      WebkitClipPath:
        "path('M 120 199 C 105 184 11 124 11 68 C 11 15 75 4 120 49 C 165 4 229 15 229 68 C 229 124 135 184 120 199 Z')",
    }}
  >
    {/* Hidden Date */}
    <div
      className="absolute inset-0 flex items-center justify-center text-center bg-white"
      style={{
        color: "#BC610A",
        fontFamily: "EB Garamond, serif",
        fontWeight: 600,
        fontSize: "25px",
        letterSpacing: ".5px",
        textShadow: "0 1px 6px rgba(255,215,0,.35)",
        padding: "0 25px",
      }}
    >
      <div className="text-[#8c1034]">
        <div>
          24<sup className="text-[15px]">th </sup>
        November</div>
        <div>2026</div>
      </div>
    </div>

    {/* Scratchable Gold Heart */}
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full touch-none cursor-pointer"
    />

    {/* Shine Animation */}
    <div className="absolute inset-0 pointer-events-none scratch-shine" />
  </div>
  );
}