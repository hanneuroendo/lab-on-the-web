import { T } from "../../constants";

export function NewsGrid({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 22 }}>
      {items.map((n) => (
        <div key={n.title} className="card" style={{ padding: "28px 26px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {n.tags.map((tag, j) => (
                <span key={`${tag}-${j}`} className={`pill ${n.classes[j]}`}>{tag}</span>
              ))}
            </div>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11.5, color: T.slateLight }}>{n.date}</span>
          </div>
          <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 21, fontWeight: 500, color: T.navy, marginBottom: 10, lineHeight: 1.25 }}>
            {n.title}
          </h3>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13.5, fontWeight: 300, color: T.slate, lineHeight: 1.75 }}>
            {n.body}
          </p>
        </div>
      ))}
      {items.length === 0 && (
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: T.slateLight, gridColumn: "1/-1", padding: "48px 0", textAlign: "center" }}>
          No updates in this category yet.
        </p>
      )}
    </div>
  );
}
