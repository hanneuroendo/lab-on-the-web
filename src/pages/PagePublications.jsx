import { useState, useMemo } from "react";
import { PUBS } from "../data/publications";
import { PageWrap, Sec, PageHero, Footer } from "../components";
import { PubControls } from "../components/publications/PubControls";
import { PubList } from "../components/publications/PubList";
import { SEO } from "../components/SEO";

const DESCRIPTION = "A selection of published and preprint research and review articles from Han Lab.";

const PUBS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Han Lab Publications",
  itemListElement: PUBS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "ScholarlyArticle",
      name: p.title,
      author: p.authors,
      datePublished: String(p.year),
      isPartOf: { "@type": "Periodical", name: p.journal },
      ...(p.doi ? { identifier: `https://doi.org/${p.doi}`, url: `https://doi.org/${p.doi}` } : {}),
    },
  })),
};

export default function PagePublications() {
  const [q, setQ] = useState("");
  const [filterType, setFilterType] = useState("All");

  const shown = useMemo(() => {
    const s = q.toLowerCase();
    return PUBS.filter((p) => {
      const matchQ =
        !s ||
        p.title.toLowerCase().includes(s) ||
        p.authors.toLowerCase().includes(s) ||
        p.journal.toLowerCase().includes(s) ||
        String(p.year).includes(s);
      const matchT = filterType === "All" || p.type === filterType;
      return matchQ && matchT;
    });
  }, [q, filterType]);

  return (
    <PageWrap>
      <SEO title="Publications" url="/publications" description={DESCRIPTION} jsonLd={PUBS_JSONLD} />
      <PageHero
        eyebrow="Han Lab · St Andrews"
        title="Publications"
        sub={DESCRIPTION}
      />

      <Sec bg="white">
        <PubControls
          q={q}
          setQ={setQ}
          filterType={filterType}
          setFilterType={setFilterType}
        />
        <PubList shown={shown} q={q} />
      </Sec>
      <Footer />
    </PageWrap>
  );
}
