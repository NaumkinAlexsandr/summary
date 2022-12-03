import React from "react";
import { HeaderUA } from "../header/HeaderUA";
import { PersonalInfo } from "../personalInfo/PersonalInfo";
import { HardSkill } from "../hardSkill/HardSkill";
import { Education } from "../education/Education";
import { Experience } from "../experience/Experience";
import { SoftSkill } from "../softSkill/SoftSkill";
import { OtherInfo } from "../otherInfo/OtherInfo";

function SectionUkrainian() {
  return (
    <>
      <HeaderUA />
      <PersonalInfo
        name="Наумкін Олександр Миколайович"
        title="Особисті дані:"
        date="Дата народження: 06.08.1985"
        city="Місто: Одеса, Україна"
        phone="Телефон:"
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
      <Education
        education="Освіта:"
        university="2003 - 2008 Одеський Державний Економічний Університет, факультет міжнародної економіки, спеціальність – маркетолог (магістр)."
        additional="Додаткова освіта:"
        first="2022 Початковий курс Front-end у IT-школі Hillel"
        second="2022 Почав вивчати курс Front-end Pro в IT-школі Hillel"
        third="2022 Курси англійської мови ABS початковий рівень"
        fourth="2022 Почала вивчати англійську мову на курсах середнього рівня ABS"
      />
      <Experience
        experience="Досвід роботи:"
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
        second="Англійська - початковий рівень"
        third="Російська - рідна"
        fourth="подорожі"
        fifth="футбол"
        sixth="музика"
      />
    </>
  );
}
export { SectionUkrainian };
