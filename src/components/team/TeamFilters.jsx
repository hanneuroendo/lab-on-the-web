import { T } from "../../constants";

const CATEGORIES = ["All", "Principal Investigator", "Researcher", "Student", "Staff"];

export function TeamFilters({ filter, setFilter }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 44 }}>
      {CATEGORIES.map((c) => (
        <button
          key={c}
          onClick={() => setFilter(c)}
          style={{
            padding: "8px 18px",
            borderRadius: 99,
            cursor: "pointer",
            fontFamily: "'Inter',sans-serif",
            fontSize: 12.5,
            fontWeight: filter === c ? 500 : 400,
            transition: "all 0.18s",
            background: filter === c ? T.navy : "transparent",
            color: filter === c ? T.white : T.slate,
            border: `1px solid ${filter === c ? T.navy : T.slatePale}`,
          }}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
