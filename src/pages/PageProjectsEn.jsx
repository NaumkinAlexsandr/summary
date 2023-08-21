import React from "react";
import { ProjectsEN } from "../components/sectionEnglish/ProjectsEN";
import { Helmet } from "react-helmet";

function PageProjectsEn() {
  return (
    <>
      <Helmet>
        <title>Projects Naumkin A.N.</title>
      </Helmet>
      <ProjectsEN />
    </>
  );
}
export { PageProjectsEn };
