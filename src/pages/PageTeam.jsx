import { PageWrap, PageHero, Footer } from "../components";
import { MembersGrid } from "../components/team/MembersGrid";
import { CollaboratorsSection } from "../components/team/CollaboratorsSection";
import { AlumniSection } from "../components/team/AlumniSection";
import { LabPhotos } from "../components/team/LabPhotos";

export default function PageTeam() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Han Lab · St Andrews"
        title="The Team"
        sub="Get to know our team and the projects they are passionate about."
      />

      <MembersGrid />
      <CollaboratorsSection />
      <AlumniSection />
      <LabPhotos />
      <Footer />
    </PageWrap>
  );
}
