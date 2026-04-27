import React from "react";
import { Helmet } from "react-helmet";
import { HomeUA } from "../components/sectionUkrainian/HomeUA";

function PageHomeUa() {
  return (
    <div className="container">
      <Helmet>
        <title>Головна Наумкіна О.М.</title>
      </Helmet>
      <HomeUA />
    </div>
  );
}
export { PageHomeUa };
