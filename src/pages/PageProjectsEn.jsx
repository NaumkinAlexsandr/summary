import React from "react";
import { ProjectsEN } from "../components/sectionEnglish/ProjectsEN";
import { Helmet } from "react-helmet";
import BackTop from "../core/BackTop";

function PageProjectsEn() {
  return (
    <div className="container">
      <Helmet>
        <title>Projects Naumkin A.N.</title>
      </Helmet>
      <ProjectsEN />
      <BackTop />
    </div>
  );
}
export { PageProjectsEn };
