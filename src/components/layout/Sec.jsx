import { T } from "../../constants";

export function Sec({ children, bg = T.offWhite, style = {}, id }) {
  return (
    <section id={id} style={{ background: bg, padding: "80px 0", ...style }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>
        {children}
      </div>
    </section>
  );
}

export function SH({ eyebrow, title, sub, light = false, center = false, gold = false }) {
  return (
    <div style={{ marginBottom: 56, textAlign: center ? "center" : "left" }}>
      {eyebrow && (
        <p
          className="section-eyebrow"
          style={{
            color: light ? "rgba(255,255,255,0.4)" : T.slateLight,
            marginBottom: 14,
          }}
        >
          {eyebrow}
        </p>
      )}
      <div
        className={gold ? "gold-bar" : "teal-bar"}
        style={{
          marginBottom: 18,
          marginLeft: center ? "auto" : 0,
          marginRight: center ? "auto" : 0,
        }}
      />
      <h2
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "clamp(28px,3.5vw,40px)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
          color: light ? T.white : T.navy,
          marginBottom: sub ? 14 : 0,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 15,
            fontWeight: 300,
            lineHeight: 1.75,
            color: light ? "rgba(255,255,255,0.45)" : T.slateLight,
            maxWidth: center ? 560 : 520,
            marginLeft: center ? "auto" : 0,
            marginRight: center ? "auto" : 0,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
