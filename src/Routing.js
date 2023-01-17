import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SummaryEn } from "./pages/SummaryEn";
import { SummaryUa } from "./pages/SummaryUa";
import { SummaryRu } from "./pages/SummaryRu";
import { NofoundPage } from "./pages/Nofoundpage";
import { ProjectsEn } from "./pages/ProjectsEn";
import { ProjectsUa } from "./pages/ProjectsUa";
import { ProjectsRu } from "./pages/ProjectsRu";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/summary" element={<SummaryEn />}></Route>
        <Route path="/summary/ua" element={<SummaryUa />} />
        <Route path="/summary/ru" element={<SummaryRu />} />
        <Route path="/projects/en" element={<ProjectsEn />} />
        <Route path="/projects/ua" element={<ProjectsUa />} />
        <Route path="/projects/ru" element={<ProjectsRu />} />
        <Route path="*" element={<NofoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export { Routing };
