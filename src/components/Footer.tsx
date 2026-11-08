"use client";

import React from "react";
import { ArrowUp, Terminal, Shield } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 md:px-16 border-t border-[#efeade]/10 bg-[#040507] text-[#a6a39b] font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Colophon */}
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <div className="flex items-center gap-2 text-[#efeade]">
            <Terminal className="w-4 h-4 text-[#c42d2a]" />
            <span className="font-bold tracking-tight text-sm">HANUMA ADITYA C</span>
            <span className="text-[#a6a39b]">// 2026</span>
          </div>
          <p className="text-[11px] text-[#a6a39b]">
            Full-Stack AI Engineer • Sir MVIT (VTU), Bengaluru • CGPA 8.5/10.0
          </p>
        </div>

        {/* Center Editorial Colophon */}
        <div className="text-center text-[11px] text-[#a6a39b]/80 max-w-md space-y-1">
          <p>
            Typography set in <span className="text-[#efeade]">Anton</span>,{" "}
            <span className="text-[#efeade]">Newsreader</span>,{" "}
            <span className="text-[#efeade]">Instrument Sans</span>, and{" "}
            <span className="text-[#efeade]">JetBrains Mono</span>.
          </p>
          <p className="text-[10px] text-[#a6a39b]/60">
            Engineered with Next.js App Router, Tailwind CSS, Lenis, and Framer Motion.
          </p>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-[#0d0f15] border border-[#efeade]/10 hover:border-[#c42d2a] text-[#efeade] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-[#0d0f15] border border-[#efeade]/10 hover:border-[#cda265] text-[#efeade] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#0d0f15] hover:bg-[#161a24] border border-[#efeade]/10 text-xs text-[#efeade] transition-all hover:border-[#efeade]/30"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c42d2a]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
