import { T, F } from "../../constants";
import { AFFILIATES } from "../../data/affiliates";
import { Sec } from "../index";

export function LogoCloud() {
  return (
    <Sec bg={T.offWhite} style={{ padding: "clamp(40px, 6vh, 64px) 0" }}>
      <p style={{ fontFamily: F.sans, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: T.slateLight, textAlign: "center", marginBottom: 36 }}>
        Affiliated & Funded By
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", justifyItems: "center", alignItems: "center", gap: "clamp(24px, 4vw, 48px)" }}>
        {AFFILIATES.map(({ abbr, name, logo }) => (
          <div
            key={abbr}
            title={name}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.55, filter: "grayscale(100%)", transition: "opacity 0.2s, filter 0.2s", cursor: "default" }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.filter = "grayscale(0%)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.55"; e.currentTarget.style.filter = "grayscale(100%)"; }}
          >
            {logo ? (
              <img src={logo} alt={name} style={{ width: "100%", maxWidth: 120, maxHeight: 40, height: "auto", objectFit: "contain" }} />
            ) : (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <span style={{ fontFamily: F.serif, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 600, letterSpacing: "0.04em", color: T.navy, whiteSpace: "nowrap" }}>
                  {abbr}
                </span>
                <span style={{ fontFamily: F.sans, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: T.slateLight, whiteSpace: "nowrap" }}>
                  {name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Sec>
  );
}
