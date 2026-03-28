import { PageWrap, Footer } from "../components";
import { HomeHero } from "../components/home/HomeHero";
import { ResearchTeaser } from "../components/home/ResearchTeaser";
import { NewsStrip } from "../components/home/NewsStrip";
import { JoinCTA } from "../components/home/JoinCTA";
import { LogoCloud } from "../components/home/LogoCloud";

export default function PageHome() {
  return (
    <PageWrap padTop={false}>
      <HomeHero />
      <ResearchTeaser />
      <NewsStrip />
      <JoinCTA />
      <LogoCloud />
      <Footer />
    </PageWrap>
  );
}
