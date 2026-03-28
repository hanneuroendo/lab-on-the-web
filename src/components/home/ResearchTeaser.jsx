import { useNavigate } from "react-router-dom";
import { T, Ico, F } from "../../constants";
import { Sec, SH } from "../index";

const pillars = [
  {
    icon: Ico.circuit,
    title: "Neural Circuitry for Growth",
    key: "01",
    text: "Investigating how hypothalamic circuits coordinate GH pulse patterns across sex and lifespan, and how their activity is modulated by endocrine feedback.",
  },
  {
    icon: Ico.repro,
    title: "Neural Circuitry for Reproduction",
    key: "02",
    text: "Defining how these circuit dynamics regulate reproductive state, fertility, and how they are reshaped across ageing.",
  },
  {
    icon: Ico.homeo,
    title: "Neural circuit interactions controlling state transitions",
    key: "03",
    text: "Understanding how shifts in one system influence the other, and how these interactions drive key transitions.",
  },
];

export function ResearchTeaser() {
  const navigate = useNavigate();
  return (
    <Sec>
      <SH
        eyebrow="Our Science"
        title="Three Research Pillars"
        sub="We employ state-of-the-art in vivo techniques to decode the neural logic of hormonal control and associated behaviours."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
        className="grid-3"
      >
        {pillars.map((p) => (
          <div
            key={p.key}
            className="card"
            style={{ padding: "32px 28px", cursor: "default" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <div className="icon-ring">{p.icon}</div>
              <span
                style={{
                  fontFamily: F.serif,
                  fontSize: 44,
                  fontWeight: 300,
                  color: "rgba(61,143,166,0.2)",
                  lineHeight: 1,
                }}
              >
                {p.key}
              </span>
            </div>
            <h3
              style={{
                fontFamily: F.serif,
                fontSize: 20,
                fontWeight: 500,
                color: T.navy,
                marginBottom: 10,
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontFamily: F.sans,
                fontSize: 13.5,
                fontWeight: 300,
                color: T.slate,
                lineHeight: 1.75,
                marginBottom: 20,
              }}
            >
              {p.text}
            </p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, textAlign: "center" }}>
        <button
          onClick={() => navigate("/research")}
          className="btn btn-outline-dark"
        >
          Full Research Overview {Ico.arrowR}
        </button>
      </div>
    </Sec>
  );
}
