import React from "react";
import { PersonalInfo } from "../personalInfo/PersonalInfo";
import { HardSkill } from "../hardSkill/HardSkill";
import { Education } from "../education/Education";
import { Experience } from "../experience/Experience";
import { SoftSkill } from "../softSkill/SoftSkill";
import { OtherInfo } from "../otherInfo/OtherInfo";
import { Summary } from "../summary/Summary";
import { Header } from "../header/Header";

function SummaryUA() {
  return (
    <>
      <Header
        className1="btn-summary"
        className2="btn-projects"
        className3="menu-nav"
        className4="menu-nav active-ua"
        className5="menu-nav"
        to1="/summary/ua"
        to2="/projects/ua"
        to3="/summary/"
        to4="/summary/ua"
        to5="/summary/ru"
        title1="Резюме"
        title2="Проекти"
        title3="EN"
        title4="UA"
        title5="RU"
        id1="summary-buttun"
        id2="projects-buttun"
      />
      <PersonalInfo
        name="Наумкін Олександр Миколайович"
        title="Особисті дані:"
        city="Місто: Одеса, Україна"
        phone="Телефон:"
      />
      <Summary
        title="Резюме:"
        summary="Привіт! Мене звуть Олександр. Я майбутній розробник JavaScript. Я вивчав JavaScript у IT School Hillel. Маю знання HTML5, CSS3 і JavaScript. Також маю досвід роботи з технологією Flexbox, Grid в IT School Hillel. Я хотів би стати надійним членом команди ІТ-компанії, де я зможу зробити корисний і потрібний внесок у програмування."
      />
      <HardSkill
        objective="Кар'єрна мета"
        look="Шукаю роботу Junior Front-end Developer на повний робочий день."
        hardSkill="Професійні навички:"
        first="HTML5, CSS3, SASS"
        second="JavaScript, TypeScript "
        third="React, React-Router, Redux"
        fourth="Bootstrap, React-Bootstrap, Material UI, Materialize"
        fifth="Git, GitHub"
        sixth="Webpack"
        seven="Figma"
        eight="Знання використання різних тегів, атрибутів та стилів для створення різноманітних компонентів та макетів. 
        Знання препроцесора SASS для спрощення стилізації та повторного використання стилів. 
        Використання змінних, міксинів, вкладеності та інших можливостей SASS для більш ефективної розробки стилів."
        nine="Розуміння основ мови програмування JavaScript та знання синтаксису TypeScript. 
        Розробка інтерактивних елементів та функціональності на веб-сторінках з використанням JavaScript та TypeScript."
        ten="Досвід роботи з бібліотекою React для створення компонентів інтерфейсу користувача. Використання React-Router для навігації між сторінками в односторінковій програмі. 
        Знання архітектурного шаблону Redux для керування станом програми та полегшення розробки."
        eleven="Використання фреймворків і бібліотек для створення адаптивних і красивих інтерфейсів користувача."
        twelve="Досвід роботи із системою контролю версій Git для відстеження змін та спільної роботи над проектами. 
        Вміння працювати з гілками, коммітами, злиттями, вирішенням конфліктів та іншими основними командами Git."
        thirteen="Досвід роботи з інструментом складання Webpack для складання та оптимізації фронтенд-проектів. 
        Вміння налаштовувати завантажувачі та плагіни, працювати з модулями та налаштовувати складання проекту."
        fourteen="Знання графічного інструменту Figma для роботи з макетами та дизайном. 
        Вміння експортувати зображення та отримувати значення кольорів та розмірів елементів."
      />
      <Education
        education="Освіта:"
        university="2003 - 2008 Одеський Державний Економічний Університет, факультет міжнародної економіки, спеціальність – маркетолог (магістр)."
        additional="Додаткова освіта:"
        first="2022 Початковий курс Front-end у IT-школі Hillel"
        second="2023 Front-end Pro в IT-школі Hillel"
        third="2022 Курси англійської мови ABS початковий рівень"
        fourth="2022 Курси англійської мови ABS середнього рівня "
        fifth="Інші сертифікати"
        certificateOne="Сертифікат"
        titleOne="Сертифікат випускника"
        hrefOne="https://certificate.ithillel.ua/view/34550382"
        classNameOne="certificateBasic"
        certificateTwo="Рекомендація"
        titleTwo="Рекомендація"
        classNameTwo="recommendation uaBasic"
        certificateThree="Сертифікат"
        titleThree="Сертифікат випускника"
        hrefThree="https://certificate.ithillel.ua/view/50761145"
        classNameThree="certificatePro"
        certificateFour="Рекомендація"
        titleFour="Рекомендація"
        classNameFour="recommendation uaPro"
        certificateFive="JavaScript"
        titleFive="Sololearn"
        classNameFive="javaScript"
        certificateSix="HTML"
        titleSix="Sololearn"
        classNameSix="html"
        certificateSeven="CSS"
        titleSeven="Sololearn"
        classNameSeven="css"
      />
      <Experience
        experience="Професійний досвід:"
        first="З 3.09.2020 по 06.08.2021 працював ТОВ Арікол торговим представником."
        second="З 1.07.2018 по 30.06.2020 працював у компанії Johnson & Johnson, торговий представник ОТС."
        third="З 09.04.2016 по 30.06.2018 р. працював у компанії Крайтекс Сервіс у відділі Кімберлі-Кларк, з ключовими клієнтами."
      />
      <SoftSkill
        softSkill="Особисті якості:"
        first="здатність швидко навчатися"
        second="відповідальність"
        third="цілеспрямованість"
        fourth="комунікабельність"
        fifth="навички командної роботи"
        sixth="наполегливість та бажання професійного зростання"
      />
      <OtherInfo
        languages="Додаткова інформація:"
        hobbies="Хобі:"
        first="Українська – рідна"
        second="Англійська - середній"
        third="Російська - рідна"
        fourth="подорожі"
        fifth="футбол"
        sixth="музика"
      />
    </>
  );
}
export { SummaryUA };
