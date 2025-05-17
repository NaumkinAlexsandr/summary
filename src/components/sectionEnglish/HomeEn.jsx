import React from "react";
import { Header } from "../header/Header";
import { PersonalInfo } from "../personalInfo/PersonalInfo";

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
        title={
          <div>
            <p>Hello! </p>
            <p>My name is Alexander. </p>
            <p>I studied JavaScript at Hillel IT school. </p>
            <p>
              I have deep knowledge of HTML5, CSS3, SASS, JavaScript,
              TypeScript, React, Bootstrap, Material UI, etc. I also have
              experience working with Flexbox and Grid technologies obtained at
              the Hillel IT school.
            </p>
            <p>
              My skills allow me to create high-quality web applications that
              meet modern requirements and standards.
            </p>
            <p>
              I have experience working with various frameworks and libraries,
              which allows me to effectively solve complex problems and create
              intuitive user interfaces.
            </p>
            <p>
              Ready to contribute to your project and help your team achieve its
              goals.
            </p>
          </div>
        }
        contacts="Contacts:"
        phone="Phone:"
      />
    </>
  );
}
export { HomeEN };
