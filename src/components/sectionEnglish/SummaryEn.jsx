import React from "react";
import { PersonalInfo } from "../personalInfo/PersonalInfo";
import { HardSkill } from "../hardSkill/HardSkill";
import { Education } from "../education/Education";
import { Experience } from "../experience/Experience";
import { SoftSkill } from "../softSkill/SoftSkill";
import { OtherInfo } from "../otherInfo/OtherInfo";
import { Summary } from "../summary/Summary";
import { Header } from "../header/Header";
import { HeaderSecond } from "../header/HeaderSecond";
import "../../components/header/translate.scss";

function SummaryEn() {
  return (
    <>
      <Header
        className1="btn-summary"
        className2="btn-projects"
        className3="menu-nav active-en "
        className4="menu-nav"
        className5="menu-nav"
        to1="/summary/"
        to2="/projects/en"
        to3="/summary/"
        to4="/summary/ua"
        to5="/summary/ru"
        title1="Summary"
        title2="Projects"
        title3="EN"
        title4="UA"
        title5="RU"
        id1="summary-buttun"
        id2="projects-buttun"
      />
      <PersonalInfo
        name="Naumkin Alexander Nikolaevich"
        title="Personal information:"
        city="City: Odessa, Ukraine"
        phone="Phone:"
      />
      <Summary
        title="Summary:"
        summary="Hello! My name is Alexsander. I'm a future JavaScript developer. I studied JavaScript at Hillel IT School. I have got knowledge of HTML5,  CSS3 &  JavaScript. Also I have experience with technology of Flexbox, Grid at Hillel IT School . I would like to become a reliable member of the IT company team, where I'll be able to make useful and needful contributions to programming."
      />
      <HardSkill
        objective="Carrer objective"
        look="Looking for a full time job as a Junior Front-end Developer."
        hardSkill="Hard skills:"
        first="HTML5, CSS3, SASS"
        second="JS, React, React-Router, Redux"
        third="Bootstrap, React-Bootstrap, Material UI, Materialize"
        fourth="Git, GitHub"
        fifth="Webpack"
        sixth="Figma"
      />
      <Education
        education="Education:"
        university="2003 - 2008 Odessa State Economic University, Faculty of International Economics, specialty – marketer (master)."
        additional="Additional education:"
        hardSkill="Hard Skill:"
        first="2022 Front-end Basic course at Hillel IT-school"
        second="2023 Front-end Pro course at Hillel IT-school"
        third="2022 English language courses ABS elementary level"
        fourth="2022 Began to study English language courses ABS intermediate level"
        fifth="Other certificates"
        certificateOne="Certificate"
        titleOne="Graduate certificate"
        hrefOne="https://certificate.ithillel.ua/view/34550382"
        classNameOne="certificateBasic"
        certificateTwo="Recommendation"
        titleTwo="Recommendation"
        classNameTwo="recommendation enBasic"
        certificateThree="Certificate"
        titleThree="Graduate certificate"
        hrefThree="https://certificate.ithillel.ua/view/50761145"
        classNameThree="certificatePro"
        certificateFour="Recommendation"
        titleFour="Recommendation"
        classNameFour="recommendation enPro"
        certificateFive="JavaScript"
        titleFive="Sololearn"
        classNameFive="javaScript"
        certificateSix="HTML"
        titleSix="Sololearn"
        classNameSix="html"
        certificateSeven="CSS"
        titleSeven="Sololearn"
        classNameSeven="css"
      />
      <Experience
        experience="Professional experience:"
        first="From 03.09.2020 to 06.08.2021, TOV Arikol worked as a sales representative."
        second="From 01.07.2018 to 30.06.2020, worked at Johnson & Johnson as a sales representative."
        third="From 09.04.2016 to 30.06.2018, worked at Crytex Service in department of Kimberly-Clark, with key clients."
      />
      <SoftSkill
        softSkill="Soft skills:"
        first="fast learner"
        second="a responsibility"
        third="purposefulness"
        fourth="sociability"
        fifth="teamwork skills"
        sixth="perseverance and desire for professional growth"
      />
      <OtherInfo
        languages="Additional information:"
        hobbies="Hobbies:"
        first="Ukrainian - native"
        second="English - intermediate"
        third="Russian - native"
        fourth="travelling"
        fifth="football"
        sixth="music"
      />
    </>
  );
}
export { SummaryEn };
