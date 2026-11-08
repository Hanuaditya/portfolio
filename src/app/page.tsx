"use client";

import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import ChapterRail from "@/components/ChapterRail";
import Hero from "@/components/Hero";
import UnshellSection from "@/components/UnshellSection";
import HorizonMeetSection from "@/components/HorizonMeetSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import TechStackSection from "@/components/TechStackSection";
import AfterHoursSection from "@/components/AfterHoursSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      id="quiet-main"
      className="relative min-h-screen bg-[#07090d] text-[#efeade] selection:bg-[#efeade] selection:text-[#07090d]"
    >
      {/* Hardware-accelerated film noise grain overlay */}
      <div className="noise-overlay" />

      {/* Spring-damped magnetic cursor follower */}
      <Cursor />

      {/* Top Wordmark Navigation & Status Header */}
      <Header />

      {/* Chapter Navigator Rail (01—07) */}
      <ChapterRail />

      {/* CHAPTER 01 // Introduction & Kinetic Split-Type Hero */}
      <Hero />

      {/* CHAPTER 02 // Flagship 1: Unshell Autonomous AML & KYB Graph */}
      <UnshellSection />

      {/* CHAPTER 03 // System 02: Horizon Meet & Veridian WorkOS */}
      <HorizonMeetSection />

      {/* CHAPTER 04 // Systems Architecture & Engineering Philosophy */}
      <ArchitectureSection />

      {/* CHAPTER 05 // Technical Capabilities & Matrix */}
      <TechStackSection />

      {/* CHAPTER 06 // EvoCode Platform, Accreditations & Experience */}
      <AfterHoursSection />

      {/* CHAPTER 07 // Terminal Reachout & Direct Line */}
      <ContactSection />

      {/* Architectural Colophon & Footer */}
      <Footer />
    </main>
  );
}
