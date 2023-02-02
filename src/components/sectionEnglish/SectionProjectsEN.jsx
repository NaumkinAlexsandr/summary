import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";

function SectionProjectsEN() {
  return (
    <>
      <Header
        className1="btnTitle"
        className2="btnTitle"
        className3="btnLanguage active"
        className4="btnLanguage"
        className5="btnLanguage"
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
      />
      <Projects />
    </>
  );
}
export { SectionProjectsEN };
