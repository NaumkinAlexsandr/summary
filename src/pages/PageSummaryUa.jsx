import React from "react";
import { SummaryUA } from "../components/sectionUkrainian/SummaryUA";
import { Helmet } from "react-helmet";
import BackTop from "../core/BackTop";

function PageSummaryUa() {
  return (
    <div className="container">
      <Helmet>
        <title>Резюме Наумкіна О.М.</title>
      </Helmet>
      <SummaryUA />
      <BackTop />
    </div>
  );
}

export { PageSummaryUa };
