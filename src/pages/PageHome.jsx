import { PageWrap, Footer } from "../components";
import { HomeHero } from "../components/home/HomeHero";
import { ResearchTeaser } from "../components/home/ResearchTeaser";
import { NewsStrip } from "../components/home/NewsStrip";
import { JoinCTA } from "../components/home/JoinCTA";
import { LogoCloud } from "../components/home/LogoCloud";
import { SEO } from "../components/SEO";

export default function PageHome() {
  return (
    <PageWrap padTop={false}>
      <SEO
        url="/"
        description="Our research investigates how neural circuit dynamics and plasticity orchestrate complex hormone pattern generation across sex differences, postnatal development, and in neuroendocrine disorders."
      />
      <HomeHero />
      <ResearchTeaser />
      <NewsStrip />
      <JoinCTA />
      <LogoCloud />
      <Footer />
    </PageWrap>
  );
}
