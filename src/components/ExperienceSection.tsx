"use client";

import React, { useState } from "react";
import { ChevronDown, Trophy, Award, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  num: string;
  company: string;
  role: string;
  period: string;
  status: string;
  statusColor: string;
  description: string;
  tags: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "innomatics",
    num: "01",
    company: "INNOMATICS RESEARCH LABS",
    role: "SOFTWARE ENGINEERING INTERN (DATA & GENAI)",
    period: "NOV 2025 – MAR 2026",
    status: "COMPLETED",
    statusColor: "#22c55e",
    description:
      "Architected high-throughput retrieval pipelines and multi-agent systems using LangChain, FastAPI, and vectorized embeddings. Engineered production-grade RAG evaluation workflows, decreasing hallucinations by 38% and lowering average p95 query latency across enterprise data lakes.",
    tags: ["Python", "FastAPI", "LangChain", "Vector DB", "Docker", "PostgreSQL", "RAG"],
  },
  {
    id: "mvit",
    num: "02",
    company: "SIR M VISVESVARAYA INSTITUTE OF TECHNOLOGY",
    role: "B.E. IN COMPUTER SCIENCE & ENGINEERING",
    period: "2023 – 2027",
    status: "ENROLLED",
    statusColor: "#3b82f6",
    description:
      "Undergraduate program in Computer Science & Engineering with a strong academic standing (CGPA 8.5 / 10.0). Focus on Data Structures, Algorithms, Distributed Computing, and Generative AI systems. Active contributor to collegiate technical symposiums and hackathons.",
    tags: ["Data Structures", "Algorithms", "Distributed Systems", "TypeScript", "Next.js"],
  },
];

