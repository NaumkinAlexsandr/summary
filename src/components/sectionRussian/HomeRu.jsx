import React from "react";
import { Header } from "../header/Header";
import { PersonalInfo } from "../personalInfo/PersonalInfo";

function HomeRU() {
  return (
    <>
      <Header
        className1="btn-summary"
        className2="btn-projects"
        className3="menu-nav"
        className4="menu-nav"
        className5="menu-nav active-ru"
        to1="/cv/ru"
        to2="/projects/ru"
        to3="/summary"
        to4="/summary/ua"
        to5="/summary/ru"
        title1="Резюме"
        title2="Проекты"
        title3="EN"
        title4="UA"
        title5="RU"
        id1="summary-buttun"
        id2="projects-buttun"
        id3="home-buttun"
        className6="btn-home"
        to6="/summary/ru"
        title6="Главная"
      />
      <PersonalInfo
        name="Наумкин Александр Николаевич"
        title={
          <div>
            <p>День добрый! </p>
            <p>Меня зовут Александр. Я изучал JavaScript в IT-школе Hillel. </p>
            <p>
              У меня есть глубокие знания HTML5, CSS3 , SASS, JavaScript,
              TypeScript, React, Bootstrap, Material UI и т.д. Также у меня есть
              опыт работы с технологиями Flexbox, Grid полученные в ИТ-школе
              Hillel.
            </p>
            <p>
              Мои навыки позволяют мне создавать высококачественные
              веб-приложения с учетом современных требований и стандартов.
            </p>
            <p>
              Я имею опыт работы с различными фреймворками и библиотеками, что
              позволяет мне эффективно решать сложные задачи и создавать
              интуитивно понятные пользовательские интерфейсы.
            </p>
            <p>
              Готов внести свой вклад в ваш проект и помочь вашей команде
              достичь поставленных целей.
            </p>
          </div>
        }
        contacts="Контакты:"
        phone="Телефон:"
      />
    </>
  );
}
export { HomeRU };
