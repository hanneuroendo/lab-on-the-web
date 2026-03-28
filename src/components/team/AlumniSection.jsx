import { useState } from "react";
import { T } from "../../constants";
import { TEAM } from "../../data/team";
import { Sec, SH } from "../index";
import { roleColor } from "../../utils/roleColor";

const alumni = TEAM.filter((m) => m.alumni);

// Group by left year, sorted most recent first
const groups = alumni.reduce((acc, m) => {
  const key = m.left ?? "Unknown";
  if (!acc[key]) acc[key] = [];
  acc[key].push(m);
  return acc;
}, {});

const groupKeys = Object.keys(groups).sort((a, b) => b.localeCompare(a));
const mostRecent = groupKeys[0];

export function AlumniSection() {
  const [open, setOpen] = useState({ [mostRecent]: true });

  if (alumni.length === 0) return null;

  const hasProject = alumni.some((m) => m.project);

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <Sec bg={T.offWhite} style={{ padding: "56px 0" }}>
      <div style={{ maxWidth: 860 }}>
        <SH eyebrow="Former Members" title="Lab Alumni" />
        <div style={{ marginTop: 32 }}>
          {groupKeys.map((key) => {
            const isOpen = !!open[key];
            const members = groups[key];
            return (
              <div key={key} style={{ marginBottom: 12 }}>
                {/* Group header */}
                <button
                  onClick={() => toggle(key)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: isOpen ? "rgba(61,143,166,0.06)" : T.slatePale,
                    border: "none",
                    borderRadius: 6,
                    padding: "10px 16px",
                    cursor: "pointer",
                    transition: "background 0.15s",
                  }}
                >
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500, color: T.navy }}>
                    {key}
                    <span style={{ fontWeight: 300, color: T.slateLight, marginLeft: 10 }}>
                      {members.length} {members.length === 1 ? "member" : "members"}
                    </span>
                  </span>
                  <span style={{ fontSize: 11, color: T.slateLight, display: "inline-block", transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.15s" }}>
                    ▶
                  </span>
                </button>

                {/* Collapsible table */}
                {isOpen && (
                  <div style={{ overflowX: "auto", marginTop: 2 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Inter',sans-serif" }}>
                      <thead>
                        <tr style={{ borderBottom: `2px solid ${T.slatePale}` }}>
                          <th style={{ textAlign: "left", padding: "8px 16px 10px 16px", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: T.slateLight }}>Name</th>
                          <th style={{ textAlign: "left", padding: "8px 16px 10px 0", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: T.slateLight }}>Role</th>
                          <th style={{ textAlign: "left", padding: "8px 16px 10px 0", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: T.slateLight }}>Years</th>
                          {hasProject && (
                            <th style={{ textAlign: "left", padding: "8px 0 10px 0", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: T.slateLight }}>Project</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {members.map((m) => (
                          <tr key={m.slug} style={{ borderBottom: `1px solid ${T.slatePale}` }}>
                            <td style={{ padding: "12px 16px 12px 16px", verticalAlign: "middle" }}>
                              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 500, color: T.navy }}>
                                {m.name}
                              </span>
                            </td>
                            <td style={{ padding: "12px 16px 12px 0", verticalAlign: "middle" }}>
                              <span
                                className="pill"
                                style={{
                                  background: roleColor(m.role).background,
                                  color: roleColor(m.role).color,
                                  border: `1px solid ${roleColor(m.role).border}`,
                                }}
                              >
                                {m.role}
                              </span>
                            </td>
                            <td style={{ padding: "12px 16px 12px 0", verticalAlign: "middle", fontSize: 13, color: T.slateLight, whiteSpace: "nowrap" }}>
                              {m.joined && m.left ? `${m.joined}–${m.left}` : "—"}
                            </td>
                            {hasProject && (
                              <td style={{ padding: "12px 0", verticalAlign: "middle", fontSize: 13, fontWeight: 300, color: T.slateLight }}>
                                {m.project ?? "—"}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Sec>
  );
}
