import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";
import { HeaderSecond } from "../header/HeaderSecond";

function ProjectsEN() {
  return (
    <>
      <Header
        className1="btn-summary"
        className2="btn-projects"
        className3="menu-nav active-en"
        className4="menu-nav"
        className5="menu-nav"
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
        id1="summary-buttun"
        id2="projects-buttun"
      />
      <Projects
        infoOne="Responsive food delivery site layout using Flexbox."
        infoTwo="3D Slider with the effect of rotating elements on a shimmering smoky background. Using animation and transformation."
        infoThree="Website for a law firm. Using Flexbox and Grid."
        infoFour="Website of the city of Odessa with a description of its sights. Using Flexbox and applying animation and transformation."
        infoFive="User registration form with full form validation."
        infoSix="A small training site for beginner Front-end developers. With a description of the properties, elements, as well as various examples."
        infoSeven="A weather forecast site using the Fetch API requests and displaying information on the specified parameters."
        infoEight="Creating a todo list using Redux, also the ability to add and remove to-dos."
        infoNine="Creation of a mobile app, with the ability to add and remove various tasks."
        infoTen="The layout of the online store of electrical equipment. It is possible to search for a product by name, adding it to the basket."
        infoEleven="Horizontal slider with animation and parallax effect."
        infoTwelve="Animated website using parallax effects."
        infoThirteen="Getting information about the car by the specified VIN using the Fetch API request. Information is displayed depending on one of three requests."
      />
    </>
  );
}
export { ProjectsEN };
