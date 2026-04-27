import React from "react";
import { Header } from "../header/Header";
import { Website } from "../projects/Website";
import { Application } from "../projects/Application";

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

      <Website
        infoOne="Responsive food delivery site layout using Flexbox."
        infoTwo="User registration form with full form validation."
        infoThree="Website for a law firm. Using Flexbox and Grid."
        infoFour="An informational website for the city of Odessa with descriptions of attractions, news, events, the city's history, and more. You can also choose one of three languages: ua, en and ru."
        infoFive="3D Slider with the effect of rotating elements on a shimmering smoky background. Using animation and transformation."
        infoSix="Horizontal slider with animation and parallax effect."
        infoSeven="Animated website using parallax effects."
        infoEight="Creating a todo list using Redux, also the ability to add and remove to-dos."
        infoNine="Creation of a mobile app, with the ability to add and remove various tasks."
        infoTen="A small training site for beginner Front-end developers. With a description of the properties, elements, as well as various examples."
        infoEleven="A weather forecast site using the Fetch API requests and displaying information on the specified parameters."
        infoTwelve="Getting information about the car by the specified VIN using the Fetch API request. Information is displayed depending on one of three requests."
        infoThirteen="The layout of the online store of electrical equipment. It is possible to search for a product by name, adding it to the basket."
        titleWebsite="Website projects"
        webOne="Food delivery"
        webTwo="Authorization"
        webThree="HLEGAL"
        webFour="Odesa"
        webFive="3D-hoodie"
        webSix="The Witcher. Parallax effect"
        webSeven="Magical forest. Parallax effect"
        webEight="Todo list"
        webNine="Task manager"
        webTen="Education Front-end"
        webEleven="Weather forecast"
        webTwelve="Car Vincode"
        webThirteen="Light shop"
      />

      <Application
        titleAPP="Application projects"
        appOne="Region code Ukraine"
        appTwo="Weather forecast"
        appThree="Slavic Runes"
        appInfoOne="Mobile application for searching regions of Ukraine by car number code. The application is made in three languages. Also in the application you can get information about what license plates exist in Ukraine."
        appInfoTwo="Mobile application for getting weather forecast using openweathermap api. The application is made in 3 languages and has three different data display styles."
        appInfoThree='Slavic Runes is more than just a reference guide; it is a comprehensive tool for immersing yourself in the culture of Slavic runes. The app seamlessly blends educational content with practical utility—ranging from in-depth symbol interpretations and a runic alphabet to a built-in keyboard that translates text in real-time.

Special emphasis is placed on the atmosphere: users can fully customize the visual experience to their liking, enjoying a deep aesthetic style complete with animated fog and "living forest" effects. The application is available in four languages.'
      />
    </>
  );
}
export { ProjectsEN };
