import { useNavigate } from "react-router-dom";
import { T, Ico } from "../../constants";
import { NEWS } from "../../data/news";
import { Sec, SH } from "../index";
import { NewsCard } from "../news/NewsGrid";

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
          <NewsCard key={n.title} n={n} padding="26px 24px" titleSize={19} bodySize={13} bg={T.offWhite} />
        ))}
      </div>
    </Sec>
  );
}
