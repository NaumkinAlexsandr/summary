import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";

function SectionProjectsRU() {
  return (
    <>
      <Header
        className1="btnTitle"
        className2="btnTitle"
        className3="btnLanguage"
        className4="btnLanguage"
        className5="btnLanguage active"
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
      />
      <Projects />
    </>
  );
}
export { SectionProjectsRU };
