import React from "react";
import { HardSkill } from "../hardSkill/HardSkill";
import { Education } from "../education/Education";
import { Experience } from "../experience/Experience";
import { SoftSkill } from "../softSkill/SoftSkill";
import { OtherInfo } from "../otherInfo/OtherInfo";
import { Summary } from "../summary/Summary";
import { Header } from "../header/Header";
import "components/header/translate.scss";

function SummaryRu() {
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
        toEN="/cv/en"
        toUA="/cv/ua"
        toRU="/cv/ru"
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
      <Summary
        name="Наумкин Александр Николаевич"
        city="Город: Одесса, Украина"
        phone="Телефон:"
      />
      <HardSkill
        objective="Карьерная цель"
        look="Ищу постоянную работу в качестве младшего Front-end разработчика."
        hardSkill="Профессиональные навыки:"
        first="HTML5, CSS3, SASS (SCSS), Tailwind CSS, Flexbox, CSS Grid"
        second="JavaScript, TypeScript "
        third="React, Next.js, React-Router, Redux"
        fourth="Bootstrap, React-Bootstrap, Material UI, Materialize"
        fifth="Git, GitHub"
        sixth="Webpack"
        seven="Figma"
        eight="Владение семантическим HTML5 и современным CSS3. Опыт создания адаптивных (responsive) и кроссбраузерных макетов с использованием Flexbox и CSS Grid. Уверенное применение препроцессора SASS (переменные, миксины, наследование) и фреймворка Tailwind CSS для быстрого и модульного стилизования."
        nine="Уверенное понимание JavaScript (ES6+) и принципов ООП. Опыт разработки интерактивных элементов и бизнес-логики с использованием TypeScript для повышения надежности и поддержки кода."
        ten="Практический опыт работы с библиотекой React (функциональные компоненты, хуки). Использование React-Router для навигации. Знание архитектурного паттерна Redux (или Redux Toolkit) для эффективного управления состоянием приложения. Базовое понимание возможностей Next.js (маршрутизация, статическая генерация)."
        eleven="Опыт ускоренной разработки UI с использованием популярных библиотек компонентов: Bootstrap, React-Bootstrap, Material UI (MUI) и Materialize для создания современных и адаптивных интерфейсов."
        twelve="Опыт использования системы контроля версий Git и платформы GitHub (или GitLab/Bitbucket). Умение работать с ветками (branching), решать конфликты слияния (conflict resolution) и следовать рабочим процессам командной разработки."
        thirteen="Базовый опыт работы с Webpack для сборки и оптимизации фронтенд-проектов. Понимание настройки лоадеров, плагинов и модулей для улучшения производительности сборки."
        fourteen=" Практические навыки работы с Figma (или Sketch/Zeplin) для анализа макетов и дизайна. Умение корректно извлекать стили, размеры, цвета и экспортировать активы для точной реализации интерфейса."
        fifteen="React Native (Expo)"
        sixteen="Опыт разработки кроссплатформенных мобильных приложений с использованием фреймворка React Native."
      />
      <Education
        education="Образование:"
        university="2003 - 2008 Одесский Государственный Экономический Университет, факультет международной экономики, специальность – маркетолог (магистр).."
        additional="Дополнительное образование:"
        first="2022 Начальный курс Front-end в IT-школе Hillel"
        second="2023 Front-end Pro в IT-школе Hillel"
        third="2022 Курсы английского языка ABS начальный уровень"
        fourth="2022 Курсы английского языка ABS среднего уровня"
        fifth="Другие сертификаты"
        certificateOne="Сертификат"
        titleOne="Сертификат выпускника"
        hrefOne="https://certificate.ithillel.ua/view/34550382"
        classNameOne="certificateBasic"
        certificateTwo="Рекомендация"
        titleTwo="Рекомендация"
        classNameTwo="recommendation ruBasic"
        certificateThree="Сертификат"
        titleThree="Сертификат выпускника"
        hrefThree="https://certificate.ithillel.ua/view/50761145"
        classNameThree="certificatePro"
        certificateFour="Рекомендация"
        titleFour="Рекомендация"
        classNameFour="recommendation ruPro"
        certificateFive="JavaScript"
        titleFive="Sololearn"
        classNameFive="javaScript"
        certificateSix="HTML"
        titleSix="Sololearn"
        classNameSix="html"
        certificateSeven="CSS"
        titleSeven="Sololearn"
        classNameSeven="css"
        eighth="2023 TypeScript курс в IT-школе Hillel"
        certificateEighth="Сертификат"
        titleEighth="Сертификат выпускника"
        hrefEighth="https://certificate.ithillel.ua/view/71562104"
        classNameEighth="certificateTS"
        certificateNine="Рекомендация"
        titleNine="Рекомендация"
        classNameNine="recommendation ruTS"
      />
      <Experience
        experience="Профессиональный опыт:"
        first="С 3.09.2020 по 06.08.2021 работал ТОВ Арикол торговым представителем."
        second="С 1.07.2018 по 30.06.2020 работал в компании Johnson & Johnson,
        торговый представитель ОТС."
        third="С 09.04.2016 по 30.06.2018 г. работал в компании Крайтекс Сервис в
        отделе Кимберли-Кларк, с ключевыми клиентами."
      />
      <SoftSkill
        softSkill="Личные качества:"
        first="быстрая обучаемость"
        second="ответственность"
        third="целеустремленность"
        fourth="коммуникабельность"
        fifth="умение работать в команде"
        sixth="настойчивость и стремление к профессиональному росту"
      />
      <OtherInfo
        languages="Дополнительная информация:"
        hobbies="Увлечения:"
        first="Украинский - родной"
        second="Английский - средний"
        third="Русский - родной"
        fourth="путешествие"
        fifth="футбол"
        sixth="музыка"
      />
    </>
  );
}
export { SummaryRu };
