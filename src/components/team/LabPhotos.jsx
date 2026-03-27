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

import { useState } from "react";
import { T } from "../../constants";
import { PHOTOS } from "../../data/photos";
import { Sec, SH } from "../index";

export function LabPhotos() {
  const [hoveredPhoto, setHoveredPhoto] = useState(null);

  return (
    <Sec bg={T.white}>
      <SH
        eyebrow="Han Lab"
        title="Lab Life"
        sub="A glimpse into everyday life in Han Lab — from experiments and conferences to group gatherings and life in St Andrews."
      />
      <div
        className="lab-photos-strip"
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
            key={i}
            style={{
              flex: "0 0 200px",
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
                    fontFamily: "'Inter',sans-serif",
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
                  fontFamily: "'Inter',sans-serif",
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
    </Sec>
  );
}
