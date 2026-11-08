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
