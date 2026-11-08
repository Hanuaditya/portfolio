const fs = require('fs');
const path = require('path');

// 1. Read binary assets for borders
const downloadB64 = fs.readFileSync('public/img/download.png').toString('base64');
const eleB64 = fs.readFileSync('public/img/ele.png').toString('base64');
const boatB64 = fs.readFileSync('public/img/boat.png').toString('base64');
const snakeB64 = fs.readFileSync('public/img/snake.png').toString('base64');

// 2. Build CSS
const css = `@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&display=swap');

/* ==================== JARNKET INSPIRED STYLING V3 ==================== */
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

/* ==================== INTERACTIVE PORTRAIT STAGE (FULL.PNG WOVEN WARP) ==================== */
.hac-portrait-stage {
  width: 100%;
  position: relative;
  background: #070e1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem 3rem;
  box-sizing: border-box;
}

.hac-portrait-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.hac-portrait-container {
  width: 100%;
  max-width: 480px;
  height: 640px;
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
}

.hac-portrait-card {
  position: relative;
  width: 100%;
  height: 100%;
  background: #060b17;
  border: 2px solid #2b5ba8;
  box-shadow: 0 0 40px rgba(43,91,168,0.45);
  border-radius: 4px;
  overflow: hidden;
}

.hac-portrait-corner {
  position: absolute;
  color: #60a5fa;
  font-size: 16px;
  font-weight: 700;
  z-index: 25;
  user-select: none;
  pointer-events: none;
  line-height: 1;
}

.hac-portrait-hud {
  position: absolute;
  top: 14px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 25;
  font-family: 'Chakra Petch', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: #93c5fd;
  pointer-events: none;
}

.hac-portrait-hud-badge {
  background: rgba(37, 99, 235, 0.35);
  border: 1px solid rgba(96, 165, 250, 0.5);
  padding: 3px 8px;
  border-radius: 3px;
  color: #ffffff;
}

.hac-portrait-scanlines {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 50%);
  background-size: 100% 3px;
  pointer-events: none;
  z-index: 15;
}

.hac-portrait-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  cursor: crosshair;
  z-index: 10;
}

.hac-portrait-footer {
  margin-top: 1.25rem;
  font-family: 'Chakra Petch', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  color: #93c5fd;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ==================== SECTIONS COMMON ==================== */
.hac-section {
  padding: 4.5rem 2rem 5.5rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
}

.hac-section-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid rgba(80, 130, 255, 0.2);
  padding-bottom: 1rem;
}

.hac-headline {
  font-size: clamp(2.4rem, 5.5vw, 4rem);
  line-height: 1;
  color: #ffffff;
  margin: 0;
}

.hac-entry-count {
  font-family: 'Chakra Petch', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  color: #93c5fd;
  text-transform: uppercase;
}

/* ==================== EXPERIENCE TABLE (FULL WIDTH, PROPER SPACING) ==================== */
.hac-experience-table-wrap {
  width: 100%;
  margin-top: 1rem;
  border: 1px solid rgba(80, 130, 255, 0.2);
  border-radius: 4px;
  background: rgba(10, 22, 48, 0.35);
  overflow: hidden;
}

.hac-table-header {
  display: grid;
  grid-template-columns: 70px 2.2fr 1.8fr 1.2fr 1.1fr 48px;
  gap: 1.5rem;
  padding: 1.1rem 1.5rem;
  background: rgba(14, 28, 60, 0.7);
  border-bottom: 1px solid rgba(80, 130, 255, 0.3);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  color: #93c5fd;
  text-transform: uppercase;
}

.hac-exp-item {
  border-bottom: 1px solid rgba(80, 130, 255, 0.15);
  transition: background 0.2s ease;
}
.hac-exp-item:last-child {
  border-bottom: none;
}

.hac-exp-summary {
  display: grid;
  grid-template-columns: 70px 2.2fr 1.8fr 1.2fr 1.1fr 48px;
  gap: 1.5rem;
  align-items: center;
  padding: 1.6rem 1.5rem;
  cursor: pointer;
  list-style: none;
  transition: background 0.2s ease;
}
.hac-exp-summary::-webkit-details-marker {
  display: none;
}
.hac-exp-summary:hover {
  background: rgba(80, 130, 255, 0.08);
}

.hac-col-num {
  font-family: 'Chakra Petch', monospace;
  font-size: 1.1rem;
  color: #7ba3df;
  font-weight: 700;
}

.hac-col-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
}

.hac-col-role {
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.85rem;
  color: #c7d2fe;
}

.hac-col-period {
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.82rem;
  color: #93c5fd;
}

.hac-col-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Chakra Petch', monospace;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: #e5eaf2;
}

.hac-col-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.hac-col-toggle {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(80, 130, 255, 0.35);
  border-radius: 4px;
  color: #93c5fd;
  font-size: 18px;
  font-family: monospace;
  transition: all 0.2s ease;
}
.hac-exp-item[open] .hac-col-toggle {
  transform: rotate(45deg);
  background: rgba(80, 130, 255, 0.25);
  color: #ffffff;
  border-color: #60a5fa;
}

.hac-exp-detail {
  padding: 0 1.5rem 1.6rem calc(70px + 1.5rem + 1.5rem);
  font-size: 0.85rem;
  line-height: 1.7;
  color: #b0c4de;
}

.hac-exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.hac-exp-tag {
  background: rgba(30, 64, 135, 0.4);
  border: 1px solid rgba(147, 197, 253, 0.3);
  padding: 3px 10px;
  border-radius: 9999px;
  font-size: 0.72rem;
  color: #e0e7ff;
}

/* ==================== TOOLKIT ==================== */
.hac-toolkit-disciplines {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  margin-top: 2rem;
}

.hac-discipline-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  align-items: center;
}

.hac-discipline-label {
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  color: #7ba3df;
  text-transform: uppercase;
}

.hac-pills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hac-tool-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(14, 28, 60, 0.7);
  border: 1px solid rgba(80, 130, 255, 0.25);
  border-radius: 4px;
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.82rem;
  color: #ffffff;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.hac-tool-pill:hover {
  background: rgba(35, 70, 150, 0.85);
  border-color: #60a5fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.35);
}

.hac-tool-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.15);
}

/* ==================== RECOGNITION ==================== */
.hac-recognition-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 2rem;
}

.hac-tab-btn {
  padding: 8px 20px;
  border: 1px solid rgba(80, 130, 255, 0.3);
  background: rgba(10, 22, 48, 0.6);
  color: #93c5fd;
  font-size: 0.82rem;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.2s ease;
}
.hac-tab-btn.active, .hac-tab-btn:hover {
  background: #2563eb;
  border-color: #60a5fa;
  color: #ffffff;
}

.hac-honors-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.hac-honor-card {
  display: grid;
  grid-template-columns: 80px 2.5fr 1.5fr 130px;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem 1.75rem;
  background: rgba(10, 22, 48, 0.45);
  border: 1px solid rgba(80, 130, 255, 0.18);
  border-radius: 4px;
  transition: border-color 0.2s, background 0.2s;
}
.hac-honor-card:hover {
  background: rgba(14, 28, 60, 0.65);
  border-color: rgba(96, 165, 250, 0.4);
}

.hac-honor-year {
  font-family: 'Chakra Petch', monospace;
  font-size: 0.95rem;
  color: #7ba3df;
  font-weight: 700;
}

.hac-honor-title {
  font-size: 1.1rem;
  color: #ffffff;
  margin: 0 0 4px 0;
}

.hac-honor-desc {
  font-size: 0.82rem;
  color: #94a3b8;
  margin: 0;
  line-height: 1.5;
}

.hac-honor-issuer {
  font-size: 0.82rem;
  color: #c7d2fe;
}

.hac-honor-badge {
  text-align: right;
  font-family: 'Chakra Petch', monospace;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 4px 10px;
  border: 1px solid rgba(251, 191, 36, 0.4);
  color: #fbbf24;
  border-radius: 3px;
  display: inline-block;
}

/* ==================== CONTACT & BLENDED WOVEN CANVAS ==================== */
.hac-contact-wrap {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3.5rem;
  margin-top: 1rem;
  align-items: start;
}

.hac-contact-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #2563eb;
  color: #ffffff;
  font-family: 'Chakra Petch', monospace;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  padding: 14px 28px;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
}
.hac-contact-cta:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(37, 99, 235, 0.6);
}

.hac-contact-info-block {
  margin-bottom: 2rem;
}

.hac-contact-label {
  font-family: 'Chakra Petch', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  color: #7ba3df;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.hac-contact-val {
  color: #e5eaf2;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  margin-bottom: 6px;
  transition: color 0.2s;
}
.hac-contact-val:hover {
  color: #60a5fa;
}

/* Transparent Woven Canvas - Blends directly into website background (NO BLACK BACKGROUND) */
.hac-woven-loom-wrap {
  width: 100%;
  position: relative;
  background: transparent !important;
  border-top: 1px solid rgba(80, 130, 255, 0.2);
  border-bottom: 1px solid rgba(80, 130, 255, 0.2);
  margin: 4rem 0 2rem;
  padding: 1.5rem 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hac-woven-canvas {
  display: block;
  width: 100%;
  max-width: 1200px;
  cursor: crosshair;
  z-index: 10;
  background: transparent !important;
}

.hac-footer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(80, 130, 255, 0.15);
  font-family: var(--font-jetbrains-mono), monospace;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: #93c5fd;
  text-transform: uppercase;
}

.hac-back-top {
  color: #60a5fa;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.2s;
}
.hac-back-top:hover {
  color: #ffffff;
}

/* ==================== 3D MAILBOX IN HEADER (ALIGNED WITH CONTACT ME) ==================== */
.hac-header-mailbox-wrap {
  position: fixed !important;
  top: 33px;
  right: 304px;
  display: inline-flex !important;
  align-items: center !important;
  vertical-align: middle;
  perspective: 800px !important;
  z-index: 1000 !important;
  pointer-events: auto !important;
}

.hac-header-mailbox-wrap .hac-mailbox-anchor {
  display: block;
  width: 44px;
  height: 30px;
  cursor: pointer;
  transform-style: preserve-3d;
  position: relative;
  border-radius: 8px;
}

.hac-header-mailbox-wrap .hac-mailbox-body {
  position: relative;
  width: 100%;
  height: 100%;
  background: #e63238;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(230, 50, 56, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.45);
  border: 1px solid #c42025;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hac-header-mailbox-wrap .hac-clay-lighting {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 100%);
  pointer-events: none;
}

.hac-header-mailbox-wrap .hac-envelope-folds {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hac-header-mailbox-wrap .hac-heart-seal {
  position: relative;
  z-index: 10;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}
.hac-header-mailbox-wrap:hover .hac-heart-seal {
  transform: scale(1.15);
}

.hac-header-mailbox-wrap .hac-heart-svg {
  width: 9px;
  height: 9px;
  fill: #e63238;
}

.hac-header-mailbox-wrap .hac-edge-shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(0,0,0,0.2);
}

.hac-header-mailbox-wrap .hac-cast-shadow {
  position: absolute;
  bottom: -4px;
  left: 4px;
  right: 4px;
  height: 6px;
  background: rgba(0,0,0,0.4);
  filter: blur(4px);
  border-radius: 50%;
  pointer-events: none;
  z-index: -1;
}

.hac-header-mailbox-wrap .hac-mailbox-tooltip {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  background: #11161f;
  border: 1px solid #232d3d;
  color: #efeade;
  font-family: monospace;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 9999px;
  white-space: nowrap;
  box-shadow: 0 8px 20px rgba(0,0,0,0.5);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 100;
}

.hac-header-mailbox-wrap:hover .hac-mailbox-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .hac-table-header {
    display: none;
  }
  .hac-exp-summary {
    grid-template-columns: 50px 1fr 40px;
    gap: 1rem;
  }
  .hac-col-role, .hac-col-period, .hac-col-status {
    grid-column: 2 / -1;
  }
  .hac-exp-detail {
    padding-left: 1.5rem;
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
    height: 520px;
  }
}
`;

