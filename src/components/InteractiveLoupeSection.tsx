"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

export default function InteractiveLoupeSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0, relX: 50, relY: 50 });

  // Spring physics for buttery-smooth 60 FPS loupe movement
  const springConfig = { damping: 28, stiffness: 220, mass: 0.4 };
  const loupeX = useSpring(0, springConfig);
  const loupeY = useSpring(0, springConfig);

  const LOUPE_SIZE = 160;
  const ZOOM = 2.5;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

      // Loupe center follows cursor
      loupeX.set(x - LOUPE_SIZE / 2);
      loupeY.set(y - LOUPE_SIZE / 2);

      const relX = (x / rect.width) * 100;
      const relY = (y / rect.height) * 100;

      setCoords({
        x: Math.round(x),
        y: Math.round(y),
        relX,
        relY,
      });
    },
    [loupeX, loupeY]
  );

  return (
    <section
      id="loupe-showcase"
      className="relative w-full bg-[#060a14] text-[#e5eaf2] py-24 px-6 md:px-14 border-t border-[#1b3d75]/50 overflow-hidden select-none"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1b3d75 1px, transparent 1px), linear-gradient(to bottom, #1b3d75 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1b3d75]/80 pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#4a90e2] text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 // 3D MINIATURE ARCHITECTURE</span>
            </div>
            <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-[#e5eaf2] mt-1 uppercase">
              Interactive 3D Loupe
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-[#93bbf8] max-w-md">
            Move your cursor across the isometric tray to inspect custom typography extrusions, hobby miniatures, and tactile material layers at 2.5x optical zoom.
          </p>
        </div>

        {/* Loupe Viewport Frame */}
        <div className="flex justify-center items-center w-full py-4">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full max-w-[480px] aspect-[9/16] bg-[#03060c] border-2 border-[#1c3e74] shadow-[0_0_60px_rgba(27,61,117,0.35)] rounded-md overflow-hidden cursor-crosshair group"
          >
            {/* Base Image */}
            <Image
              src="/img/magnifying-asset.jpg"
              alt="Hanuma Aditya 3D Miniature Isometric Tray"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-center pointer-events-none select-none transition-filter duration-300"
            />

            {/* Corner Blueprint Brackets */}
            <span className="absolute top-3 left-3 text-[#3d7edb] text-sm font-mono pointer-events-none select-none">
              ┌
            </span>
            <span className="absolute top-3 right-3 text-[#3d7edb] text-sm font-mono pointer-events-none select-none">
              ┐
            </span>
            <span className="absolute bottom-3 left-3 text-[#3d7edb] text-sm font-mono pointer-events-none select-none">
              └
            </span>
            <span className="absolute bottom-3 right-3 text-[#3d7edb] text-sm font-mono pointer-events-none select-none">
              ┘
            </span>

            {/* Top HUD Badges */}
            <div className="absolute top-3 left-7 px-2.5 py-1 bg-[#070e1d]/85 border border-[#1b3d75] rounded-xs font-mono text-[10px] tracking-widest text-[#93bbf8] uppercase pointer-events-none select-none backdrop-blur-xs">
              OPTICAL LOUPE // 2.5X ZOOM
            </div>
            <div className="absolute top-3 right-7 px-2.5 py-1 bg-[#070e1d]/85 border border-[#1b3d75] rounded-xs font-mono text-[10px] tracking-widest text-[#93bbf8] uppercase pointer-events-none select-none backdrop-blur-xs">
              {isHovered ? `X: ${coords.x} | Y: ${coords.y}` : "STANDBY"}
            </div>

            {/* Floating Circular Optical Loupe */}
            <motion.div
              style={{
                x: loupeX,
                y: loupeY,
                width: LOUPE_SIZE,
                height: LOUPE_SIZE,
                opacity: isHovered ? 1 : 0,
                pointerEvents: "none",
              }}
              className="absolute top-0 left-0 rounded-full border-2 border-white/90 shadow-[0_0_30px_rgba(0,0,0,0.85),0_0_15px_rgba(74,144,226,0.5)] overflow-hidden z-30 transition-opacity duration-200"
            >
              {/* Magnified Background Inside Loupe */}
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: "url(/img/magnifying-asset.jpg)",
                  backgroundSize: `${ZOOM * 100}%`,
                  backgroundPosition: `${coords.relX}% ${coords.relY}%`,
                  backgroundRepeat: "no-repeat",
                }}
              />

              {/* Glass Glare & Specular Reflection */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-black/40 pointer-events-none" />

              {/* Precision Crosshair */}
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#4a90e2]/70 pointer-events-none" />
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#4a90e2]/70 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-[#4a90e2]/90 pointer-events-none" />
            </motion.div>

            {/* Bottom Floating Guide Badge */}
            <div className="absolute bottom-3 inset-x-6 py-1.5 px-3 bg-[#070e1d]/90 border border-[#1b3d75] rounded-xs text-center font-mono text-[10px] tracking-widest text-[#7ba2dd] uppercase pointer-events-none select-none backdrop-blur-xs">
              {isHovered
                ? "2.5X OPTICAL LOUPE ACTIVE"
                : "HOVER OR DRAG OVER TRAY TO MAGNIFY DETAILS"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
