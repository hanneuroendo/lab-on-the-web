import { useNavigate } from "react-router-dom";
import { T, Ico } from "../../constants";
import { NEWS } from "../../data/news";
import { Sec, SH } from "../index";

export function NewsStrip() {
  const navigate = useNavigate();
  return (
    <Sec bg={T.white}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: 36,
        }}
      >
        <SH eyebrow="Updates" title="Latest News" style={{ marginBottom: 0 }} />
        <button
          onClick={() => navigate("/news")}
          className="btn btn-outline-dark"
          style={{ alignSelf: "flex-end", flexShrink: 0 }}
        >
          All News {Ico.arrowR}
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
        className="grid-3"
      >
        {NEWS.slice(0, 3).map((n) => (
          <div
            key={n.title}
            className="card"
            style={{ padding: "26px 24px", background: T.offWhite }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 14,
              }}
            >
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {n.tags.map((tag, j) => (
                  <span key={`${tag}-${j}`} className={`pill ${n.classes[j]}`}>{tag}</span>
                ))}
              </div>
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 11,
                  color: T.slateLight,
                }}
              >
                {n.date}
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 19,
                fontWeight: 500,
                color: T.navy,
                marginBottom: 8,
                lineHeight: 1.25,
              }}
            >
              {n.title}
            </h3>
            <p
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 13,
                fontWeight: 300,
                color: T.slate,
                lineHeight: 1.7,
              }}
            >
              {n.body}
            </p>
          </div>
        ))}
      </div>
    </Sec>
  );
}
