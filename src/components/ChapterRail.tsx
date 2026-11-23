"use client";

import React, { useState, useEffect, CSSProperties } from "react";

interface Chapter {
  id: string;
  number: string;
  title: string;
  image: string;
}

const CHAPTERS: Chapter[] = [
  { id: "hero", number: "01", title: "Introduction", image: "/img/banner.webp" },
  { id: "tbd-health", number: "02", title: "Unshell (AML Graph)", image: "/img/tbd-cover.webp" },
  { id: "haspr", number: "03", title: "Horizon Meet & Veridian", image: "/img/haspr.webp" },
  { id: "khajuraho", number: "04", title: "Systems Architecture", image: "/img/khajuraho.webp" },
  { id: "play", number: "05", title: "Tech Stack Matrix", image: "/img/play.webp" },
  { id: "after-hours", number: "06", title: "EvoCode & Awards", image: "/img/after-hours.webp" },
  { id: "contact", number: "07", title: "Terminal Reachout", image: "/img/contact.webp" },
];

export default function ChapterRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = 0; i < CHAPTERS.length; i++) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeChapter = CHAPTERS[activeIndex] || CHAPTERS[0];

  return (
    <>
      <nav
        className="kY9_SW_navigator"
        aria-label="Journey chapters"
        style={
          {
            "--chapter-index": activeIndex,
            "--chapter-progress": activeIndex / (CHAPTERS.length - 1),
          } as CSSProperties
        }
        data-expanded={isExpanded ? "true" : "false"}
        data-preview={isPreview ? "true" : "false"}
        data-chapter={activeChapter.id}
        onMouseEnter={() => setIsPreview(true)}
        onMouseLeave={() => setIsPreview(false)}
      >
        {/* Toggle Trigger for mobile/compact */}
        <button
          className="kY9_SW_trigger"
          type="button"
          aria-expanded={isExpanded}
          aria-label={`Chapters · ${activeChapter.number} of 07 · ${activeChapter.title}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="kY9_SW_triggerNumber" aria-hidden="true">
            {activeChapter.number}
          </span>
          <span className="kY9_SW_triggerTicks" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </button>

        {/* Sliding Panel */}
        <div className="kY9_SW_panel">
          <div className="kY9_SW_caption">
            <span>The Journey</span>
            <span className="kY9_SW_captionCount">Seven Chapters</span>
          </div>

          <div className="kY9_SW_railBody">
            <div className="kY9_SW_drawerSurface" aria-hidden="true" />
            <ol className="kY9_SW_list">
              {CHAPTERS.map((ch, idx) => {
                const isCurrent = idx === activeIndex;
                return (
                  <li
                    key={ch.id}
                    className="kY9_SW_item"
                    style={{ "--item-index": idx } as CSSProperties}
                  >
                    <a
                      href={`#${ch.id}`}
                      className="kY9_SW_link"
                      aria-label={`${ch.number} · ${ch.title}`}
                      aria-current={isCurrent ? "location" : undefined}
                      onClick={() => setIsExpanded(false)}
                    >
                      {/* Double rolling digit */}
                      <span className="kY9_SW_digit" aria-hidden="true">
                        <span>{ch.number}</span>
                        <span>{ch.number}</span>
                      </span>

                      {/* Flyout Card */}
                      <span className="kY9_SW_card" aria-hidden="true">
                        <span
                          className="kY9_SW_image"
                          style={{ backgroundImage: `url(${ch.image})` }}
                        />
                        <span className="kY9_SW_cardNumber">{ch.number}</span>
                        <span className="kY9_SW_cardTitle">
                          <span>{ch.title}</span>
                        </span>
                        <span className="kY9_SW_rowArrow">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 4H4v16h16v-8M14 3h7v7m0-7-10 10" />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </nav>
    </>
  );
}
