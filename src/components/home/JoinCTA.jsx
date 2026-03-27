import { T, Ico } from "../../constants";
import { Sec } from "../index";

export function JoinCTA({ setPage }) {
  return (
    <Sec bg={T.navy} style={{ padding: "clamp(48px, 8vh, 72px) 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "clamp(16px, 5vw, 32px)",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 12,
            }}
          >
            Opportunities
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(26px,3vw,38px)",
              fontWeight: 400,
              color: T.white,
              marginBottom: 10,
            }}
          >
            Join the Han Lab
          </h2>
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 15,
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 500,
            }}
          >
            We are recruiting researchers with a passion for circuit
            neuroscience and endocrinology.
          </p>
        </div>
        <button
          onClick={() => setPage("join")}
          className="btn btn-gold"
          style={{ flexShrink: 0 }}
        >
          Learn More {Ico.arrowR}
        </button>
      </div>
    </Sec>
  );
}
