"use client";

import { useEffect, useRef } from "react";

interface AtomSpinnerProps {
  size?: number;
  className?: string;
}

export default function AtomSpinner({ size = 20, className = "" }: AtomSpinnerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const rx = size * 0.4;
    const ry = size * 0.15;
    const electronRadius = size * 0.04;

    const orbits = [
      { rotation: 0, speed: 0.02, phase: 0, color: "#0D9488" },
      { rotation: Math.PI / 3, speed: 0.025, phase: Math.PI * 0.66, color: "#1E3A5F" },
      { rotation: -Math.PI / 3, speed: 0.022, phase: Math.PI * 1.33, color: "#0D9488" },
    ];

    let t = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      // Draw orbits
      for (const orbit of orbits) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(orbit.rotation);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = orbit.color + "30";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // Draw nucleus glow
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.08);
      gradient.addColorStop(0, "#0D948880");
      gradient.addColorStop(1, "#0D948800");
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.08, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw nucleus
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.035, 0, Math.PI * 2);
      ctx.fillStyle = "#0D9488";
      ctx.fill();

      // Draw electrons with glow
      for (const orbit of orbits) {
        const angle = t * orbit.speed * 60 + orbit.phase;
        const ex = Math.cos(angle) * rx;
        const ey = Math.sin(angle) * ry;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(orbit.rotation);

        // Electron glow
        const eGlow = ctx.createRadialGradient(ex, ey, 0, ex, ey, electronRadius * 3);
        eGlow.addColorStop(0, orbit.color + "60");
        eGlow.addColorStop(1, orbit.color + "00");
        ctx.beginPath();
        ctx.arc(ex, ey, electronRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = eGlow;
        ctx.fill();

        // Electron
        ctx.beginPath();
        ctx.arc(ex, ey, electronRadius, 0, Math.PI * 2);
        ctx.fillStyle = orbit.color;
        ctx.fill();

        ctx.restore();
      }

      t += 1;
      animRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
