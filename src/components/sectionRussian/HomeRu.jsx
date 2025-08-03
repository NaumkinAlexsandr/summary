import React from "react";
import { Header } from "../header/Header";
import { PersonalInfo } from "../personalInfo/PersonalInfo";

function HomeRU() {
  return (
    <>
      <Header
        cvBtnClass="btn-summary"
        projectsBtnClass="btn-projects"
        langEN="menu-nav"
        langUA="menu-nav"
        langRU="menu-nav active-ru"
        homeBtnClass="btn-home"
        toCV="/cv/ru"
        toProjects="/projects/ru"
        toEN="/"
        toUA="/home/ua"
        toRU="/home/ru"
        toHome="/home/ru"
        cvBtnTitle="Резюме"
        projectsBtnTitle="Проекты"
        langTitleEN="EN"
        langTitleUA="UA"
        langTitleRU="RU"
        homeBtnTitle="Главная"
        homeId="summary-buttun"
        cvId="projects-buttun"
        projectsId="home-buttun"
      />
      <PersonalInfo
        name="Наумкин Александр Николаевич"
        title={
          <>
            <h5>День добрый! </h5>
            <h5>
              Меня зовут Александр. Я изучал JavaScript в IT-школе Hillel.
            </h5>
            <h5>
              У меня есть глубокие знания HTML5, CSS3 , SASS, JavaScript,
              TypeScript, React, Bootstrap, Material UI и т.д. Также у меня есть
              опыт работы с технологиями Flexbox, Grid полученные в ИТ-школе
              Hillel.
            </h5>
            <h5>
              Мои навыки позволяют мне создавать высококачественные
              веб-приложения с учетом современных требований и стандартов.
            </h5>
            <h5>
              Я имею опыт работы с различными фреймворками и библиотеками, что
              позволяет мне эффективно решать сложные задачи и создавать
              интуитивно понятные пользовательские интерфейсы.
            </h5>
            <h5>
              Готов внести свой вклад в ваш проект и помочь вашей команде
              достичь поставленных целей.
            </h5>
          </>
        }
        contacts="Контакты:"
        phone="Телефон:"
      />
    </>
  );
}
export { HomeRU };
