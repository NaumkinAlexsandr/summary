import React from "react";
import { Header } from "../header/Header";
import { PersonalInfo } from "../personalInfo/PersonalInfo";
import { Summary } from "../summary/Summary";

function HomeEN() {
  return (
    <>
      <Header
        className1="btn-summary"
        className2="btn-projects"
        className3="menu-nav active-en"
        className4="menu-nav"
        className5="menu-nav"
        to1="/cv/en"
        to2="/projects/en"
        to3="/summary"
        to4="/summary/ua"
        to5="/summary/ru"
        title1="CV"
        title2="Projects"
        title3="EN"
        title4="UA"
        title5="RU"
        id1="summary-buttun"
        id2="projects-buttun"
        id3="home-buttun"
        className6="btn-home"
        to6="/summary"
        title6="Home"
      />
      <PersonalInfo
        name="Naumkin Alexander Nikolaevich"
        title="Hello! My name is Alexander. I studied JavaScript at Hillel IT school. I have deep knowledge of HTML5, CSS3, SASS, JavaScript, TypeScript, React, Bootstrap, Material UI, etc. I also have experience working with Flexbox and Grid technologies obtained at the Hillel IT school. My skills allow me to create high-quality web applications that meet modern requirements and standards. I have experience working with various frameworks and libraries, which allows me to effectively solve complex problems and create intuitive user interfaces. Ready to contribute to your project and help your team achieve its goals.
        "
        contacts="Contacts:"
        phone="Phone:"
      />
    </>
  );
}
export { HomeEN };
