const fs = require('fs');
const path = require('path');

// 1. Read binary assets for borders
const downloadB64 = fs.readFileSync('public/img/download.png').toString('base64');
const eleB64 = fs.readFileSync('public/img/ele.png').toString('base64');
const boatB64 = fs.readFileSync('public/img/boat.png').toString('base64');
const snakeB64 = fs.readFileSync('public/img/snake.png').toString('base64');

// Ensure avatar-halftone.png exists
if (fs.existsSync('public/full.png') && !fs.existsSync('public/avatar-halftone.png')) {
  fs.copyFileSync('public/full.png', 'public/avatar-halftone.png');
}

// 2. Build CSS
const css = `@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&display=swap');

/* ==================== JARNKET INSPIRED STYLING V6 (60 FPS LAG-FREE) ==================== */
.hac-experience-wrap {
  background: #091533;
  background-image: radial-gradient(circle at 50% 15%, #15295c 0%, #0a1637 55%, #060e24 100%);
  color: #e5eaf2;
  font-family: var(--font-jetbrains-mono), monospace, sans-serif;
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* Headings in Chakra Petch font matching reference */
.hac-headline,
.hac-headline-large,
.hac-section-header h2,
#experience-heading,
.hac-toolkit-title,
.hac-recognition-title,
.hac-contact-title,
.hac-tab-btn,
.hac-company-name,
.hac-col-title,
.hac-table-header,
.hac-honor-title,
.hac-discipline-label {
  font-family: 'Chakra Petch', sans-serif !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em;
  text-transform: uppercase;
}

/* Textile Diamond Marquee Bands */
.hac-textile-banner {
  width: 100%;
  background: #070e1d;
  border-top: 1px solid rgba(80, 130, 255, 0.25);
  border-bottom: 1px solid rgba(80, 130, 255, 0.25);
  position: relative;
  padding: 0;
  overflow: hidden;
}

.hac-bar-download {
  width: 100%;
  height: 38px;
  background-image: url("data:image/png;base64,${downloadB64}");
  background-repeat: repeat-x;
  background-size: auto 38px;
  background-position: 0 center;
  animation: hac-scroll-left 25s linear infinite;
  display: block;
}

.hac-bar-ele {
  width: 100%;
  height: 48px;
  background-image: url("data:image/png;base64,${eleB64}");
  background-repeat: repeat-x;
  background-size: auto 48px;
  background-position: 0 center;
  animation: hac-scroll-left 28s linear infinite;
  display: block;
}

.hac-bar-boat {
  width: 100%;
  height: 44px;
  background-image: url("data:image/png;base64,${boatB64}");
  background-repeat: repeat-x;
  background-size: auto 44px;
  background-position: 0 center;
  animation: hac-scroll-right 30s linear infinite;
  display: block;
}

.hac-bar-snake {
  width: 100%;
  height: 44px;
  background-image: url("data:image/png;base64,${snakeB64}");
  background-repeat: repeat-x;
  background-size: auto 44px;
  background-position: 0 center;
  animation: hac-scroll-left 26s linear infinite;
  display: block;
}

@keyframes hac-scroll-left {
  0% { background-position-x: 0; }
  100% { background-position-x: -1200px; }
}

@keyframes hac-scroll-right {
  0% { background-position-x: -1200px; }
  100% { background-position-x: 0; }
}

.hac-textile-caption {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 2rem;
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #7ba3df;
  border-top: 1px solid rgba(80, 130, 255, 0.15);
  background: rgba(7, 14, 29, 0.95);
}

.hac-back-journey-pill {
  display: inline-flex;
  align-items: center;
  background: rgba(30, 64, 135, 0.4);
  border: 1px solid rgba(147, 197, 253, 0.45);
  color: #e0e7ff;
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.hac-back-journey-pill:hover {
  background: rgba(59, 130, 246, 0.75);
  color: #ffffff;
  border-color: #ffffff;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  transform: translateY(-1px);
}

/* ==================== 60 FPS ZERO-LAG HERO PORTRAIT (EXACT FRAMING) ==================== */
.hac-portrait-stage {
  width: 100%;
  position: relative;
  background: #040810;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem 3.5rem;
  box-sizing: border-box;
  perspective: 1000px;
}

/* Architectural Grid Backdrop */
.hac-portrait-stage::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to right, rgba(27, 61, 117, 0.15) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(27, 61, 117, 0.15) 1px, transparent 1px);
  background-size: 36px 36px;
  pointer-events: none;
}

.hac-portrait-container {
  width: 100%;
  max-width: 410px;
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  perspective: 1000px;
  z-index: 10;
}

.hac-portrait-card {
  position: relative;
  width: 100%;
  background: #070e1c;
  border: 2px solid #1c3e74;
  box-shadow: 0 0 60px rgba(27, 61, 117, 0.35);
  border-radius: 4px;
  overflow: hidden;
  cursor: crosshair;
  transform-style: preserve-3d;
  will-change: transform;
  display: flex;
  flex-direction: column;
}

/* Top Diamond Band */
.hac-top-diamond-band {
  width: 100%;
  height: 28px;
  background: #070e1c;
  border-bottom: 1px solid #1b3d75;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  user-select: none;
}

.hac-diamond-runner {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #3d7edb;
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  opacity: 0.9;
  white-space: nowrap;
}

/* Halftone Portrait Viewport */
.hac-portrait-img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  background: #03060c;
  overflow: hidden;
}

.hac-portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: filter 0.3s ease;
  filter: contrast(105%) brightness(95%);
}

.hac-portrait-card:hover .hac-portrait-img {
  filter: contrast(115%) brightness(105%);
}

/* Retro Corner HUD Brackets */
.hac-portrait-corner {
  position: absolute;
  color: rgba(74, 144, 226, 0.85);
  font-family: monospace;
  font-size: 12px;
  font-weight: 700;
  z-index: 30;
  user-select: none;
  pointer-events: none;
  line-height: 1;
}

/* Top Diagnostic Badges */
.hac-portrait-hud-left {
  position: absolute;
  top: 10px;
  left: 14px;
  z-index: 20;
  font-family: monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #3d7edb;
  background: rgba(7, 15, 30, 0.85);
  border: 1px solid rgba(27, 61, 115, 0.6);
  padding: 2px 7px;
  border-radius: 2px;
  backdrop-filter: blur(4px);
  pointer-events: none;
}

.hac-portrait-hud-right {
  position: absolute;
  top: 10px;
  right: 14px;
  z-index: 20;
  font-family: monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #93bbf8;
  background: rgba(7, 15, 30, 0.85);
  border: 1px solid rgba(27, 61, 115, 0.6);
  padding: 2px 7px;
  border-radius: 2px;
  backdrop-filter: blur(4px);
  pointer-events: none;
}

/* CRT Horizontal Scanlines Overlay */
.hac-portrait-scanlines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.35;
  mix-blend-mode: overlay;
  background-image: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6) 0px,
    rgba(0, 0, 0, 0.6) 1px,
    transparent 1px,
    transparent 3px
  );
  z-index: 10;
}

/* Luminous Aura / Ambient Glow */
.hac-portrait-ambient-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 35%, rgba(58, 117, 213, 0.22), transparent 70%);
  pointer-events: none;
  z-index: 12;
}

/* Laser Scanning Line on Hover */
.hac-portrait-laser {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: #4a90e2;
  box-shadow: 0 0 14px #4a90e2;
  pointer-events: none;
  z-index: 20;
  opacity: 0;
  top: 0;
  transition: opacity 0.3s ease;
}

.hac-portrait-card:hover .hac-portrait-laser {
  opacity: 0.95;
  animation: hac-laser-sweep 2.4s linear infinite;
}

@keyframes hac-laser-sweep {
  0% { top: 0%; }
  50% { top: 100%; }
  100% { top: 0%; }
}

/* Audio Waveform / Barcode Dissolve Strip */
.hac-audio-waveform-strip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(to top, #070e1c 0%, rgba(11, 23, 42, 0.8) 50%, transparent 100%);
  pointer-events: none;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 6px;
  overflow: hidden;
  z-index: 15;
}

.hac-wave-bar {
  width: 2px;
  background: #3d7edb;
  opacity: 0.75;
  display: inline-block;
  transition: height 0.3s ease, opacity 0.3s ease;
}

.hac-portrait-card:hover .hac-wave-bar {
  opacity: 0.95;
}

/* Bottom Chevron Band */
.hac-bottom-chevron-band {
  width: 100%;
  height: 28px;
  background: #070e1c;
  border-top: 1px solid #1b3d75;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  user-select: none;
}

.hac-chevron-runner {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #3d7edb;
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  opacity: 0.9;
  white-space: nowrap;
}

/* Interactive SCROLL Trigger Pill */
.hac-hero-scroll-btn {
  width: 100%;
  padding: 10px 0;
  background: #091324;
  border: none;
  border-top: 1px solid rgba(27, 61, 117, 0.7);
  text-align: center;
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: #7ba2dd;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: background 0.2s, color 0.2s;
  outline: none;
}

.hac-hero-scroll-btn:hover {
  background: #122340;
  color: #e2ecff;
}

.hac-scroll-arrow {
  font-size: 12px;
  animation: hac-bounce-arrow 1.4s ease-in-out infinite;
}

@keyframes hac-bounce-arrow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
}

.hac-portrait-footer {
  margin-top: 1.25rem;
  font-family: monospace;
  font-size: 10px;
  letter-spacing: 0.15em;
  color: #4a90e2;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.85;
}

.hac-portrait-pulse-dot {
  width: 6px;
  height: 6px;
  background: #3b82f6;
  border-radius: 50%;
  box-shadow: 0 0 8px #3b82f6;
  animation: hac-pulse-glow 1.8s infinite;
}

@keyframes hac-pulse-glow {
  0%, 100% { opacity: 0.4; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* ==================== HEADER MAILBOX BEFORE CONTACT ME ==================== */
.hac-header-mailbox-anchor {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  perspective: 800px;
  margin-right: 12px;
  vertical-align: middle;
  z-index: 50;
  text-decoration: none;
}

.hac-header-mailbox-card {
  width: 38px;
  height: 28px;
  background: #c92a2a;
  border-radius: 6px;
  position: relative;
  box-shadow: 0 6px 14px rgba(201, 42, 42, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform-style: preserve-3d;
  will-change: transform;
  transition: box-shadow 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.hac-header-mailbox-card:hover {
  box-shadow: 0 8px 20px rgba(201, 42, 42, 0.7);
}

.hac-header-envelope-fold {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 19px solid transparent;
  border-right: 19px solid transparent;
  border-top: 13px solid #e03131;
}

.hac-header-heart-seal {
  width: 14px;
  height: 14px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.35);
  font-size: 8px;
  color: #c92a2a;
}

/* ==================== EXPERIENCE SECTION ==================== */
.hac-section {
  padding: 4.5rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
}

.hac-section-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid rgba(80, 130, 255, 0.35);
  padding-bottom: 1.25rem;
  margin-bottom: 2.5rem;
}

.hac-section-header h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #f0f4fc;
  margin: 0;
  text-shadow: 0 0 25px rgba(80, 130, 255, 0.3);
}

.hac-entry-count {
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.85rem;
  color: #60a5fa;
  letter-spacing: 0.2em;
}

.hac-experience-table-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hac-table-header {
  display: grid;
  grid-template-columns: 60px 2.2fr 2fr 1.6fr 1.4fr 80px;
  padding: 0 1.5rem 0.75rem;
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: #7ba3df;
  border-bottom: 1px solid rgba(80, 130, 255, 0.2);
}

.hac-exp-item {
  border: 1px solid rgba(80, 130, 255, 0.25);
  background: rgba(10, 22, 53, 0.6);
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.25s ease;
}

.hac-exp-item:hover {
  border-color: rgba(96, 165, 250, 0.6);
  background: rgba(14, 30, 74, 0.75);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.hac-exp-summary {
  display: grid;
  grid-template-columns: 60px 2.2fr 2fr 1.6fr 1.4fr 80px;
  padding: 1.4rem 1.5rem;
  cursor: pointer;
  align-items: center;
  user-select: none;
  font-size: 0.9rem;
  list-style: none;
}
.hac-exp-summary::-webkit-details-marker {
  display: none;
}

.hac-col-num {
  font-family: var(--font-jetbrains-mono), monospace;
  color: #60a5fa;
  font-size: 0.95rem;
  font-weight: 700;
}

.hac-col-title {
  font-weight: 700;
  color: #f8fafc;
  font-size: 1.05rem;
  letter-spacing: 0.02em;
}

.hac-col-role {
  color: #cbd5e1;
  font-size: 0.85rem;
}

.hac-col-period {
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.8rem;
  color: #94a3b8;
}

.hac-col-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.75rem;
  color: #cbd5e1;
}

.hac-col-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.hac-col-toggle {
  text-align: center;
  color: #60a5fa;
  font-size: 1.25rem;
  font-weight: bold;
}

.hac-exp-detail {
  padding: 1.25rem 1.5rem 1.75rem 5rem;
  border-top: 1px solid rgba(80, 130, 255, 0.15);
  background: rgba(5, 12, 32, 0.65);
  font-size: 0.88rem;
  line-height: 1.7;
  color: #cbd5e1;
}

.hac-exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1rem;
}

.hac-exp-tag {
  background: rgba(30, 58, 138, 0.45);
  border: 1px solid rgba(96, 165, 250, 0.35);
  color: #bfdbfe;
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.72rem;
  padding: 3px 9px;
  border-radius: 4px;
}

/* ==================== TOOLKIT SECTION ==================== */
.hac-toolkit-disciplines {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hac-discipline-row {
  display: grid;
  grid-template-columns: 180px 1fr;
  align-items: center;
  background: rgba(10, 22, 53, 0.45);
  border: 1px solid rgba(80, 130, 255, 0.2);
  border-radius: 6px;
  padding: 1.25rem 1.5rem;
  transition: all 0.2s ease;
}

.hac-discipline-row:hover {
  background: rgba(14, 30, 74, 0.6);
  border-color: rgba(96, 165, 250, 0.45);
}

.hac-discipline-label {
  color: #60a5fa;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
}

.hac-pills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hac-tool-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(18, 38, 86, 0.8);
  border: 1px solid rgba(96, 165, 250, 0.25);
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #e2e8f0;
  transition: all 0.2s ease;
}

.hac-tool-pill:hover {
  background: rgba(37, 99, 235, 0.35);
  border-color: #60a5fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.hac-tool-badge {
  font-family: monospace;
  font-size: 0.65rem;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 3px;
  color: #ffffff;
}

/* ==================== RECOGNITION SECTION ==================== */
.hac-recognition-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(80, 130, 255, 0.25);
  padding-bottom: 0.75rem;
}

.hac-tab-btn {
  background: transparent;
  border: 1px solid rgba(80, 130, 255, 0.3);
  color: #94a3b8;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  transition: all 0.2s;
}

.hac-tab-btn.active, .hac-tab-btn:hover {
  background: rgba(37, 99, 235, 0.4);
  border-color: #60a5fa;
  color: #ffffff;
}

.hac-honors-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hac-honor-card {
  display: grid;
  grid-template-columns: 80px 1.5fr 1fr 100px;
  align-items: center;
  background: rgba(10, 22, 53, 0.45);
  border: 1px solid rgba(80, 130, 255, 0.2);
  padding: 1.25rem 1.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.hac-honor-card:hover {
  border-color: #60a5fa;
  background: rgba(14, 30, 74, 0.65);
}

.hac-honor-year {
  font-family: var(--font-jetbrains-mono), monospace;
  color: #60a5fa;
  font-size: 0.85rem;
}

.hac-honor-title {
  color: #f1f5f9;
  font-size: 1rem;
  margin: 0 0 4px 0;
}

.hac-honor-desc {
  color: #94a3b8;
  font-size: 0.8rem;
  margin: 0;
}

.hac-honor-issuer {
  color: #cbd5e1;
  font-size: 0.8rem;
  font-family: var(--font-jetbrains-mono), monospace;
}

.hac-honor-badge {
  text-align: right;
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.72rem;
  color: #38bdf8;
  letter-spacing: 0.1em;
}

/* ==================== CONTACT & BLENDED WOVEN CANVAS ==================== */
.hac-contact-wrap {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  margin-bottom: 3.5rem;
}

.hac-contact-cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #2563eb;
  color: #ffffff;
  padding: 12px 28px;
  border-radius: 6px;
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.2s ease;
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
}

.hac-contact-cta:hover {
  background: #3b82f6;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6);
  transform: translateY(-2px);
}

.hac-contact-info-block {
  margin-bottom: 1.5rem;
}

.hac-contact-label {
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  color: #60a5fa;
  margin-bottom: 6px;
}

.hac-contact-val {
  color: #e2e8f0;
  font-size: 0.95rem;
  text-decoration: none;
}

/* Woven loom canvas seamlessly blends with page background */
.hac-woven-loom-wrap {
  width: 100%;
  padding: 2rem 0;
  background: transparent !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hac-woven-canvas {
  width: 100%;
  max-width: 1200px;
  height: auto;
  aspect-ratio: 1200 / 260;
  background: transparent !important;
  cursor: crosshair;
}

.hac-footer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(80, 130, 255, 0.2);
  padding: 2rem 0 1rem;
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.75rem;
  color: #7ba3df;
}

.hac-back-top {
  color: #60a5fa;
  text-decoration: none;
  letter-spacing: 0.1em;
}
.hac-back-top:hover {
  color: #ffffff;
}

/* Permanent block on old brown temple credits section */
[data-closing-credits],
.-_ZYGG_card,
.-_ZYGG_picture,
.-_ZYGG_composition,
.-_ZYGG_backdrop,
.Rk2J4a_creditsAperture {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
  height: 0 !important;
  width: 0 !important;
  max-height: 0 !important;
  overflow: hidden !important;
  position: absolute !important;
  top: -9999px !important;
}

@media (max-width: 900px) {
  .hac-table-header { display: none; }
  .hac-exp-summary {
    grid-template-columns: 40px 1fr 30px;
    gap: 8px;
  }
  .hac-col-role, .hac-col-period, .hac-col-status {
    grid-column: 2;
    font-size: 0.75rem;
  }
  .hac-discipline-row {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  .hac-contact-wrap {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .hac-honor-card {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  .hac-portrait-container {
    max-width: 340px;
  }
}
`;

