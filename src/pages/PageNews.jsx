import { useState } from "react";
import { NEWS } from "../data/news";
import { PageWrap, Sec, PageHero, Footer } from "../components";
import { NewsFilters } from "../components/news/NewsFilters";
import { NewsGrid } from "../components/news/NewsGrid";
import { SEO } from "../components/SEO";

export default function PageNews() {
  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All" ? NEWS : NEWS.filter((n) => n.tags.includes(filter));

  return (
    <PageWrap>
      <SEO
        title="News & Updates"
        url="/news"
        description="Recent publications, fundings, awards, talks, and lab updates from Han Lab."
      />
      <PageHero
        eyebrow="Han Lab · St Andrews"
        title="News & Updates"
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
