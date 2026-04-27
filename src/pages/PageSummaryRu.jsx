import React from "react";
import { SummaryRu } from "../components/sectionRussian/SummaryRu";
import { Helmet } from "react-helmet";
import BackTop from "../core/BackTop";

function PageSummaryRu() {
  return (
    <div className="container">
      <Helmet>
        <title>Резюме Наумкинa А.Н.</title>
      </Helmet>
      <SummaryRu />
      <BackTop />
    </div>
  );
}

export { PageSummaryRu };
