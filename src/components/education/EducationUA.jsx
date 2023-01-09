import React from "react";
import { Example } from "./Modal";

const EducationUA = ({
  education,
  university,
  additional,
  first,
  second,
  third,
  fourth,
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
              certificate="Сертифікат"
              title="Сертифікат випускника"
              href="https://certificate.ithillel.ua/view/34550382"
              className="certificateBasic"
            />
            <Example
              certificate="Рекомендація"
              title="Рекомендація"
              className="recommendation uaBasic"
            />
          </li>
          <li>
            <h6>{second}</h6>{" "}
            <Example
              certificate="Сертифікат"
              title="Сертифікат випускника"
              href="https://certificate.ithillel.ua/view/50761145"
              className="certificatePro"
            />
            <Example
              certificate="Рекомендація"
              title="Рекомендація"
              className="recommendation uaPro"
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

export { EducationUA };
