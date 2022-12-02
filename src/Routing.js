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
        <Route path="/summary" element={<English />}></Route>
        <Route path="/summary/ua" element={<Ukrainian />} />
        <Route path="/summary/ru" element={<Russian />} />
        <Route path="*" element={<NofoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export { Routing };
