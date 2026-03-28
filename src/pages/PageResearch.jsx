import { PILLARS } from "../data/pillars";
import { PageWrap, PageHero, Footer } from "../components";
import { PillarSection } from "../components/research/PillarSection";
import { MethodsGrid } from "../components/research/MethodsGrid";
import { ResearchCTA } from "../components/research/ResearchCTA";
import { SEO } from "../components/SEO";

export default function PageResearch() {
  return (
    <PageWrap>
      <SEO
        title="Research"
        url="/research"
        description="Three interconnected programmes at the intersection of neuroscience and endocrinology."
      />
      <PageHero
        eyebrow="Han Lab · St Andrews"
        title="Research"
        sub="Three interconnected programmes at the intersection of neuroscience and endocrinology."
      />

      {PILLARS.map((p, i) => (
        <PillarSection key={i} pillar={p} index={i} />
      ))}

      <MethodsGrid />
      <ResearchCTA />
      <Footer />
    </PageWrap>
  );
}
