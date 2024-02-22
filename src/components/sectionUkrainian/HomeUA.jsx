import React from "react";
import { Header } from "../header/Header";
import { PersonalInfo } from "../personalInfo/PersonalInfo";

function HomeUA() {
  return (
    <>
      <Header
        className1="btn-summary"
        className2="btn-projects"
        className3="menu-nav"
        className4="menu-nav active-ua"
        className5="menu-nav"
        to1="/cv/ua"
        to2="/projects/ua"
        to3="/summary"
        to4="/summary/ua"
        to5="/summary/ru"
        title1="Резюме"
        title2="Проекти"
        title3="EN"
        title4="UA"
        title5="RU"
        id1="summary-buttun"
        id2="projects-buttun"
        id3="home-buttun"
        className6="btn-home"
        to6="/summary/ua"
        title6="Головна"
      />
      <PersonalInfo
        name="Наумкін Олександр Миколайович"
        title="Доброго дня! Мене звати Олександр. Я вивчав JavaScript у IT-школі Hillel. У мене є глибокі знання HTML5, CSS3, SASS, JavaScript, TypeScript, React, Bootstrap, Material UI і т.д. Також у мене є досвід роботи з технологіями Flexbox, Grid, отримані в ІТ-школі Hillel. Мої навички дозволяють мені створювати високоякісні веб-програми з урахуванням сучасних вимог і стандартів. Я маю досвід роботи з різними фреймворками та бібліотеками, що дозволяє мені ефективно вирішувати складні завдання та створювати інтуїтивно зрозумілі інтерфейси користувача. Готовий зробити свій внесок у ваш проект і допомогти вашій команді досягти поставлених цілей.
        "
        contacts="Контакти:"
        phone="Телефон:"
      />
    </>
  );
}
export { HomeUA };
