import React from "react";
import { HardSkill } from "../hardSkill/HardSkill";
import { Education } from "../education/Education";
import { Experience } from "../experience/Experience";
import { SoftSkill } from "../softSkill/SoftSkill";
import { OtherInfo } from "../otherInfo/OtherInfo";
import { Summary } from "../summary/Summary";
import { Header } from "../header/Header";

function SummaryRu() {
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
        to3="/cv/en"
        to4="/cv/ua"
        to5="/cv/ru"
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
      <Summary
        name="Наумкин Александр Николаевич"
        city="Город: Одесса, Украина"
        phone="Телефон:"
      />
      <HardSkill
        objective="Карьерная цель"
        look="Ищу постоянную работу в качестве младшего Front-end разработчика."
        hardSkill="Профессиональные навыки:"
        first="HTML5, CSS3, SASS"
        second="JavaScript, TypeScript "
        third="React, React-Router, Redux"
        fourth="Bootstrap, React-Bootstrap, Material UI, Materialize"
        fifth="Git, GitHub"
        sixth="Webpack"
        seven="Figma"
        eight="Знание использования различных тегов, атрибутов и стилей для создания разнообразных компонентов и макетов. 
        Знание препроцессора SASS для упрощения стилизации и повторного использования стилей. 
        Использование переменных, миксинов, вложенности и других возможностей SASS для более эффективной разработки стилей."
        nine="Понимание основ языка программирования JavaScript и знание синтаксиса TypeScript. 
        Разработка интерактивных элементов и функциональности на веб-страницах с использованием JavaScript и TypeScript."
        ten="Опыт работы с библиотекой React для создания компонентов пользовательского интерфейса.
        Использование React-Router для навигации между страницами в одностраничном приложении.
        Знание архитектурного шаблона Redux для управления состоянием приложения и облегчения разработки."
        eleven="Использование фреймворков и библиотек для создания адаптивных и красивых пользовательских интерфейсов."
        twelve="Опыт работы с системой контроля версий Git для отслеживания изменений и совместной работы над проектами.
        Умение работать с ветками, коммитами, слияниями, разрешением конфликтов и другими основными командами Git."
        thirteen="Опыт работы с инструментом сборки Webpack для сборки и оптимизации фронтэнд-проектов. 
        Умение настраивать загрузчики и плагины, работать с модулями и настраивать сборку проекта."
        fourteen=" Знание графического инструмента Figma для работы с макетами и дизайном. 
        Умение экспортировать изображения и извлекать значения цветов и размеров элементов."
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
