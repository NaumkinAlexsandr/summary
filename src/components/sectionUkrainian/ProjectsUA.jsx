import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";

function ProjectsUA() {
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
        to3="/projects/en"
        to4="/projects/ua"
        to5="/projects/ru"
        title1="Резюме"
        title2="Проекти"
        title3="EN"
        title4="UA"
        title5="RU"
        id1="summary-buttun"
        id2="projects-buttun"
        id3="home-buttun"
        className6="btn-home"
        to6="/cv/ua"
        title6="Головна"
      />
      <Projects
        infoOne="Адаптивний макет сайту доставки їжі з використанням Flexbox."
        infoTwo="Форма реєстрації користувача з повною перевіркою форми."
        infoThree="Сайт юридичної фірми. З використанням Flexbox та Grid."
        infoFour="Інформаційний веб-сайт міста Одеса з описом його визначних пам'яток. Використання Flexbox та застосування анімації та трансформації."
        infoFive="3D-слайдер з ефектом обертових елементів на мерехтливому димчастому фоні. Використання анімації та трансформації."
        infoSix="Горизонтальний слайдер з анімацією та ефектом паралакса."
        infoSeven="Анімований веб-сайт з використанням ефектів паралакса."
        infoEight="Створення списку справ за допомогою Redux, також можливість додавання та видалення справ."
        infoNine="Створення мобільного додатку з можливістю додавання та видалення різних завдань."
        infoTen="Невеликий навчальний сайт для початківців Front-end розробників. З описом властивостей, елементів, а також різними прикладами."
        infoEleven="Сайт прогнозу погоди з використанням запитів Fetch API та відображенням інформації за заданими параметрами."
        infoTwelve="Отримання інформації про автомобіль за заданим VIN-кодом за допомогою запиту Fetch API. Інформація відображається залежно від одного з трьох запитів."
        infoThirteen="Макет інтернет-магазину електрообладнання. Є можливість пошуку товару за назвою, додавання його до кошика."
        infoFourteen="Мобільний додаток для пошуку регіонів України за номерним кодом автомобіля. Додаток зроблено трьома мовами. Також у програмі ви можете отримати інформацію про те, які номерні знаки існують в Україні."
        projectTitleOne="Доставка їжі"
        projectTitleTwo="Авторизація"
        projectTitleThree="HLEGAL"
        projectTitleFour="Одеса"
        projectTitleFive="3D-толстовка"
        projectTitleSix="Відьмак. Ефект паралакса"
        projectTitleSeven="Чарівний ліс. Ефект паралакса"
        projectTitleEight="Список справ"
        projectTitleNine="Диспетчер завдань"
        projectTitleTen="Вивчення фронтенд"
        projectTitleEleven="Прогноз погоди"
        projectTitleTwelve="Вінкод автомобіля"
        projectTitleThirteen="Магазин світла"
        projectTitleFourteen="Код області України. APP"
      />
    </>
  );
}
export { ProjectsUA };
