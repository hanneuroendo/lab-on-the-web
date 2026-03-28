import { PageWrap, PageHero, Footer } from "../components";
import { PositionsGrid } from "../components/join/PositionsGrid";
import { WhatWeOffer } from "../components/join/WhatWeOffer";
import { ContactCTA } from "../components/join/ContactCTA";
import { SEO } from "../components/SEO";

const DESCRIPTION = "We are always looking for talented, motivated scientists to join our team.";

export default function PageJoin() {
  return (
    <PageWrap>
      <SEO title="Join the Lab" url="/join" description={DESCRIPTION} />
      <PageHero
        eyebrow="Han Lab · St Andrews"
        title="Join the Lab"
        sub={DESCRIPTION}
      />

      <PositionsGrid />
      <WhatWeOffer />
      <ContactCTA />
      <Footer />
    </PageWrap>
  );
}
