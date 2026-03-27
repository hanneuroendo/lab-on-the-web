import { T } from "../../constants";
import { NAV_LINKS } from "../../data/navigation";
import logo from "../../assets/logo-dark.svg";

const SOCIALS = [
  {
    label: "X / Twitter",
    href: "https://x.com/hanlabneuroendo",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/hanneuroendo",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/hanneuroendo.bsky.social",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.299-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" />
      </svg>
    ),
  },
];

export function Footer({ setPage }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: T.navyDeep, color: T.white }}>
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "clamp(48px,6vw,72px) clamp(20px,5vw,32px) 36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Nav links */}
        <div
          style={{
            display: "flex",
            gap: 32,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          {NAV_LINKS.map(({ key: k, label: l }) => (
            <button
              key={k}
              onClick={() => setPage(k)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Inter',sans-serif",
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: "0.02em",
                color: "rgba(255,255,255,0.5)",
                transition: "color 0.18s",
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = T.tealLight)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
              }
            >
              {l}
            </button>
          ))}
        </div>

        {/* Logo + name vertical */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            marginBottom: 12,
          }}
        >
          <img
            src={logo}
            alt="Han Lab logo"
            style={{
              width: 64,
              height: 64,
              objectFit: "contain",
              flexShrink: 0,
            }}
            onError={(e) => {
              e.currentTarget.style.opacity = "0.3";
            }}
          />
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 26,
                fontWeight: 400,
                color: T.white,
                lineHeight: 1.1,
                marginBottom: 3,
              }}
            >
              Han Lab
            </div>
            <div
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 9.5,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: T.tealLight,
              }}
            >
              Neuroendocrinology
            </div>
          </div>
        </div>

        {/* Address */}
        <p
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 12.5,
            fontWeight: 300,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8,
            marginBottom: 28,
          }}
        >
          School of Psychology &amp; Neuroscience · University of St Andrews
          <br />
          St Mary's Quad, South Street · St Andrews, Fife KY16 9JP · United
          Kingdom
        </p>

        {/* Social icons */}
        <div style={{ display: "flex", gap: 20, marginBottom: 48 }}>
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                color: "rgba(255,255,255,0.55)",
                transition: "color 0.18s",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = T.tealLight)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
              }
            >
              {icon}
            </a>
          ))}
        </div>

        <hr
          className="subtle-dark"
          style={{ width: "100%", marginBottom: 24 }}
        />

        {/* Copyright + back to top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 12,
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            © {new Date().getFullYear()} Han Lab · University of St Andrews ·
            All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 4,
              cursor: "pointer",
              padding: "6px 14px",
              fontFamily: "'Inter',sans-serif",
              fontSize: 11.5,
              fontWeight: 400,
              letterSpacing: "0.05em",
              color: "rgba(255,255,255,0.55)",
              transition: "color 0.18s, border-color 0.18s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = T.tealLight;
              e.currentTarget.style.borderColor = T.teal;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.55)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
