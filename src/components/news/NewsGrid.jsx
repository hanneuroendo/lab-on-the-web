import { useState, useEffect } from "react";
import { T, F, S, Ico } from "../../constants";

const CARDS_PER_PAGE = 6;

export function NewsCard({ n, padding = "28px 26px", titleSize = 21, bodySize = 13.5, bg }) {
  return (
    <div className="card" style={{ padding, ...(bg ? { background: bg } : {}) }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {n.tags.map((tag, j) => (
            <span key={`${tag}-${j}`} className={`pill ${n.classes[j]}`}>{tag}</span>
          ))}
        </div>
        <span style={{ fontFamily: F.sans, fontSize: 11.5, color: T.slateLight }}>{n.date}</span>
      </div>
      <h3 style={{ fontFamily: F.serif, fontSize: titleSize, ...S.cardHeading, color: T.navy, marginBottom: 10 }}>
        {n.title}
      </h3>
      <p style={{ fontFamily: F.sans, fontSize: bodySize, ...S.body, color: T.slate }}>
        {n.body}
      </p>
    </div>
  );
}

export function NewsGrid({ items }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(items.length / CARDS_PER_PAGE);
  const pageItems = items.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE);

  useEffect(() => { setPage(0); }, [items]);

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 22 }}>
        {pageItems.map((n) => (
          <NewsCard key={n.title + n.date} n={n} />
        ))}
        {items.length === 0 && (
          <p style={{ fontFamily: F.sans, fontSize: 15, fontWeight: 400, color: T.slate, gridColumn: "1/-1", padding: "48px 0", textAlign: "center" }}>
            No updates in this category yet.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <nav aria-label="News pagination" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 32, paddingTop: 24, borderTop: `1px solid ${T.slatePale}` }}>
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
            aria-label="Previous page"
            aria-disabled={page === 0}
            className="btn btn-outline-dark"
            style={{ padding: "7px 14px", opacity: page === 0 ? 0.3 : 1, pointerEvents: page === 0 ? "none" : "auto" }}
          >
            <span style={{ display: "inline-block", transform: "rotate(180deg)" }}>{Ico.chevronR}</span>
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
              aria-current={i === page ? "page" : undefined}
              className="btn btn-outline-dark"
              style={{
                padding: "7px 14px",
                minWidth: 38,
                justifyContent: "center",
                ...(i === page && { background: T.navy, color: T.white, borderColor: T.navy }),
              }}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages - 1}
            aria-label="Next page"
            aria-disabled={page === totalPages - 1}
            className="btn btn-outline-dark"
            style={{ padding: "7px 14px", opacity: page === totalPages - 1 ? 0.3 : 1, pointerEvents: page === totalPages - 1 ? "none" : "auto" }}
          >
            {Ico.chevronR}
          </button>
        </nav>
      )}
    </>
  );
}
