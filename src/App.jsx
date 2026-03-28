import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Nav } from "./components";
import PageHome from "./pages/PageHome";
import PageResearch from "./pages/PageResearch";
import PagePublications from "./pages/PagePublications";
import PageTeam from "./pages/PageTeam";
import PageJoin from "./pages/PageJoin";
import PageNews from "./pages/PageNews";
import Page404 from "./pages/Page404";

/* ═══════════════════════════════════════════════════════
   HAN LAB — NEUROENDOCRINOLOGY
   University of St Andrews · School of Psychology & Neuroscience
   Multi-page React application
═══════════════════════════════════════════════════════ */

export default function HanLabApp() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/research" element={<PageResearch />} />
        <Route path="/publications" element={<PagePublications />} />
        <Route path="/team" element={<PageTeam />} />
        <Route path="/team/:slug" element={<PageTeam />} />
        <Route path="/join" element={<PageJoin />} />
        <Route path="/news" element={<PageNews />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
