import React from "react";
import { ProjectsUA } from "../components/sectionUkrainian/ProjectsUA";
import { Helmet } from "react-helmet";
import BackTop from "../core/BackTop";

function PageProjectsUa() {
  return (
    <div className="container">
      <Helmet>
        <title>Проекти Наумкіна О.М.</title>
      </Helmet>
      <ProjectsUA />
      <BackTop />
    </div>
  );
}
export { PageProjectsUa };
