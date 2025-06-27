import React from "react";
import "./backTop.scss";
import upArrow from "../img/headerIcon/up-arrow.png"; // Импортируем изображение

export default function BackTop() {
  return (
    <div id="back-top">
      <img src={upArrow} />
      <a href="#"></a>
    </div>
  );
}
