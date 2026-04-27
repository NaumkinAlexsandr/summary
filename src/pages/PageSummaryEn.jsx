import React from "react";
import { SummaryEn } from "../components/sectionEnglish/SummaryEn";
import { Helmet } from "react-helmet";
import BackTop from "../core/BackTop";

function PageSummaryEn() {
  return (
    <div className="container">
      <Helmet>
        <title>CV Naumkin A.N.</title>
      </Helmet>
      <SummaryEn />
      <BackTop />
    </div>
  );
}
export { PageSummaryEn };
