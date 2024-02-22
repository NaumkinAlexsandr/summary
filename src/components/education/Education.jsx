import React, { useState, useEffect } from "react";
import { Example } from "./Modal";
import "./education.scss";

const Education = ({
  education,
  university,
  additional,
  first,
  second,
  third,
  fourth,
  fifth,
  certificateOne,
  titleOne,
  hrefOne,
  classNameOne,
  certificateTwo,
  titleTwo,
  classNameTwo,
  certificateThree,
  titleThree,
  classNameThree,
  hrefThree,
  certificateFour,
  titleFour,
  classNameFour,
  certificateFive,
  titleFive,
  classNameFive,
  certificateSix,
  titleSix,
  classNameSix,
  certificateSeven,
  titleSeven,
  classNameSeven,
  eighth,
  certificateEighth,
  titleEighth,
  hrefEighth,
  classNameEighth,
  certificateNine,
  titleNine,
  classNameNine,
}) => {
  const [bodyClassName, setBodyClassName] = useState("");

  useEffect(() => {
    setBodyClassName(document.querySelector("body").className);
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll("#education button");
    if (bodyClassName === "body-dark") {
      buttons.forEach((button) => {
        button.classList.add("education-btn-dark");
      });
    } else {
      buttons.forEach((button) => {
        button.classList.remove("education-btn-dark");
      });
    }
  }, [bodyClassName]);

  return (
    <div id="education" className="container-fluid">
      <div className="row">
        <span>
          <h3>{education}</h3> <h6>{university}</h6>
        </span>
        <ul>
          <h3>{additional}</h3>
          <li>
            <h6>{first}</h6>
            <Example
              certificate={certificateOne}
              title={titleOne}
              href={hrefOne}
              className={classNameOne}
            />
            <Example
              certificate={certificateTwo}
              title={titleTwo}
              className={classNameTwo}
            />
          </li>
          <li>
            <h6>{second}</h6>
            <Example
              certificate={certificateThree}
              title={titleThree}
              href={hrefThree}
              className={classNameThree}
            />
            <Example
              certificate={certificateFour}
              title={titleFour}
              className={classNameFour}
            />
          </li>
          <li>
            <h6>{eighth}</h6>
            <Example
              certificate={certificateEighth}
              title={titleEighth}
              href={hrefEighth}
              className={classNameEighth}
            />
            <Example
              certificate={certificateNine}
              title={titleNine}
              className={classNameNine}
            />
          </li>
          <li>
            <h6>{fifth}</h6>
            <Example
              certificate={certificateSix}
              title={titleSix}
              className={classNameSix}
            />
            <Example
              certificate={certificateSeven}
              title={titleSeven}
              className={classNameSeven}
            />
            <Example
              certificate={certificateFive}
              title={titleFive}
              className={classNameFive}
            />
          </li>
          <li>
            <h6>{third}</h6>
          </li>
          <li>
            <h6>{fourth}</h6>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Education };
