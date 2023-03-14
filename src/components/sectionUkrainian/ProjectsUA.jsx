import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";
import { HeaderSecond } from "../header/HeaderSecond";

function ProjectsUA() {
  return (
    <>
      <Header
        className1="btn-summary"
        className2="btn-projects"
        className3="menu-nav"
        className4="menu-nav active-ua"
        className5="menu-nav"
        to1="/summary/ua"
        to2="/projects/ua"
        to3="/projects/en"
        to4="/projects/ua"
        to5="/projects/ru"
        title1="Резюме"
        title2="Проекти"
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
export { ProjectsUA };
