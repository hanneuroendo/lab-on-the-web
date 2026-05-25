import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { T, F } from "../../constants";
import { TEAM, TEAM_SORTED } from "../../data/team";
import { Sec, SH } from "../index";
import { TeamFilters } from "./TeamFilters";
import { MemberCard } from "./MemberCard";
import { BioModal } from "./BioModal";

export function MembersGrid({ slug }) {
  const [filter, setFilter] = useState("All");
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
  const shown = filter === "All" ? TEAM_SORTED : TEAM_SORTED.filter((m) => m.categories.includes(filter));

  return (
    <Sec bg={T.offWhite}>
      <SH eyebrow="Research Group" title="The Team" sub="Meet the people behind the science." />
      <TeamFilters filter={filter} setFilter={setFilter} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 22 }}>
        {shown.map((m) => (
          <MemberCard key={m.name} m={m} onClick={() => navigate(`/team/${m.slug}`)} />
        ))}
        {shown.length === 0 && (
          <p style={{ fontFamily: F.sans, fontSize: 15, fontWeight: 400, color: T.slate, gridColumn: "1/-1", padding: "48px 0", textAlign: "center" }}>
            No members in this category yet.
          </p>
        )}
      </div>
      {modalMember && <BioModal member={modalMember} onClose={() => navigate("/team")} />}
    </Sec>
  );
}
