import React from "react";
import { HeaderSummaryRU } from "../headers/HeaderSummaryRU";
import { PersonalInfo } from "../personalInfo/PersonalInfo";
import { HardSkill } from "../hardSkill/HardSkill";
import { EducationRU } from "../education/EducationRU";
import { Experience } from "../experience/Experience";
import { SoftSkill } from "../softSkill/SoftSkill";
import { OtherInfo } from "../otherInfo/OtherInfo";
import { Summary } from "../summary/Summary";

function SectionRussian() {
  return (
    <>
      <HeaderSummaryRU />
      <PersonalInfo
        name="Наумкин Александр Николаевич"
        title="Персональные данные:"
        city="Город: Одесса, Украина"
        phone="Телефон:"
      />
      <Summary
        title="Резюме:"
        summary="Привет! Меня зовут Александр. Я будущий разработчик JavaScript. Я изучал JavaScript в IT-школе Hillel. У меня есть знания HTML5, CSS3 и JavaScript. Также у меня есть опыт работы с технологиями Flexbox, Grid в ИТ-школе Hillel. Я хотел бы стать надежным членом команды ИТ-компании, где я смогу внести полезный и необходимый вклад в программирование."
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
      <EducationRU
        education="Образование:"
        university="2003 - 2008 Одесский Государственный Экономический Университет, факультет международной экономики, специальность – маркетолог (магистр).."
        additional="Дополнительное образование:"
        first="2022 Начальный курс Front-end в IT-школе Hillel"
        second="2023 Front-end Pro в IT-школе Hillel"
        third="2022 Курсы английского языка ABS начальный уровень"
        fourth="2022 Начала изучать английский язык на курсах ABS среднего уровня"
        fifth="Другие сертификаты"
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
export { SectionRussian };
