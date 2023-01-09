import React from "react";
import { Example } from "./Modal";

const EducationRU = ({
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
              certificate="Сертификат"
              title="Сертификат выпускника"
              href="https://certificate.ithillel.ua/view/34550382"
              className="certificateBasic"
            />
            <Example
              certificate="Рекомендация"
              title="Рекомендация"
              className="recommendation ruBasic"
            />
          </li>
          <li>
            <h6>{second}</h6>{" "}
            <Example
              certificate="Сертификат"
              title="Сертификат выпускника"
              href="https://certificate.ithillel.ua/view/50761145"
              className="certificatePro"
            />
            <Example
              certificate="Рекомендация"
              title="Рекомендация"
              className="recommendation ruPro"
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

export { EducationRU };
