import { useState } from "react";
import { T, F } from "../../constants";
import { roleColor } from "../../utils/roleColor";

export function MemberCard({ m, onClick }) {
  const [hovered, setHovered] = useState(false);
  const rc = roleColor(m.role);

  return (
    <div
      className="card"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "32px 24px 28px",
        textAlign: "center",
        cursor: "pointer",
        ...(m.isPI && { background: "rgba(26,45,77,0.04)" }),
      }}
    >
      <div
        className="avatar"
        style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}bb)`, overflow: "hidden", padding: 0 }}
      >
        {m.photo ? (
          <img
            src={m.photo}
            alt={m.name}
            loading="lazy"
            style={{
              width: "100%", height: "100%", objectFit: "cover", display: "block",
              filter: hovered ? "none" : "grayscale(100%)",
              transition: "filter 0.3s ease",
            }}
          />
        ) : (
          m.initials
        )}
      </div>
      <span
        className="pill"
        style={{
          background: rc.background,
          color: rc.color,
          border: `1px solid ${rc.border}`,
          marginBottom: 10,
        }}
      >
        {m.role}
      </span>
      <h3 style={{ fontFamily: F.serif, fontSize: 21, fontWeight: 500, color: T.navy, marginBottom: 10 }}>
        {m.name}
      </h3>
      <div style={{ position: "relative" }}>
        <p
          style={{
            fontFamily: F.sans,
            fontSize: 13.5, fontWeight: 300,
            color: T.slate, lineHeight: 1.75,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 5,
            overflow: "hidden",
          }}
        >
          {m.bio.join(" ")}
        </p>
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: 40,
            background: `linear-gradient(to bottom, transparent, ${m.isPI ? "#eaecf0" : "var(--white)"})`,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
