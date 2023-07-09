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
        second="JavaScript, TypeScript "
        third="React, React-Router, Redux"
        fourth="Bootstrap, React-Bootstrap, Material UI, Materialize"
        fifth="Git, GitHub"
        sixth="Webpack"
        seven="Figma"
        eight="Knowledge of using various tags, attributes and styles to create a variety of components and layouts. 
        Knowledge of the SASS preprocessor to simplify styling and style reuse. 
        Using variables, mixins, nesting, and other SASS features for more efficient styling."
        nine="Basic understanding of the JavaScript programming language and knowledge of TypeScript syntax. 
        Develop interactive elements and functionality on web pages using JavaScript and TypeScript."
        ten="Experience with the React library for creating UI components. 
        Using React-Router to navigate between pages in a single page application. 
        Knowledge of the Redux architectural pattern to manage application state and facilitate development."
        eleven="Using frameworks and libraries to create responsive and beautiful user interfaces."
        twelve="Experience with Git version control for tracking changes and collaborating on projects. 
        Ability to work with branches, commits, merges, conflict resolution, and other basic Git commands."
        thirteen="Experience with the Webpack build tool for building and optimizing front-end projects. 
        Ability to set up loaders and plugins, work with modules and customize project builds."
        fourteen="Knowledge of the Figma graphic tool for working with layouts and design. 
        Ability to export images and extract color and size values ​​of elements."
      />
      <Education
        education="Education:"
        university="2003 - 2008 Odessa State Economic University, Faculty of International Economics, specialty – marketer (master)."
        additional="Additional education:"
        hardSkill="Hard Skill:"
        first="2022 Front-end Basic course at Hillel IT-school"
        second="2023 Front-end Pro course at Hillel IT-school"
        third="2022 English language courses ABS elementary level"
        fourth="2022 English language courses ABS intermediate level"
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
