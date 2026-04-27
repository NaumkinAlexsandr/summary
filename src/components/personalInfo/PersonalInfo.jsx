// PersonalInfo.jsx

import React from "react";
import { Sotial } from "core/Sotial";
import "./personalInfo.scss";

const PersonalInfo = ({ name, title, contacts, phone }) => {
  return (
    // Используем 'container' для адаптивного центрирования (исправление опечатки, если она была)
    <div id="personalInfo" className="container-fluid">
      {/* 1. Блок с именем */}
      <div className="row">
        <div className="col-sm-12">
          <h1>{name}</h1>
        </div>
      </div>

      {/* 2. Блок с фото и текстом */}
      <div className="row">
        {/* Здесь col-sm-6 для текста и фото (на больших экранах) */}
        <div className="col-sm-12">
          {/* photoOne - только для маленьких экранов (без float) */}
          <div className="photoOne"></div>

          {/* photoTwo - для больших экранов (будет float: right) */}
          <div className="photoTwo"></div>

          {/* Текстовый контент */}
          <>{title}</>
        </div>

        {/* Удаляем вторую колонку col-sm-6, чтобы текст мог обтекать фото в первой колонке */}
      </div>

      {/* 3. Блок с контактами */}
      <div className="row">
        <div className="col-sm-12">
          <h3>{contacts}</h3>
          <h5>
            {phone}
            <a className="phoneNumber" href="tel:+380500509213">
              +38 (050) 050 92 13
            </a>
          </h5>
          <Sotial />
        </div>
      </div>
    </div>
  );
};

export { PersonalInfo };
