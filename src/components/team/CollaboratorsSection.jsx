import { T, Ico } from "../../constants";
import { COLLABORATORS } from "../../data/collaborators";
import { Sec, SH } from "../index";

export function CollaboratorsSection() {
  return (
    <Sec bg={T.white}>
      <SH
        eyebrow="Collaborations"
        title="Research Collaborators"
        sub="Researchers and groups we actively collaborate with across the globe."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {COLLABORATORS.map((c) => (
          <div
            key={c.name}
            style={{
              background: T.offWhite,
              border: `1px solid ${T.slatePale}`,
              borderRadius: 10,
              padding: "22px 24px",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18,
                fontWeight: 500,
                color: T.navy,
                marginBottom: 8,
                lineHeight: 1.2,
              }}
            >
              {c.name}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12.5,
                fontWeight: 300,
                color: T.slate,
                marginBottom: 6,
              }}
            >
              {c.role}
            </p>
            {c.department && (
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 300,
                  color: T.slateLight,
                  marginBottom: 6,
                }}
              >
                {c.department}
              </p>
            )}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 400,
                color: T.teal,
                marginBottom: c.url ? 18 : 0,
              }}
            >
              {c.institution}{c.city ? `, ${c.city}` : ""}
            </p>
            {c.url && (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  color: T.slateLight,
                  textDecoration: "none",
                  transition: "color 0.18s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = T.teal)}
                onMouseLeave={(e) => (e.currentTarget.style.color = T.slateLight)}
              >
                Profile {Ico.extLink}
              </a>
            )}
          </div>
        ))}
      </div>
    </Sec>
  );
}
