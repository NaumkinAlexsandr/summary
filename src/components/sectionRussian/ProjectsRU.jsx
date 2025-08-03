import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";

function ProjectsRU() {
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
        toEN="/projects/en"
        toUA="/projects/ua"
        toRU="/projects/ru"
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
      <Projects
        infoOne="Адаптивный макет сайта доставки еды с использованием Flexbox."
        infoTwo="Форма регистрации пользователя с полной проверкой формы."
        infoThree="Сайт юридической фирмы. С использованием Flexbox и Grid."
        infoFour="Информационный сайт города Одессы с описанием достопримечательностей. Использование Flexbox с применением анимации и трансформации."
        infoFive="3D-слайдер с эффектом вращения элементов на мерцающем дымчатом фоне. Использование анимации и трансформации."
        infoSix="Горизонтальный слайдер с анимацией и эффектом параллакса."
        infoSeven="Анимированный сайт с использованием параллакс-эффектов."
        infoEight="Создание списка дел с использованием Redux, также возможность добавлять и удалять задачи."
        infoNine="Создание мобильного приложения, с возможностью добавлять и удалять различные задачи."
        infoTen="Небольшой обучающий сайт для начинающих Front-end разработчиков. С описанием свойств, элементов, а также различными примерами."
        infoEleven="Сайт прогноза погоды с использованием запросов Fetch API и выводом информации по указанным параметрам."
        infoTwelve="Получение информации об автомобиле по указанному VIN с помощью запроса Fetch API. Информация выводится в зависимости от одного из трех запросов."
        infoThirteen="Макет интернет-магазина электрооборудования. Возможен поиск товара по названию, добавление его в корзину."
        infoFourteen="Мобильное приложение для поиска регионов Украины по коду номера автомобиля. Приложение сделано на трёх языках. Также в приложении вы можете получить информацию о том, какие номерные знаки существуют в Украине."
        infoFifteen="Мобильное приложение для получения прогноза погоды с помощью api openweathermap. Приложение сделано на 3 языках и имеет два разных стиля отображения данных."
        projectTitleOne="Доставка еды"
        projectTitleTwo="Авторизация"
        projectTitleThree="HLEGAL"
        projectTitleFour="Одесса"
        projectTitleFive="3D-толстовка"
        projectTitleSix="Ведьмак. Эффект параллакса"
        projectTitleSeven="Волшебный лес. Эффект параллакса"
        projectTitleEight="Список дел"
        projectTitleNine="Менеджер задач"
        projectTitleTen="Изучение фронтенд"
        projectTitleEleven="Прогноз погоды"
        projectTitleTwelve="Vincode автомобиля"
        projectTitleThirteen="Магазин света"
        projectTitleFourteen="Код облати Украина. APP"
        projectFifteen="Прогноз погоды. APP"
      />
    </>
  );
}
export { ProjectsRU };
