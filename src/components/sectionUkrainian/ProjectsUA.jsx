import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";

function ProjectsUA() {
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
        toEN="/projects/en"
        toUA="/projects/ua"
        toRU="/projects/ru"
        toHome="/cv/ua"
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
        infoFifteen="Мобільний додаток для отримання прогноза погоди за допомоги api openweathermap. Додаток зроблений на 3 мовах та має два різних стиля відображення даних. "
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
        projectFifteen="Прогноз погоди. APP"
      />
    </>
  );
}
export { ProjectsUA };