const TOOLKIT = [
  {
    category: "LANGUAGES",
    items: ["TypeScript", "JavaScript", "Python", "C++", "Java", "Kotlin", "SQL"],
  },
  {
    category: "AI & AGENTIC SYSTEMS",
    items: ["LangGraph", "LangChain", "Gemini API", "RAG Pipelines", "pgvector", "FAISS", "WhisperX"],
  },
  {
    category: "BACKEND & CLOUD",
    items: ["FastAPI", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Docker", "AWS (EC2, S3)"],
  },
  {
    category: "FRONTEND & DESIGN",
    items: ["Next.js (App Router)", "React 19", "Tailwind CSS v4", "Framer Motion", "Turbopack"],
  },
];

const HONORS = [
  {
    title: "2nd Runner-Up — National Hackathon",
    issuer: "Hackfest 2026",
    award: "INR 30,000 Cash Prize",
    description: "Awarded among national teams for engineering Unshell: autonomous AML & KYB Intelligence Graph.",
  },
  {
    title: "National Shortlist & Finalist",
    issuer: "AI for Bharat & Unstop (2025)",
    award: "National Finalist",
    description: "Recognized for high-impact multilingual AI systems solving regional Indian language accessibility.",
  },
  {
    title: "OCI Certified Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure (2025)",
    award: "Certified Professional",
    description: "Verified expertise in foundation models, fine-tuning, vector databases, and enterprise AI orchestration.",
  },
];

export default function ExperienceSection() {
  const [openItem, setOpenItem] = useState<string>("innomatics");

  return (
    <section
      id="experience"
      className="relative w-full bg-[#070e1c] text-[#e5eaf2] py-24 px-6 md:px-14 border-t border-[#1b3d75]/60 overflow-hidden select-none"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1b3d75 1px, transparent 1px), linear-gradient(to bottom, #1b3d75 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1b3d75]/80 pb-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#4a90e2] block">
              TRAJECTORY &amp; ACCREDITATION
            </span>
            <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-[#e5eaf2] mt-1 uppercase">
              Experience &amp; Skills
            </h2>
          </div>
          <span className="font-mono text-xs text-[#7ba2dd] tracking-wider uppercase">
            02 ENTRIES · 04 DOMAINS
          </span>
        </div>

        {/* 1. Experience Table */}
        <div className="space-y-4">
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 font-mono text-[11px] uppercase tracking-wider text-[#7ba2dd] border-b border-[#1b3d75]/50">
            <span className="col-span-1">No.</span>
            <span className="col-span-4">Company / Institution</span>
            <span className="col-span-4">Role / Degree</span>
            <span className="col-span-2">Period</span>
            <span className="col-span-1 text-right">Status</span>
          </div>

          <div className="space-y-3">
            {EXPERIENCES.map((exp) => {
              const isOpen = openItem === exp.id;
              return (
                <div
                  key={exp.id}
                  className="rounded-sm border border-[#1b3d75]/70 bg-[#0a152a]/70 hover:border-[#3d7edb] transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? "" : exp.id)}
                    className="w-full text-left px-6 py-5 flex flex-col lg:grid lg:grid-cols-12 gap-3 lg:gap-4 items-start lg:items-center cursor-pointer"
                  >
                    <span className="font-mono text-xs text-[#4a90e2] font-bold col-span-1">
                      {exp.num}
                    </span>
                    <span className="font-mono text-sm md:text-base font-bold text-[#e5eaf2] col-span-4 tracking-wide">
                      {exp.company}
                    </span>
                    <span className="font-sans text-xs md:text-sm text-[#93bbf8] col-span-4">
                      {exp.role}
                    </span>
                    <span className="font-mono text-xs text-[#7ba2dd] col-span-2">
                      {exp.period}
                    </span>
                    <div className="col-span-1 flex items-center justify-between lg:justify-end gap-3 w-full lg:w-auto">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: exp.statusColor,
                            boxShadow: `0 0 8px ${exp.statusColor}`,
                          }}
                        />
                        <span style={{ color: exp.statusColor }}>{exp.status}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#7ba2dd] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#1b3d75]/40 bg-[#081224]/80 space-y-4">
                      <p className="font-sans text-sm md:text-base text-[#c5d5ec] leading-relaxed max-w-4xl">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[11px] px-3 py-1 bg-[#13274a] border border-[#234b88] rounded-xs text-[#a8cdfc]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Technical Toolkit Grid */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-[#1b3d75]/60 pb-3">
            <h3 className="font-mono text-lg font-bold tracking-wider text-[#93bbf8] uppercase">
              Technical Toolkit &amp; Disciplines
            </h3>
            <span className="font-mono text-xs text-[#7ba2dd]">40+ TOOLS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOOLKIT.map((tk) => (
              <div
                key={tk.category}
                className="p-5 rounded-sm border border-[#1b3d75]/60 bg-[#0a152a]/50 space-y-3"
              >
                <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#4a90e2] font-bold">
                  {tk.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {tk.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[11px] px-2.5 py-1 bg-[#0f2142] border border-[#1e427b] text-[#d6e5fb] rounded-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Honors & Recognition */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-[#1b3d75]/60 pb-3">
            <h3 className="font-mono text-lg font-bold tracking-wider text-[#93bbf8] uppercase">
              Honors, Hackathons &amp; Certifications
            </h3>
            <span className="font-mono text-xs text-[#7ba2dd]">03 CREDENTIALS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HONORS.map((h) => (
              <div
                key={h.title}
                className="p-6 rounded-sm border border-[#1b3d75]/70 bg-[#0a152a]/60 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#4a90e2]">
                      {h.issuer}
                    </span>
                    <Trophy className="w-4 h-4 text-[#fbbf24]" />
                  </div>
                  <h4 className="font-mono text-base font-bold text-[#e5eaf2]">
                    {h.title}
                  </h4>
                  <p className="font-sans text-xs text-[#9bb3d6] leading-relaxed">
                    {h.description}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="font-mono text-[11px] font-bold text-[#22c55e] bg-[#22c55e]/10 border border-[#22c55e]/30 px-2.5 py-0.5 rounded-xs">
                    {h.award}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
