import { T, F } from "../../constants";
import { POSITIONS } from "../../data/positions";
import { Sec } from "../index";

export function PositionsGrid() {
  return (
    <Sec bg={T.white}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {POSITIONS.map((pos) => (
          <div key={pos.title} style={{ background: T.offWhite, borderRadius: 10, padding: "40px 48px", border: `1px solid ${T.slatePale}` }}>
            <div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                  <h2 style={{ fontFamily: F.serif, fontSize: 28, fontWeight: 500, color: T.navy, letterSpacing: "-0.01em" }}>
                    {pos.title}
                  </h2>
                  {pos.status && (
                    <span style={{
                      flexShrink: 0,
                      fontFamily: F.sans,
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      borderRadius: 99,
                      background: pos.status === "Open" ? "#e8f5ec" : pos.status === "Closed" ? "#fdecea" : "#fdf4e6",
                      color: pos.status === "Open" ? "#256637" : pos.status === "Closed" ? "#9b2a1a" : "#7a4e0d",
                      border: `1px solid ${pos.status === "Open" ? "#b6dfc0" : pos.status === "Closed" ? "#f5c2bd" : "#f0dcb0"}`,
                    }}>
                      {pos.status}
                    </span>
                  )}
                </div>
                <p style={{ fontFamily: F.sans, fontSize: 14, fontWeight: 300, color: T.slate, lineHeight: 1.8, marginBottom: 28 }}>
                  {pos.desc}
                </p>
                {pos.reqs?.length > 0 && <>
                  <p style={{ fontFamily: F.sans, fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: T.teal, marginBottom: 14 }}>
                    We are looking for
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9, marginBottom: 28 }}>
                    {pos.reqs.map((r, j) => (
                      <li key={j} style={{ display: "flex", gap: 14, alignItems: "flex-start", fontFamily: F.sans, fontSize: 13.5, fontWeight: 300, color: T.slate, lineHeight: 1.55 }}>
                        <span style={{ color: T.gold, flexShrink: 0, marginTop: 1, fontWeight: 500 }}>—</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </>}
                {pos.how && <div style={{ background: T.white, borderRadius: 8, padding: "20px 24px", border: `1px solid ${T.slatePale}` }}>
                  <p style={{ fontFamily: F.sans, fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: T.teal, marginBottom: 10 }}>
                    How to apply
                  </p>
                  <p style={{ fontFamily: F.sans, fontSize: 12.5, fontWeight: 300, color: T.slate, lineHeight: 1.7 }}>
                    {pos.how}
                  </p>
                </div>}
            </div>
          </div>
        ))}
      </div>
    </Sec>
  );
}
