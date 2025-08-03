import React from "react";
import { Header } from "../header/Header";
import { PersonalInfo } from "../personalInfo/PersonalInfo";

function HomeEN() {
  return (
    <>
      <Header
        cvBtnClass="btn-summary"
        projectsBtnClass="btn-projects"
        langEN="menu-nav active-en"
        langUA="menu-nav"
        langRU="menu-nav"
        homeBtnClass="btn-home"
        toCV="/cv/en"
        toProjects="/projects/en"
        toEN="/"
        toUA="/home/ua"
        toRU="/home/ru"
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
      <PersonalInfo
        name="Naumkin Alexander Nikolaevich"
        title={
          <>
            <h5>Hello! </h5>
            <h5>My name is Alexander. </h5>
            <h5>I studied JavaScript at Hillel IT school. </h5>
            <h5>
              I have deep knowledge of HTML5, CSS3, SASS, JavaScript,
              TypeScript, React, Bootstrap, Material UI, etc. I also have
              experience working with Flexbox and Grid technologies obtained at
              the Hillel IT school.
            </h5>
            <h5>
              My skills allow me to create high-quality web applications that
              meet modern requirements and standards.
            </h5>
            <h5>
              I have experience working with various frameworks and libraries,
              which allows me to effectively solve complex problems and create
              intuitive user interfaces.
            </h5>
            <h5>
              Ready to contribute to your project and help your team achieve its
              goals.
            </h5>
          </>
        }
        contacts="Contacts:"
        phone="Phone:"
      />
    </>
  );
}
export { HomeEN };
