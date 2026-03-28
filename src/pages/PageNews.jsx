import { useState } from "react";
import { NEWS } from "../data/news";
import { PageWrap, Sec, PageHero, Footer } from "../components";
import { NewsFilters } from "../components/news/NewsFilters";
import { NewsGrid } from "../components/news/NewsGrid";

export default function PageNews() {
  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All" ? NEWS : NEWS.filter((n) => n.tags.includes(filter));

  return (
    <PageWrap>
      <PageHero
        eyebrow="Han Lab · St Andrews"
        title="News &amp; Updates"
        sub="Recent publications, fundings, awards, talks, and lab updates."
      />

      <Sec bg="white">
        <NewsFilters filter={filter} setFilter={setFilter} />
        <NewsGrid items={shown} />
      </Sec>
      <Footer />
    </PageWrap>
  );
}
