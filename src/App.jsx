import { useState, useCallback } from "react";
import { Nav } from "./components";
import PageHome from "./pages/PageHome";
import PageResearch from "./pages/PageResearch";
import PagePublications from "./pages/PagePublications";
import PageTeam from "./pages/PageTeam";
import PageJoin from "./pages/PageJoin";
import PageNews from "./pages/PageNews";

/* ═══════════════════════════════════════════════════════
   HAN LAB — NEUROENDOCRINOLOGY
   University of St Andrews · School of Psychology & Neuroscience
   Multi-page React application
═══════════════════════════════════════════════════════ */

export default function HanLabApp() {
  const [page, setPage] = useState("home");

  const navigate = useCallback((p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <PageHome setPage={navigate} />;
      case "research":
        return <PageResearch setPage={navigate} />;
      case "publications":
        return <PagePublications setPage={navigate} />;
      case "team":
        return <PageTeam setPage={navigate} />;
      case "join":
        return <PageJoin setPage={navigate} />;
      case "news":
        return <PageNews setPage={navigate} />;
      default:
        return <PageHome setPage={navigate} />;
    }
  };

  return (
    <>
      <Nav page={page} setPage={navigate} />
      {renderPage()}
    </>
  );
}
