import React from "react";
import { HardSkill } from "../hardSkill/HardSkill";
import { Education } from "../education/Education";
import { Experience } from "../experience/Experience";
import { SoftSkill } from "../softSkill/SoftSkill";
import { OtherInfo } from "../otherInfo/OtherInfo";
import { Summary } from "../summary/Summary";
import { Header } from "../header/Header";
import "components/header/translate.scss";

function SummaryUA() {
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
        toEN="/cv/en"
        toUA="/cv/ua"
        toRU="/cv/ru"
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
      <Summary
        name="Наумкін Олександр Миколайович"
        city="Місто: Одеса, Україна"
        phone="Телефон:"
      />
      <HardSkill
        objective="Кар'єрна мета"
        look="Шукаю роботу Junior Front-end Developer на повний робочий день."
        hardSkill="Професійні навички:"
        first="HTML5, CSS3, SASS (SCSS), Tailwind CSS, Flexbox, CSS Grid"
        second="JavaScript, TypeScript "
        third="React, Next.js, React-Router, Redux"
        fourth="Bootstrap, React-Bootstrap, Material UI, Materialize"
        fifth="Git, GitHub"
        sixth="Webpack"
        seven="Figma"
        eight="Володіння семантичним HTML5 та сучасним CSS3. Досвід створення адаптивних (responsive) та кросбраузерних макетів з використанням Flexbox та CSS Grid. Впевнене застосування препроцесора SASS (змінні, міксини, успадкування) та фреймворку Tailwind CSS для швидкого та модульного стилізування."
        nine="Впевнене розуміння JavaScript (ES6+) та принципів ООП. Досвід розробки інтерактивних елементів і бізнес-логіки з використанням TypeScript для підвищення надійності та підтримки коду."
        ten="Практичний досвід роботи з бібліотекою React (функціональні компоненти, хуки). Використання React-Router для навігації. Знання архітектурного патерну Redux (або Redux Toolkit) для ефективного керування станом застосунку. Базове розуміння можливостей Next.js (маршрутизація, статична генерація)."
        eleven="Досвід прискореної розробки UI з використанням популярних бібліотек компонентів: Bootstrap, React-Bootstrap, Material UI (MUI) та Materialize для створення сучасних та адаптивних інтерфейсів."
        twelve="Досвід використання системи контролю версій Git та платформи GitHub (або GitLab/Bitbucket). Вміння працювати з гілками (branching), вирішувати конфлікти злиття (conflict resolution) та дотримуватися робочих процесів командної розробки."
        thirteen="Базовий досвід роботи з Webpack для збірки та оптимізації фронтенд-проєктів. Розуміння налаштування лоадерів, плагінів і модулів для покращення продуктивності збірки."
        fourteen="Практичні навички роботи з Figma (або Sketch/Zeplin) для аналізу макетів та дизайну. Вміння коректно витягувати стилі, розміри, кольори та експортувати активи для точної реалізації інтерфейсу."
        fifteen="React Native (Expo)"
        sixteen="Досвід розробки кросплатформових мобільних застосунків з використанням фреймворку React Native."
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
        eighth="2023 TypeScript курс у IT-школі Hillel"
        certificateEighth="Сертифікат"
        titleEighth="Сертифікат випускника"
        hrefEighth="https://certificate.ithillel.ua/view/71562104"
        classNameEighth="certificateTS"
        certificateNine="Рекомендація"
        titleNine="Рекомендація"
        classNameNine="recommendation uaTS"
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
