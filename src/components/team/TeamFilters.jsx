import { useState } from "react";
import { T } from "../../constants";
import { TEAM_CATEGORIES } from "../../data/team";

const CATEGORY_COLORS = {
  "All":                    { bg: T.navy,                  color: T.white,     border: T.navy },
  "Principal Investigator": { bg: T.teal,                  color: T.white,     border: T.teal },
  "Researcher":             { bg: "rgba(61,143,166,0.15)", color: "#1e6a80",   border: "rgba(61,143,166,0.35)" },
  "Student":                { bg: T.tealPale,              color: T.teal,      border: "rgba(61,143,166,0.15)" },
  "Staff":                  { bg: T.slatePale,             color: T.slate,     border: T.slatePale },
};

export function TeamFilters({ filter, setFilter }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 44 }}>
      {TEAM_CATEGORIES.map((t) => {
        const active = filter === t;
        const c = CATEGORY_COLORS[t];
        const showColor = (active || hovered === t) && c;
        return (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`filter-pill${active ? " active" : ""}`}
            onMouseEnter={() => setHovered(t)}
            onMouseLeave={() => setHovered(null)}
            style={showColor ? { background: c.bg, color: c.color, borderColor: c.border } : {}}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
