"use client";

import React from "react";
import { BookOpen, GraduationCap, ShieldCheck, Terminal, Layers } from "lucide-react";

export default function ArchitectureSection() {
  return (
    <section
      id="khajuraho"
      className="D5FfoW_document relative min-h-screen py-24 px-6 md:px-16 border-t border-[#efeade]/10 bg-[#07090d] text-[#efeade]"
      aria-label="Systems Architecture & Engineering Philosophy"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-[#c42d2a]/06 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Editorial Eyebrow & Chapter Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#c42d2a] font-bold">
              CHAPTER 04 // ENGINEERING PHILOSOPHY
            </span>
            <span className="text-[#efeade]/30">•</span>
            <span className="font-mono text-xs text-[#a6a39b]">SYSTEMS ARCHITECTURE</span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-[#efeade] leading-[1.05]"
            style={{ fontFamily: "var(--font-editorial), Georgia, serif" }}
          >
            Deterministic Safety over Probabilistic Hallucination.
          </h2>

          <p className="text-xl md:text-2xl text-[#a6a39b] font-light italic leading-relaxed">
            &ldquo;In financial compliance, medical workflows, and code generation, an agent that is
            90% right is 100% unsafe. True autonomy requires deterministic graph boundaries.&rdquo;
          </p>
        </div>

        {/* Narrative Core Articles */}
        <div className="space-y-12 text-[#efeade]/90 text-lg leading-relaxed font-sans border-l-2 border-[#c42d2a]/40 pl-6 md:pl-10">
          <article className="space-y-4">
            <h3 className="text-2xl font-bold text-[#efeade] tracking-tight flex items-center gap-2">
              <span className="font-mono text-sm text-[#c42d2a]">01.</span>
              Cyclic State Graphs over Linear Prompt Chains
            </h3>
            <p>
              Linear LLM pipelines compound errors exponentially with every step. When building
              Unshell and Horizon Meet, I engineered cyclic agent architectures using LangGraph where
              every node transition is gated by deterministic state schemas and runtime validation. If
              an entity fails verification, the graph does not hallucinate forward—it routes into a
              targeted self-correction loop or triggers human supervision.
            </p>
          </article>

          <article className="space-y-4">
            <h3 className="text-2xl font-bold text-[#efeade] tracking-tight flex items-center gap-2">
              <span className="font-mono text-sm text-[#c42d2a]">02.</span>
              The Grounding Firewall: AST & Statutory Verifiability
            </h3>
            <p>
              In EvoCode, context isn&apos;t dumped into an LLM context window blindly. We parse
              entire codebases into Abstract Syntax Trees using Tree-sitter at over 15,000 LOC/sec,
              isolating exact type definitions, imports, and invocation signatures. In Unshell, statutory
              company PDF filings are parsed page-by-page with PyMuPDF, ensuring every beneficial
              owner link carries cryptographic evidence citations.
            </p>
          </article>

          <article className="space-y-4">
            <h3 className="text-2xl font-bold text-[#efeade] tracking-tight flex items-center gap-2">
              <span className="font-mono text-sm text-[#c42d2a]">03.</span>
              Human-in-the-Loop as a First-Class Architectural Primitive
            </h3>
            <p>
              Autonomous systems should not hide uncertainty. In both our KYB compliance graphs and
              enterprise meeting media engines, high-stakes decisions feature zero-state-loss
              pause/resume checkpoints. Operators can inspect live vector embeddings, modify
              generated SAR drafts, and audit decisions through immutable cryptographic event logs.
            </p>
          </article>
        </div>

        {/* Education & Academic Rigor Block */}
        <div className="p-8 rounded-2xl bg-[#0d0f15] border border-[#efeade]/15 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-[#efeade]/10 pb-4">
            <GraduationCap className="w-6 h-6 text-[#cda265]" />
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#a6a39b] block">
                ACADEMIC FOUNDATION
              </span>
              <h4 className="text-xl font-bold text-[#efeade]">
                Sir M Visvesvaraya Institute of Technology (VTU), Bengaluru
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-[#a6a39b] block uppercase">Degree & Major</span>
              <span className="text-[#efeade] font-bold text-sm">
                B.E. Computer Science & Engineering
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[#a6a39b] block uppercase">Academic Standing</span>
              <span className="text-[#d9fc68] font-bold text-sm">CGPA: 8.5 / 10.0</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#a6a39b] block uppercase">Timeline</span>
              <span className="text-[#efeade] font-bold text-sm">Expected Graduation 2027</span>
            </div>
          </div>

          <div className="text-xs text-[#a6a39b] font-sans leading-relaxed pt-2">
            Rigorous coursework in Distributed Systems, Operating Systems, Computer Architecture, Data
            Structures & Algorithms, Database Management Systems, and Object-Oriented Software Design.
          </div>
        </div>
      </div>
    </section>
  );
}

