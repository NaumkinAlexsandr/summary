import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { English } from "./pages/English";
import { Ukrainian } from "./pages/Ukrainian";
import { Russian } from "./pages/Russian";
import { NofoundPage } from "./pages/Nofoundpage";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<English />}></Route>
        <Route path="/apps" element={<Ukrainian />} />
        <Route path="/tasks" element={<Russian />} />
        <Route path="*" element={<NofoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export { Routing };
