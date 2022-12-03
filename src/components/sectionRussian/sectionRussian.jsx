import React from "react";
import { HeaderRU } from "../header/HeaderRU";
import { PersonalInfo } from "../personalInfo/PersonalInfo";
import { HardSkill } from "../hardSkill/HardSkill";
import { Education } from "../education/Education";
import { Experience } from "../experience/Experience";
import { SoftSkill } from "../softSkill/SoftSkill";
import { OtherInfo } from "../otherInfo/OtherInfo";

function SectionRussian() {
  return (
    <>
      <HeaderRU />
      <PersonalInfo
        name="Наумкин Александр Николаевич"
        title="Персональные данные:"
        date="Дата рождения: 06.08.1985"
        city="Город: Одесса, Украина"
        phone="Телефон:"
      />
      <HardSkill
        objective="Карьерная цель"
        look="Ищу постоянную работу в качестве младшего Front-end разработчика."
        hardSkill="Профессиональные навыки:"
        first="HTML5, CSS3, SASS"
        second="JS, REACT, REDUX"
        third="Git"
        fourth="Figma"
        fifth="Bootstrap"
        sixth="Webpack"
      />
      <Education
        education="Образование:"
        university="2003 - 2008 Одесский Государственный Экономический Университет, факультет международной экономики, специальность – маркетолог (магистр).."
        additional="Дополнительное образование:"
        first="2022 Начальный курс Front-end в IT-школе Hillel"
        second="2022 Начал изучать курс Front-end Pro в IT-школе Hillel"
        third="2022 Курсы английского языка ABS начальный уровень"
        fourth="2022 Начала изучать английский язык на курсах ABS среднего уровня"
      />
      <Experience
        experience="Опыт работы:"
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
        second="Английский - начальный уровень"
        third="Русский - родной"
        fourth="путешествие"
        fifth="футбол"
        sixth="музыка"
      />
    </>
  );
}
export { SectionRussian };
