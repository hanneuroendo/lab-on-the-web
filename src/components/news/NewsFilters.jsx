import { useState } from "react";
import { NEWS_TAGS } from "../../data/news";

const TAG_COLORS = {
  Publication: { bg: "#e6f3fb", color: "#185a85" },
  Funding:     { bg: "#e8f5ec", color: "#256637" },
  Award:       { bg: "#fdf4e6", color: "#7a4e0d" },
  "Lab News":  { bg: "#f2edfb", color: "#563585" },
  Talk:        { bg: "#e6f9f7", color: "#1a6b62" },
};

export function NewsFilters({ filter, setFilter }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 44 }}>
      {NEWS_TAGS.map((t) => {
        const active = filter === t;
        const c = TAG_COLORS[t];
        const isHovered = hovered === t && !active && c;
        const showColor = (active || isHovered) && c;
        return (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`filter-pill${active ? " active" : ""}`}
            onMouseEnter={() => setHovered(t)}
            onMouseLeave={() => setHovered(null)}
            style={showColor ? { background: c.bg, color: c.color, borderColor: c.bg } : {}}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
