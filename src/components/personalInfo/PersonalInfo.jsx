import React from "react";
import Container from "react-bootstrap/Container";
import { Sotial } from "./Sotial";
import Image from "react-bootstrap/Image";
// import Image from "../photo/Image.jsx";

const PersonalInfo = ({ name, title, date, city, phone }) => {
  return (
    <div id="personalInfo" className="container-fluid">
      <div className="row">
        <div className="col-sm-6 photoOne"></div>
        <div className="col-sm-6">
          <h2>{name}</h2>
          <h3>{title}</h3>
          <h6>{date}</h6>
          <h6>{city}</h6>
          <>
            <h6>
              {phone}
              <a className="phoneNumber" href="tel:+380503901591">
                +38 (050) 050 92 13
              </a>
            </h6>
          </>
          <Sotial />
        </div>
        <div className="col-sm-6 photoTwo"></div>
      </div>
    </div>
  );
};

export { PersonalInfo };
