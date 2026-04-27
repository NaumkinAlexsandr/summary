import React from "react";
import { Helmet } from "react-helmet";
import { HomeEN } from "../components/sectionEnglish/HomeEn";

function PageHomeEn() {
  return (
    <div className="container">
      <Helmet>
        <title>Home Naumkin A.N.</title>
      </Helmet>
      <HomeEN />
    </div>
  );
}
export { PageHomeEn };
