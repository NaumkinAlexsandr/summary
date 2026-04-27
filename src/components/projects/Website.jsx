import React from "react";
import { Cards } from "core/card/Card";

function Website({
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
  infoFifteen,
  titleWebsite,
  webOne,
  webTwo,
  webThree,
  webFour,
  webFive,
  webSix,
  webSeven,
  webEight,
  webNine,
  webTen,
  webEleven,
  webTwelve,
  webThirteen,
  webFourteen,
  projectFifteen,
}) {
  return (
    <>
      <div className="cards">
        <div className="title">
          <h3>{titleWebsite}</h3>
        </div>

        <Cards
          className="card-img webImg webOne"
          project={webOne}
          tehnology="HTML, CSS"
          href="https://naumkinalexsandr.github.io/food-delivery/"
          info={infoOne}
        />

        <Cards
          className="card-img webImg webTwo"
          project={webTwo}
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/login/"
          info={infoTwo}
        />

        <Cards
          className="card-img webImg webThree"
          project={webThree}
          tehnology="HTML, CSS, SCSS, JavaScript"
          href="https://naumkinalexsandr.github.io/hlegals/"
          info={infoThree}
        />

        <Cards
          className="card-img webImg webFour"
          project={webFour}
          tehnology="Next.js, TypeScript, Tailwind CSS, Flexbox"
          href="https://odesa-git-main-alexander-naumkins-projects.vercel.app?_vercel_share=sICuItOZXYqVLZW9hQTXJmktWyils6TV"
          info={infoFour}
        />

        <Cards
          className="card-img webImg webFive"
          project={webFive}
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/3d-hoodie/"
          info={infoFive}
        />

        <Cards
          className="card-img webImg webSix"
          project={webSix}
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/witcher-parallax/"
          info={infoSix}
        />

        <Cards
          className="card-img webImg webSeven"
          project={webSeven}
          tehnology="HTML, CSS, JavaScript"
          href="https://naumkinalexsandr.github.io/magical-forest/"
          info={infoSeven}
        />

        <Cards
          className="card-img webImg webEight"
          project={webEight}
          tehnology="HTML, SCSS, JavaScript, React, Redux"
          href="https://naumkinalexsandr.github.io/todolist/"
          info={infoEight}
        />

        {/* <Cards
          className="card-img webImg webNine"
          project={webNine}
          tehnology="HTML, SCSS, JavaScript  "
          href="https://naumkinalexsandr.github.io/diploma/"
          info={infoNine}
        /> */}

        <Cards
          className="card-img webImg webTen"
          project={webTen}
          tehnology=" React, Redux, TypeScript, JavaScript, SCSS, Material UI"
          href="https://naumkinalexsandr.github.io/learning"
          info={infoTen}
        />

        <Cards
          className="card-img webImg webEleven"
          project={webEleven}
          tehnology="HTML, SCSS, TypeScript, React"
          href="https://naumkinalexsandr.github.io/weather/"
          info={infoEleven}
        />

        <Cards
          className="card-img webImg webTwelve"
          project={webTwelve}
          tehnology="HTML, CSS, JavaScript, React"
          href="https://naumkinalexsandr.github.io/vin/"
          info={infoTwelve}
        />

        <Cards
          className="card-img webImg webThirteen"
          project={webThirteen}
          tehnology="HTML, CSS, JavaScript, React, Redux, Material UI"
          href="https://naumkinalexsandr.github.io/light-shop/"
          info={infoThirteen}
        />
      </div>
    </>
  );
}
export { Website };
