"use client";

import React, { useRef, useEffect } from "react";

interface WovenTextBannerProps {
  imageSrc?: string;
}

export default function WovenTextBanner({
  imageSrc = "/hanuma-aditya-loom.png",
}: WovenTextBannerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 1200);
    let height = (canvas.height = Math.round(width * 0.22));

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 110,
    };

    interface Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      ease: number;
      friction: number;
    }

    let particles: Particle[] = [];

    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      initParticles();
      animate();
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.round(width * 0.22);
      initParticles();
    };

    function initParticles() {
      if (!ctx) return;
      particles = [];

      const offCanvas = document.createElement("canvas");
      const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      offCanvas.width = width;
      offCanvas.height = height;

      const padX = width * 0.02;
      const padY = height * 0.08;
      offCtx.drawImage(img, padX, padY, width - padX * 2, height - padY * 2);

      const imgData = offCtx.getImageData(0, 0, width, height).data;
      const step = Math.max(3, Math.floor(width / 360));

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const r = imgData[index];
          const g = imgData[index + 1];
          const b = imgData[index + 2];
          const alpha = imgData[index + 3];

          // Sample pixels representing the woven letters
          if (alpha > 100 && (r > 130 || g > 130 || b > 130)) {
            particles.push({
              x,
              y,
              originX: x,
              originY: y,
              size: step * 0.85,
              color: `rgba(${r}, ${g}, ${b}, ${alpha / 255})`,
              vx: 0,
              vy: 0,
              ease: 0.12,
              friction: 0.88,
            });
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.hypot(dx, dy);

        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          const pushX = Math.cos(angle) * force * 18;
          const pushY = Math.sin(angle) * force * 18;

          p.vx -= pushX;
          p.vy -= pushY;
        }

        p.vx += (p.originX - p.x) * p.ease;
        p.vy += (p.originY - p.y) * p.ease;
        p.vx *= p.friction;
        p.vy *= p.friction;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size * 1.25, p.size * 0.65);
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [imageSrc]);

  return (
    <div className="relative w-full overflow-hidden bg-[#07090d] select-none py-6 flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(40,75,130,0.15),transparent_70%)] pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="block w-full max-w-7xl cursor-crosshair z-10"
      />
    </div>
  );
}

