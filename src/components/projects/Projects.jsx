import React from "react";
import { Cards } from "../../core/card/Card";

function Projects({
  infoOne,
  infoTwo,
  infoThree,
  infoFour,
  infoFive,
  infoSix,
  infoSeven,
  infoEight,
  infoNine,
  infoTen,
  infoEleven,
  infoTwelve,
  infoThirteen,
}) {
  return (
    <>
      <div className="cards">
        <Cards
          className="card-img one"
          project="Food delivery"
          tehnology="HTML, CSS"
          href="https://naumkinalexsandr.github.io/Food_delivery/"
          info={infoOne}
        />
        <Cards
          className="card-img two"
          project="3D-hoodie"
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/3D-hoodie/"
          info={infoTwo}
        />
        <Cards
          className="card-img eleven"
          project="Witcher parallax"
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/Witcher-parallax/"
          info={infoEleven}
        />
        <Cards
          className="card-img twelve"
          project="Magical forest"
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/Magical-forest/"
          info={infoTwelve}
        />
        <Cards
          className="card-img three"
          project="HLEGAL"
          tehnology="HTML, CSS, SCSS, JavaScript"
          href="https://naumkinalexsandr.github.io/HLEGALS/"
          info={infoThree}
        />
        <Cards
          className="card-img four"
          project="Odessa"
          tehnology="HTML, CSS, SCSS, JavaScript"
          href="https://naumkinalexsandr.github.io/Odessa/"
          info={infoFour}
        />
        <Cards
          className="card-img five"
          project="Authorization"
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/login/"
          info={infoFive}
        />
        <Cards
          className="card-img six"
          project="Education"
          tehnology="HTML, CSS, SCSS, Bootstrap, JavaScript, jQuery, Webpack"
          href="https://naumkinalexsandr.github.io/learning"
          info={infoSix}
        />
        <Cards
          className="card-img seven"
          project="Weather forecast"
          tehnology="HTML, SCSS, JavaScript, React"
          href="https://naumkinalexsandr.github.io/weather/"
          info={infoSeven}
        />
        <Cards
          className="card-img thirteen"
          project="Car Vincode"
          tehnology="HTML, CSS, JavaScript, React"
          href="https://naumkinalexsandr.github.io/vin/"
          info={infoThirteen}
        />
        <Cards
          className="card-img eight"
          project="Todo list"
          tehnology="HTML, SCSS, JavaScript, React, Redux"
          href="https://naumkinalexsandr.github.io/Todolist/"
          info={infoEight}
        />
        <Cards
          className="card-img nine"
          project="Mobile APP"
          tehnology="HTML, SCSS, JavaScript, React, Redux "
          href="https://github.com/NaumkinAlexsandr/diploma"
          info={infoNine}
        />
        <Cards
          className="card-img ten"
          project="Light Shop"
          tehnology="HTML, CSS, JavaScript, React, Redux, Material UI"
          href="https://naumkinalexsandr.github.io/LightShop/"
          info={infoTen}
        />
      </div>
    </>
  );
}
export { Projects };
