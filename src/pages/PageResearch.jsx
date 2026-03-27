import { PILLARS } from "../data/pillars";
import { PageWrap, PageHero, Footer } from "../components";
import { PillarSection } from "../components/research/PillarSection";
import { MethodsGrid } from "../components/research/MethodsGrid";
import { ResearchCTA } from "../components/research/ResearchCTA";

export default function PageResearch({ setPage }) {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Han Lab · St Andrews"
        title="Research"
        sub="Three interconnected programmes at the intersection of neuroscience and endocrinology."
      />

      {PILLARS.map((p, i) => (
        <PillarSection key={i} pillar={p} index={i} />
      ))}

      <MethodsGrid />
      <ResearchCTA setPage={setPage} />
      <Footer setPage={setPage} />
    </PageWrap>
  );
}
