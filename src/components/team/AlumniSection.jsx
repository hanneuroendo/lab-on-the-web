import { T } from "../../constants";
import { TEAM } from "../../data/team";
import { Sec, SH } from "../index";

const alumni = TEAM
  .filter((m) => m.alumni)
  .sort((a, b) => (b.left ?? "").localeCompare(a.left ?? ""));

export function AlumniSection() {
  if (alumni.length === 0) return null;

  return (
    <Sec bg={T.offWhite} style={{ padding: "56px 0" }}>
      <div style={{ maxWidth: 680 }}>
        <SH eyebrow="Former Members" title="Lab Alumni" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 32 }}>
          {alumni.map((m) => (
            <div
              key={m.slug}
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 16,
                padding: "14px 0",
                borderBottom: `1px solid ${T.slatePale}`,
              }}
            >
              <div>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 500, color: T.navy }}>
                  {m.name}
                </span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: T.slateLight, marginLeft: 12 }}>
                  {m.role}
                </span>
              </div>
              {m.joined && m.left && (
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: T.slateLight, flexShrink: 0 }}>
                  {m.joined}–{m.left}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}