fs.writeFileSync('public/jarnket_styles.css', css, 'utf8');
console.log('1. Generated public/jarnket_styles.css');

// 3. Build Sections HTML
const sectionsHtml = `
<!-- JARNKET INSPIRED SECTIONS (60 FPS HERO PORTRAIT, EXPERIENCE, ELEPHANT, TOOLKIT, RECOGNITION, CONTACT) -->
<div id="hac-jarnket-experience" class="hac-experience-wrap">

  <!-- TOP BANNER WITH DIAMOND WEAVE (DOWNLOAD.PNG) -->
  <div class="hac-textile-banner">
    <div class="hac-bar-download" aria-hidden="true"></div>
    <div class="hac-textile-caption">
      <span>WOVEN FROM "EXPERIENCE" · THE ARCHITECTURE &amp; CODE JOURNEY</span>
      <div style="display:flex;align-items:center;gap:16px;">
        <button type="button" class="hac-back-journey-pill" onclick="window.hacBackToJourney()" aria-label="Return to top of journey">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;display:inline-block;vertical-align:middle;"><path d="m18 15-6-6-6 6"/></svg>
          <span>RETURN TO JOURNEY</span>
        </button>
        <span>BENGALURU · SILICON VALLEY OF INDIA</span>
      </div>
    </div>
  </div>

  <!-- ==================== 00 // 60 FPS HERO PORTRAIT (EXACT FRAMING FROM VIDEO_1.MP4) ==================== -->
  <div class="hac-portrait-stage">
    <div class="hac-portrait-container">
      <div id="hac-portrait-tilt-card" class="hac-portrait-card">
        <!-- Top Diamond Band -->
        <div class="hac-top-diamond-band">
          <div class="hac-diamond-runner">
            <span>◈ ❖ ◈</span><span>◈ ❖ ◈</span><span>◈ ❖ ◈</span><span>◈ ❖ ◈</span><span>◈ ❖ ◈</span><span>◈ ❖ ◈</span><span>◈ ❖ ◈</span><span>◈ ❖ ◈</span><span>◈ ❖ ◈</span><span>◈ ❖ ◈</span><span>◈ ❖ ◈</span><span>◈ ❖ ◈</span>
          </div>
        </div>

        <!-- Halftone Portrait Viewport -->
        <div class="hac-portrait-img-wrap">
          <!-- Retro Corner HUD Brackets -->
          <div class="hac-portrait-corner" style="top:10px;left:10px;">┌</div>
          <div class="hac-portrait-corner" style="top:10px;right:10px;">┐</div>
          <div class="hac-portrait-corner" style="bottom:10px;left:10px;">└</div>
          <div class="hac-portrait-corner" style="bottom:10px;right:10px;">┘</div>

          <!-- Diagnostic Badges -->
          <div class="hac-portrait-hud-left">FACIAL SCAN // HN.04</div>
          <div class="hac-portrait-hud-right">HANUMA ADITYA C</div>

          <!-- Crisp Photographic Image -->
          <img src="/avatar-halftone.png" alt="Hanuma Aditya C Portrait" class="hac-portrait-img" />

          <!-- CRT Scanlines & Ambient Glow -->
          <div class="hac-portrait-scanlines"></div>
          <div class="hac-portrait-ambient-glow"></div>
          <div class="hac-portrait-laser"></div>

          <!-- Audio Frequency / Barcode Dissolve Strip -->
          <div class="hac-audio-waveform-strip">
            <span class="hac-wave-bar" style="height:6px;"></span><span class="hac-wave-bar" style="height:13px;"></span><span class="hac-wave-bar" style="height:20px;"></span><span class="hac-wave-bar" style="height:27px;"></span><span class="hac-wave-bar" style="height:10px;"></span><span class="hac-wave-bar" style="height:17px;"></span><span class="hac-wave-bar" style="height:24px;"></span><span class="hac-wave-bar" style="height:7px;"></span><span class="hac-wave-bar" style="height:14px;"></span><span class="hac-wave-bar" style="height:21px;"></span><span class="hac-wave-bar" style="height:28px;"></span><span class="hac-wave-bar" style="height:11px;"></span><span class="hac-wave-bar" style="height:18px;"></span><span class="hac-wave-bar" style="height:25px;"></span><span class="hac-wave-bar" style="height:8px;"></span><span class="hac-wave-bar" style="height:15px;"></span><span class="hac-wave-bar" style="height:22px;"></span><span class="hac-wave-bar" style="height:29px;"></span><span class="hac-wave-bar" style="height:12px;"></span><span class="hac-wave-bar" style="height:19px;"></span><span class="hac-wave-bar" style="height:26px;"></span><span class="hac-wave-bar" style="height:9px;"></span><span class="hac-wave-bar" style="height:16px;"></span><span class="hac-wave-bar" style="height:23px;"></span><span class="hac-wave-bar" style="height:6px;"></span><span class="hac-wave-bar" style="height:13px;"></span><span class="hac-wave-bar" style="height:20px;"></span><span class="hac-wave-bar" style="height:27px;"></span><span class="hac-wave-bar" style="height:10px;"></span><span class="hac-wave-bar" style="height:17px;"></span><span class="hac-wave-bar" style="height:24px;"></span><span class="hac-wave-bar" style="height:7px;"></span><span class="hac-wave-bar" style="height:14px;"></span><span class="hac-wave-bar" style="height:21px;"></span><span class="hac-wave-bar" style="height:28px;"></span><span class="hac-wave-bar" style="height:11px;"></span><span class="hac-wave-bar" style="height:18px;"></span><span class="hac-wave-bar" style="height:25px;"></span><span class="hac-wave-bar" style="height:8px;"></span><span class="hac-wave-bar" style="height:15px;"></span><span class="hac-wave-bar" style="height:22px;"></span><span class="hac-wave-bar" style="height:29px;"></span><span class="hac-wave-bar" style="height:12px;"></span><span class="hac-wave-bar" style="height:19px;"></span><span class="hac-wave-bar" style="height:26px;"></span><span class="hac-wave-bar" style="height:9px;"></span><span class="hac-wave-bar" style="height:16px;"></span><span class="hac-wave-bar" style="height:23px;"></span><span class="hac-wave-bar" style="height:6px;"></span><span class="hac-wave-bar" style="height:13px;"></span><span class="hac-wave-bar" style="height:20px;"></span><span class="hac-wave-bar" style="height:27px;"></span><span class="hac-wave-bar" style="height:10px;"></span><span class="hac-wave-bar" style="height:17px;"></span>
          </div>
        </div>

        <!-- Bottom Chevron Band -->
        <div class="hac-bottom-chevron-band">
          <div class="hac-chevron-runner">
            <span>▲▼▲ ❖</span><span>▲▼▲ ❖</span><span>▲▼▲ ❖</span><span>▲▼▲ ❖</span><span>▲▼▲ ❖</span><span>▲▼▲ ❖</span><span>▲▼▲ ❖</span><span>▲▼▲ ❖</span><span>▲▼▲ ❖</span><span>▲▼▲ ❖</span><span>▲▼▲ ❖</span><span>▲▼▲ ❖</span>
          </div>
        </div>

        <!-- Interactive SCROLL Trigger Pill -->
        <button type="button" class="hac-hero-scroll-btn" onclick="window.hacScrollToNext();" aria-label="Scroll to experience">
          <span>SCROLL</span>
          <span class="hac-scroll-arrow">↓</span>
        </button>
      </div>
    </div>
    <div class="hac-portrait-footer">
      <span class="hac-portrait-pulse-dot"></span>
      <span>INTERACTIVE STIPPLE MESH · MOVE CURSOR TO TILT</span>
    </div>
  </div>

  <!-- ==================== 01 // EXPERIENCE (FULL WIDTH, NO SECOND PHOTO) ==================== -->
  <section id="experience" class="hac-section" aria-labelledby="experience-heading">
    <div class="hac-section-header">
      <h2 id="experience-heading" class="hac-headline">EXPERIENCE</h2>
      <span class="hac-entry-count">02 ENTRIES</span>
    </div>

    <!-- Experience Content Table with Generous Spacing -->
    <div class="hac-experience-table-wrap">
      <div class="hac-table-header" aria-hidden="true">
        <span>NO.</span>
        <span>COMPANY / INSTITUTION</span>
        <span>ROLE</span>
        <span>PERIOD</span>
        <span>STATUS</span>
        <span style="text-align:center;">DETAILS</span>
      </div>

      <!-- ROW 01: INNOMATICS -->
      <details class="hac-exp-item" open>
        <summary class="hac-exp-summary">
          <span class="hac-col-num">01</span>
          <span class="hac-col-title">INNOMATICS RESEARCH LABS</span>
          <span class="hac-col-role">SOFTWARE ENGINEERING INTERN (DATA &amp; GENAI)</span>
          <span class="hac-col-period">NOV 2025 – MAR 2026</span>
          <span class="hac-col-status"><span class="hac-col-status-dot" style="background:#22c55e;box-shadow:0 0 8px #22c55e;"></span>COMPLETED</span>
          <span class="hac-col-toggle">+</span>
        </summary>
        <div class="hac-exp-detail">
          <p>Architected high-throughput retrieval pipelines and multi-agent systems using LangChain, FastAPI, and vectorized embeddings. Engineered production-grade RAG evaluation workflows, decreasing hallucinations by 38% and lowering average p95 query latency across enterprise data lakes.</p>
          <div class="hac-exp-tags">
            <span class="hac-exp-tag">Python</span>
            <span class="hac-exp-tag">LangChain</span>
            <span class="hac-exp-tag">FastAPI</span>
            <span class="hac-exp-tag">Vector DB</span>
            <span class="hac-exp-tag">Docker</span>
            <span class="hac-exp-tag">PostgreSQL</span>
          </div>
        </div>
      </details>

      <!-- ROW 02: SIR MVIT -->
      <details class="hac-exp-item">
        <summary class="hac-exp-summary">
          <span class="hac-col-num">02</span>
          <span class="hac-col-title">SIR M VISVESVARAYA INSTITUTE OF TECHNOLOGY</span>
          <span class="hac-col-role">B.E. IN COMPUTER SCIENCE &amp; ENGINEERING</span>
          <span class="hac-col-period">2023 – 2027</span>
          <span class="hac-col-status"><span class="hac-col-status-dot" style="background:#3b82f6;box-shadow:0 0 8px #3b82f6;"></span>ENROLLED</span>
          <span class="hac-col-toggle">+</span>
        </summary>
        <div class="hac-exp-detail">
          <p>Undergraduate program focused on Advanced Data Structures, Distributed Computing, Artificial Intelligence, and Modern Systems Engineering. Active contributor to collegiate technical symposiums, hackathons, and open-source infrastructure initiatives.</p>
          <div class="hac-exp-tags">
            <span class="hac-exp-tag">Data Structures</span>
            <span class="hac-exp-tag">Algorithms</span>
            <span class="hac-exp-tag">Distributed Systems</span>
            <span class="hac-exp-tag">Generative AI</span>
            <span class="hac-exp-tag">Next.js / TypeScript</span>
          </div>
        </div>
      </details>
    </div>
  </section>

  <!-- ==================== UNDER EXPERIENCE: ELEPHANT BORDER MARQUEE ==================== -->
  <div class="hac-textile-banner">
    <div class="hac-bar-ele" aria-hidden="true"></div>
    <div class="hac-textile-caption">
      <span>LAND OF A MILLION ELEPHANTS · SACRED LAO HERITAGE &amp; WEAVE</span>
      <span>HERITAGE PIXEL MARQUEE</span>
    </div>
  </div>

  <!-- ==================== 02 // TOOLKIT (MATCHING SCREENSHOT 2) ==================== -->
  <section id="toolkit" class="hac-section" aria-labelledby="toolkit-heading">
    <div class="hac-section-header">
      <h2 id="toolkit-heading" class="hac-headline">TOOLKIT</h2>
      <span class="hac-entry-count">40 TOOLS · 8 DISCIPLINES</span>
    </div>

    <div class="hac-toolkit-disciplines">
      <!-- LANGUAGES -->
      <div class="hac-discipline-row">
        <div class="hac-discipline-label">LANGUAGES</div>
        <div class="hac-pills-wrap">
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#3178c6;">TS</span> TypeScript</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#f7df1e;color:#000;">JS</span> JavaScript</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#e76f00;">☕</span> Java</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#00599c;">C++</span> C++</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#7f52ff;">K</span> Kotlin</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#3776ab;">🐍</span> Python</div>
        </div>
      </div>

      <!-- FRAMEWORKS -->
      <div class="hac-discipline-row">
        <div class="hac-discipline-label">FRAMEWORKS</div>
        <div class="hac-pills-wrap">
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#339933;">Node</span> Node.js</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#61dafb;color:#000;">⚛</span> React</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#000000;border:1px solid #444;">▲</span> Next.js</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#ff3e00;">S</span> Svelte</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#000020;">Expo</span> Expo</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#ea2845;">Nest</span> Nest.js</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#6db33f;">🍃</span> Spring Boot</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#009688;">⚡</span> FastAPI</div>
        </div>
      </div>

      <!-- UI & STYLING -->
      <div class="hac-discipline-row">
        <div class="hac-discipline-label">UI &amp; STYLING</div>
        <div class="hac-pills-wrap">
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#38bdf8;color:#000;">🌊</span> Tailwind CSS</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#000000;border:1px solid #555;">/</span> shadcn/ui</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#1ad1a5;color:#000;">🌼</span> Daisy UI</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#0072f5;">Hero</span> Hero UI</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#0055ff;">▲</span> Framer Motion</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#049ef4;">Three</span> Three.js / WebGL</div>
        </div>
      </div>

      <!-- DATABASES -->
      <div class="hac-discipline-row">
        <div class="hac-discipline-label">DATABASES</div>
        <div class="hac-pills-wrap">
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#336791;">PG</span> PostgreSQL</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#47a248;">🍃</span> MongoDB</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#00758f;">🐬</span> MySQL</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#dc382d;">🔴</span> Redis</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#16a34a;">Pine</span> Pinecone</div>
        </div>
      </div>

      <!-- TOOLS & INFRA -->
      <div class="hac-discipline-row">
        <div class="hac-discipline-label">TOOLS &amp; INFRA</div>
        <div class="hac-pills-wrap">
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#f05032;">Git</span> Git</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#181717;border:1px solid #444;">GH</span> GitHub</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#fc6d26;">GL</span> GitLab</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#2496ed;">🐳</span> Docker</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#f24e1e;">❖</span> Figma</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#119eff;">⚡</span> Vite</div>
          <div class="hac-tool-pill"><span class="hac-tool-badge" style="background:#ff9900;color:#000;">AWS</span> AWS</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MEKONG BOAT BORDER MARQUEE ==================== -->
  <div class="hac-textile-banner">
    <div class="hac-bar-boat" aria-hidden="true"></div>
    <div class="hac-textile-caption">
      <span>THE BOAT RACES ON THE MEKONG · KINETIC EMBEDDED ENGINEERING</span>
      <span>INFINITE SCROLLER</span>
    </div>
  </div>

  <!-- ==================== 03 // RECOGNITION ==================== -->
  <section id="recognition" class="hac-section" aria-labelledby="recognition-heading">
    <div class="hac-section-header">
      <h2 id="recognition-heading" class="hac-headline">RECOGNITION</h2>
      <span class="hac-entry-count">HONORS &amp; CERTIFICATIONS</span>
    </div>

    <div class="hac-recognition-tabs">
      <button type="button" class="hac-tab-btn active">ALL RECOGNITION</button>
      <button type="button" class="hac-tab-btn">AWARDS</button>
      <button type="button" class="hac-tab-btn">ACADEMICS</button>
      <button type="button" class="hac-tab-btn">CERTIFICATIONS</button>
    </div>

    <div class="hac-honors-list">
      <div class="hac-honor-card">
        <span class="hac-honor-year">2025</span>
        <div>
          <h3 class="hac-honor-title">NATIONAL AI HACKATHON FINALIST</h3>
          <p class="hac-honor-desc">Selected among top 1% from 1,200+ teams nationwide for building an autonomous enterprise audit graph system with LLM agents.</p>
        </div>
        <span class="hac-honor-issuer">MINISTRY OF ELECTRONICS &amp; IT</span>
        <span class="hac-honor-badge">FINALIST</span>
      </div>

      <div class="hac-honor-card">
        <span class="hac-honor-year">2024</span>
        <div>
          <h3 class="hac-honor-title">ACADEMIC EXCELLENCE &amp; MERIT SCHOLAR</h3>
          <p class="hac-honor-desc">Ranked top 5% across Department of Computer Science &amp; Engineering for outstanding performance in Data Structures and Systems Architecture.</p>
        </div>
        <span class="hac-honor-issuer">SIR MVIT BENGALURU</span>
        <span class="hac-honor-badge">TOP 5%</span>
      </div>

      <div class="hac-honor-card">
        <span class="hac-honor-year">2024</span>
        <div>
          <h3 class="hac-honor-title">DEEP LEARNING &amp; GENERATIVE AI SPECIALIZATION</h3>
          <p class="hac-honor-desc">Comprehensive certification covering transformers, diffusion models, vector databases, and production LLMOps architecture.</p>
        </div>
        <span class="hac-honor-issuer">DEEPLEARNING.AI / COURSERA</span>
        <span class="hac-honor-badge">CERTIFIED</span>
      </div>
    </div>
  </section>

  <!-- ==================== SNAKE / NAGA BORDER MARQUEE ==================== -->
  <div class="hac-textile-banner">
    <div class="hac-bar-snake" aria-hidden="true"></div>
  </div>

  <!-- ==================== 04 // CONTACT & BLENDED WOVEN CANVAS ==================== -->
  <section id="contact" class="hac-section" aria-labelledby="contact-heading">
    <div class="hac-section-header">
      <h2 id="contact-heading" class="hac-headline">HAVE SOMETHING TO BUILD?</h2>
      <span class="hac-entry-count">GET IN TOUCH</span>
    </div>

    <div class="hac-contact-wrap">
      <div>
        <p style="font-size:1.15rem;line-height:1.7;color:#e5eaf2;margin:0 0 1.5rem 0;">I am actively open to engineering roles, high-impact consulting projects, and technical collaborations in Full-Stack Architecture, Distributed Systems, and Generative AI.</p>
        <p style="font-size:0.95rem;line-height:1.6;color:#94a3b8;">Whether you are designing a high-throughput backend, an interactive WebGL experience, or enterprise LLM workflows, let's create something extraordinary.</p>
        <a href="mailto:adityahanuma8@gmail.com" class="hac-contact-cta">
          <span>INITIATE DIRECT LINE</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
        </a>
      </div>

      <div>
        <div class="hac-contact-info-block">
          <div class="hac-contact-label">DIRECT EMAIL</div>
          <a href="mailto:adityahanuma8@gmail.com" class="hac-contact-val">adityahanuma8@gmail.com</a>
        </div>
        <div class="hac-contact-info-block">
          <div class="hac-contact-label">LOCATION &amp; TIMEZONE</div>
          <div class="hac-contact-val">Bengaluru, Karnataka, India (IST / UTC+5:30)</div>
        </div>
        <div class="hac-contact-info-block">
          <div class="hac-contact-label">NETWORKS &amp; PROFILES</div>
          <div style="display:flex;gap:18px;margin-top:6px;">
            <a href="https://github.com/Hanuaditya" target="_blank" rel="noopener noreferrer" class="hac-contact-val" style="color:#60a5fa;">GitHub ↗</a>
            <a href="https://linkedin.com/in/hanuma-aditya" target="_blank" rel="noopener noreferrer" class="hac-contact-val" style="color:#60a5fa;">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </div>

    <!-- BLENDED WOVEN CANVAS: HANUMA ADITYA (TRANSPARENT BACKGROUND BLENDING WITH SITE) -->
    <div class="hac-woven-loom-wrap">
      <canvas id="hac-woven-loom-canvas" class="hac-woven-canvas" width="1200" height="260"></canvas>
    </div>

    <!-- FOOTER BAR -->
    <div class="hac-footer-bar">
      <span>© 2026 HANUMA ADITYA C · CRAFTED WITH DISTINCTION</span>
      <a href="#Hero" class="hac-back-top" onclick="window.hacBackToJourney(); return false;">RETURN TO TOP ↑</a>
    </div>
  </section>

</div>
`;

