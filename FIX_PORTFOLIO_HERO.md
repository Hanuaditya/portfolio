# Portfolio Fix: 60 FPS Hero Portrait, Clean Layout & Section Transition

## 1. Asset Placement
Ensure your halftone portrait is placed in:
```text
public/avatar-halftone.png
```

## 2. Interactive Hero Portrait (src/components/InteractiveHeroPortrait.tsx)
This component removes all heavy canvas pixel loops and uses 100% GPU-accelerated CSS and Framer Motion springs for silky-smooth 60 FPS tracking and scrolling:
- Top Band: Continuous cobalt pixel diamond pattern (`◈ ❖ ◈`).
- Center: Crisp photographic halftone portrait (`/avatar-halftone.png`) with horizontal scanlines and active blue laser scanning line on hover.
- Bottom Band: Geometric woven chevron tree motif (`▲▼▲ ❖`).
- Audio Frequency / Barcode Wave: Animated waveform bar strip running directly above the SCROLL pill.
- Interactive SCROLL Trigger Pill: Smoothly scrolls into `#after-hours` or `#experience`.

## 3. Clean Master Layout (src/app/page.tsx)
Removes the stale brown temple credits section ("The end of this film / Abhay Rohit") and coordinates clean section progression:
- 1. Hero Halftone Card (`InteractiveHeroPortrait`)
- 2. After Hours 3D & Video Chapters (`AfterHours`)
- 3. Footer with Textile Name Banner & 3D Envelope (`FooterNameSection`)

## 4. Name Harmonization
Replaced all legacy occurrences of "Abhay Rohit" with "Hanuma Aditya" across all pages, titles, meta tags, and favicons (`HA`).

