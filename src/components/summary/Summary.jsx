import React from "react";
import "./summary.scss";
import { Sotial } from "../../core/Sotial";

const Summary = ({ name, city, phone }) => {
  return (
    <div id="summary" className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h1>{name}</h1>
          <h5>{city}</h5>
          <h5>
            {phone}
            <a className="phoneNumber" href="tel:+380500509213">
              +38 (050) 050 92 13
            </a>
          </h5>
          <Sotial />
        </div>
      </div>
    </div>
  );
};

export { Summary };
