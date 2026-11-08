"use client";

import { useState, useEffect } from "react";
import { PROFILE_DATA } from "@/data/portfolioData";
import { Sparkles, Terminal, Volume2, VolumeX, Mail } from "lucide-react";
import FloatingMailbox from "@/components/FloatingMailbox";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      // Gentle subtle click synthesizer audio feedback
      try {
        const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(520, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
      } catch {
        // AudioContext not allowed without interaction
      }
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090d]/85 backdrop-blur-md border-b border-[#efeade]/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram / Wordmark */}
        <button
          onClick={() => scrollTo("hero")}
          className="group flex items-center gap-2.5 text-left"
          data-cursor-label="HOME"
        >
          <div className="w-8 h-8 rounded-lg bg-[#efeade]/5 border border-[#efeade]/15 flex items-center justify-center font-mono font-bold text-xs text-[#efeade] group-hover:border-[#c42d2a] group-hover:text-[#c42d2a] transition-colors">
            HAC
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-tight text-[#efeade] group-hover:text-[#c42d2a] transition-colors">
              HANUMA ADITYA C
            </span>
            <span className="text-[10px] text-[#a6a39b] font-mono tracking-wider">
              PORTFOLIO // 2026
            </span>
          </div>
        </button>

        {/* Center: Available Status Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#12151e]/80 border border-[#efeade]/10 text-[11px] font-mono text-[#efeade]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d9fc68] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d9fc68]"></span>
          </span>
          <span className="text-[#efeade]/90">OPEN FOR ROLES</span>
          <span className="text-[#a6a39b]">• Bengaluru</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Sound / Ambient Feedback Toggle */}
          <button
            onClick={toggleSound}
            data-cursor-label={soundEnabled ? "MUTE" : "SOUND"}
            aria-label="Toggle subtle interactive audio feedback"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#efeade]/10 bg-[#efeade]/5 hover:bg-[#efeade]/10 text-xs font-mono text-[#a6a39b] hover:text-[#efeade] transition-colors"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#c42d2a]" />
                <span className="hidden sm:inline text-[11px]">SFX ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#a6a39b]" />
                <span className="hidden sm:inline text-[11px]">SFX OFF</span>
              </>
            )}
          </button>

          {/* 3D Envelope Mailbox right before Contact button */}
          <FloatingMailbox email="adityahanuma8@gmail.com" inline />

          {/* Quick Contact Action */}
          <button
            onClick={() => scrollTo("contact")}
            data-cursor-label="CONTACT"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#c42d2a] hover:bg-[#de3834] text-[#efeade] font-mono text-xs font-semibold shadow-lg shadow-[#c42d2a]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reach Out</span>
          </button>
        </div>
      </div>
    </header>
  );
}

