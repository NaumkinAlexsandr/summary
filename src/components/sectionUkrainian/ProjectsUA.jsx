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
        infoOne="Макет адаптивного сайту доставки їжі із застосуванням Flexbox."
        infoTwo="3D слайдер з ефектом обертання елементів на мерехтливому димчастому фоні. З використанням анімації та перетворення."
        infoThree="Сайт для юридичної компанії. З використанням Flexbox та Grid."
        infoFour="Сайт міста Одеси з описом його визначних пам'яток. З використанням Flexbox, а також застосуванням анімації та перетворення."
        infoFive="Форма реєстрації користувача з повною валідацією форми."
        infoSix="Невеликий навчальний сайт для початківців Front-end розробників. З описом властивостей, елементів, а також різними прикладами."
        infoSeven="Сайт прогнозу погоди із застосуванням Fetch API запитів та виведенням інформації за заданими параметрами."
        infoEight="Створення списку справ із застосуванням Redux, а також можливістю додавання та видалення справ."
        infoNine="Створення мобільного аппа, з можливістю додавання та видалення різних завдань."
        infoTen="Макет інтернет магазину електроустаткування. Є можливість пошуку товару за назвою, додавання його до кошика."
        infoEleven="Слайдер горизонтальний з використанням анімації та паралакс ефектом."
        infoTwelve="Анімований сайт з використанням паралакс ефектів."
        infoThirteen="Отримання інформації про машину за вказаним віном кодом з використанням Fetch API запиту. Інформація відображається залежно від одного з трьох запитів."
      />
    </>
  );
}
export { ProjectsUA };
