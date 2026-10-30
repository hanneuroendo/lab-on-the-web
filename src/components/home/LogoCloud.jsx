import { T, F } from "../../constants";
import { AFFILIATES } from "../../data/affiliates";
import { Sec } from "../index";

// Give every logo roughly the same visual area, so wide wordmarks don't
// dominate and square marks don't look tiny next to them.
const LOGO_AREA = 66 * 66;
const LOGO_MAX_HEIGHT = 48;

function sizeByArea(e) {
  const img = e.currentTarget;
  const aspect = img.naturalWidth / img.naturalHeight;
  if (!aspect) return;
  const height = Math.min(LOGO_MAX_HEIGHT, Math.sqrt(LOGO_AREA / aspect));
  img.style.maxWidth = "none";
  img.style.maxHeight = "none";
  img.style.width = `${Math.round(height * aspect)}px`;
}

export function LogoCloud() {
  return (
    <Sec bg={T.offWhite} maxWidth={1400} style={{ padding: "clamp(40px, 6vh, 64px) 0" }}>
      <p style={{ fontFamily: F.sans, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: T.slate, textAlign: "center", marginBottom: 36 }}>
        Affiliated & Funded By
      </p>
      <div className="logo-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "clamp(16px, 3vw, 40px)" }}>
        {AFFILIATES.map(({ abbr, name, logo }) => (
          <div
            key={abbr}
            title={name}
            style={{ flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.55, filter: "grayscale(100%)", transition: "opacity 0.2s, filter 0.2s", cursor: "default" }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.filter = "grayscale(0%)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.55"; e.currentTarget.style.filter = "grayscale(100%)"; }}
          >
            {logo ? (
              <img src={logo} alt={name} loading="lazy" onLoad={sizeByArea} style={{ display: "block", width: "auto", height: "auto", maxWidth: 180, maxHeight: 40 }} />
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
