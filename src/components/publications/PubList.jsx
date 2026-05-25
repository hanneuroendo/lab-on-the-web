import { useMemo, useState, useEffect } from "react";
import { T, Ico, F } from "../../constants";
import { TYPE_COLORS } from "./pubTypes";

const YEARS_PER_PAGE = 5;

export function PubList({ shown, q }) {
  const { byYear, years } = useMemo(() => {
    const byYear = shown.reduce((acc, p) => {
      (acc[p.year] = acc[p.year] || []).push(p);
      return acc;
    }, {});
    return { byYear, years: Object.keys(byYear).sort((a, b) => b - a) };
  }, [shown]);

  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(years.length / YEARS_PER_PAGE);
  const pageYears = years.slice(page * YEARS_PER_PAGE, (page + 1) * YEARS_PER_PAGE);

  useEffect(() => { setPage(0); }, [shown]);

  return (
    <>
      <p style={{ fontFamily: F.sans, fontSize: 12, color: T.slateLight, marginBottom: 28, letterSpacing: "0.03em" }}>
        {shown.length} publication{shown.length !== 1 ? "s" : ""}
        {q ? ` matching "${q}"` : ""}
      </p>

      {years.length === 0 ? (
        <div style={{ textAlign: "center", padding: "64px 0" }}>
          <p style={{ fontFamily: F.sans, fontSize: 15, fontWeight: 400, color: T.slate }}>
            No publications match your search.
          </p>
        </div>
      ) : (
        <>
          {pageYears.map((yr) => (
            <div key={yr} style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 4 }}>
                <span style={{ fontFamily: F.serif, fontSize: 32, fontWeight: 300, color: T.navy, letterSpacing: "-0.02em", minWidth: 52 }}>
                  {yr}
                </span>
                <div style={{ flex: 1, height: 1, background: T.slatePale }} />
              </div>
              {byYear[yr].map((p, i) => (
                <div
                  key={p.doi || p.title}
                  className="pub-row"
                  style={{ padding: "18px 20px 18px 24px", borderBottom: i < byYear[yr].length - 1 ? `1px solid ${T.offWhite}` : "none" }}
                >
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: F.sans, fontSize: 14.5, fontWeight: 400, color: T.navy, lineHeight: 1.55, marginBottom: 6 }}>
                        {p.title}
                      </div>
                      <div style={{ fontFamily: F.sans, fontSize: 12.5, fontWeight: 300, color: T.slate, marginBottom: 4 }}>
                        {p.authors}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: F.sans, fontSize: 12.5, fontStyle: "italic", color: T.slateLight }}>
                          {p.journal}, {p.vol}
                        </span>
                        <span
                          className="pill"
                          style={{
                            background: TYPE_COLORS[p.type]?.bg ?? T.tealPale,
                            color: TYPE_COLORS[p.type]?.text ?? T.teal,
                            border: `1px solid ${TYPE_COLORS[p.type]?.border ?? "rgba(61,143,166,0.2)"}`,
                          }}
                        >
                          {p.type}
                        </span>
                      </div>
                    </div>
                    {(p.doi || p.url) && (
                      <a
                        href={p.doi ? `https://doi.org/${p.doi}` : p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.doi ? "DOI" : "Link"} for ${p.title}`}
                        style={{
                          flexShrink: 0, alignSelf: "flex-start", marginTop: 2,
                          display: "inline-flex", alignItems: "center", gap: 5,
                          fontFamily: F.sans, fontSize: 12, color: T.teal,
                          textDecoration: "none", padding: "5px 14px", borderRadius: 3,
                          border: "1px solid rgba(61,143,166,0.3)", whiteSpace: "nowrap",
                          transition: "background 0.18s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = T.tealPale)}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        {p.doi ? "DOI" : "Link"} {Ico.extLink}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {totalPages > 1 && (
            <nav aria-label="Publications pagination" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 8, paddingTop: 24, borderTop: `1px solid ${T.slatePale}` }}>
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
      )}
    </>
  );
}
