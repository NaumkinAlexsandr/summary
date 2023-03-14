import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";
import { HeaderSecond } from "../header/HeaderSecond";

function ProjectsEN() {
  return (
    <>
      <Header
        className1="btn-summary"
        className2="btn-projects"
        className3="menu-nav active-en"
        className4="menu-nav"
        className5="menu-nav"
        to1="/summary/"
        to2="/projects/en"
        to3="/projects/en"
        to4="/projects/ua"
        to5="/projects/ru"
        title1="Summary"
        title2="Projects"
        title3="EN"
        title4="UA"
        title5="RU"
        id1="summary-buttun"
        id2="projects-buttun"
      />
      <Projects />
    </>
  );
}
export { ProjectsEN };
