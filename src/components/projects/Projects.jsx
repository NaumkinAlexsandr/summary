import React from "react";
import { Cards } from "../../core/card/Card";

function Projects() {
  return (
    <>
      <div className="cards">
        <Cards
          className="card-img one"
          project="Food delivery"
          tehnology="HTML, CSS"
          href="https://naumkinalexsandr.github.io/Food_delivery/"
        />
        <Cards
          className="card-img two"
          project="3D-hoodie"
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/3D-hoodie/"
        />
        <Cards
          className="card-img three"
          project="HLEGAL"
          tehnology="HTML, CSS, SCSS, JavaScript"
          href="https://naumkinalexsandr.github.io/HLEGALS/"
        />
        <Cards
          className="card-img four"
          project="Odessa"
          tehnology="HTML, CSS, SCSS, JavaScript"
          href="https://naumkinalexsandr.github.io/Odessa/"
        />
        <Cards
          className="card-img five"
          project="Authorization"
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/login/"
        />
        <Cards
          className="card-img six"
          project="Education"
          tehnology="HTML, CSS, SCSS, Bootstrap, JavaScript"
          href="https://naumkinalexsandr.github.io/education/html/html.html"
        />
        <Cards
          className="card-img seven"
          project="Weather forecast"
          tehnology="HTML, CSS, JavaScript, React"
          href="https://naumkinalexsandr.github.io/weather/"
        />
        <Cards
          className="card-img eight"
          project="Todo list"
          tehnology="HTML, CSS, JavaScript, React, Redux"
          href="https://naumkinalexsandr.github.io/Todolist/"
        />
        <Cards
          className="card-img nine"
          project="Mobile APP"
          tehnology="HTML, CSS, JavaScript, React, Redux "
          href="https://github.com/NaumkinAlexsandr/diploma"
        />
        <Cards
          className="card-img ten"
          project="Light Shop"
          tehnology="HTML, CSS, JavaScript, React, Redux, Material UI"
          href="https://naumkinalexsandr.github.io/LightShop/"
        />
      </div>
    </>
  );
}
export { Projects };
