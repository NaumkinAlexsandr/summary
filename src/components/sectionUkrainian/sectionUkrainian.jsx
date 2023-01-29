import React from "react";
import { HeaderSummaryUA } from "../headers/HeaderSummaryUA";
import { PersonalInfo } from "../personalInfo/PersonalInfo";
import { HardSkill } from "../hardSkill/HardSkill";
import { EducationUA } from "../education/EducationUA";
import { Experience } from "../experience/Experience";
import { SoftSkill } from "../softSkill/SoftSkill";
import { OtherInfo } from "../otherInfo/OtherInfo";
import { Summary } from "../summary/Summary";

function SectionUkrainian() {
  return (
    <>
      <HeaderSummaryUA />
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
        second="JS, REACT, REDUX"
        third="Git"
        fourth="Figma"
        fifth="Bootstrap"
        sixth="Webpack"
      />
      <EducationUA
        education="Освіта:"
        university="2003 - 2008 Одеський Державний Економічний Університет, факультет міжнародної економіки, спеціальність – маркетолог (магістр)."
        additional="Додаткова освіта:"
        first="2022 Початковий курс Front-end у IT-школі Hillel"
        second="2023 Front-end Pro в IT-школі Hillel"
        third="2022 Курси англійської мови ABS початковий рівень"
        fourth="2022 Почала вивчати англійську мову на курсах середнього рівня ABS"
        fifth="Інші сертифікати"
      />
      <Experience
        experience="Професійний досвід:"
        first="З 3.09.2020 по 06.08.2021 працював ТОВ Арікол торговим представником."
        second="З 1.07.2018 по 30.06.2020 працював у компанії Johnson & Johnson, торговий представник ОТС."
        third="З 09.04.2016 по 30.06.2018 р. працював у компанії Крайтекс Сервіс у відділі Кімберлі-Кларк, з ключовими клієнтами."
      />
      <SoftSkill
        softSkill="Особисті якості:"
        first="быстрая обучаемость"
        second="відповідальність"
        third="цілеспрямованість"
        fourth="комунікабельність"
        fifth="навики командної роботи"
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
export { SectionUkrainian };
