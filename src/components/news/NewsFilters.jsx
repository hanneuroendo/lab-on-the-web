import { T } from "../../constants";

const TAGS = [
  "All",
  "Publication",
  "Funding",
  "Award",
  "Lab News",
  "Talk",
];

export function NewsFilters({ filter, setFilter }) {
  return (
    <div
      style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 44 }}
    >
      {TAGS.map((t) => (
        <button
          key={t}
          onClick={() => setFilter(t)}
          style={{
            padding: "8px 18px",
            borderRadius: 99,
            cursor: "pointer",
            fontFamily: "'Inter',sans-serif",
            fontSize: 12.5,
            fontWeight: filter === t ? 500 : 400,
            transition: "all 0.18s",
            background: filter === t ? T.navy : "transparent",
            color: filter === t ? T.white : T.slate,
            border: `1px solid ${filter === t ? T.navy : T.slatePale}`,
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
