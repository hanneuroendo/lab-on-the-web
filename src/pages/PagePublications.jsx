import { useState, useMemo } from "react";
import { PUBS } from "../data/publications";
import { PageWrap, Sec, PageHero, Footer } from "../components";
import { PubControls } from "../components/publications/PubControls";
import { PubList } from "../components/publications/PubList";

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
      <PageHero
        eyebrow="Han Lab · St Andrews"
        title="Publications"
        sub="A selection of published and preprint research and review articles."
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
