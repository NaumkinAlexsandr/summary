import React from "react";
import { Helmet } from "react-helmet";
import { HomeRU } from "../components/sectionRussian/HomeRu";

function PageHomeRu() {
  return (
    <div className="container">
      <Helmet>
        <title>Главная Наумкинa А.Н.</title>
      </Helmet>
      <HomeRU />
    </div>
  );
}
export { PageHomeRu };
