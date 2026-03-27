import { T } from "../../constants";

export function PageHero({ title, sub, eyebrow }) {
  return (
    <div
      style={{
        background: `linear-gradient(145deg, ${T.navyDark} 0%, ${T.navy} 100%)`,
        padding: "72px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {eyebrow && (
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: T.tealLight,
              marginBottom: 12,
            }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(38px,5vw,64px)",
            fontWeight: 300,
            color: T.white,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: sub ? 16 : 0,
          }}
        >
          {title}
        </h1>
        {sub && (
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 16,
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              maxWidth: 560,
            }}
          >
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}
