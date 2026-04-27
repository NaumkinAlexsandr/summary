import React from "react";
import { HardSkill } from "../hardSkill/HardSkill";
import { Education } from "../education/Education";
import { Experience } from "../experience/Experience";
import { SoftSkill } from "../softSkill/SoftSkill";
import { OtherInfo } from "../otherInfo/OtherInfo";
import { Summary } from "../summary/Summary";
import { Header } from "../header/Header";
import "components/header/translate.scss";

function SummaryEn() {
  return (
    <>
      <Header
        cvBtnClass="btn-summary"
        projectsBtnClass="btn-projects"
        langEN="menu-nav active-en "
        langUA="menu-nav"
        langRU="menu-nav"
        homeBtnClass="btn-home"
        toCV="/cv/en"
        toProjects="/projects/en"
        toEN="/cv/en"
        toUA="/cv/ua"
        toRU="/cv/ru"
        toHome="/"
        cvBtnTitle="CV"
        projectsBtnTitle="Projects"
        langTitleEN="EN"
        langTitleUA="UA"
        langTitleRU="RU"
        homeBtnTitle="Home"
        homeId="summary-buttun"
        cvId="projects-buttun"
        projectsId="home-buttun"
      />
      <Summary
        name="Naumkin Alexander Nikolaevich"
        city="City: Odessa, Ukraine"
        phone="Phone:"
      />
      <HardSkill
        objective="Carrer objective"
        look="Looking for a full time job as a Junior Front-end Developer."
        hardSkill="Hard skills:"
        first="HTML5, CSS3, SASS (SCSS), Tailwind CSS, Flexbox, CSS Grid"
        second="JavaScript, TypeScript "
        third="React, Next.js, React-Router, Redux"
        fourth="Bootstrap, React-Bootstrap, Material UI, Materialize"
        fifth="Git, GitHub"
        sixth="Webpack"
        seven="Figma"
        eight="Proficient in semantic HTML5 and modern CSS3. Experience creating responsive and cross-browser layouts using Flexbox and CSS Grid. Confident application of the SASS preprocessor (variables, mixins, nesting) and Tailwind CSS framework for rapid and modular styling."
        nine="Solid understanding of JavaScript (ES6+) and OOP principles. Experience developing interactive elements and business logic using TypeScript to enhance code reliability and maintainability."
        ten="Practical experience with the React library (functional components, hooks). Usage of React-Router for navigation. Knowledge of the Redux architectural pattern (or Redux Toolkit) for effective application state management. Basic understanding of Next.js capabilities (routing, static generation)."
        eleven="Experience in accelerated UI development using popular component libraries: Bootstrap, React-Bootstrap, Material UI (MUI), and Materialize to build modern and responsive interfaces."
        twelve="Experience using the Git version control system and GitHub (or GitLab/Bitbucket) platform. Ability to work with branching, perform conflict resolution, and follow team development workflows."
        thirteen="Basic experience with Webpack for front-end project building and optimization. Understanding of configuring loaders, plugins, and modules to improve build performance."
        fourteen="Practical skills in working with Figma (or Sketch/Zeplin) for layout and design analysis. Ability to correctly extract styles, sizes, colors, and export assets for accurate interface implementation."
        fifteen="React Native (Expo)"
        sixteen="Experience in developing cross-platform mobile applications using the React Native framework."
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
        eighth="2023 TypeScript course at Hillel IT-school"
        certificateEighth="Certificate"
        titleEighth="Graduate certificate"
        hrefEighth="https://certificate.ithillel.ua/view/71562104"
        classNameEighth="certificateTS"
        certificateNine="Recommendation"
        titleNine="Recommendation"
        classNameNine="recommendation enTS"
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
