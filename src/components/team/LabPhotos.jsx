/* ═══════════════════════════════════════════════════════
   LAB PHOTOS STRIP
   To add a new photo:
     1. Drop the image file in src/assets/photos/
     2. Import it in src/data/photos.js
     3. Add an entry to the PHOTOS array in photos.js:
        { src: yourImport, caption: "Your caption here" }
   Photos display in the order they appear in the array.
   Set src: null to show a "Photo coming soon" placeholder.
═══════════════════════════════════════════════════════ */

import { useState, useRef } from "react";
import { T, F } from "../../constants";
import { PHOTOS } from "../../data/photos";
import { Sec, SH } from "../index";

export function LabPhotos() {
  const [hoveredPhoto, setHoveredPhoto] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDots, setShowDots] = useState(false);
  const stripRef = useRef(null);

  const getPages = () => {
    const el = stripRef.current;
    if (!el) return 1;
    return Math.round(el.scrollWidth / el.clientWidth);
  };

  const handleScroll = () => {
    const el = stripRef.current;
    if (!el) return;
    const pages = getPages();
    setActiveIndex(Math.min(Math.round((el.scrollLeft / (el.scrollWidth - el.clientWidth)) * (pages - 1)), pages - 1));
  };

  const scrollTo = (i) => {
    const el = stripRef.current;
    if (!el) return;
    const pages = getPages();
    el.scrollTo({ left: (el.scrollWidth - el.clientWidth) * (i / (pages - 1)), behavior: "smooth" });
    setActiveIndex(i);
  };

  const pages = getPages();

  return (
    <Sec bg={T.white}>
      <SH
        eyebrow="Han Lab"
        title="Lab Life"
        sub="A glimpse into everyday life in the Han Lab — from experiments and conferences to group gatherings and life in St Andrews."
      />
      <div
        ref={stripRef}
        className="lab-photos-strip"
        onScroll={handleScroll}
        onMouseEnter={() => setShowDots(true)}
        onMouseLeave={() => setShowDots(false)}
        style={{
          display: "flex",
          gap: 16,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingBottom: 4,
        }}
      >
        {PHOTOS.map((p, i) => (
          <div
            key={p.src ?? p.caption}
            style={{
              flex: "0 0 min(200px, 60vw)",
              borderRadius: 8,
              overflow: "hidden",
              position: "relative",
            }}
            onMouseEnter={() => p.src && setHoveredPhoto(i)}
            onMouseLeave={() => setHoveredPhoto(null)}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                background: p.src
                  ? `url(${p.src}) center/cover no-repeat`
                  : `linear-gradient(135deg, ${T.offWhite}, #dde3e8)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                filter: p.src
                  ? hoveredPhoto === i
                    ? "none"
                    : "grayscale(100%)"
                  : "none",
                transition: "filter 0.3s ease",
              }}
            >
              {!p.src && (
                <span
                  style={{
                    fontFamily: F.sans,
                    fontSize: 12,
                    color: T.slateLight,
                  }}
                >
                  Photo coming soon
                </span>
              )}
            </div>
            {p.caption && (
              <p
                style={{
                  fontFamily: F.sans,
                  fontSize: 12,
                  fontWeight: 300,
                  color: T.slateLight,
                  margin: "8px 2px 0",
                }}
              >
                {p.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16, opacity: showDots ? 1 : 0, transition: "opacity 0.25s ease" }}>
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              padding: 0,
              background: T.gold,
              opacity: i === activeIndex ? 1 : 0.25,
              transition: "opacity 0.25s ease",
            }}
          />
        ))}
      </div>
    </Sec>
  );
}
