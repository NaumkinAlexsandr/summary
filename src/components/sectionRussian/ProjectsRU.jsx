import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";
import { HeaderSecond } from "../header/HeaderSecond";

function ProjectsRU() {
  return (
    <>
      <Header
        className1="btn-summary"
        className2="btn-projects"
        className3="menu-nav"
        className4="menu-nav"
        className5="menu-nav active-ru"
        to1="/summary/ru"
        to2="/projects/ru"
        to3="/projects/en"
        to4="/projects/ua"
        to5="/projects/ru"
        title1="Резюме"
        title2="Проекты"
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
export { ProjectsRU };
