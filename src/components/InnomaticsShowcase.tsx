"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    tab: "Data Science & Analytics",
    category: "01 / INNOMATICS LAB",
    title: "Predictive Intelligence.\nBuilt for scale.",
    description:
      "End-to-end exploratory data analysis, feature engineering, and production ML pipelines engineered during the Data Science & GenAI internship.",
    metrics: ["EDA & Feature Pipelines", "Model Evaluation", "Statistical Inference"],
  },
  {
    id: "02",
    tab: "Generative AI Agents",
    category: "02 / INNOMATICS LAB",
    title: "Agentic workflows.\nZero friction.",
    description:
      "Retrieval-augmented generation (RAG) systems and multi-step LLM orchestration pipelines designed for low-latency enterprise search and reasoning.",
    metrics: ["RAG Architecture", "Vector Indexing", "Prompt Evaluation"],
  },
  {
    id: "03",
    tab: "Full-Stack AI Systems",
    category: "03 / INNOMATICS LAB",
    title: "From notebook\nto production.",
    description:
      "Interactive web interfaces connecting Python inference backends with responsive Next.js frontends for real-time model interaction.",
    metrics: ["FastAPI & Next.js", "Real-Time Streaming", "Clean UI Systems"],
  },
];

export default function InnomaticsShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // GPU-only scroll parallax & crossfade between flat and 3D Innomatics banners
  const flatOpacity = useTransform(scrollYProgress, [0.1, 0.35], [1, 0]);
  const threeDOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const bannerScale = useTransform(scrollYProgress, [0.05, 0.4], [0.94, 1.02]);

  const current = PROJECTS[activeTab];

  return (
    <section
      ref={sectionRef}
      id="innomatics-lab"
      className="relative w-full min-h-screen bg-[#e7dccb] text-[#2a1814] py-20 px-6 md:px-14 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#cbbba4] pb-6">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#7a4b3e] block">
            INTERNSHIP & RESEARCH LAB
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#5a1e18] mt-1">
            Innomatics Lab.
          </h2>
        </div>
        <p className="font-sans text-sm md:text-base text-[#5c493e] max-w-md">
          Data Science &amp; Generative AI engineering—turning raw datasets and foundation models into interactive software.
        </p>
      </div>

      {/* Center Morphing Banner (Flat -> 3D Extruded Innomatics Lab) */}
      <motion.div
        style={{ scale: bannerScale }}
        className="relative max-w-6xl mx-auto w-full aspect-[21/7] my-8 rounded-md overflow-hidden shadow-[0_20px_50px_rgba(90,30,24,0.18)] border border-[#cbbba4] bg-[#dfd2be]"
      >
        {/* Flat Banner Layer */}
        <motion.div style={{ opacity: flatOpacity }} className="absolute inset-0">
          <Image
            alt="Innomatics Lab Flat Typography"
            className="object-cover object-center"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1152px"
            src="/img/innomatics-lab-flat.jpg"
          />
        </motion.div>

        {/* 3D Extruded Banner Layer */}
        <motion.div style={{ opacity: threeDOpacity }} className="absolute inset-0">
          <Image
            alt="Innomatics Lab 3D Extruded Typography"
            className="object-cover object-center"
            fill
            sizes="(max-width: 1200px) 100vw, 1152px"
            src="/img/innomatics-lab-3d.jpg"
          />
        </motion.div>
      </motion.div>

      {/* Interactive Case Study Details */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
        <div className="lg:col-span-5 space-y-3">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#8c3b32]">
            {current.category}
          </span>
          <h3 className="font-serif text-3xl md:text-4xl leading-tight whitespace-pre-line text-[#2a1814]">
            {current.title}
          </h3>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <p className="font-sans text-sm md:text-base text-[#4d3c33] leading-relaxed">
            {current.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {current.metrics.map((item) => (
              <span
                key={item}
                className="font-mono text-[11px] px-3 py-1 rounded-full bg-[#dcd0bd] border border-[#bfa98e] text-[#4a251d]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Interactive Tab Switcher */}
      <div className="max-w-7xl mx-auto w-full mt-12 pt-4 border-t border-[#cbbba4] flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6">
          {PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`font-mono text-xs uppercase tracking-wider pb-1 transition-colors cursor-pointer ${
                activeTab === idx
                  ? "text-[#7a1c16] font-bold border-b-2 border-[#7a1c16]"
                  : "text-[#7d6a5d] hover:text-[#2a1814]"
              }`}
            >
              {proj.id} &nbsp; {proj.tab}
            </button>
          ))}
        </div>

        <a
          href="https://github.com/Hanuaditya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#5a1e18] hover:underline"
        >
          View Repositories <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
