import React from "react";
import { Helmet } from "react-helmet";
import { HomeRU } from "../components/sectionRussian/HomeRu";

function PageHomeRu() {
  return (
    <>
      <Helmet>
        <title>Главная Наумкинa А.Н.</title>
      </Helmet>
      <HomeRU />
    </>
  );
}
export { PageHomeRu };
