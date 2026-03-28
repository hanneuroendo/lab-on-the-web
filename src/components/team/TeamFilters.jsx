import { TEAM_CATEGORIES } from "../../data/team";

export function TeamFilters({ filter, setFilter }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 44 }}>
      {TEAM_CATEGORIES.map((c) => (
        <button
          key={c}
          onClick={() => setFilter(c)}
          className={`filter-pill${filter === c ? " active" : ""}`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
