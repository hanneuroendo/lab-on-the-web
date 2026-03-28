import { T, Ico, F } from "../../constants";
import { Sec } from "../index";

export function PillarSection({ pillar, index }) {
  return (
    <Sec bg={index % 2 === 0 ? T.offWhite : T.white}>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }}
        className="grid-2"
      >
        {/* Left */}
        <div className="pillar-sticky">
          <div className="icon-ring" style={{ marginBottom: 20 }}>
            {Ico[pillar.icon]}
          </div>
          <span style={{ fontFamily: F.serif, fontSize: 72, fontWeight: 300, color: "rgba(61,143,166,0.2)", lineHeight: 1, display: "block", marginBottom: 8 }}>
            {pillar.num}
          </span>
          <h2 style={{ fontFamily: F.serif, fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 500, color: T.navy, marginBottom: 20, lineHeight: 1.15 }}>
            {pillar.title}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {pillar.tags.map((t) => (
              <span key={t} className="pill" style={{ background: "rgba(61,143,166,0.08)", color: T.teal, border: "1px solid rgba(61,143,166,0.18)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* Right */}
        <div>
          {pillar.paras.map((para, j) => (
            <p
              key={para}
              style={{
                fontFamily: F.sans, fontSize: 15, fontWeight: 300,
                color: T.slate, lineHeight: 1.85,
                marginBottom: j < pillar.paras.length - 1 ? 22 : 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </Sec>
  );
}
