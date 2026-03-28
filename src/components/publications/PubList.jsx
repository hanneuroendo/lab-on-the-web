import { useMemo } from "react";
import { T, Ico, F } from "../../constants";
import { TYPE_COLORS } from "./pubTypes";

export function PubList({ shown, q }) {
  const { byYear, years } = useMemo(() => {
    const byYear = shown.reduce((acc, p) => {
      (acc[p.year] = acc[p.year] || []).push(p);
      return acc;
    }, {});
    return { byYear, years: Object.keys(byYear).sort((a, b) => b - a) };
  }, [shown]);

  return (
    <>
      <p style={{ fontFamily: F.sans, fontSize: 12, color: T.slateLight, marginBottom: 28, letterSpacing: "0.03em" }}>
        {shown.length} publication{shown.length !== 1 ? "s" : ""}
        {q ? ` matching "${q}"` : ""}
      </p>

      {years.length === 0 ? (
        <div style={{ textAlign: "center", padding: "64px 0" }}>
          <p style={{ fontFamily: F.sans, fontSize: 15, color: T.slateLight }}>
            No publications match your search.
          </p>
        </div>
      ) : (
        years.map((yr) => (
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
        ))
      )}
    </>
  );
}