fs.writeFileSync('public/jarnket_styles.css', css, 'utf8');
console.log('1. Generated public/jarnket_styles.css');

// 3. Build HTML Structure for Jarnket Sections
const sectionsHtml = `
<!-- JARNKET INSPIRED SECTIONS (PORTRAIT, EXPERIENCE, ELEPHANT, TOOLKIT, RECOGNITION, CONTACT) -->
<div id="hac-jarnket-experience" class="hac-experience-wrap">

  <!-- TOP BANNER WITH DIAMOND WEAVE (DOWNLOAD.PNG MATCHING IMAGE 3) -->
  <div class="hac-textile-banner">
    <div class="hac-bar-download" aria-hidden="true"></div>
    <div class="hac-textile-caption">
      <span>WOVEN FROM "EXPERIENCE" · THE ARCHITECTURE &amp; CODE JOURNEY</span>
      <div style="display:flex;align-items:center;gap:16px;">
        <button type="button" class="hac-back-journey-pill" onclick="window.hacBackToJourney()" aria-label="Return to Khajuraho and 3D journey">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;display:inline-block;vertical-align:middle;"><path d="m18 15-6-6-6 6"/></svg>
          <span>RETURN TO JOURNEY</span>
        </button>
        <span>BENGALURU · SILICON VALLEY OF INDIA</span>
      </div>
    </div>
  </div>

  <!-- ==================== 00 // INTERACTIVE PORTRAIT STAGE (FULL.PNG WOVEN WARP) ==================== -->
  <div class="hac-portrait-stage">
    <div class="hac-portrait-container">
      <div class="hac-portrait-card">
        <div class="hac-portrait-corner" style="top:10px;left:10px;">☩</div>
        <div class="hac-portrait-corner" style="top:10px;right:10px;">☩</div>
        <div class="hac-portrait-corner" style="bottom:10px;left:10px;">☩</div>
        <div class="hac-portrait-corner" style="bottom:10px;right:10px;">☩</div>

        <div class="hac-portrait-hud">
          <span>FACIAL SCAN // HN.04</span>
          <span class="hac-portrait-hud-badge">HANUMA ADITYA C</span>
        </div>

        <canvas id="hac-portrait-mesh-canvas" class="hac-portrait-canvas" width="480" height="640"></canvas>
        <div class="hac-portrait-scanlines"></div>
      </div>
    </div>
    <div class="hac-portrait-footer">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6z"/></svg>
      <span>INTERACTIVE STIPPLE MESH · MOVE CURSOR ACROSS PORTRAIT TO WARP</span>
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
      <span>LAND OF A MILLION ELEPHANTS · SACRED KHAJURAHO HERITAGE &amp; SCULPTURE</span>
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

// 4. Update public/index.html
let indexHtml = fs.readFileSync('public/index.html', 'utf8');

// A. Replace or update <style id="hac-jarnket-styles">
const styleStart = indexHtml.indexOf('<style id="hac-jarnket-styles">');
if (styleStart !== -1) {
  const styleEnd = indexHtml.indexOf('</style>', styleStart) + 8;
  indexHtml = indexHtml.slice(0, styleStart) + '<style id="hac-jarnket-styles">\n' + css + '\n</style>' + indexHtml.slice(styleEnd);
} else {
  // Insert before </head>
  const headEnd = indexHtml.indexOf('</head>');
  indexHtml = indexHtml.slice(0, headEnd) + '<style id="hac-jarnket-styles">\n' + css + '\n</style>\n' + indexHtml.slice(headEnd);
}

// B. Update window.__hacJarnketHTML at top
const encodedSections = encodeURIComponent(sectionsHtml);
const jarnketHtmlAssign = 'window.__hacJarnketHTML = decodeURIComponent("' + encodedSections + '");';
const winStart = indexHtml.indexOf('window.__hacJarnketHTML =');
if (winStart !== -1) {
  const winEnd = indexHtml.indexOf('";', winStart) + 2;
  indexHtml = indexHtml.slice(0, winStart) + jarnketHtmlAssign + indexHtml.slice(winEnd);
}

// C. Update <script id="hac-runtime-bundle"> with:
// - Header Mailbox pinned right before Contact Me in div[data-experience-chrome="true"]
// - Interactive Portrait Mesh Warp running on public/full.png
// - Blended Woven Canvas for Hanuma Aditya
const runtimeScript = `
<script id="hac-runtime-bundle">
(function() {
  const sectionsContent = decodeURIComponent("${encodedSections}");

  // ==================== 1. HEADER MAILBOX BEFORE CONTACT ME ====================
  function ensureHeaderMailbox() {
    if (document.getElementById('hac-header-mailbox')) return;

    // Target the experience chrome header which holds Contact Me and menu trigger
    const chrome = document.querySelector('div[data-experience-chrome="true"]');
    if (!chrome) return;

    const contactBtn = chrome.querySelector('.RDBqPq_contact');
    if (!contactBtn) return;

    const wrap = document.createElement('div');
    wrap.className = 'hac-header-mailbox-wrap';
    wrap.setAttribute('aria-label', 'Direct Email Contact');
    wrap.innerHTML = \`
      <div class="hac-mailbox-tooltip">Send an email ↗</div>
      <a id="hac-header-mailbox" href="mailto:adityahanuma8@gmail.com" target="_blank" rel="noopener noreferrer" class="hac-mailbox-anchor">
        <div class="hac-mailbox-body">
          <div class="hac-clay-lighting"></div>
          <svg class="hac-envelope-folds" viewBox="0 0 96 64" fill="none">
            <path d="M0 64L48 34L96 64" stroke="#b91c21" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M0 64L48 34L96 64" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M0 4C14 4 36 28 48 32C60 28 82 4 96 4" fill="#d82429" stroke="#b91c21" stroke-width="2" />
          </svg>
          <div class="hac-heart-seal">
            <svg viewBox="0 0 24 24" class="hac-heart-svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div class="hac-edge-shadow"></div>
        </div>
        <div class="hac-cast-shadow"></div>
      </a>
    \`;

    // Insert right before Contact Me button in header
    chrome.insertBefore(wrap, contactBtn);
    updateHeaderMailboxPos();
    initHeaderMailboxPhysics();
    console.log('[HAC] Header mailbox mounted before Contact Me');
  }

  function updateHeaderMailboxPos() {
    const contactBtn = document.querySelector('.RDBqPq_contact');
    const wrap = document.querySelector('.hac-header-mailbox-wrap');
    if (contactBtn && wrap) {
      const r = contactBtn.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        wrap.style.top = (r.top + (r.height - 30) / 2) + 'px';
        wrap.style.right = (window.innerWidth - r.left + 14) + 'px';
        wrap.style.display = 'inline-flex';
      }
    }
  }
  window.addEventListener('resize', updateHeaderMailboxPos);
  window.addEventListener('scroll', updateHeaderMailboxPos, { passive: true });
  setInterval(updateHeaderMailboxPos, 600);

  function initHeaderMailboxPhysics() {
    const mailbox = document.getElementById('hac-header-mailbox');
    if (!mailbox || mailbox.__physicsInited) return;
    mailbox.__physicsInited = true;

    let targetRotX = 0, targetRotY = 0, targetRotZ = 0, targetZ = 0;
    let curRotX = 0, curRotY = 0, curRotZ = 0, curZ = 0;

    window.addEventListener('mousemove', function(e) {
      const rect = mailbox.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      const maxAngle = 30;
      targetRotY = Math.max(-maxAngle, Math.min(maxAngle, (dx / window.innerWidth) * 60));
      targetRotX = Math.max(-maxAngle, Math.min(maxAngle, (-dy / window.innerHeight) * 60));
      targetRotZ = Math.max(-10, Math.min(10, (dx / window.innerWidth) * 12));
    }, { passive: true });

    mailbox.addEventListener('mouseenter', function() { targetZ = 12; });
    mailbox.addEventListener('mouseleave', function() { targetZ = 0; });

    function tick() {
      curRotX += (targetRotX - curRotX) * 0.12;
      curRotY += (targetRotY - curRotY) * 0.12;
      curRotZ += (targetRotZ - curRotZ) * 0.12;
      curZ += (targetZ - curZ) * 0.15;

      mailbox.style.transform = 'rotateX(' + curRotX.toFixed(2) + 'deg) rotateY(' + curRotY.toFixed(2) + 'deg) rotateZ(' + curRotZ.toFixed(2) + 'deg) translateZ(' + curZ.toFixed(1) + 'px)';
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // Remove old bottom-floating mailbox if present
  function removeOldFloatingMailbox() {
    const old = document.querySelector('aside.hac-floating-mailbox-wrap');
    if (old && old.parentElement) {
      old.parentElement.removeChild(old);
    }
  }

  // ==================== 2. INTERACTIVE PORTRAIT MESH WARP CANVAS ====================
  function initPortraitMeshCanvas() {
    const canvas = document.getElementById('hac-portrait-mesh-canvas');
    if (!canvas || canvas.__inited) return;
    canvas.__inited = true;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width = 480;
    const H = canvas.height = 640;

    let points = [];
    let isReady = false;
    const mouse = { x: -1000, y: -1000, radius: 110 };

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = function() {
      const off = document.createElement('canvas');
      off.width = W;
      off.height = H;
      const offCtx = off.getContext('2d');
      if (!offCtx) return;

      // Draw and sample full.png
      offCtx.drawImage(img, 0, 0, W, H);
      const imgData = offCtx.getImageData(0, 0, W, H).data;

      const step = 8;
      points = [];

      for (let y = 4; y < H; y += step) {
        for (let x = 4; x < W; x += step) {
          const idx = (y * W + x) * 4;
          const r = imgData[idx];
          const g = imgData[idx + 1];
          const b = imgData[idx + 2];

          // Sample luminance & compute warp intensity
          const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          const contrastLum = Math.max(0, Math.min(1, (lum - 0.5) * 1.35 + 0.5));
          const a = 1 - contrastLum;
          const intensity = Math.max(0.12, Math.min(1, a * 1.3));

          const col = Math.floor(x / step);
          const row = Math.floor(y / step);
          const warp = (col + row) % 2 === 0;

          const rad = Math.max(1.5, Math.min(4.5, intensity * (step * 0.55)));
          const w = warp ? rad * 0.85 : rad * 2.2;
          const h = warp ? rad * 2.2 : rad * 0.85;

          // High-contrast luminous cyan-blue palette
          const redVal = Math.round(90 + 150 * intensity);
          const greenVal = Math.round(140 + 110 * intensity);
          const blueVal = 255;
          const alphaVal = 0.35 + 0.65 * intensity;

          points.push({
            x: x,
            y: y,
            ox: x,
            oy: y,
            vx: 0,
            vy: 0,
            w: w,
            h: h,
            color: 'rgba(' + redVal + ',' + greenVal + ',' + blueVal + ',' + alphaVal.toFixed(2) + ')'
          });
        }
      }

      isReady = true;
      console.log('[HAC] Portrait mesh initialized with ' + points.length + ' stitches');
      renderLoop();
    };

    img.src = '/full.png';

    canvas.addEventListener('mousemove', function(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouse.x = (e.clientX - rect.left) * scaleX;
      mouse.y = (e.clientY - rect.top) * scaleY;
    });

    canvas.addEventListener('mouseleave', function() {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    function renderLoop() {
      if (!isReady) return;
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Cursor push interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 3.5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Elastic spring physics back to home position
        p.vx += (p.ox - p.x) * 0.09;
        p.vy += (p.oy - p.y) * 0.09;
        p.vx *= 0.82;
        p.vy *= 0.82;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - p.w / 2, p.y - p.h / 2, p.w, p.h);
      }

      requestAnimationFrame(renderLoop);
    }
  }

  // ==================== 3. MOUNT JARNKET SECTIONS ====================
  function mountJarnket() {
    removeOldFloatingMailbox();
    ensureHeaderMailbox();

    const tail = document.querySelector('.kOY8Ua_tail');
    if (!tail) return false;

    tail.style.overflowY = 'auto';
    tail.style.webkitOverflowScrolling = 'touch';
    tail.style.pointerEvents = 'auto';
    tail.style.background = '#091533';

    let mount = document.getElementById('hac-jarnket-mount');
    if (!mount) {
      mount = document.createElement('div');
      mount.id = 'hac-jarnket-mount';
      mount.style.width = '100%';
      mount.style.height = '100vh';
      mount.style.overflowY = 'auto';
      mount.style.webkitOverflowScrolling = 'touch';
      mount.style.pointerEvents = 'auto';
      mount.style.background = '#091533';
      tail.innerHTML = '';
      tail.appendChild(mount);
    }

    if (!document.getElementById('hac-jarnket-experience')) {
      mount.innerHTML = sectionsContent;
      initPortraitMeshCanvas();
      initWovenCanvas();
      console.log('[HAC] Mounted Jarnket sections, portrait mesh & woven canvas');
    }
    return true;
  }

  // ==================== 4. BLENDED WOVEN CANVAS (HANUMA ADITYA) ====================
  function initWovenCanvas() {
    const canvas = document.getElementById('hac-woven-loom-canvas');
    if (!canvas) return;
    if (canvas.dataset.initialized === 'true') return;
    canvas.dataset.initialized = 'true';

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    function getTargetDimensions() {
      const parentW = canvas.parentElement ? canvas.parentElement.clientWidth : 0;
      const w = parentW > 200 ? parentW : (window.innerWidth ? Math.min(1200, window.innerWidth - 48) : 1200);
      return { width: w, height: Math.round(w * 0.22) };
    }

    let dims = getTargetDimensions();
    let width = (canvas.width = dims.width);
    let height = (canvas.height = dims.height);

    const mouse = { x: -1000, y: -1000, radius: 100 };
    let particles = [];
    let animationFrameId;

    const img = new Image();
    img.crossOrigin = 'anonymous';

    function initParticles() {
      dims = getTargetDimensions();
      width = canvas.width = dims.width;
      height = canvas.height = dims.height;
      particles = [];

      const offCanvas = document.createElement('canvas');
      const offCtx = offCanvas.getContext('2d', { willReadFrequently: true });
      if (!offCtx) return;

      offCanvas.width = width;
      offCanvas.height = height;

      const padX = width * 0.02;
      const padY = height * 0.08;
      offCtx.drawImage(img, padX, padY, width - padX * 2, height - padY * 2);

      const imgData = offCtx.getImageData(0, 0, width, height).data;
      const step = Math.max(3, Math.floor(width / 380));

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const r = imgData[index];
          const g = imgData[index + 1];
          const b = imgData[index + 2];
          const alpha = imgData[index + 3];

          if (alpha > 100 && (r > 120 || g > 120 || b > 120)) {
            particles.push({
              x: x,
              y: y,
              originX: x,
              originY: y,
              size: step * 0.85,
              color: 'rgba(' + r + ',' + g + ',' + b + ',' + (alpha / 255) + ')',
              vx: 0,
              vy: 0,
              ease: 0.12,
              friction: 0.88
            });
          }
        }
      }
      console.log('[HAC] Woven particles initialized: ' + particles.length);
    }

    function animate() {
      // Clear to transparent so background blends directly into website background
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.hypot(dx, dy);

        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          const pushX = Math.cos(angle) * force * 24;
          const pushY = Math.sin(angle) * force * 24;
          p.vx -= pushX;
          p.vy -= pushY;
        }

        const homeDx = p.originX - p.x;
        const homeDy = p.originY - p.y;
        p.vx += homeDx * p.ease;
        p.vy += homeDy * p.ease;

        p.vx *= p.friction;
        p.vy *= p.friction;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    img.onload = function() {
      initParticles();
      if (!animationFrameId) animate();
    };

    if (img.complete && img.naturalWidth > 0) {
      initParticles();
      if (!animationFrameId) animate();
    }

    img.src = '/hanuma-aditya-loom.png';

    const handleMouseMove = function(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = function() {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (img.complete && img.naturalWidth > 0) {
          initParticles();
        }
      }, 150);
    });
  }

  // ==================== 5. SCROLL DELEGATION & LIFECYCLE ====================
  function setupMountScrollDelegation() {
    const mount = document.getElementById('hac-jarnket-mount');
    if (!mount || mount.__scrollDelegated) return;
    mount.__scrollDelegated = true;

    mount.addEventListener('wheel', function(e) {
      if (e.deltaY < 0 && mount.scrollTop <= 0) {
        e.preventDefault();
        if (window.scrollY >= 39800) {
          window.scrollTo({ top: 39600, behavior: 'auto' });
        } else {
          window.scrollBy({ top: e.deltaY, behavior: 'auto' });
        }
      }
    }, { passive: false });

    let touchStartY = 0;
    mount.addEventListener('touchstart', function(e) {
      if (e.touches && e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    mount.addEventListener('touchmove', function(e) {
      if (e.touches && e.touches.length > 0) {
        const currentY = e.touches[0].clientY;
        const diff = currentY - touchStartY;
        touchStartY = currentY;
        if (diff > 0 && mount.scrollTop <= 0) {
          if (window.scrollY >= 39800) {
            window.scrollTo({ top: 39600, behavior: 'auto' });
          } else {
            window.scrollBy({ top: -diff * 2, behavior: 'auto' });
          }
        }
      }
    }, { passive: true });

    mount.addEventListener('keydown', function(e) {
      if (mount.scrollTop <= 0 && (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'Home')) {
        e.preventDefault();
        window.scrollTo({ top: 39600, behavior: 'smooth' });
      }
    });
  }

  function init() {
    ensureHeaderMailbox();
    removeOldFloatingMailbox();
    mountJarnket();
    setupMountScrollDelegation();

    let attempts = 0;
    const interval = setInterval(function() {
      attempts++;
      ensureHeaderMailbox();
      removeOldFloatingMailbox();
      mountJarnket();
      initPortraitMeshCanvas();
      setupMountScrollDelegation();
      if (attempts > 30) clearInterval(interval);
    }, 200);

    const observer = new MutationObserver(function() {
      ensureHeaderMailbox();
      removeOldFloatingMailbox();
      const tail = document.querySelector('.kOY8Ua_tail');
      if (tail && !document.getElementById('hac-jarnket-experience')) {
        mountJarnket();
      }
      initPortraitMeshCanvas();
      setupMountScrollDelegation();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>
`;

// Replace script #hac-runtime-bundle
const bundleStart = indexHtml.indexOf('<script id="hac-runtime-bundle">');
if (bundleStart !== -1) {
  const bundleEnd = indexHtml.indexOf('</script>', bundleStart) + 9;
  indexHtml = indexHtml.slice(0, bundleStart) + runtimeScript.trim() + indexHtml.slice(bundleEnd);
} else {
  const bodyEnd = indexHtml.indexOf('</body>');
  indexHtml = indexHtml.slice(0, bodyEnd) + runtimeScript.trim() + '\n' + indexHtml.slice(bodyEnd);
}

// Remove old static aside if present
indexHtml = indexHtml.replace(/<aside class="hac-floating-mailbox-wrap"[\s\S]*?<\/aside>/g, '');

fs.writeFileSync('public/index.html', indexHtml, 'utf8');
console.log('3. Updated public/index.html successfully');
