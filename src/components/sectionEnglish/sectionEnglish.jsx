import React from "react";
import { HeaderSummaryEN } from "../headers/HeaderSummaryEN";
import { PersonalInfo } from "../personalInfo/PersonalInfo";
import { HardSkill } from "../hardSkill/HardSkill";
import { EducationEN } from "../education/EducationEN";
import { Experience } from "../experience/Experience";
import { SoftSkill } from "../softSkill/SoftSkill";
import { OtherInfo } from "../otherInfo/OtherInfo";

function SectionEnglish() {
  return (
    <>
      <HeaderSummaryEN />
      <PersonalInfo
        name="Naumkin Alexander Nikolaevich"
        title="Personal information:"
        date="Date of birth: 06.08.1985"
        city="City: Odessa, Ukraine"
        phone="Phone:"
      />
      <HardSkill
        objective="Carrer objective"
        look="Looking for a full time job as a Junior Front-end Developer."
        hardSkill="Hard skills:"
        first="HTML5, CSS3, SASS"
        second="JS, REACT, REDUX"
        third="Git"
        fourth="Figma"
        fifth="Bootstrap"
        sixth="Webpack"
      />
      <EducationEN
        education="Education:"
        university="2003 - 2008 Odessa State Economic University, Faculty of International Economics, specialty – marketer (master)."
        additional="Additional education:"
        hardSkill="Hard Skill:"
        first="2022 Front-end Basic course at Hillel IT-school"
        second="2022 Began to study Front-end Pro course at Hillel IT-school"
        third="2022 English language courses ABS elementary level"
        fourth="2022 Began to study English language courses ABS intermediate level"
      />
      <Experience
        experience="Work experience:"
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
        second="English - elementary"
        third="Russian - native"
        fourth="travelling"
        fifth="football"
        sixth="music"
      />
    </>
  );
}
export { SectionEnglish };
