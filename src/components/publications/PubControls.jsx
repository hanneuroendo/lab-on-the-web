import { useState } from "react";
import { T, Ico, F } from "../../constants";
import { TYPE_COLORS } from "./pubTypes";

export function PubControls({ q, setQ, filterType, setFilterType }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
      <div style={{ position: "relative", flex: "1 1 300px" }}>
        <div
          style={{
            position: "absolute", left: 14, top: "50%",
            transform: "translateY(-50%)", color: T.slateLight, pointerEvents: "none",
          }}
        >
          {Ico.search}
        </div>
        <input
          id="pub-search"
          name="pub-search"
          className="search-input"
          placeholder="Search title, author, journal, or year…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{ paddingRight: q ? 40 : undefined }}
        />
        {q && (
          <button
            onClick={() => setQ("")}
            aria-label="Clear search"
            style={{
              position: "absolute", right: 12, top: "50%",
              transform: "translateY(-50%)",
              background: "none", border: "none", cursor: "pointer",
              color: T.slateLight, padding: 2, lineHeight: 1,
              fontSize: 16, transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = T.navy)}
            onMouseLeave={(e) => (e.currentTarget.style.color = T.slateLight)}
          >
            ×
          </button>
        )}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        {["All", "Article", "Review", "Book"].map((t) => {
          const active = filterType === t;
          const c = TYPE_COLORS[t];
          const isHovered = hovered === t && !active;
          return (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              onMouseEnter={() => setHovered(t)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: "9px 18px",
                borderRadius: 4,
                cursor: "pointer",
                fontFamily: F.sans,
                fontSize: 13,
                fontWeight: 400,
                transition: "background 0.18s, color 0.18s, border-color 0.18s",
                background: active || isHovered ? c.bg : "transparent",
                color: active || isHovered ? c.text : T.slate,
                border: `1px solid ${active || isHovered ? c.border : T.slatePale}`,
              }}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
