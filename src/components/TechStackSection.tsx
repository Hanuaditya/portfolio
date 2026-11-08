"use client";

import React, { useState } from "react";
import { Terminal, Code2, Server, Brain, Cloud, Check } from "lucide-react";

interface SkillCategory {
  id: string;
  num: string;
  name: string;
  role: string;
  skills: { name: string; level: string; note: string }[];
}

const CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    num: "01",
    name: "Frontend & Creative Engineering",
    role: "Production Client Architectures & Micro-Interactions",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced", note: "SSR, Turbopack, Streaming & RSC" },
      { name: "React 19", level: "Advanced", note: "Concurrent mode, hooks, custom state reducers" },
      { name: "TypeScript", level: "Advanced", note: "Strict typing, generics, discriminated unions" },
      { name: "Tailwind CSS v4", level: "Advanced", note: "Custom design systems & theme tokens" },
      { name: "Framer Motion", level: "Proficient", note: "Spring physics, layout animations, gestures" },
      { name: "Lenis", level: "Proficient", note: "Virtual scroll loop & inertia kinetics" },
    ],
  },
  {
    id: "backend",
    num: "02",
    name: "Backend & Systems Infrastructure",
    role: "High-Throughput APIs & Distributed State",
    skills: [
      { name: "Node.js & Express.js", level: "Advanced", note: "Event loops, clustering, middlewares" },
      { name: "Python (FastAPI & Flask)", level: "Advanced", note: "Asynchronous endpoints & worker queues" },
      { name: "Supabase & PostgreSQL", level: "Advanced", note: "RLS policies, triggers & database schema" },
      { name: "pgvector & FAISS", level: "Advanced", note: "HNSW indexing & similarity retrieval" },
      { name: "MongoDB Atlas", level: "Proficient", note: "Document store & dynamic aggregation" },
      { name: "REST & Server-Sent Events", level: "Advanced", note: "Real-time SSE event streaming pipelines" },
    ],
  },
  {
    id: "ai",
    num: "03",
    name: "Agentic AI & Evaluation Systems",
    role: "Autonomous Workflows & Grounded RAG",
    skills: [
      { name: "LangGraph", level: "Advanced", note: "Cyclic state graphs, checkpointing & reducers" },
      { name: "Gemini API & Vertex AI", level: "Advanced", note: "Structured schemas, function calling, tool use" },
      { name: "Tree-sitter AST Parsing", level: "Proficient", note: "Context engine parsing at 15k LOC/s" },
      { name: "WhisperX", level: "Proficient", note: "Multilingual forced phoneme alignment" },
      { name: "PyMuPDF & Extraction", level: "Advanced", note: "Statutory PDF text parsing & grounding" },
      { name: "LangChain", level: "Proficient", note: "Vector stores, prompts & document loaders" },
    ],
  },
  {
    id: "cloud",
    num: "04",
    name: "Cloud, DevOps & Production",
    role: "Cloud-Native Deployment & Reliability",
    skills: [
      { name: "Google Cloud Platform (GCP)", level: "Advanced", note: "Cloud Run, Vertex AI, Speech APIs" },
      { name: "Amazon Web Services (AWS)", level: "Proficient", note: "S3, EC2, Lambda & IAM security" },
      { name: "Oracle Cloud (OCI)", level: "Certified", note: "Oracle Certified GenAI & DevOps Professional" },
      { name: "Docker & Containerization", level: "Proficient", note: "Multi-stage builds & container workflows" },
      { name: "CI/CD & GitHub Actions", level: "Proficient", note: "Automated linting, testing & deployment" },
      { name: "Vercel & Edge Network", level: "Advanced", note: "Edge middleware, analytics & DNS" },
    ],
  },
];

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <section
      id="play"
      className="WulxgG_chapter relative min-h-screen py-24 px-6 md:px-16 border-t border-[#efeade]/10 bg-[#07090d] text-[#efeade]"
      aria-label="Technical Matrix and Skill Categorization"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[350px] bg-[#d9fc68]/05 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d9fc68] font-bold">
              CHAPTER 05 // TECHNICAL MATRIX
            </span>
            <span className="text-[#efeade]/30">•</span>
            <span className="font-mono text-xs text-[#a6a39b]">CAPABILITIES & TOOLING</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#efeade]"
            style={{ fontFamily: "var(--font-instrument), sans-serif" }}
          >
            Engineering Matrix & Tooling.
          </h2>
          <p className="text-base md:text-lg text-[#a6a39b] max-w-2xl font-light">
            Every layer of the stack curated for deterministic correctness, performance, and developer ergonomics.
          </p>
        </div>

        {/* 4 Chamber Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 ${
                  isSelected
                    ? "bg-[#161a26] border-[#d9fc68] shadow-lg shadow-[#d9fc68]/10"
                    : "bg-[#0d0f15]/80 border-[#efeade]/10 hover:border-[#efeade]/20 hover:bg-[#12151e]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isSelected ? "text-[#d9fc68]" : "text-[#a6a39b]"
                    }`}
                  >
                    {cat.num}
                  </span>
                  <span className="text-[10px] font-mono text-[#a6a39b]">
                    {cat.skills.length} TOOLS
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#efeade] leading-snug">{cat.name}</h3>
                <p className="text-[11px] text-[#a6a39b] mt-1 line-clamp-1">{cat.role}</p>
              </button>
            );
          })}
        </div>

        {/* Active Chamber Deep Dive Grid */}
        <div className="bg-[#0d0f15] border border-[#efeade]/15 rounded-2xl p-6 md:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#efeade]/10 pb-4">
            <div>
              <span className="font-mono text-xs text-[#d9fc68] uppercase tracking-wider block">
                CHAMBER {activeCategory.num} // {activeCategory.name}
              </span>
              <p className="text-sm text-[#a6a39b]">{activeCategory.role}</p>
            </div>
            <span className="font-mono text-xs text-[#a6a39b] px-3 py-1 rounded bg-[#131722] border border-[#efeade]/10">
              AUDITED FOR PRODUCTION USE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-[#07090d] border border-[#efeade]/10 hover:border-[#d9fc68]/30 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#efeade] group-hover:text-[#d9fc68] transition-colors">
                    {skill.name}
                  </h4>
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#131722] text-[#d9fc68] border border-[#d9fc68]/20 font-semibold">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-[#a6a39b] font-mono leading-relaxed">{skill.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

