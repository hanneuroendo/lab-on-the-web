import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { T, Ico } from "../../constants";
import { NAV_LINKS } from "../../data/navigation";
import logo from "../../assets/logo.svg";

export function Nav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onOutsideClick = (e) => {
      if (
        drawerRef.current && !drawerRef.current.contains(e.target) &&
        navRef.current && !navRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onOutsideClick);
    document.addEventListener("touchstart", onOutsideClick);
    return () => {
      document.removeEventListener("mousedown", onOutsideClick);
      document.removeEventListener("touchstart", onOutsideClick);
    };
  }, [mobileOpen]);

  const textCol = T.navy;
  const bg = mobileOpen ? T.navyDark : T.white;
  const shadow = mobileOpen
    ? "none"
    : "0 2px 12px rgba(47,72,88,0.12), 0 1px 0 rgba(47,72,88,0.06)";
  const logoCol = mobileOpen ? T.white : T.navy;
  const subCol = mobileOpen ? T.tealLight : T.teal;

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 66,
          background: bg,
          boxShadow: shadow,
          zIndex: 200,
          transition: "background 0.2s, box-shadow 0.2s",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "0 32px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: logoCol,
              padding: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                lineHeight: 1,
              }}
            >
              <img
                src={logo}
                alt="Han Lab logo"
                style={{
                  width: 52,
                  height: 52,
                  objectFit: "contain",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.9)",
                  flexShrink: 0,
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 25,
                    fontWeight: 900,
                    lineHeight: 1,
                    }}
                >
                  Han Lab
                </span>
                <span
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 9.5,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: subCol,
                    lineHeight: 1,
                  }}
                >
                  Neuroendocrinology
                </span>
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div
            className="hide-mobile"
            style={{ display: "flex", gap: 32, alignItems: "center" }}
          >
            {NAV_LINKS.map(({ key, path, label }) => (
              <button
                key={key}
                onClick={() => navigate(path)}
                className={`nav-link ${pathname === path ? "active" : ""}`}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  color: pathname === path ? T.teal : textCol,
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: mobileOpen ? T.tealLight : logoCol,
              padding: 4,
              transition: "color 0.2s",
            }}
            className="show-mobile"
          >
            {mobileOpen ? Ico.close : Ico.menu}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          ref={drawerRef}
          className="mobile-menu"
          style={{
            position: "fixed",
            top: 66,
            left: 0,
            right: 0,
            zIndex: 199,
            background: T.navyDeep,
            borderTop: `1px solid rgba(61,143,166,0.3)`,
            padding: "20px 16px 28px",
            overflowY: "auto",
            maxHeight: "calc(100vh - 66px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
          }}
        >
          {NAV_LINKS.map(({ key, path, label }) => (
            <button
              key={key}
              onClick={() => {
                navigate(path);
                setMobileOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
                textAlign: "left",
                background: `rgba(255,255,255,0.04)`,
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                cursor: "pointer",
                padding: "18px 24px",
                marginBottom: "12px",
                fontFamily: "'Inter',sans-serif",
                fontSize: "15px",
                fontWeight: pathname === path ? 500 : 400,
                letterSpacing: "0.01em",
                color: pathname === path ? T.white : "rgba(255,255,255,0.6)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `rgba(255,255,255,0.08)`;
                e.currentTarget.style.color = T.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `rgba(255,255,255,0.04)`;
                e.currentTarget.style.color = pathname === path ? T.white : "rgba(255,255,255,0.6)";
              }}
            >
              {pathname === path && (
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.teal, flexShrink: 0 }} />
              )}
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
