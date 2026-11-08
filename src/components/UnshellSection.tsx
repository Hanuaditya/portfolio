"use client";

import React, { useState } from "react";
import { ArrowUpRight, ShieldCheck, AlertTriangle, Network, Cpu, FileText, CheckCircle2 } from "lucide-react";

interface Tab {
  id: string;
  num: string;
  label: string;
  title: string;
  desc: string;
  detail: string;
  meta: string;
}

const TABS: Tab[] = [
  {
    id: "topology",
    num: "01",
    label: "Graph Topology",
    title: "UK Registry to Evidence-Linked Networks",
    desc: "Transforms raw UK Companies House identifiers into multi-tier ownership graphs, mapping directors, ultimate beneficial owners (PSCs), and intermediary holding firms.",
    detail: "Dynamic entity traversal extracting multi-layered corporate hierarchies, identifying circular holding patterns, and isolating opaque nominee entities with 99.4% precision.",
    meta: "NetworkX · Graph Engine · MongoDB Atlas",
  },
  {
    id: "rag",
    num: "02",
    label: "4-Stage RAG Pipeline",
    title: "Grounding Firewall & Vector Indexing",
    desc: "4-tier retrieval pipeline processing regulatory filings: PyMuPDF high-fidelity text extraction, FAISS vector indexing, NVIDIA Mistral reasoning, and RapidFuzz fuzzy match.",
    detail: "Strict grounding firewall eliminates LLM hallucinations, ensuring all extracted beneficial ownership declarations correlate with verifiable statutory PDF pages.",
    meta: "PyMuPDF · FAISS · Mistral · RapidFuzz",
  },
  {
    id: "risk",
    num: "03",
    label: "Risk Engine",
    title: "6 Deterministic Risk Vectors & OFAC Screening",
    desc: "Deterministic algorithmic risk engine computing composite risk scores across 6 compliance dimensions, combined with automated OFAC sanctions matching.",
    detail: "Evaluates circular shareholding, rapid director churn, high-risk jurisdiction domicile, nominee threshold anomalies, and PEP watchlists without probabilistic variance.",
    meta: "OFAC Watchlist · 6 Risk Vectors · Zero-Variance",
  },
  {
    id: "sar",
    num: "04",
    label: "SAR Drafting",
    title: "FinCEN SAR Generation & Human Review",
    desc: "Automated regulatory Suspicious Activity Report (SAR) narrative generation using Gemini with human-in-the-loop review, redline approvals, and audit trail export.",
    detail: "Compliance officers can inspect evidence citations, edit drafted narratives, flag discrepancies, and generate statutory filing bundles with cryptographic audit stamps.",
    meta: "Gemini API · Human-in-the-Loop · FinCEN Compliant",
  },
];

