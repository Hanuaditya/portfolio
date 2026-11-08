"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Download, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hanu.adityal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-[90vh] py-28 px-6 md:px-16 border-t border-[#efeade]/10 bg-[#07090d] text-[#efeade] overflow-hidden flex flex-col justify-between"
      aria-label="Terminal and Direct Reachout"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c42d2a]/15 via-[#07090d] to-[#040507] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full space-y-16 text-center">
        {/* Eyebrow & Title */}
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#cda265] font-bold">
            CHAPTER 07 // TERMINAL REACHOUT
          </span>

          <h2
            className="text-5xl md:text-8xl font-normal tracking-tight text-[#f4eddd]"
            style={{ fontFamily: "var(--font-editorial), Georgia, serif" }}
          >
            The Next Beginning.
          </h2>

          <p className="text-lg md:text-2xl text-[#a6a39b] font-light max-w-xl mx-auto leading-relaxed">
            Available for full-time Full-Stack AI Engineer, Distributed Systems, and Agent Platform roles.
          </p>
        </div>

        {/* Primary Contact Ticket */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#f6e7c5] to-[#eddbb2] text-[#37251e] border-2 border-[#985242] shadow-[inset_0_0_0_4px_#f4e5c5,0_8px_0_#42271b,0_16px_24px_rgba(0,0,0,0.6)] space-y-4 transition-transform hover:scale-[1.01]">
            <div className="flex items-center justify-between border-b border-[#37251e]/20 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#74372c]">
                ADMIT ONE // DIRECT LINE
              </span>
              <span className="font-mono text-xs font-bold text-[#74372c]">BENGALURU, INDIA</span>
            </div>

            <div className="space-y-2 py-2">
              <a
                href="mailto:hanu.adityal@gmail.com"
                className="text-2xl md:text-4xl font-bold tracking-tight block hover:text-[#c42d2a] transition-colors break-all"
                style={{ fontFamily: "var(--font-instrument), sans-serif" }}
              >
                hanu.adityal@gmail.com
              </a>
              <p className="text-sm text-[#37251e]/80 font-mono">
                +91 8296291265 · Open Worldwide for High-Impact Teams
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-[#37251e]/20">
              <button
                onClick={copyEmail}
                className="px-4 py-2 rounded-lg bg-[#37251e] text-[#f4eddd] font-mono text-xs font-bold hover:bg-[#74372c] transition-all flex items-center gap-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}</span>
              </button>

              <a
                href="mailto:hanu.adityal@gmail.com?subject=Engineering%20Opportunity"
                className="px-4 py-2 rounded-lg bg-[#985242] text-[#f4eddd] font-mono text-xs font-bold hover:bg-[#74372c] transition-all flex items-center gap-1.5"
              >
                <span>OPEN EMAIL CLIENT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Tactile Reachout Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-xl bg-[#0d0f15] border border-[#efeade]/15 hover:border-[#efeade]/40 text-[#efeade] font-mono text-xs flex flex-col items-center justify-center gap-2 group transition-all"
          >
            <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-bold">GITHUB</span>
            <span className="text-[10px] text-[#a6a39b]">Code Repositories</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-xl bg-[#0d0f15] border border-[#efeade]/15 hover:border-[#efeade]/40 text-[#efeade] font-mono text-xs flex flex-col items-center justify-center gap-2 group transition-all"
          >
            <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-bold">LINKEDIN</span>
            <span className="text-[10px] text-[#a6a39b]">Professional Network</span>
          </a>

          <a
            href="tel:+918296291265"
            className="p-4 rounded-xl bg-[#0d0f15] border border-[#efeade]/15 hover:border-[#efeade]/40 text-[#efeade] font-mono text-xs flex flex-col items-center justify-center gap-2 group transition-all"
          >
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform text-[#cda265]" />
            <span className="font-bold">TELEPHONE</span>
            <span className="text-[10px] text-[#a6a39b]">+91 8296291265</span>
          </a>

          <a
            href="mailto:hanu.adityal@gmail.com?subject=Hanuma%20Aditya%20Resume%20Request"
            className="p-4 rounded-xl bg-[#0d0f15] border border-[#efeade]/15 hover:border-[#efeade]/40 text-[#efeade] font-mono text-xs flex flex-col items-center justify-center gap-2 group transition-all"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform text-[#c42d2a]" />
            <span className="font-bold">RÉSUMÉ</span>
            <span className="text-[10px] text-[#a6a39b]">Download PDF</span>
          </a>
        </div>
      </div>

      {/* Location Stamp */}
      <div className="relative z-10 text-center pt-16 pb-4">
        <span className="inline-flex items-center gap-2 font-mono text-xs text-[#a6a39b] px-4 py-1.5 rounded-full border border-[#efeade]/10 bg-[#0d0f15]/80">
          <MapPin className="w-3.5 h-3.5 text-[#c42d2a]" />
          Bengaluru, Karnataka, India · Operating Globally
        </span>
      </div>
    </section>
  );
}
