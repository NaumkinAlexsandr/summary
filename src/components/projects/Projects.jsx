import React from "react";
import { Cards } from "../../core/card/Card";

function Projects() {
  return (
    <>
      <div className="cards">
        <Cards
          className="cardImg one"
          project="Food delivery"
          tehnology="HTML, CSS"
          href="https://naumkinalexsandr.github.io/Food_delivery/"
        />
        <Cards
          className="cardImg two"
          project="3D-hoodie"
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/3D-hoodie/"
        />
        <Cards
          className="cardImg three"
          project="HLEGAL"
          tehnology="HTML, CSS, SCSS, JavaScript"
          href="https://naumkinalexsandr.github.io/HLEGALS/"
        />
        <Cards
          className="cardImg four"
          project="Odessa"
          tehnology="HTML, CSS, SCSS, JavaScript"
          href="https://naumkinalexsandr.github.io/Odessa/"
        />
        <Cards
          className="cardImg five"
          project="Authorization"
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/login/"
        />
        <Cards
          className="cardImg six"
          project="Education"
          tehnology="HTML, CSS, SCSS, Bootstrap, JavaScript"
          href="https://naumkinalexsandr.github.io/education/html/html.html"
        />
        <Cards
          className="cardImg seven"
          project="Weather forecast"
          tehnology="HTML, CSS, JavaScript, React"
          href="https://naumkinalexsandr.github.io/weather/"
        />
        <Cards
          className="cardImg seven"
          project="Todo list"
          tehnology="HTML, CSS, JavaScript, React, Redux"
          href="https://naumkinalexsandr.github.io/Todolist/"
        />
        <Cards
          className="cardImg eight"
          project="Mobile APP"
          tehnology="HTML, CSS, JavaScript, React, Redux "
          href="https://github.com/NaumkinAlexsandr/diploma"
        />
        <Cards
          className="cardImg nine"
          project="Light Shop"
          tehnology="HTML, CSS, JavaScript, React, Redux, Material UI"
          href="https://naumkinalexsandr.github.io/LightShop/"
        />
      </div>
    </>
  );
}
export { Projects };
