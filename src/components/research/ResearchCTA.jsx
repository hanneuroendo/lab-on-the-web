import { T, Ico } from "../../constants";
import { Sec } from "../index";

export function ResearchCTA({ setPage }) {
  return (
    <Sec bg={T.offWhite} style={{ padding: "clamp(48px,8vh,72px) 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "clamp(16px,5vw,32px)",
        }}
      >
        <div>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: T.slateLight, marginBottom: 12 }}>
            What's next
          </p>
          <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 400, color: T.navy, marginBottom: 10 }}>
            Explore our publications or join the lab
          </h3>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300, color: T.slateLight, maxWidth: 480 }}>
            Read our latest research findings or find out about opportunities to work with us.
          </p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", flexShrink: 0 }}>
          <button onClick={() => setPage("publications")} className="btn btn-primary">
            Publications {Ico.arrowR}
          </button>
          <button onClick={() => setPage("join")} className="btn btn-outline-dark">
            Opportunities
          </button>
        </div>
      </div>
    </Sec>
  );
}
