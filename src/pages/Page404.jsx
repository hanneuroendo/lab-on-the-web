import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { T, F, CONTAINER_MAX_WIDTH } from "../constants";
import { SEO } from "../components/SEO";

export default function Page404() {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (count === 0) {
      navigate("/", { replace: true });
      return;
    }
    // trigger pulse animation at the start of each second
    setPulse(true);
    const resetPulse = setTimeout(() => setPulse(false), 400);
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => {
      clearTimeout(t);
      clearTimeout(resetPulse);
    };
  }, [count, navigate]);

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(145deg, ${T.navyDark} 0%, ${T.navy} 100%)` }}>
      <SEO title="Page Not Found" url="/404" />
      <div
        style={{
          maxWidth: CONTAINER_MAX_WIDTH,
          width: "100%",
          padding: "0 32px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: F.serif,
            fontSize: "clamp(96px, 18vw, 200px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.08)",
            lineHeight: 1,
            marginBottom: 0,
            letterSpacing: "-0.04em",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: F.serif,
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: T.white,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: 16,
            marginTop: -16,
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            fontFamily: F.sans,
            fontSize: 15,
            fontWeight: 300,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            marginBottom: 8,
          }}
        >
          The page you're looking for doesn't exist.
        </p>
        <p
          style={{
            fontFamily: F.sans,
            fontSize: 13,
            fontWeight: 300,
            color: "rgba(255,255,255,0.35)",
            marginBottom: 40,
          }}
        >
          Redirecting to home in{" "}
          <span
            style={{
              color: T.tealLight,
              display: "inline-block",
              transition: "transform 0.4s ease, opacity 0.4s ease",
              transform: pulse ? "scale(0.75)" : "scale(1)",
              opacity: pulse ? 0.4 : 1,
            }}
          >
            {count}s
          </span>
          …
        </p>
        <button
          onClick={() => navigate("/", { replace: true })}
          className="btn btn-primary"
        >
          Go Home
        </button>
      </div>
    </main>
  );
}
