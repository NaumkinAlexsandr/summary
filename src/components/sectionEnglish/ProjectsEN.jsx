import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";

function ProjectsEN() {
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
        to3="/projects/en"
        to4="/projects/ua"
        to5="/projects/ru"
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
      <Projects
        infoOne="Responsive food delivery site layout using Flexbox."
        infoTwo="User registration form with full form validation."
        infoThree="Website for a law firm. Using Flexbox and Grid."
        infoFour="Information website of the city of Odessa with a description of its sights. Using Flexbox and applying animation and transformation."
        infoFive="3D Slider with the effect of rotating elements on a shimmering smoky background. Using animation and transformation."
        infoSix="Horizontal slider with animation and parallax effect."
        infoSeven="Animated website using parallax effects."
        infoEight="Creating a todo list using Redux, also the ability to add and remove to-dos."
        infoNine="Creation of a mobile app, with the ability to add and remove various tasks."
        infoTen="A small training site for beginner Front-end developers. With a description of the properties, elements, as well as various examples."
        infoEleven="A weather forecast site using the Fetch API requests and displaying information on the specified parameters."
        infoTwelve="Getting information about the car by the specified VIN using the Fetch API request. Information is displayed depending on one of three requests."
        infoThirteen="The layout of the online store of electrical equipment. It is possible to search for a product by name, adding it to the basket."
        infoFourteen="Mobile application for searching regions of Ukraine by car number code. The application is made in three languages. Also in the application you can get information about what license plates exist in Ukraine."
        projectTitleOne="Food delivery"
        projectTitleTwo="Authorization"
        projectTitleThree="HLEGAL"
        projectTitleFour="Odessa"
        projectTitleFive="3D-hoodie"
        projectTitleSix="The Witcher. Parallax effect"
        projectTitleSeven="Magical forest. Parallax effect"
        projectTitleEight="Todo list"
        projectTitleNine="Task manager"
        projectTitleTen="Education Front-end"
        projectTitleEleven="Weather forecast"
        projectTitleTwelve="Car Vincode"
        projectTitleThirteen="Light shop"
        projectTitleFourteen="Region code Ukraine. APP"
      />
    </>
  );
}
export { ProjectsEN };
