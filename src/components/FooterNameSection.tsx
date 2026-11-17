"use client";

import React from "react";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";

export default function FooterNameSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#060a14] border-t border-[#162238] pt-16 pb-12 px-6 md:px-14 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Contact Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#1b3d75]/50 pb-10">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-[#4a90e2] tracking-widest uppercase">
              COMMUNICATIONS & DIRECT REACHOUT
            </span>
            <h3 className="font-mono text-2xl md:text-3xl font-bold text-[#e5eaf2] uppercase">
              Ready to build something exceptional?
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:adityahanuma8@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#3d7edb] hover:bg-[#4a90e2] text-white font-mono text-xs font-semibold tracking-wider uppercase transition-colors shadow-[0_0_20px_rgba(61,126,219,0.35)]"
            >
              <Mail className="w-4 h-4" />
              <span>adityahanuma8@gmail.com</span>
            </a>
            <a
              href="https://github.com/Hanuaditya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-sm border border-[#1b3d75] hover:border-[#3d7edb] text-[#93bbf8] hover:text-white font-mono text-xs tracking-wider uppercase transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/hanuma-aditya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-sm border border-[#1b3d75] hover:border-[#3d7edb] text-[#93bbf8] hover:text-white font-mono text-xs tracking-wider uppercase transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Woven Name Banner from public/img/name.png */}
        <div className="w-full my-6 flex items-center justify-center">
          <div className="relative w-full aspect-[4/1] max-h-[220px]">
            <Image
              alt="HANUMA ADITYA"
              className="object-contain mix-blend-screen opacity-95 transition-transform duration-500 hover:scale-[1.01]"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              src="/img/name.png"
            />
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-6 border-t border-[#141f33] flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-[#7d8da6]">
          <span>© 2026 HANUMA ADITYA C · CREATIVE PRODUCT ENGINEER</span>
          <span>BENGALURU, KARNATAKA · INDIA</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer uppercase flex items-center gap-1.5 text-[#3d7edb]"
          >
            <span>BACK TO TOP</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
