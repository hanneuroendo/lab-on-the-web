import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { T, F } from "../../constants";
import { TEAM } from "../../data/team";
import { Sec, SH } from "../index";
import { TeamFilters } from "./TeamFilters";
import { roleColor } from "../../utils/roleColor";

const surname = (name) => name.trim().split(" ").at(-1);

const sorted = [
  ...TEAM.filter((m) => m.isPI),
  ...TEAM.filter((m) => !m.isPI && !m.alumni).sort((a, b) => surname(a.name).localeCompare(surname(b.name))),
];

function BioModal({ member, onClose }) {
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
                background: roleColor(member.role).background,
                color: roleColor(member.role).color,
                border: `1px solid ${roleColor(member.role).border}`,
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
        <div style={{ padding: "24px 28px 32px", overflowY: "auto" }}>
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

        {/* Footer */}
        <div style={{ padding: "0 28px 24px", display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
          <button onClick={onClose} className="btn btn-outline-dark">Close</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function MembersGrid({ slug }) {
  const [filter, setFilter] = useState("All");
  const [hoveredImg, setHoveredImg] = useState(null);
  const navigate = useNavigate();

  const isAlumniSlug = slug && TEAM.some((m) => m.slug === slug && m.alumni);
  useEffect(() => {
    if (isAlumniSlug) {
      navigate("/team", { replace: true });
      setTimeout(() => {
        document.getElementById("alumni")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [isAlumniSlug, navigate]);
  const modalMember = slug ? TEAM.find((m) => m.slug === slug && !m.alumni) ?? null : null;

  const shown = filter === "All" ? sorted : sorted.filter((m) => m.categories.includes(filter));

  return (
    <Sec bg={T.offWhite}>
      <SH eyebrow="Research Group" title="The Team" sub="Meet the people behind the science." />
      <TeamFilters filter={filter} setFilter={setFilter} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 22 }}>
        {shown.map((m, i) => (
          <div
            key={m.name}
            className="card"
            onClick={() => navigate(`/team/${m.slug}`)}
            onMouseEnter={() => setHoveredImg(i)}
            onMouseLeave={() => setHoveredImg(null)}
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
                  style={{
                    width: "100%", height: "100%", objectFit: "cover", display: "block",
                    filter: hoveredImg === i ? "none" : "grayscale(100%)",
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
                background: roleColor(m.role).background,
                color: roleColor(m.role).color,
                border: `1px solid ${roleColor(m.role).border}`,
                marginBottom: 10,
              }}
            >
              {m.role}
            </span>
            <h3 style={{ fontFamily: F.serif, fontSize: 21, fontWeight: 500, color: T.navy, marginBottom: 10 }}>
              {m.name}
            </h3>
            <p
              style={{
                fontFamily: F.sans,
                fontSize: 13.5, fontWeight: 300,
                color: T.slate, lineHeight: 1.75,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 5,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {m.bio.join(" ")}
            </p>
          </div>
        ))}
        {shown.length === 0 && (
          <p style={{ fontFamily: F.sans, fontSize: 14, color: T.slateLight, gridColumn: "1/-1", padding: "48px 0", textAlign: "center" }}>
            No members in this category yet.
          </p>
        )}
      </div>
      {modalMember && <BioModal member={modalMember} onClose={() => navigate("/team")} />}
    </Sec>
  );
}
