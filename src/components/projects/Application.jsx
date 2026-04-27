import React from "react";
import { CardAPP } from "core/card/CardAPP";
import {
  regionsImages,
  weatherImages,
  runesImages,
} from "constants/appGalleries";

function Application({
  titleAPP,
  appOne,
  appTwo,
  appInfoOne,
  appInfoTwo,
  images,
  appThree,
  appInfoThree,
}) {
  return (
    <>
      <div className="cards">
        <div className="title">
          <h3>{titleAPP}</h3>
        </div>

        <CardAPP
          className="card-img webImg appOne"
          project={appOne}
          tehnology="React Native, TypeScript, Expo"
          info={appInfoOne}
          images={regionsImages}
        />

        <CardAPP
          className="card-img webImg appTwo"
          project={appTwo}
          tehnology="React Native, TypeScript, Expo"
          info={appInfoTwo}
          images={weatherImages}
        />

        <CardAPP
          className="card-img webImg appThree"
          project={appThree}
          tehnology="React Native, TypeScript, Expo"
          info={appInfoThree}
          images={runesImages}
        />
      </div>
    </>
  );
}
export { Application };
