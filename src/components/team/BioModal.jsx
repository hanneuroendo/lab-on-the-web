import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { T, F } from "../../constants";
import { roleColor } from "../../utils/roleColor";

export function BioModal({ member, onClose }) {
  const [coloured, setColoured] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setColoured(true), 300);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [onClose]);

  const rc = roleColor(member.role);

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(19,31,40,0.82)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px 16px",
        animation: "modalFadeIn 0.2s ease both",
        cursor: "pointer",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${member.name} bio`}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: T.white,
          borderRadius: 10,
          maxWidth: 640,
          width: "100%",
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: 20,
            padding: "28px 28px 24px",
            borderBottom: `1px solid ${T.slatePale}`,
            flexShrink: 0,
          }}
        >
          <div
            className="avatar"
            style={{
              background: `linear-gradient(135deg, ${member.color}, ${member.color}bb)`,
              overflow: "hidden", padding: 0, flexShrink: 0,
            }}
          >
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                style={{
                  width: "100%", height: "100%", objectFit: "cover", display: "block",
                  filter: coloured ? "none" : "grayscale(100%)",
                  transition: "filter 1.2s ease",
                }}
              />
            ) : (
              member.initials
            )}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <span
              className="pill"
              style={{
                background: rc.background,
                color: rc.color,
                border: `1px solid ${rc.border}`,
                marginBottom: 8, display: "inline-block",
              }}
            >
              {member.role}
            </span>
            <h3 style={{ fontFamily: F.serif, fontSize: 26, fontWeight: 500, color: T.navy, lineHeight: 1.1 }}>
              {member.name}
            </h3>
            {member.project && (
              <p style={{ fontFamily: F.sans, fontSize: 12.5, fontWeight: 300, color: T.slateLight, marginTop: 12, lineHeight: 1.8 }}>
                <span style={{ fontWeight: 500 }}>Project:</span> {member.project}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: T.slateLight, fontSize: 22, lineHeight: 1,
              flexShrink: 0, padding: 4,
            }}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px 40px", overflowY: "auto" }}>
          {member.bio.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: F.sans,
                fontSize: 14.5, fontWeight: 300,
                color: T.slate, lineHeight: 1.9,
                marginBottom: i < member.bio.length - 1 ? 18 : 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>


      </div>
    </div>,
    document.body
  );
}
