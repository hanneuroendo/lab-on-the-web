import { PageWrap, PageHero, Footer } from "../components";
import { PositionsGrid } from "../components/join/PositionsGrid";
import { WhatWeOffer } from "../components/join/WhatWeOffer";
import { ContactCTA } from "../components/join/ContactCTA";

export default function PageJoin() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Han Lab · St Andrews"
        title="Join the Lab"
        sub="We are always looking for talented, motivated scientists to join our team."
      />

      <PositionsGrid />
      <WhatWeOffer />
      <ContactCTA />
      <Footer />
    </PageWrap>
  );
}
