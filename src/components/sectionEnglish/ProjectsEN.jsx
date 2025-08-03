import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";

function ProjectsEN() {
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
        toEN="/projects/en"
        toUA="/projects/ua"
        toRU="/projects/ru"
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
        infoFifteen="Mobile application for getting weather forecast using openweathermap api. The application is made in 3 languages and has two different data display styles."
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
        projectFifteen="Weather forecast. APP"
      />
    </>
  );
}
export { ProjectsEN };
