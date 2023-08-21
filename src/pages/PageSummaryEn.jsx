import React from "react";
import { SummaryEn } from "../components/sectionEnglish/SummaryEn";
import { Helmet } from "react-helmet";

function PageSummaryEn() {
  return (
    <>
      <Helmet>
        <title>Summary Naumkin A.N.</title>
      </Helmet>
      <SummaryEn />
    </>
  );
}
export { PageSummaryEn };
