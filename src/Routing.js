import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageSummaryUa } from "./pages/PageSummaryUa";
import { PageSummaryEn } from "./pages/PageSummaryEn";
import { PageSummaryRu } from "./pages/PageSummaryRu";
import { NofoundPage } from "./pages/Nofoundpage";
import { PageProjectsEn } from "./pages/PageProjectsEn";
import { PageProjectsUa } from "./pages/PageProjectsUa";
import { PageProjectsRu } from "./pages/PageProjectsRu";
import BackTop from "./core/BackTop";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/summary" element={<PageSummaryEn />} />
        <Route path="/summary/ua" element={<PageSummaryUa />} />
        <Route path="/summary/ru" element={<PageSummaryRu />} />
        <Route path="/projects/en" element={<PageProjectsEn />} />
        <Route path="/projects/ua" element={<PageProjectsUa />} />
        <Route path="/projects/ru" element={<PageProjectsRu />} />
        <Route path="*" element={<NofoundPage />} />
      </Routes>
      <BackTop />
    </BrowserRouter>
  );
}
export { Routing };
