import React from "react";
import { Example } from "./Modal";

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
}) => {
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
            <h6>{fifth}</h6>
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
