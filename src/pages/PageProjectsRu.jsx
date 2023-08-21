import React from "react";
import { ProjectsRU } from "../components/sectionRussian/ProjectsRU";
import { Helmet } from "react-helmet";

function PageProjectsRu() {
  return (
    <>
      <Helmet>
        <title>Проекты Наумкинa А.Н.</title>
      </Helmet>
      <ProjectsRU />
    </>
  );
}
export { PageProjectsRu };
