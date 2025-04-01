import React from "react";
import { Sotial } from "./Sotial";
import "./personalInfo.scss";

const PersonalInfo = ({ name, title, contacts, phone }) => {
  return (
    <div id="personalInfo" className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h1>{name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 photoOne"></div>
        <div className="col-sm-6">
          <h4>{title}</h4>
        </div>
        <div className="col-sm-6 photoTwo"></div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <h3>{contacts}</h3>
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

export { PersonalInfo };