fs.writeFileSync('public/jarnket_sections.html', sectionsHtml, 'utf8');
console.log('2. Generated public/jarnket_sections.html');

// 4. Update public/index.html cleanly
let indexHtml = fs.readFileSync('public/index.html', 'utf8');

// Ensure correct head starting
const headMatch = indexHtml.match(/<head[\s\S]*?>/i);
if (headMatch) {
  const headOpenIdx = indexHtml.indexOf(headMatch[0]) + headMatch[0].length;
  const correctMetaAndTitle = `
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Hanuma Aditya — Creative Product Engineer</title>
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/favicon.svg" />
<script id="hac-title-lock">
document.title = "Hanuma Aditya — Creative Product Engineer";
try {
  const p = Object.getOwnPropertyDescriptor(Document.prototype, 'title');
  if (p && p.set) {
    Object.defineProperty(document, 'title', {
      get() { return 'Hanuma Aditya — Creative Product Engineer'; },
      set(v) {
        let clean = String(v).replace(/Abhay\\s+Rohit/gi, 'Hanuma Aditya').replace(/Abhay/gi, 'Hanuma').replace(/Rohit/gi, 'Aditya');
        if (!clean || clean.trim() === '') clean = 'Hanuma Aditya — Creative Product Engineer';
        p.set.call(document, clean);
      }
    });
  }
} catch(e) {}
window.hacBackToJourney = function() {
  const mount = document.getElementById("hac-jarnket-mount");
  if (mount) mount.scrollTo({ top: 0, behavior: "smooth" });
  window.scrollTo({ top: 38500, behavior: "smooth" });
};
</script>
`;

  // Remove old lock script if present
  const lockStart = indexHtml.indexOf('<script id="hac-title-lock">');
  if (lockStart !== -1) {
    const lockEnd = indexHtml.indexOf('</script>', lockStart) + 9;
    indexHtml = indexHtml.slice(0, lockStart) + indexHtml.slice(lockEnd);
  }

  // Remove old titles or links from head
  indexHtml = indexHtml.replace(/<title>[\s\S]*?<\/title>/gi, '');
  indexHtml = indexHtml.replace(/<link[^>]*rel=["'](?:icon|shortcut icon|apple-touch-icon)["'][^>]*>/gi, '');

  const newHeadOpenIdx = indexHtml.indexOf(headMatch[0]) + headMatch[0].length;
  indexHtml = indexHtml.slice(0, newHeadOpenIdx) + correctMetaAndTitle + indexHtml.slice(newHeadOpenIdx);
}

// Ensure <style id="hac-jarnket-styles"> is cleanly updated
const styleTagStart = indexHtml.indexOf('<style id="hac-jarnket-styles">');
if (styleTagStart !== -1) {
  const styleTagEnd = indexHtml.indexOf('</style>', styleTagStart) + 8;
  indexHtml = indexHtml.slice(0, styleTagStart) + '<style id="hac-jarnket-styles">\n' + css + '\n</style>' + indexHtml.slice(styleTagEnd);
} else {
  const headEnd = indexHtml.indexOf('</head>');
  indexHtml = indexHtml.slice(0, headEnd) + '<style id="hac-jarnket-styles">\n' + css + '\n</style>\n' + indexHtml.slice(headEnd);
}

// Ensure <style id="hac-hide-credits"> is in head
if (!indexHtml.includes('id="hac-hide-credits"')) {
  const hideCreditsStyle = `
<style id="hac-hide-credits">
[data-closing-credits],
.-_ZYGG_card,
.-_ZYGG_picture,
.-_ZYGG_composition,
.-_ZYGG_backdrop,
.Rk2J4a_creditsAperture {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
  height: 0 !important;
  width: 0 !important;
  max-height: 0 !important;
  overflow: hidden !important;
  position: absolute !important;
  top: -9999px !important;
}
</style>
`;
  const headEnd = indexHtml.indexOf('</head>');
  indexHtml = indexHtml.slice(0, headEnd) + hideCreditsStyle + indexHtml.slice(headEnd);
}

// 5. Zero-Lag 60 FPS Runtime Bundle Script
const encodedSections = encodeURIComponent(sectionsHtml);

const runtimeScript = `
<script id="hac-runtime-bundle">
(function() {
  const sectionsContent = decodeURIComponent("${encodedSections}");

  // Scroll to next section handler
  window.hacScrollToNext = function() {
    const next = document.getElementById('experience') || document.getElementById('after-hours');
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    } else {
      const mount = document.getElementById('hac-jarnket-mount');
      if (mount) mount.scrollBy({ top: 600, behavior: 'smooth' });
    }
  };

  // ==================== 1. HEADER MAILBOX BEFORE CONTACT ME ====================
  let mailboxMounted = false;
  function ensureHeaderMailbox() {
    if (mailboxMounted && document.getElementById('hac-header-mailbox-anchor')) return;
    const chrome = document.querySelector('.y1Y7iW_chrome') || document.querySelector('header');
    if (!chrome) return;

    let contactBtn = null;
    const buttons = chrome.querySelectorAll('button, a');
    for (let i = 0; i < buttons.length; i++) {
      const txt = (buttons[i].textContent || '').toLowerCase().trim();
      if (txt.includes('contact me') || txt.includes('contact')) {
        contactBtn = buttons[i];
        break;
      }
    }

    if (!contactBtn) {
      contactBtn = chrome.querySelector('.y1Y7iW_menu') || chrome.lastElementChild;
    }
    if (!contactBtn) return;

    let existing = document.getElementById('hac-header-mailbox-anchor');
    if (existing) existing.remove();

    const wrap = document.createElement('a');
    wrap.id = 'hac-header-mailbox-anchor';
    wrap.className = 'hac-header-mailbox-anchor';
    wrap.href = '#contact';
    wrap.setAttribute('aria-label', 'Jump to contact section');
    wrap.innerHTML = \`
      <div id="hac-header-mailbox-card" class="hac-header-mailbox-card">
        <div class="hac-header-envelope-fold"></div>
        <div class="hac-header-heart-seal">❤</div>
      </div>
    \`;

    wrap.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        const mount = document.getElementById('hac-jarnket-mount');
        if (mount) mount.scrollTo({ top: mount.scrollHeight, behavior: 'smooth' });
      }
    });

    chrome.insertBefore(wrap, contactBtn);
    mailboxMounted = true;
    initHeaderMailboxPhysics();
  }

  function initHeaderMailboxPhysics() {
    const card = document.getElementById('hac-header-mailbox-card');
    if (!card || card.__physicsInited) return;
    card.__physicsInited = true;

    let targetRotX = 0;
    let targetRotY = 0;
    let curRotX = 0;
    let curRotY = 0;
    let ticking = false;

    window.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      targetRotY = Math.max(-25, Math.min(25, (dx / window.innerWidth) * 45));
      targetRotX = Math.max(-25, Math.min(25, -(dy / window.innerHeight) * 45));

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTilt);
      }
    }, { passive: true });

    function updateTilt() {
      curRotX += (targetRotX - curRotX) * 0.15;
      curRotY += (targetRotY - curRotY) * 0.15;
      card.style.transform = 'perspective(400px) rotateX(' + curRotX.toFixed(2) + 'deg) rotateY(' + curRotY.toFixed(2) + 'deg)';
      if (Math.abs(targetRotX - curRotX) > 0.1 || Math.abs(targetRotY - curRotY) > 0.1) {
        requestAnimationFrame(updateTilt);
      } else {
        ticking = false;
      }
    }
  }

  function removeOldFloatingMailbox() {
    const oldMailbox = document.getElementById('floating-mailbox-anchor');
    if (oldMailbox) oldMailbox.remove();
  }

  // ==================== 2. 60 FPS ZERO-LAG HERO PORTRAIT 3D TILT ====================
  function initPortraitTiltCard() {
    const card = document.getElementById('hac-portrait-tilt-card');
    if (!card || card.__tiltInited) return;
    card.__tiltInited = true;

    let targetRotX = 0;
    let targetRotY = 0;
    let curRotX = 0;
    let curRotY = 0;

    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;

      targetRotY = normX * 16;
      targetRotX = -normY * 16;
    }, { passive: true });

    card.addEventListener('mouseleave', function() {
      targetRotX = 0;
      targetRotY = 0;
    });

    function tick() {
      curRotX += (targetRotX - curRotX) * 0.14;
      curRotY += (targetRotY - curRotY) * 0.14;
      card.style.transform = 'perspective(1000px) rotateX(' + curRotX.toFixed(2) + 'deg) rotateY(' + curRotY.toFixed(2) + 'deg)';
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ==================== 3. MOUNT JARNKET SECTIONS ====================
  let sectionsMounted = false;
  function mountJarnket() {
    if (sectionsMounted && document.getElementById('hac-jarnket-experience')) return;
    const tail = document.querySelector('.kOY8Ua_tail');
    if (!tail) return;

    // Purge old closing credits brown section completely
    const closingCredits = document.querySelectorAll('[data-closing-credits="true"]');
    closingCredits.forEach(el => el.remove());

    let mount = document.getElementById('hac-jarnket-mount');
    if (!mount) {
      mount = document.createElement('div');
      mount.id = 'hac-jarnket-mount';
      mount.style.cssText = 'position:relative;width:100%;z-index:40;background:#091533;overflow-y:auto;overflow-x:hidden;max-height:100vh;-webkit-overflow-scrolling:touch;';
      tail.parentNode.insertBefore(mount, tail.nextSibling);
    }

    if (!document.getElementById('hac-jarnket-experience')) {
      mount.innerHTML = sectionsContent;
      sectionsMounted = true;
      initPortraitTiltCard();
      initWovenCanvas();
    } else {
      initPortraitTiltCard();
    }
  }

  // ==================== 4. BLENDED WOVEN CANVAS ENGINE ====================
  function initWovenCanvas() {
    const canvas = document.getElementById('hac-woven-loom-canvas');
    if (!canvas || canvas.__inited) return;
    canvas.__inited = true;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = '/hanuma-aditya-loom.png';
    img.crossOrigin = 'anonymous';

    let particles = [];
    const mouse = { x: -1000, y: -1000, radius: 120 };

    img.onload = function() {
      initParticles();
      animate();
    };

    function initParticles() {
      const offCanvas = document.createElement('canvas');
      offCanvas.width = canvas.width;
      offCanvas.height = canvas.height;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      const scale = Math.min((canvas.width - 80) / img.naturalWidth, (canvas.height - 40) / img.naturalHeight);
      const drawW = img.naturalWidth * scale;
      const drawH = img.naturalHeight * scale;
      const offsetX = (canvas.width - drawW) / 2;
      const offsetY = (canvas.height - drawH) / 2;

      offCtx.clearRect(0, 0, canvas.width, canvas.height);
      offCtx.drawImage(img, offsetX, offsetY, drawW, drawH);

      const imgData = offCtx.getImageData(0, 0, canvas.width, canvas.height).data;
      particles = [];

      const step = 6;
      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const index = (y * canvas.width + x) * 4;
          const r = imgData[index];
          const g = imgData[index + 1];
          const b = imgData[index + 2];
          const a = imgData[index + 3];

          if (a > 60 && (r > 60 || g > 60 || b > 60)) {
            particles.push({
              baseX: x,
              baseY: y,
              x: x,
              y: y,
              vx: 0,
              vy: 0,
              size: 2.5,
              color: 'rgba(' + Math.min(255, r + 40) + ',' + Math.min(255, g + 40) + ',' + Math.min(255, b + 60) + ',' + (a / 255).toFixed(2) + ')'
            });
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 4.5;
          p.vy -= Math.sin(angle) * force * 4.5;
        }

        p.vx += (p.baseX - p.x) * 0.12;
        p.vy += (p.baseY - p.y) * 0.12;
        p.vx *= 0.78;
        p.vy *= 0.78;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      requestAnimationFrame(animate);
    }

    const handleMouseMove = function(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouse.x = (e.clientX - rect.left) * scaleX;
      mouse.y = (e.clientY - rect.top) * scaleY;
    };

    const handleMouseLeave = function() {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave);
  }

  // ==================== 5. SCROLL DELEGATION & SAFE INITIALIZATION ====================
  function setupMountScrollDelegation() {
    const mount = document.getElementById('hac-jarnket-mount');
    if (!mount || mount.__scrollDelegated) return;
    mount.__scrollDelegated = true;

    mount.addEventListener('wheel', function(e) {
      if (e.deltaY < 0 && mount.scrollTop <= 0) {
        e.preventDefault();
        window.scrollBy({ top: e.deltaY, behavior: 'auto' });
      }
    }, { passive: false });
  }

  function init() {
    ensureHeaderMailbox();
    removeOldFloatingMailbox();
    mountJarnket();
    setupMountScrollDelegation();

    // Safe, throttled check for 3 seconds then stop completely (NO continuous layout thrashing)
    let count = 0;
    const timer = setInterval(function() {
      count++;
      ensureHeaderMailbox();
      removeOldFloatingMailbox();
      mountJarnket();
      initPortraitTiltCard();
      setupMountScrollDelegation();
      if (count > 15 || (sectionsMounted && mailboxMounted)) {
        clearInterval(timer);
      }
    }, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>
`;

// Replace or inject script #hac-runtime-bundle
const bundleStart = indexHtml.indexOf('<script id="hac-runtime-bundle">');
if (bundleStart !== -1) {
  const bundleEnd = indexHtml.indexOf('</script>', bundleStart) + 9;
  indexHtml = indexHtml.slice(0, bundleStart) + runtimeScript.trim() + indexHtml.slice(bundleEnd);
} else {
  const bodyEnd = indexHtml.indexOf('</body>');
  indexHtml = indexHtml.slice(0, bodyEnd) + runtimeScript.trim() + '\n' + indexHtml.slice(bodyEnd);
}

// Remove any remaining stale scripts from HEAD
indexHtml = indexHtml.replace(/window\.__hacJarnketHTML\s*=\s*decodeURIComponent\([^;]*\);/g, '');

fs.writeFileSync('public/index.html', indexHtml, 'utf8');
console.log('3. Updated public/index.html safely and cleanly');
