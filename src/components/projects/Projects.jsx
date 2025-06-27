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
  infoFourteen,
  projectTitleOne,
  projectTitleTwo,
  projectTitleThree,
  projectTitleFour,
  projectTitleFive,
  projectTitleSix,
  projectTitleSeven,
  projectTitleEight,
  projectTitleNine,
  projectTitleTen,
  projectTitleEleven,
  projectTitleTwelve,
  projectTitleThirteen,
  projectTitleFourteen,
}) {
  return (
    <>
      <div className="cards">
        <Cards
          className="card-img one"
          project={projectTitleOne}
          tehnology="HTML, CSS"
          href="https://naumkinalexsandr.github.io/Food_delivery/"
          info={infoOne}
        />
        <Cards
          className="card-img two"
          project={projectTitleTwo}
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/login/"
          info={infoTwo}
        />
        <Cards
          className="card-img three"
          project={projectTitleThree}
          tehnology="HTML, CSS, SCSS, JavaScript"
          href="https://naumkinalexsandr.github.io/HLEGALS/"
          info={infoThree}
        />
        <Cards
          className="card-img four"
          project={projectTitleFour}
          tehnology="HTML, CSS, SCSS, JavaScript"
          href="https://naumkinalexsandr.github.io/Odessa/"
          info={infoFour}
        />
        <Cards
          className="card-img five"
          project={projectTitleFive}
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/3D-hoodie/"
          info={infoFive}
        />
        <Cards
          className="card-img six"
          project={projectTitleSix}
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/Witcher-parallax/"
          info={infoSix}
        />
        <Cards
          className="card-img seven"
          project={projectTitleSeven}
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/Magical-forest/"
          info={infoSeven}
        />
        <Cards
          className="card-img eight"
          project={projectTitleEight}
          tehnology="HTML, SCSS, JavaScript, React, Redux"
          href="https://naumkinalexsandr.github.io/Todolist/"
          info={infoEight}
        />
        <Cards
          className="card-img nine"
          project={projectTitleNine}
          tehnology="HTML, SCSS, JavaScript  "
          href="https://naumkinalexsandr.github.io/diploma/"
          info={infoNine}
        />
        <Cards
          className="card-img ten"
          project={projectTitleTen}
          tehnology=" React, Redux, TypeScript, JavaScript, SCSS, Material UI"
          href="https://naumkinalexsandr.github.io/learning"
          info={infoTen}
        />
        <Cards
          className="card-img eleven"
          project={projectTitleEleven}
          tehnology="HTML, SCSS, TypeScript, React"
          href="https://naumkinalexsandr.github.io/weather/"
          info={infoEleven}
        />
        <Cards
          className="card-img twelve"
          project={projectTitleTwelve}
          tehnology="HTML, CSS, JavaScript, React"
          href="https://naumkinalexsandr.github.io/vin/"
          info={infoTwelve}
        />
        <Cards
          className="card-img thirteen"
          project={projectTitleThirteen}
          tehnology="HTML, CSS, JavaScript, React, Redux, Material UI"
          href="https://naumkinalexsandr.github.io/LightShop/"
          info={infoThirteen}
        />
        <Cards
          className="card-img fourteen"
          project={projectTitleFourteen}
          tehnology="React Native, TypeScript"
          // href="https://naumkinalexsandr.github.io/LightShop/"
          info={infoFourteen}
        />
      </div>
    </>
  );
}
export { Projects };
