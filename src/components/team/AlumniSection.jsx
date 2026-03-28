import { T } from "../../constants";
import { TEAM } from "../../data/team";
import { Sec, SH } from "../index";
import { roleColor } from "./MembersGrid";

const alumni = TEAM
  .filter((m) => m.alumni)
  .sort((a, b) => (b.left ?? "").localeCompare(a.left ?? ""));

export function AlumniSection() {
  if (alumni.length === 0) return null;

  return (
    <Sec bg={T.offWhite} style={{ padding: "56px 0" }}>
      <div style={{ maxWidth: 680 }}>
        <SH eyebrow="Former Members" title="Lab Alumni" />
        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 32 }}>
          {alumni.map((m) => (
            <div
              key={m.slug}
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 16,
                alignItems: "stretch",
              }}
            >
              <div style={{ width: 3, borderRadius: 2, background: roleColor(m.role).color, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
                  <div>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 500, color: T.navy }}>
                      {m.name}
                    </span>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: roleColor(m.role).color, marginLeft: 12 }}>
                      {m.role}
                    </span>
                  </div>
                  {m.joined && m.left && (
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: T.slateLight, flexShrink: 0 }}>
                      {m.joined}–{m.left}
                    </span>
                  )}
                </div>
                {m.project && (
                  <span
                    className="pill"
                    style={{
                      display: "inline-block",
                      marginTop: 6,
                      background: roleColor(m.role).background,
                      color: roleColor(m.role).color,
                      border: `1px solid ${roleColor(m.role).border}`,
                    }}
                  >
                    {m.project}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}
