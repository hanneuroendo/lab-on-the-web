import { NEWS_TAGS } from "../../data/news";

export function NewsFilters({ filter, setFilter }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 44 }}>
      {NEWS_TAGS.map((t) => (
        <button
          key={t}
          onClick={() => setFilter(t)}
          className={`filter-pill${filter === t ? " active" : ""}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
