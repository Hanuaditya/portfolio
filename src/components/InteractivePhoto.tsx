"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";

export default function InteractivePhoto() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Physics-based spring config for smooth 3D tilt tracking
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize from -1 to 1
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Smooth tilt angles (-14 to +14 deg)
    rotateX.set(-normY * 14);
    rotateY.set(normX * 14);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center p-4 select-none [perspective:1000px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[380px] md:max-w-[420px] aspect-[3/4] rounded-sm border-2 border-[#1c3e74] bg-[#050b14] shadow-[0_0_40px_rgba(28,62,116,0.35)] overflow-hidden cursor-crosshair group"
      >
        {/* Retro Corner HUD Brackets */}
        <div className="absolute top-2.5 left-2.5 z-30 font-mono text-[10px] text-[#4a90e2]/80 leading-none pointer-events-none">
          ┌
        </div>
        <div className="absolute top-2.5 right-2.5 z-30 font-mono text-[10px] text-[#4a90e2]/80 leading-none pointer-events-none">
          ┐
        </div>
        <div className="absolute bottom-2.5 left-2.5 z-30 font-mono text-[10px] text-[#4a90e2]/80 leading-none pointer-events-none">
          └
        </div>
        <div className="absolute bottom-2.5 right-2.5 z-30 font-mono text-[10px] text-[#4a90e2]/80 leading-none pointer-events-none">
          ┘
        </div>

        {/* Top Diagnostic Badges */}
        <div className="absolute top-3 left-4 z-20 font-mono text-[9px] uppercase tracking-wider text-[#3d7edb] bg-[#070f1e]/80 border border-[#1b3d73]/60 px-2 py-0.5 rounded-xs backdrop-blur-xs">
          FACIAL SCAN // HN.04
        </div>
        <div className="absolute top-3 right-4 z-20 font-mono text-[9px] uppercase tracking-wider text-[#93bbf8] bg-[#070f1e]/80 border border-[#1b3d73]/60 px-2 py-0.5 rounded-xs backdrop-blur-xs">
          HANUMA ADITYA C
        </div>

        {/* Crisp Halftone Image */}
        <div className="relative w-full h-full">
          <Image
            src="/avatar-halftone.png"
            alt="Hanuma Aditya C Portrait"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 420px"
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

          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(58,117,213,0.18),transparent_70%)] pointer-events-none" />

          {/* Interactive Scanning Line on Hover */}
          <motion.div
            animate={isHovered ? { top: ["0%", "100%", "0%"] } : { top: "0%" }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
            className={`absolute inset-x-0 h-[2px] bg-[#4a90e2] shadow-[0_0_12px_#4a90e2] pointer-events-none z-20 ${
              isHovered ? "opacity-90" : "opacity-0"
            }`}
          />
        </div>
      </motion.div>

      {/* Subtext Caption */}
      <div className="mt-3 font-mono text-[10px] tracking-widest text-[#4a90e2] uppercase flex items-center gap-1.5 opacity-80">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4a90e2] animate-pulse" />
        <span>INTERACTIVE STIPPLE MESH · MOVE CURSOR TO TILT</span>
      </div>
    </div>
  );
}
