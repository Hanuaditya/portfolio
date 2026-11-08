"use client";

import React, { useState } from "react";
import { ArrowUpRight, Cpu, Layers, Radio, Sparkles, Workflow, CheckCircle } from "lucide-react";

interface SubSystem {
  id: string;
  tag: string;
  title: string;
  summary: string;
  metrics: string[];
}

const SYSTEMS: SubSystem[] = [
  {
    id: "langgraph",
    tag: "01 / PIPELINE",
    title: "12-Node LangGraph Agent State Machine",
    summary:
      "Cyclic agent graph orchestrating media transcription, speaker diarization, synthesis, translation, and verification with custom state reducers and fault-tolerant compensation cycles.",
    metrics: ["12 Nodes", "4 Parallel Validators", "Deterministic State Reducer"],
  },
  {
    id: "whisperx",
    tag: "02 / AUDIO ALIGNMENT",
    title: "WhisperX Hindi-to-English Phoneme Alignment",
    summary:
      "Sub-word level multilingual forced alignment mapping Hindi spoken cadences to English dubbed speech audio, matching phoneme timestamps to maintain video lip sync.",
    metrics: ["Phoneme Timestamps", "Hindi-English Model", "GCP Speech APIs"],
  },
  {
    id: "hitl",
    tag: "03 / ORCHESTRATION",
    title: "Human-in-the-Loop Pause & Resume Engine",
    summary:
      "Operator supervision checkpoint allowing engineers to intercept generated translations or summaries, calibrate tone, edit keyframes, and resume execution without data loss.",
    metrics: ["Zero-State-Loss Pause", "Redline Editor", "Asynchronous Resume"],
  },
  {
    id: "streaming",
    tag: "04 / REAL-TIME STREAMING",
    title: "SSE Streaming & Webhook Idempotency",
    summary:
      "Server-Sent Events streaming real-time transcription diffs and pipeline progress to client frontends, backed by cryptographic idempotency keys on Supabase/PostgreSQL.",
    metrics: ["SSE Event Stream", "Idempotent Webhooks", "PostgreSQL & pgvector"],
  },
];

export default function HorizonMeetSection() {
  const [activeSystem, setActiveSystem] = useState(SYSTEMS[0]);

  return (
    <section
      id="haspr"
      className="_4ZvYmq_studio relative min-h-screen py-24 px-6 md:px-16 border-t border-[#efeade]/10 bg-[#07090d] text-[#efeade]"
      data-cursor-surface="dark"
      data-cursor-palette="studio"
      aria-labelledby="horizon-title"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[550px] h-[350px] bg-[#cda265]/08 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Identity Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#efeade]/10 pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#cda265] font-bold">
              SYSTEM 02 // MULTIMODAL AGENT WORKOS
            </span>
            <h2
              id="horizon-title"
              className="text-3xl md:text-5xl font-bold tracking-tight text-[#efeade]"
              style={{ fontFamily: "var(--font-instrument), sans-serif" }}
            >
              Horizon Meet & Veridian.
            </h2>
            <p className="text-lg md:text-xl text-[#a6a39b] font-light max-w-2xl">
              Autonomous Enterprise WorkOS & AI Media Platform with 12-Node LangGraph State Machines.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-[#131722] border border-[#efeade]/15 text-xs font-mono text-[#efeade]">
              Next.js · Flask · WhisperX · Gemini · Supabase
            </span>
          </div>
        </div>

        {/* 4 Architectural Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SYSTEMS.map((sys) => {
            const isSelected = activeSystem.id === sys.id;
            return (
              <button
                key={sys.id}
                onClick={() => setActiveSystem(sys)}
                className={`text-left p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between min-h-[220px] ${
                  isSelected
                    ? "bg-[#161a26] border-[#cda265] shadow-xl shadow-[#cda265]/10 scale-[1.02]"
                    : "bg-[#0d0f15]/80 border-[#efeade]/10 hover:border-[#efeade]/20 hover:bg-[#12151e]"
                }`}
              >
                <div className="space-y-2">
                  <span
                    className={`font-mono text-[11px] font-bold tracking-wider ${
                      isSelected ? "text-[#cda265]" : "text-[#a6a39b]"
                    }`}
                  >
                    {sys.tag}
                  </span>
                  <h3 className="text-base font-bold text-[#efeade] leading-snug">{sys.title}</h3>
                </div>

                <div className="pt-4 flex flex-wrap gap-1.5">
                  {sys.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#07090d] border border-[#efeade]/10 text-[#a6a39b]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Inspection Console */}
        <div className="bg-[#0d0f15] border border-[#efeade]/15 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#efeade]/10 pb-4">
            <div className="flex items-center gap-3">
              <Workflow className="w-5 h-5 text-[#cda265]" />
              <span className="font-mono text-sm uppercase tracking-wider text-[#efeade] font-bold">
                ARCHITECTURE FOCUS // {activeSystem.title}
              </span>
            </div>
            <span className="font-mono text-xs text-[#a6a39b]">
              ORCHESTRATION ENGINE: VERIDIAN DISTRIBUTED WORKFLOW
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base text-[#efeade]/90 leading-relaxed font-sans">
                {activeSystem.summary}
              </p>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#131722] border border-[#efeade]/10 flex items-center justify-between">
                  <span className="text-[#a6a39b]">Orchestration Paradigm</span>
                  <span className="text-emerald-400 font-semibold">Cyclic Graph with State Checkpoints</span>
                </div>
                <div className="p-3 rounded-xl bg-[#131722] border border-[#efeade]/10 flex items-center justify-between">
                  <span className="text-[#a6a39b]">Vector Knowledge Retrieval</span>
                  <span className="text-emerald-400 font-semibold">pgvector + Hybrid Full-Text Rank</span>
                </div>
                <div className="p-3 rounded-xl bg-[#131722] border border-[#efeade]/10 flex items-center justify-between">
                  <span className="text-[#a6a39b]">Event Delivery Guarantee</span>
                  <span className="text-emerald-400 font-semibold">At-least-once with DB Idempotency</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-[#07090d] border border-[#efeade]/10 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#a6a39b] block">
                Full Technical Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js (App Router)",
                  "Flask Backend",
                  "LangGraph State Engine",
                  "WhisperX Multilingual",
                  "Gemini API",
                  "Supabase",
                  "PostgreSQL",
                  "pgvector",
                  "GCP Cloud Run",
                  "Server-Sent Events (SSE)",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-3 py-1 rounded bg-[#131722] border border-[#efeade]/10 text-[#efeade]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-[#efeade]/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#a6a39b]">Enterprise Ready</span>
                <span className="text-xs font-mono text-[#cda265] flex items-center gap-1 font-bold">
                  <CheckCircle className="w-3.5 h-3.5" /> High-Throughput
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

