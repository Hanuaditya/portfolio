"use client";

import React, { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const FIRST_NAME = ["H", "A", "N", "U", "M", "A"];
const LAST_NAME = ["A", "D", "I", "T", "Y", "A"];

const LETTER_CONFIGS = [
  { offset: "18%", width: "0.2em" },
  { offset: "37%", width: "0.27em" },
  { offset: "56%", width: "0.21em" },
  { offset: "32%", width: "0.28em" },
  { offset: "51%", width: "0.22em" },
  { offset: "24%", width: "0.25em" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      data-cursor-owner="scene"
      data-entrance-managed="false"
      data-entrance-ready="true"
      data-reel-ready="false"
      data-motion-paused="false"
      data-motion-settled="false"
      className="MLPEba_hero"
      aria-label="Hanuma Aditya C — Introduction"
    >
      {/* 01 // Editorial Header */}
      <header data-hero-copy="true" className="MLPEba_header">
        <a href="#hero" className="MLPEba_wordmark font-bold tracking-tight">
          Hanuma Aditya C
        </a>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase text-[#efeade]/80 px-3 py-1 rounded-full border border-[#efeade]/20 bg-[#07090d]/60 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open for Roles
          </span>
          <a
            href="mailto:hanu.adityal@gmail.com"
            className="text-xs font-mono tracking-wider uppercase underline underline-offset-4 text-[#efeade]/90 hover:text-white transition-colors"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* 02 // Kinetic Typography Name */}
      <h1 className="MLPEba_name" aria-label="Hanuma Aditya">
        {/* HANUMA (Rising contour letters) */}
        <span className="MLPEba_abhay" data-contour-word="true" aria-hidden="true">
          {FIRST_NAME.map((char, idx) => {
            const cfg = LETTER_CONFIGS[idx % LETTER_CONFIGS.length];
            return (
              <span
                key={`first-${idx}`}
                data-running-letter="true"
                className="MLPEba_mask"
                style={
                  {
                    "--streak-offset": cfg.offset,
                    "--streak-width": cfg.width,
                  } as CSSProperties
                }
              >
                <span style={{ "--letter": idx } as CSSProperties}>{char}</span>
                <i className="MLPEba_speedLines" aria-hidden="true">
                  <b></b>
                  <b></b>
                  <b></b>
                </i>
              </span>
            );
          })}
        </span>

        {/* ADITYA (Falling contour letters) */}
        <span className="MLPEba_rohit" data-contour-word="true" aria-hidden="true">
          {LAST_NAME.map((char, idx) => {
            const cfg = LETTER_CONFIGS[idx % LETTER_CONFIGS.length];
            return (
              <span
                key={`last-${idx}`}
                data-running-letter="true"
                className="MLPEba_mask"
                style={
                  {
                    "--streak-offset": cfg.offset,
                    "--streak-width": cfg.width,
                  } as CSSProperties
                }
              >
                <span style={{ "--letter": idx } as CSSProperties}>{char}</span>
                <i className="MLPEba_speedLines" aria-hidden="true">
                  <b></b>
                  <b></b>
                  <b></b>
                </i>
              </span>
            );
          })}
        </span>
      </h1>

      {/* 03 // Literary Editorial Statement */}
      <p data-hero-copy="true" data-ink-statement="true" className="MLPEba_statement">
        <span data-statement-line="true">Full-Stack AI Engineer.</span>
        <span data-statement-line="true">Agent pipelines & scalable web systems.</span>
      </p>

      {/* 04 // Rotated Ribbon Gallery Strip */}
      <div
        className="MLPEba_ribbon"
        data-scene-owner="film"
        data-reversed="false"
        data-reel-entrance-ready="true"
        aria-hidden="true"
      >
        <div className="MLPEba_fallback shadow-2xl">
          <img
            src="/img/banner.webp"
            alt="Flagship Architecture"
            width={768}
            height={576}
            className="object-cover rounded-sm"
          />
          <img
            src="/img/haspr.webp"
            alt="Autonomous WorkOS"
            width={768}
            height={576}
            className="object-cover rounded-sm"
          />
          <img
            src="/img/after-hours.webp"
            alt="Developer Platform"
            width={768}
            height={576}
            className="object-cover rounded-sm"
          />
          <img
            src="/img/tbd-cover.webp"
            alt="KYB Intelligence"
            width={768}
            height={576}
            className="object-cover rounded-sm"
          />
          <img
            src="/img/khajuraho.webp"
            alt="Research and Systems"
            width={768}
            height={576}
            className="object-cover rounded-sm"
          />
          <img
            src="/img/play.webp"
            alt="Technical Matrix"
            width={768}
            height={576}
            className="object-cover rounded-sm"
          />
        </div>
      </div>

      {/* 05 // Introduction Narrative & Action Bar */}
      <div data-hero-copy="true" data-ink-introduction="true" className="MLPEba_introduction">
        <p className="MLPEba_role font-bold tracking-tight">Full-Stack AI Engineer</p>
        <p className="MLPEba_summary opacity-90">
          Building and deploying end-to-end scalable applications, LLM agent pipelines, RAG systems,
          and reliable full-stack software with deterministic guarantees.
        </p>
        <div data-ink-actions="true" className="MLPEba_actions">
          <a
            href="mailto:hanu.adityal@gmail.com"
            className="hover:opacity-80 transition-opacity font-medium flex items-center gap-1.5"
          >
            Email Aditya
            <ArrowUpRight className="w-4 h-4 ml-0.5" />
          </a>
          <a
            href="#tbd-health"
            className="hover:opacity-80 transition-opacity font-medium flex items-center gap-1.5"
          >
            Explore Systems
            <ArrowUpRight className="w-4 h-4 ml-0.5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity flex items-center gap-1.5"
          >
            <GithubIcon className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>

      {/* 06 // Bottom Accreditation & Location Bar */}
      <div data-hero-copy="true" className="MLPEba_bottom">
        <span className="font-mono text-xs opacity-85">
          2nd Runner-Up @ Hackfest 2026 (Unshell) | Oracle Certified GenAI & DevOps
        </span>
        <span className="font-mono text-xs opacity-75">
          Bengaluru, Karnataka · Open Worldwide
        </span>
      </div>
    </section>
  );
}
