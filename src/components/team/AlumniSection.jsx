import { useState } from "react";
import { T, F, S } from "../../constants";
import { TEAM } from "../../data/team";
import { Sec, SH } from "../index";
import { roleColor } from "../../utils/roleColor";

const alumni = TEAM.filter((m) => m.alumni);
const hasProject = alumni.some((m) => m.project);

// Group by "joined/left" label, sorted most recent left year first
const groups = alumni.reduce((acc, m) => {
  const key =
    m.joined && m.left && m.joined !== m.left
      ? `${m.joined}/${m.left}`
      : (m.left ?? "Unknown");
  if (!acc[key]) acc[key] = [];
  acc[key].push(m);
  return acc;
}, {});

const groupKeys = Object.keys(groups).sort((a, b) => {
  const leftA = a.includes("/") ? a.split("/")[1] : a;
  const leftB = b.includes("/") ? b.split("/")[1] : b;
  return leftB.localeCompare(leftA);
});
const mostRecent = groupKeys[0];

const thStyle = (paddingRight) => ({
  ...S.label,
  textAlign: "left",
  padding: `12px ${paddingRight} 10px ${paddingRight === "16px" ? "16px" : "0"}`,
  color: T.slateLight,
});

export function AlumniSection() {
  const [open, setOpen] = useState({ [mostRecent]: true });

  if (alumni.length === 0) return null;

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <Sec id="alumni" bg={T.offWhite} style={{ padding: "56px 0" }}>
      <div>
        <SH eyebrow="Former Members" title="Lab Alumni" />
        <div style={{ marginTop: 16 }}>
          {groupKeys.map((key) => {
            const isOpen = !!open[key];
            const members = groups[key];
            return (
              <div key={key} style={{ marginBottom: 12 }}>
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
                  <span style={{ fontFamily: F.sans, fontSize: 13, fontWeight: 500, color: T.navy }}>
                    {key}
                    <span style={{ fontWeight: 300, color: T.slateLight, marginLeft: 10 }}>
                      {members.length}{" "}
                      {members.length === 1 ? "member" : "members"}
                    </span>
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: T.slateLight,
                      display: "inline-block",
                      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.15s",
                    }}
                  >
                    ▶
                  </span>
                </button>

                {isOpen && (
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: F.sans }}>
                      <thead>
                        <tr style={{ borderBottom: `2px solid ${T.slatePale}` }}>
                          <th style={thStyle("16px")}>Name</th>
                          <th style={thStyle("16px")}>Role</th>
                          {hasProject && <th style={{ ...S.label, textAlign: "left", padding: "12px 0 10px 0", color: T.slateLight }}>Project</th>}
                        </tr>
                      </thead>
                      <tbody>
                        {members.map((m) => {
                          const rc = roleColor(m.role);
                          return (
                            <tr key={m.slug} style={{ borderBottom: `1px solid ${T.slatePale}` }}>
                              <td style={{ padding: "12px 16px 12px 16px", verticalAlign: "middle" }}>
                                <span style={{ fontFamily: F.serif, fontSize: 18, fontWeight: 500, color: T.navy }}>
                                  {m.name}
                                </span>
                              </td>
                              <td style={{ padding: "12px 16px 12px 0", verticalAlign: "middle" }}>
                                <span
                                  className="pill"
                                  style={{ background: rc.background, color: rc.color, border: `1px solid ${rc.border}` }}
                                >
                                  {m.role}
                                </span>
                              </td>
                              {hasProject && (
                                <td style={{ padding: "12px 0", verticalAlign: "middle", fontSize: 13, ...S.body, color: T.slateLight }}>
                                  {m.project ?? "—"}
                                </td>
                              )}
                            </tr>
                          );
                        })}
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
