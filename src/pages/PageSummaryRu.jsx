import React from "react";
import { SummaryRu } from "../components/sectionRussian/SummaryRu";
import { Helmet } from "react-helmet";

function PageSummaryRu() {
  return (
    <>
      <Helmet>
        <title>Резюме Наумкинa А.Н.</title>
      </Helmet>
      <SummaryRu />
    </>
  );
}

export { PageSummaryRu };
