import React from "react";
import { ProjectsRU } from "../components/sectionRussian/ProjectsRU";
import { Helmet } from "react-helmet";
import BackTop from "../core/BackTop";

function PageProjectsRu() {
  return (
    <div className="container">
      <Helmet>
        <title>Проекты Наумкинa А.Н.</title>
      </Helmet>
      <ProjectsRU />
      <BackTop />
    </div>
  );
}
export { PageProjectsRu };
