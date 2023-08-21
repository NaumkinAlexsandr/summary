import React from "react";
import { SummaryUA } from "../components/sectionUkrainian/SummaryUA";
import { Helmet } from "react-helmet";

function PageSummaryUa() {
  return (
    <>
      <Helmet>
        <title>Резюме Наумкіна О.М.</title>
      </Helmet>
      <SummaryUA />
    </>
  );
}

export { PageSummaryUa };
