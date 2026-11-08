"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function InteractivePhoto() {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <div 
      className="relative w-full max-w-sm aspect-[3/4] border-4 border-[#2b5ba8] shadow-[0_0_25px_rgba(43,91,168,0.2)] bg-[#070e17] overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      {/* Decorative Outer Ethnic Pixel Corners */}
      <div className="absolute top-2 left-2 text-[#2b5ba8] font-mono text-[10px] z-20">☩</div>
      <div className="absolute top-2 right-2 text-[#2b5ba8] font-mono text-[10px] z-20">☩</div>
      <div className="absolute bottom-2 left-2 text-[#2b5ba8] font-mono text-[10px] z-20">☩</div>
      <div className="absolute bottom-2 right-2 text-[#2b5ba8] font-mono text-[10px] z-20">☩</div>

      {/* Retro Sci-fi CRT Grid Screen Layers */}
      <div className="absolute inset-0 z-10 grid-pattern mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 z-10 scanlines-overlay opacity-60 mix-blend-color-burn pointer-events-none" />

      {/* Cybernetic HUD Frame */}
      <div className="absolute bottom-4 left-4 z-20 bg-black/65 border border-[#2b5ba8]/60 px-3 py-1.5 backdrop-blur-sm">
        <span className="font-mono text-[9px] text-[#2b5ba8] uppercase block tracking-widest">
          FACIAL SCAN // HN.04
        </span>
        <span className="font-mono text-xs text-[#efeade] font-bold block uppercase mt-0.5">
          HANUMA ADITYA C
        </span>
      </div>

      {/* Blue Duotone Photographic Treatment Container */}
      <div className={`relative w-full h-full transition-transform duration-500 scale-100 group-hover:scale-102 ${isGlitching ? 'brightness-125 contrast-110' : ''}`}>
        <Image 
          alt="Hanuma Aditya C Blazer Portrait" 
          className="object-cover transition-all duration-300 filter grayscale contrast-125 brightness-95" 
          fill 
          priority 
          sizes="(max-width: 768px) 100vw, 384px" 
          src="/avatar-blazer.png"
        />
        
        {/* Blue color layer overlays */}
        <div className="absolute inset-0 bg-[#16386e] mix-blend-multiply opacity-85 transition-opacity duration-300 group-hover:opacity-75" />
        <div className="absolute inset-0 bg-[#0c1e3a] mix-blend-lighten opacity-30 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#060b12] to-transparent z-15" />
      </div>

      {/* On-Hover Interactive Horizontal Scan Matrix Line */}
      <div className="absolute left-0 right-0 h-[1.5px] bg-[#3a75d5] opacity-0 group-hover:opacity-100 animate-[scan_2.2s_linear_infinite] shadow-[0_0_10px_#3a75d5] z-15 pointer-events-none" />
      <style jsx global>{`
        @keyframes scan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
      `}</style>
    </div>
  );
}
