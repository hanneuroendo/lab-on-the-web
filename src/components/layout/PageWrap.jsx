import { useEffect } from "react";

export function PageWrap({ children, padTop = true }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <main
      className="page-enter"
      style={{ paddingTop: padTop ? 66 : 0, minHeight: "100vh" }}
    >
      {children}
    </main>
  );
}
