import { useParams } from "react-router-dom";
import { TEAM } from "../data/team";
import { PageWrap, PageHero, Footer } from "../components";
import { MembersGrid } from "../components/team/MembersGrid";
import { CollaboratorsSection } from "../components/team/CollaboratorsSection";
import { AlumniSection } from "../components/team/AlumniSection";
import { LabPhotos } from "../components/team/LabPhotos";
import { SEO } from "../components/SEO";

const PAGE_DESCRIPTION = "Get to know our team and the projects they are passionate about.";

export default function PageTeam() {
  const { slug } = useParams();
  const member = slug ? TEAM.find((m) => m.slug === slug) : null;

  const seoTitle = member ? member.name : "The Team";
  const seoDescription = member
    ? `${member.name} — ${member.role} at Han Lab, University of St Andrews.`
    : PAGE_DESCRIPTION;
  const seoUrl = member ? `/team/${member.slug}` : "/team";
  const memberJsonLd = member
    ? {
        "@context": "https://schema.org",
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        affiliation: {
          "@type": "ResearchOrganization",
          name: "Han Lab",
          url: "https://www.hanneuroendo.org",
        },
        url: `https://www.hanneuroendo.org/team/${member.slug}`,
      }
    : null;

  return (
    <PageWrap>
      <SEO
        title={seoTitle}
        url={seoUrl}
        description={seoDescription}
        jsonLd={memberJsonLd}
      />
      <PageHero
        eyebrow="Han Lab · St Andrews"
        title="The Team"
        sub={PAGE_DESCRIPTION}
      />

      <MembersGrid slug={slug} />
      <CollaboratorsSection />
      <AlumniSection />
      <LabPhotos />
      <Footer />
    </PageWrap>
  );
}