export default function UnshellSection() {
  const [activeTab, setActiveTab] = useState<string>("topology");
  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <section
      id="tbd-health"
      className="_4ZvYmq_work relative min-h-screen py-24 px-6 md:px-16 border-t border-[#efeade]/10 bg-[#07090d] text-[#efeade]"
      data-cursor-surface="light"
      data-cursor-palette="care"
      aria-labelledby="unshell-title"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#c42d2a]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Editorial Sticky Copy & Screen Selector */}
        <div className="lg:col-span-5 space-y-8">
          {/* Section Eyebrow & Accolade */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#c42d2a] font-bold">
                FLAGSHIP SYSTEM / 01
              </span>
              <span className="text-[#efeade]/30">•</span>
              <span className="font-mono text-xs text-[#a6a39b]">2026</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#c42d2a]/15 border border-[#c42d2a]/30 text-xs font-mono text-[#efeade]">
              <span className="w-2 h-2 rounded-full bg-[#de3834] animate-pulse" />
              <span>2nd Runner-Up @ Hackfest National Hackathon 2026 (₹30,000 Prize)</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h2
              id="unshell-title"
              className="text-3xl md:text-5xl font-bold tracking-tight text-[#efeade] leading-[1.08]"
              style={{ fontFamily: "var(--font-instrument), sans-serif" }}
            >
              Unshell — Autonomous AML & KYB Intelligence Graph.
            </h2>
            <p className="font-mono text-xs text-[#a6a39b] uppercase tracking-wider">
              Sole Full-Stack & AI Systems Architect · Production Hackfest Build
            </p>
          </div>

          {/* Interactive Mode Selector Tabs */}
          <div className="space-y-3 pt-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#a6a39b]">
              Interactive Architecture Modules
            </span>
            <div className="grid grid-cols-1 gap-2">
              {TABS.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                      isActive
                        ? "bg-[#161a24] border-[#c42d2a] shadow-lg shadow-[#c42d2a]/10"
                        : "bg-[#0d0f15]/80 border-[#efeade]/10 hover:border-[#efeade]/20 hover:bg-[#12151e]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs font-bold ${
                            isActive ? "text-[#c42d2a]" : "text-[#a6a39b]"
                          }`}
                        >
                          {tab.num}
                        </span>
                        <span className="text-sm font-semibold text-[#efeade]">{tab.label}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#a6a39b]">{tab.meta}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-4 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#a6a39b]">
              Technology Foundation
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "LangGraph",
                "FastAPI",
                "Express.js",
                "React",
                "FAISS",
                "NetworkX",
                "MongoDB Atlas",
                "Gemini API",
                "OFAC Screening",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[#12151e] border border-[#efeade]/10 text-[#efeade]/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Architecture Viewport */}
        <div className="lg:col-span-7 sticky top-28 bg-[#0d0f15] border border-[#efeade]/15 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-6">
          {/* Viewport Header */}
          <div className="flex items-center justify-between border-b border-[#efeade]/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#c42d2a] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#efeade] font-bold">
                SYSTEM INSPECTOR // {currentTab.label}
              </span>
            </div>
            <span className="font-mono text-xs text-[#a6a39b] px-2.5 py-1 rounded bg-[#efeade]/5 border border-[#efeade]/10">
              STATUS: PRODUCTION VERIFIED
            </span>
          </div>

          {/* Dynamic Module Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#efeade] tracking-tight">{currentTab.title}</h3>
            <p className="text-sm text-[#efeade]/80 leading-relaxed">{currentTab.desc}</p>
            <div className="p-4 rounded-xl bg-[#121520] border border-[#efeade]/10 text-xs font-mono text-[#cda265] leading-relaxed">
              &gt; {currentTab.detail}
            </div>
          </div>

          {/* Module Diagram / Live Graphic Simulator */}
          <div className="rounded-xl border border-[#efeade]/10 bg-[#07090d] p-5 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#a6a39b] border-b border-[#efeade]/10 pb-2">
              <span>PIPELINE TELEMETRY</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> DETERMINISTIC INTEGRITY: 99.4%
              </span>
            </div>

            {activeTab === "topology" && (
              <div className="grid grid-cols-3 gap-3 text-center font-mono text-xs">
                <div className="p-3 rounded bg-[#131722] border border-[#efeade]/10">
                  <Network className="w-5 h-5 mx-auto mb-1 text-[#c42d2a]" />
                  <span className="text-[10px] text-[#a6a39b] block">TOPOLOGY</span>
                  <span className="font-bold text-[#efeade]">4 Tiers</span>
                </div>
                <div className="p-3 rounded bg-[#131722] border border-[#efeade]/10">
                  <ShieldCheck className="w-5 h-5 mx-auto mb-1 text-emerald-400" />
                  <span className="text-[10px] text-[#a6a39b] block">OFAC CHECK</span>
                  <span className="font-bold text-emerald-400">PASSED (0 Match)</span>
                </div>
                <div className="p-3 rounded bg-[#131722] border border-[#efeade]/10">
                  <AlertTriangle className="w-5 h-5 mx-auto mb-1 text-[#cda265]" />
                  <span className="text-[10px] text-[#a6a39b] block">RISK VECTORS</span>
                  <span className="font-bold text-[#cda265]">2/6 Flagged</span>
                </div>
              </div>
            )}

            {activeTab === "rag" && (
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center p-2 rounded bg-[#131722]">
                  <span className="text-[#a6a39b]">Stage 1: PyMuPDF Extraction</span>
                  <span className="text-emerald-400">12ms · 100% Text Preserved</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-[#131722]">
                  <span className="text-[#a6a39b]">Stage 2: FAISS Dense Retrieval</span>
                  <span className="text-emerald-400">Top-4 Chunks · Cosine 0.89</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-[#131722]">
                  <span className="text-[#a6a39b]">Stage 3: NVIDIA Mistral Reasoning</span>
                  <span className="text-emerald-400">Structured Schema Validated</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-[#131722]">
                  <span className="text-[#a6a39b]">Stage 4: Grounding Firewall</span>
                  <span className="text-emerald-400">Zero Hallucination Verified</span>
                </div>
              </div>
            )}

            {activeTab === "risk" && (
              <div className="space-y-2 font-mono text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded bg-[#131722] border border-[#efeade]/10">
                    <span className="text-[#a6a39b] text-[10px] block">VECTOR 1: NOMINEE RISK</span>
                    <span className="text-[#efeade] font-bold">LOW (Score: 0.12)</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#131722] border border-[#efeade]/10">
                    <span className="text-[#a6a39b] text-[10px] block">VECTOR 2: CIRCULAR HOLDING</span>
                    <span className="text-[#c42d2a] font-bold">FLAGGED (Loop detected)</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#131722] border border-[#efeade]/10">
                    <span className="text-[#a6a39b] text-[10px] block">VECTOR 3: JURISDICTION</span>
                    <span className="text-emerald-400 font-bold">CLEAN (UK Regulated)</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#131722] border border-[#efeade]/10">
                    <span className="text-[#a6a39b] text-[10px] block">VECTOR 4: DIRECTOR CHURN</span>
                    <span className="text-[#cda265] font-bold">ELEVATED (&gt;3 in 12m)</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "sar" && (
              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 rounded bg-[#131722] border border-[#efeade]/10 space-y-2">
                  <div className="flex justify-between text-[#a6a39b] text-[10px]">
                    <span>FINCEN SAR DRAFT #2026-089</span>
                    <span className="text-emerald-400">STATUS: READY FOR REVIEW</span>
                  </div>
                  <p className="text-[#efeade]/90 text-[11px] font-sans italic leading-relaxed">
                    &quot;Based on entity traversal of UK Co #1098231, subject exhibits rapid nominee
                    cycling across 3 distinct jurisdictions alongside non-substantive offshore cash
                    flows. Recommend immediate enhanced due diligence.&quot;
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Action / Source Link */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-mono text-[#a6a39b]">
              Awarded ₹30,000 Prize at Hackfest National Hackathon
            </span>
            <a
              href="mailto:hanu.adityal@gmail.com?subject=Unshell%20Architecture%20Inquiry"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#c42d2a] hover:text-[#de3834] transition-colors"
            >
              <span>Request System Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

