import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";

function SectionProjectsUA() {
  return (
    <>
      <Header
        className1="btnTitle"
        className2="btnTitle"
        className3="btnLanguage"
        className4="btnLanguage active"
        className5="btnLanguage"
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
      />
      <Projects />
    </>
  );
}
export { SectionProjectsUA };
