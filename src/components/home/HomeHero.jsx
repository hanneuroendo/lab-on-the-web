import NeuralGrid from "./NeuralGrid";
import { T, Ico } from "../../constants";

export function HomeHero({ setPage }) {
  return (
    <header
      style={{
        position: "relative",
        height: "auto",
        minHeight: "clamp(600px, 60vh, 100vh)",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(150deg, ${T.navyDeep} 0%, ${T.navy} 55%, #264050 100%)`,
        overflow: "hidden",
      }}
    >
      {/* ── LAYER 0: NeuralGrid (behind everything) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <NeuralGrid opacity={0.8} />
      </div>

      {/* ── LAYER 1: Background (Rings) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-8%",
            top: "12%",
            width: "clamp(200px, 50vw, 600px)",
            height: "clamp(200px, 50vw, 600px)",
            borderRadius: "50%",
            border: "1px solid rgba(61,143,166,0.1)",
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "2%",
            top: "22%",
            width: "clamp(150px, 40vw, 380px)",
            height: "clamp(150px, 40vw, 380px)",
            borderRadius: "50%",
            border: "1px solid rgba(61,143,166,0.07)",
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "14%",
            top: "38%",
            width: "clamp(80px, 25vw, 140px)",
            height: "clamp(80px, 25vw, 140px)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(61,143,166,0.1), transparent)",
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 50,
            background: `linear-gradient(to bottom, transparent, ${T.offWhite})`,
            zIndex: 0,
          }}
        />
      </div>

      {/* ── LAYER 2: Click Shield ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "auto",
          background: "transparent",
        }}
      />

      {/* ── LAYER 3: Hero Content ── */}
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding:
            "clamp(90px, 14vh, 160px) clamp(20px, 5vw, 32px) clamp(80px, 15vh, 160px)",
          width: "100%",
          position: "relative",
          zIndex: 2,
          isolation: "isolate",
        }}
      >
        {/* Badge */}
        <div
          className="fu"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 16px",
            borderRadius: 99,
            marginBottom: 36,
            border: "1px solid rgba(201,150,60,0.3)",
            background: "rgba(201,150,60,0.06)",
            maxWidth: 1600,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: T.gold,
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 10.5,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            University of St Andrews &ensp;·&ensp; School of Psychology &amp;
            Neuroscience
          </span>
        </div>

        {/* Headline */}
        <h1
          className="fu d1"
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(36px,6vw,88px)",
            fontWeight: 300,
            lineHeight: 1.0,
            color: T.white,
            letterSpacing: "-0.025em",
            marginBottom: 4,
          }}
        >
          Investigating the
        </h1>
        <h1
          className="fu d2"
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(36px,6vw,88px)",
            fontWeight: 300,
            lineHeight: 1.0,
            color: T.white,
            letterSpacing: "-0.025em",
            fontStyle: "italic",
            marginBottom: 4,
          }}
        >
          neural architecture
        </h1>
        <h1
          className="fu d2"
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(36px,6vw,88px)",
            fontWeight: 300,
            lineHeight: 1.0,
            color: T.white,
            letterSpacing: "-0.025em",
            marginBottom: 32,
          }}
        >
          of hormonal control.
        </h1>

        <div className="hero-rule" style={{ marginBottom: 32 }} />

        <p
          className="fu d3"
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 540,
            marginBottom: 44,
            letterSpacing: "0.01em",
          }}
        >
          Our research investigates how neural circuit dynamics and plasticity
          orchestrate complex hormone pattern generation across sex differences,
          postnatal development, and in neuroendocrine disorders.
        </p>

        <div
          className="fu d4"
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            pointerEvents: "auto",
          }}
        >
          <button
            onClick={() => setPage("research")}
            className="btn btn-primary"
          >
            Explore Research {Ico.arrowR}
          </button>
          <button
            onClick={() => setPage("publications")}
            className="btn btn-outline-light"
          >
            View Publications
          </button>
        </div>
      </div>
    </header>
  );
}
