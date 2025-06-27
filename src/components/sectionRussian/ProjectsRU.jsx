import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";

function ProjectsRU() {
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
        to3="/projects/en"
        to4="/projects/ua"
        to5="/projects/ru"
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
      />
    </>
  );
}
export { ProjectsRU };
