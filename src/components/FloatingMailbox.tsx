"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

interface FloatingMailboxProps {
  email?: string;
}

export default function FloatingMailbox({ email = "adityahanuma8@gmail.com" }: FloatingMailboxProps) {
  const envelopeRef = useRef<HTMLAnchorElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth physics-based spring interpolation for continuous 3D rotation
  const springConfig = { damping: 20, stiffness: 120, mass: 0.6 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const rotateZ = useSpring(0, springConfig);
  const depthZ = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!envelopeRef.current) return;
      const rect = envelopeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Delta vector from envelope center to cursor
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Clamp max pitch and yaw angles (-35deg to +35deg)
      const maxAngle = 35;
      const angleY = Math.max(-maxAngle, Math.min(maxAngle, (dx / window.innerWidth) * 70));
      const angleX = Math.max(-maxAngle, Math.min(maxAngle, (-dy / window.innerHeight) * 70));
      const angleZ = Math.max(-12, Math.min(12, (dx / window.innerWidth) * 15));

      rotateX.set(angleX);
      rotateY.set(angleY);
      rotateZ.set(angleZ);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateX, rotateY, rotateZ]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    depthZ.set(24);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    depthZ.set(0);
  };

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <div className="relative [perspective:1000px]">
        {/* Floating Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 px-3 py-1.5 rounded-full bg-[#11161f] border border-[#232d3d] text-[#efeade] text-[11px] font-mono whitespace-nowrap shadow-xl transition-all duration-300 pointer-events-none ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          }`}
        >
          Send an email ↗
        </div>

        {/* 3D Tracking Envelope Anchor */}
        <motion.a
          ref={envelopeRef}
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            rotateZ,
            z: depthZ,
            transformStyle: "preserve-3d",
          }}
          className="relative block w-20 h-14 md:w-24 md:h-16 cursor-pointer select-none group"
        >
          {/* Main Envelope Body */}
          <div className="relative w-full h-full bg-[#e63238] rounded-2xl shadow-[0_16px_32px_rgba(230,50,56,0.35),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-[#c42025] overflow-hidden flex items-center justify-center">
            {/* Clay lighting gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/30 pointer-events-none" />

            {/* Envelope Back Flap Cutout lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 96 64"
              fill="none"
            >
              {/* Lower triangular folds */}
              <path
                d="M0 64L48 34L96 64"
                stroke="#b91c21"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0 64L48 34L96 64"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Upper envelope flap */}
              <path
                d="M0 4C14 4 36 28 48 32C60 28 82 4 96 4"
                fill="#d82429"
                stroke="#b91c21"
                strokeWidth="2"
              />
            </svg>

            {/* Embossed White Heart Seal */}
            <div className="relative z-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.25),inset_0_1px_2px_rgba(255,255,255,0.9)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 md:w-4.5 md:h-4.5 fill-[#e63238] drop-shadow-sm"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            {/* Bottom edge shadow */}
            <div className="absolute bottom-0 inset-x-0 h-2 bg-black/20" />
          </div>

          {/* Cast Shadow underneath */}
          <div className="absolute -bottom-3 inset-x-2 h-4 bg-black/40 blur-md rounded-full pointer-events-none -z-10 transform scale-90 group-hover:scale-100 transition-transform duration-300" />
        </motion.a>
      </div>
    </aside>
  );
}
