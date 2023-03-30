import React from "react";
import { Header } from "../header/Header";
import { Projects } from "../projects/Projects";
import { HeaderSecond } from "../header/HeaderSecond";

function ProjectsRU() {
  return (
    <>
      <Header
        className1="btn-summary"
        className2="btn-projects"
        className3="menu-nav"
        className4="menu-nav"
        className5="menu-nav active-ru"
        to1="/summary/ru"
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
      />
      <Projects
        infoOne="Макет адаптивного сайта доставки еды с применением Flexbox."
        infoTwo="3D Слайдер с эффектом вращения элементов на мерцающем дымчатом фоне. С использованием анимации и преобразования."
        infoThree="Сайт для юридической компании. С использованием Flexbox и Grid. "
        infoFour="Сайт города Одессы с описанием его достопримечательностей. С использованием Flexbox, атакже применением  анимации и преобразования."
        infoFive="Форма регистрации пользователя с полной валидацией формы."
        infoSix="Небольшой обучающий сайт для начинающих Front-end разработчиков. С описанием свойст, еллементов, атакже различными примерами. "
        infoSeven="Сайт прогноза погоды с применением Fetch API запросов и выводом информации по заданным параметрам."
        infoEight="Создание списка дел с применением Redux, также возможностью добавления и удаления дел."
        infoNine="Создание мобильного аппа, с возможностью добавления и удаления различных задач. "
        infoTen="Макет интернет магазина электрооборудования. Есть возможность поиска товара по названию, добовление его в корзину."
        infoEleven="Слайдер горизонтальный с использованием анимации и паралакс эффектом."
        infoTwelve="Анимированный сайт с использованием параллакс эффектов."
        infoThirteen="Получение информации о машине по указанному вин коду с использованием Fetch API запроса. Информация выводится в зависимости от одного из трёх запросов."
      />
    </>
  );
}
export { ProjectsRU };
