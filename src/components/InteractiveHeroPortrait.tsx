"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Traditional Lao diamond motif (top band)
const TopDiamondBand = () => (
  <div className="w-full h-7 bg-[#070e1c] border-b border-[#1b3d75] flex items-center justify-center overflow-hidden shrink-0 select-none">
    <div className="flex items-center gap-3 text-[#3d7edb] text-[11px] font-mono tracking-widest opacity-90 whitespace-nowrap">
      {Array.from({ length: 32 }).map((_, i) => (
        <span key={i}>◈ ❖ ◈</span>
      ))}
    </div>
  </div>
);

// Traditional Lao chevron motif (bottom band)
const BottomChevronBand = () => (
  <div className="w-full h-7 bg-[#070e1c] border-t border-[#1b3d75] flex items-center justify-center overflow-hidden shrink-0 select-none">
    <div className="flex items-center gap-3 text-[#3d7edb] text-[11px] font-mono tracking-widest opacity-90 whitespace-nowrap">
      {Array.from({ length: 32 }).map((_, i) => (
        <span key={i}>▲▼▲ ❖</span>
      ))}
    </div>
  </div>
);

export default function InteractiveHeroPortrait() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth physics springs for zero-lag cursor parallax
  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.85]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;

      rotateY.set(normX * 16);
      rotateX.set(-normY * 16);
    },
    [rotateX, rotateY]
  );

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleScrollClick = () => {
    const nextSection = document.getElementById("after-hours") || document.getElementById("experience");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#040810] flex flex-col items-center justify-center py-10 px-4 overflow-hidden select-none"
    >
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1b3d75 1px, transparent 1px), linear-gradient(to bottom, #1b3d75 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Main CRT Card Frame */}
      <motion.div
        style={{
          scale: cardScale,
          opacity: cardOpacity,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 w-full max-w-[390px] md:max-w-[430px] bg-[#070e1c] border-2 border-[#1c3e74] shadow-[0_0_60px_rgba(27,61,117,0.35)] rounded-sm overflow-hidden flex flex-col cursor-crosshair [perspective:1000px]"
      >
        {/* Top Pixel Border */}
        <TopDiamondBand />

        {/* Halftone Portrait Viewport */}
        <div className="relative w-full aspect-[3/4] bg-[#03060c] overflow-hidden">
          <Image
            src="/avatar-halftone.png"
            alt="Hanuma Aditya Portrait"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 430px"
            className={`object-cover object-center transition-all duration-300 filter ${
              isHovered ? "contrast-115 brightness-105" : "contrast-105 brightness-95"
            }`}
          />

          {/* CRT Horizontal Scanlines Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(0,0,0,0.6) 0px, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 3px)",
            }}
          />

          {/* Laser Scanning Line on Hover */}
          <div
            className={`absolute inset-x-0 h-[2px] bg-[#4a90e2] shadow-[0_0_14px_#4a90e2] pointer-events-none transition-opacity duration-300 ${
              isHovered ? "opacity-95 animate-scanline" : "opacity-0"
            }`}
          />

          {/* Audio Waveform / Barcode Dissolve Strip */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#070e1c] via-[#0b172a] to-transparent pointer-events-none flex items-end justify-between px-1.5 h-10 overflow-hidden">
            {Array.from({ length: 54 }).map((_, i) => (
              <span
                key={i}
                className="w-[2px] bg-[#3d7edb] opacity-80 inline-block transition-all duration-300"
                style={{
                  height: `${((i * 7) % 24) + 6}px`,
                  opacity: isHovered ? 0.95 : 0.65,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Pixel Border */}
        <BottomChevronBand />

        {/* Interactive SCROLL Trigger Pill */}
        <button
          onClick={handleScrollClick}
          type="button"
          className="w-full py-2 bg-[#091324] hover:bg-[#122340] border-t border-[#1b3d75]/70 text-center font-mono text-[11px] tracking-widest text-[#7ba2dd] hover:text-[#e2ecff] uppercase transition-colors cursor-pointer flex items-center justify-center gap-1.5"
        >
          <span>SCROLL</span>
          <span className="text-xs animate-bounce">↓</span>
        </button>
      </motion.div>
    </section>
  );
}

