import React from "react";
import { Header } from "../header/Header";
import { PersonalInfo } from "../personalInfo/PersonalInfo";

function HomeUA() {
  return (
    <>
      <Header
        cvBtnClass="btn-summary"
        projectsBtnClass="btn-projects"
        langEN="menu-nav"
        langUA="menu-nav active-ua"
        langRU="menu-nav"
        homeBtnClass="btn-home"
        toCV="/cv/ua"
        toProjects="/projects/ua"
        toEN="/"
        toUA="/home/ua"
        toRU="/home/ru"
        toHome="/home/ua"
        cvBtnTitle="Резюме"
        projectsBtnTitle="Проекти"
        langTitleEN="EN"
        langTitleUA="UA"
        langTitleRU="RU"
        homeBtnTitle="Головна"
        homeId="summary-buttun"
        cvId="projects-buttun"
        projectsId="home-buttun"
      />
      <PersonalInfo
        name="Наумкін Олександр Миколайович"
        title={
          <>
            <h5>Доброго дня! </h5>
            <h5>
              Мене звати Олександр. Я вивчав JavaScript у IT-школі Hillel.
            </h5>
            <h5>
              У мене є глибокі знання HTML5, CSS3, SASS, JavaScript, TypeScript,
              React, Bootstrap, Material UI і т.д. Також у мене є досвід роботи
              з технологіями Flexbox, Grid, отримані в ІТ-школі Hillel.
            </h5>
            <h5>
              Мої навички дозволяють мені створювати високоякісні веб-програми з
              урахуванням сучасних вимог і стандартів.
            </h5>
            <h5>
              Я маю досвід роботи з різними фреймворками та бібліотеками, що
              дозволяє мені ефективно вирішувати складні завдання та створювати
              інтуїтивно зрозумілі інтерфейси користувача.
            </h5>
            <h5>
              Готовий зробити свій внесок у ваш проект і допомогти вашій команді
              досягти поставлених цілей.
            </h5>
          </>
        }
        contacts="Контакти:"
        phone="Телефон:"
      />
    </>
  );
}
export { HomeUA };
