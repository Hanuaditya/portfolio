# Portfolio Feature Upgrade: Jarnket Interactive Photo & Animated Borders

This guide implements the vintage blue duotone halftone grids and scrolling, pixelated cultural marquee borders seen in `jarnket.com`, replacing standard placeholders.

---

## 🚀 1. Feature Additions

1. **Halftone Digital Portrait Screen (`public/avatar-blazer.png`)**:
   - Vintage digital look featuring blue duotone filter overlay, grid overlay, and on-hover scanlines.
2. **Infinite Scrolled Borders**:
   - Scrolling elephant ("Land of a Million Elephants") and naga / serpent ("The Boat Races on the Mekong") pixel pattern borders scrolling infinitely in horizontal marquee strips.

---

## 🛠️ 2. Core Style Definition & Marquee Keyframes

Add these custom animations and repeating CSS patterns to `src/app/globals.css`:

```css
@layer utilities {
  /* Infinite Marquee animations */
  @keyframes marquee-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  .animate-marquee-left {
    animation: marquee-left 25s linear infinite;
  }
  
  .animate-marquee-right {
    animation: marquee-right 25s linear infinite;
  }

  /* Scanline and Grid Overlay effects for portrait halftone simulation */
  .grid-pattern {
    background-size: 4px 4px;
    background-image: 
      linear-gradient(to right, rgba(0, 0, 0, 0.15) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 1px, transparent 1px);
  }

  .scanlines-overlay {
    background: linear-gradient(
      rgba(18, 16, 16, 0) 50%, 
      rgba(0, 0, 0, 0.25) 50%
    ), linear-gradient(
      90deg, 
      rgba(255, 0, 0, 0.06), 
      rgba(0, 255, 0, 0.02), 
      rgba(0, 0, 255, 0.06)
    );
    background-size: 100% 3px, 6px 100%;
  }
}
```

---

## 🎨 3. Scrolling Marquee Patterns Components (`src/components/PatternMarquees.tsx`)

Create this component to provide standard pattern options:

```tsx
"use client";

import React from "react";

// Inline SVGs with Lao pixel motifs matching Elephant and Snake design patterns

const ElephantSVG = () => (
  <svg width="48" height="24" viewBox="0 0 48 24" fill="currentColor" className="opacity-80">
    <path d="M6 14h2v2H6v-2zm4 0h2v2h-2v-2zm12 0h2v2h-2v-2zm14 0h2v2h-2v-2zm6-6h2v6h-2V8zm-16-4h4v2h-4V4zm-14 2h4v2h-4V6z" fillOpacity="0.4" />
    {/* Stylized Pixel Elephant body */}
    <path d="M12 6h8v2h-8V6zm14 0h6v2h-6V6zm-16 2h18v2H10V8zm-2 2h22v2H8v-2zm-2 2h24v2H6v-2zm2 2h22v2H8v-2zm4 2h14v2H12v-2zm-6 2h2v4H6v-4zm6 0h2v4h-2v-4zm12 0h2v4h-2v-4zm4 0h2v2h-2v-2zm-20-4h2v2H8v-2zm26-4h2v6h-2v-6zm2 4h4v2h-4v-2z" />
  </svg>
);

const NagaSnakeSVG = () => (
  <svg width="60" height="20" viewBox="0 0 60 20" fill="currentColor" className="opacity-90">
    {/* Naga boat races wavy pattern */}
    <path d="M0 10l5-5h5l5 5h5l5-5h5l5 5h5l5-5h5l5 5h5l5-5h5" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M2 14l3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
    {/* Tiny Pixel nodes to match traditional border style */}
    <rect x="12" y="3" width="3" height="3" />
    <rect x="32" y="3" width="3" height="3" />
    <rect x="52" y="3" width="3" height="3" />
    <rect x="22" y="15" width="3" height="3" />
    <rect x="42" y="15" width="3" height="3" />
  </svg>
);

interface MarqueeProps {
  label: string;
  count?: number;
  reverse?: boolean;
}

export function ElephantMarquee({ label, count = 12, reverse = false }: MarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden bg-[#0a0f18] border-y border-[#182a44]/80 py-3 flex">
      <div className={`flex whitespace-nowrap gap-8 items-center shrink-0 ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex items-center gap-6 select-none">
            <span className="font-mono text-[10px] tracking-widest text-[#2d5aa3] uppercase font-bold">
              {label}
            </span>
            <ElephantSVG/>
          </div>
        ))}
      </div>
      {/* Duplicate for visual infinite loop seamless transition */}
      <div className={`flex whitespace-nowrap gap-8 items-center shrink-0 ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`} aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex items-center gap-6 select-none">
            <span className="font-mono text-[10px] tracking-widest text-[#2d5aa3] uppercase font-bold">
              {label}
            </span>
            <ElephantSVG/>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NagaMarquee({ label, count = 10, reverse = true }: MarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden bg-[#070b12] border-y border-[#12223a] py-3.5 flex">
      <div className={`flex whitespace-nowrap gap-8 items-center shrink-0 ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex items-center gap-6 select-none">
            <span className="font-mono text-[9px] tracking-widest text-[#1c437e] uppercase">
              {label}
            </span>
            <NagaSnakeSVG/>
          </div>
        ))}
      </div>
      <div className={`flex whitespace-nowrap gap-8 items-center shrink-0 ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`} aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex items-center gap-6 select-none">
            <span className="font-mono text-[9px] tracking-widest text-[#1c437e] uppercase">
              {label}
            </span>
            <NagaSnakeSVG/>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## 🧥 4. Interactive Portrait Half-Tone Component (`src/components/InteractivePhoto.tsx`)

Build the glitchy blueprint-colored visual overlay for `avatar-blazer.png`:

```tsx
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
        <Image alt="Hanuma Aditya C Blazer Portrait" className="object-cover transition-all duration-300 filter grayscale contrast-125 brightness-95" fill priority sizes="(max-width: 768px) 100vw, 384px" src="/avatar-blazer.png"/>
        
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
```

---

## 🚀 5. Connect and Run

Replace standard patterns inside `src/components/Experience.tsx` or matching component containers with:
`<ElephantMarquee label="VOTES FROM 'Vientiane'. LAND OF A MILLION ELEPHANTS" />`
and
`<NagaMarquee label="VOTES FROM 'Luang Prabang'. THE BOAT RACES ON THE MEKONG" />`.

Use the `<InteractivePhoto />` directly inside your Hero / About side grids.
