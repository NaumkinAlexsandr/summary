import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageHomeEn } from "./pages/PageHomeEn";
import { PageHomeUa } from "./pages/PageHomeUa";
import { PageHomeRu } from "./pages/PageHomeRu";
import { PageSummaryUa } from "./pages/PageSummaryUa";
import { PageSummaryEn } from "./pages/PageSummaryEn";
import { PageSummaryRu } from "./pages/PageSummaryRu";
import { NofoundPage } from "./pages/Nofoundpage";
import { PageProjectsEn } from "./pages/PageProjectsEn";
import { PageProjectsUa } from "./pages/PageProjectsUa";
import { PageProjectsRu } from "./pages/PageProjectsRu";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/summary" element={<PageHomeEn />} />
        <Route path="/summary/ua" element={<PageHomeUa />} />
        <Route path="/summary/ru" element={<PageHomeRu />} />
        <Route path="/cv/en" element={<PageSummaryEn />} />
        <Route path="/cv/ua" element={<PageSummaryUa />} />
        <Route path="/cv/ru" element={<PageSummaryRu />} />
        <Route path="/projects/en" element={<PageProjectsEn />} />
        <Route path="/projects/ua" element={<PageProjectsUa />} />
        <Route path="/projects/ru" element={<PageProjectsRu />} />
        <Route path="*" element={<NofoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export { Routing };
