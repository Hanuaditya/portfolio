"use client";

import React from "react";
import { Award, Briefcase, Code, CheckCircle, ExternalLink, Sparkles, Terminal } from "lucide-react";

export default function AfterHoursSection() {
  return (
    <section
      id="after-hours"
      className="_2UvgkG_track relative min-h-screen py-24 px-6 md:px-16 border-t border-[#efeade]/10 bg-[#07090d] text-[#efeade]"
      aria-label="EvoCode, Accreditations and Industry Experience"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-[#cda265]/06 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#cda265] font-bold">
              CHAPTER 06 // LAB & CREDENTIALS
            </span>
            <span className="text-[#efeade]/30">•</span>
            <span className="font-mono text-xs text-[#a6a39b]">SYSTEMS & HONORS</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#efeade]"
            style={{ fontFamily: "var(--font-instrument), sans-serif" }}
          >
            EvoCode, Accreditations & Experience.
          </h2>
          <p className="text-base md:text-lg text-[#a6a39b] max-w-2xl font-light">
            Autonomous software engineering platforms, certified industry competencies, and proven hackathon track records.
          </p>
        </div>

        {/* 01 // Flagship Project 3: EvoCode */}
        <div className="bg-[#0d0f15] border border-[#efeade]/15 rounded-2xl p-6 md:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#efeade]/10 pb-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#c42d2a] font-bold uppercase tracking-widest">
                SYSTEM 03 // AUTONOMOUS DEVELOPER PLATFORM
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-[#efeade]">
                EvoCode — Full-Stack AI Developer Platform
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded bg-[#131722] border border-[#efeade]/15 font-mono text-xs text-[#efeade]">
                Tree-sitter · LangChain · Gemini · SSE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base text-[#efeade]/85 leading-relaxed font-sans">
                EvoCode is an autonomous software engineering engine featuring coordinating planner
                and coder agents capable of synthesizing production-ready pull requests directly from
                issue tickets.
              </p>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#131722] border border-[#efeade]/10 space-y-1">
                  <span className="text-[#cda265] font-bold block">
                    AST Context Engine (15,000 LOC/sec)
                  </span>
                  <p className="text-[#a6a39b] font-sans">
                    Parses codebases into Abstract Syntax Trees using Tree-sitter, isolating class
                    hierarchies, call targets, and type definitions with zero token bloat.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#131722] border border-[#efeade]/10 space-y-1">
                  <span className="text-emerald-400 font-bold block">
                    Confidence-Scoring Guardrails
                  </span>
                  <p className="text-[#a6a39b] font-sans">
                    Every synthesized diff executes automated unit tests in isolated runtime sandboxes
                    with real-time execution logs streamed over SSE before committing PRs.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-[#07090d] border border-[#efeade]/10 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#a6a39b] block">
                Platform Architecture
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "Express.js",
                  "TypeScript",
                  "LangChain",
                  "Gemini API",
                  "Tree-sitter AST",
                  "Server-Sent Events",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded bg-[#131722] border border-[#efeade]/10 text-[#efeade]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-[#efeade]/10 flex items-center justify-between font-mono text-xs text-[#a6a39b]">
                <span>Automated PR Generation</span>
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <CheckCircle className="w-3.5 h-3.5" /> Sandboxed Verification
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 02 // Accreditations & Competitive Honors */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#cda265] font-bold">
              CREDENTIALS & BENCHMARKS
            </span>
            <h3 className="text-2xl font-bold text-[#efeade]">Accreditations & Honors</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#0d0f15] border border-[#efeade]/10 hover:border-[#c42d2a]/40 transition-all space-y-2">
              <div className="flex items-center gap-2 text-[#c42d2a]">
                <Award className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  2nd Runner-Up
                </span>
              </div>
              <h4 className="text-base font-bold text-[#efeade]">
                Hackfest National Hackathon 2026
              </h4>
              <p className="text-xs text-[#a6a39b] font-mono">
                Awarded ₹30,000 Cash Prize for Unshell (Autonomous AML & KYB Intelligence Graph).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d0f15] border border-[#efeade]/10 hover:border-[#cda265]/40 transition-all space-y-2">
              <div className="flex items-center gap-2 text-[#cda265]">
                <Award className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  National Finalist
                </span>
              </div>
              <h4 className="text-base font-bold text-[#efeade]">
                AI for Bharat National Hackathon
              </h4>
              <p className="text-xs text-[#a6a39b] font-mono">
                Shortlisted nationally across thousands of teams for high-impact AI systems.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d0f15] border border-[#efeade]/10 hover:border-emerald-400/40 transition-all space-y-2">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Oracle Certified
                </span>
              </div>
              <h4 className="text-base font-bold text-[#efeade]">
                Generative AI Professional
              </h4>
              <p className="text-xs text-[#a6a39b] font-mono">
                Oracle Cloud Infrastructure (OCI) verified certification in LLM architecture & fine-tuning.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d0f15] border border-[#efeade]/10 hover:border-emerald-400/40 transition-all space-y-2">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Oracle Certified
                </span>
              </div>
              <h4 className="text-base font-bold text-[#efeade]">
                DevOps Professional
              </h4>
              <p className="text-xs text-[#a6a39b] font-mono">
                OCI certification in CI/CD pipeline automation, containerization, and cloud deployment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d0f15] border border-[#efeade]/10 hover:border-[#efeade]/25 transition-all space-y-2">
              <div className="flex items-center gap-2 text-[#efeade]/80">
                <Terminal className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Google & Kaggle
                </span>
              </div>
              <h4 className="text-base font-bold text-[#efeade]">
                AI Agents Intensive Program
              </h4>
              <p className="text-xs text-[#a6a39b] font-mono">
                Specialized training in multi-agent orchestration, tool integration, and evaluation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d0f15] border border-[#efeade]/10 hover:border-[#efeade]/25 transition-all space-y-2">
              <div className="flex items-center gap-2 text-[#efeade]/80">
                <Terminal className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Innomatics
                </span>
              </div>
              <h4 className="text-base font-bold text-[#efeade]">
                Data Science & GenAI Program
              </h4>
              <p className="text-xs text-[#a6a39b] font-mono">
                Deep dive into statistical modeling, vector databases, and production RAG pipelines.
              </p>
            </div>
          </div>
        </div>

        {/* 03 // Industry Experience */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#a6a39b] font-bold">
              CHRONOLOGY
            </span>
            <h3 className="text-2xl font-bold text-[#efeade]">Industry Experience</h3>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-[#0d0f15] border border-[#efeade]/15 shadow-xl space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#efeade]/10 pb-4">
              <div>
                <h4 className="text-lg font-bold text-[#efeade]">
                  Software Engineering Intern (Data & GenAI)
                </h4>
                <p className="text-sm text-[#cda265] font-mono">Innomatics Research Labs</p>
              </div>
              <span className="font-mono text-xs text-[#a6a39b] px-3 py-1 rounded bg-[#131722] border border-[#efeade]/10 self-start md:self-auto">
                Nov 2025 — Mar 2026 · Bengaluru
              </span>
            </div>

            <div className="space-y-3 text-sm text-[#efeade]/80 font-sans leading-relaxed">
              <p>
                • Engineered and deployed production-grade machine learning REST APIs using FastAPI
                and Docker, optimizing inference latency for client-facing applications.
              </p>
              <p>
                • Built high-performance vector retrieval pipelines using FAISS, implementing hybrid
                dense-sparse chunking strategies that boosted retrieval precision on technical corpora.
              </p>
              <p>
                • Automated cloud deployments on AWS (EC2, S3), writing infrastructure automation
                scripts that ensured zero-downtime model updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

