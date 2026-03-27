import { T, Ico } from "../../constants";
import { TYPE_COLORS } from "./pubTypes";

export function PubControls({ q, setQ, filterType, setFilterType }) {
  return (
    <div
      style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 40 }}
    >
      <div style={{ position: "relative", flex: "1 1 300px" }}>
        <div
          style={{
            position: "absolute",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
            color: T.slateLight,
            pointerEvents: "none",
          }}
        >
          {Ico.search}
        </div>
        <input
          className="search-input"
          placeholder="Search title, author, journal, or year…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {["All", "Article", "Review", "Book"].map((t) => {
          const active = filterType === t;
          const c = TYPE_COLORS[t];
          return (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              style={{
                padding: "9px 18px",
                borderRadius: 4,
                cursor: "pointer",
                fontFamily: "'Inter',sans-serif",
                fontSize: 13,
                fontWeight: 400,
                transition: "background 0.18s, color 0.18s, border-color 0.18s",
                background: active ? c.bg : "transparent",
                color: active ? c.text : T.slate,
                border: `1px solid ${active ? c.border : T.slatePale}`,
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
