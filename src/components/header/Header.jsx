import React, { useState, useEffect } from "react";
import { Btn } from "../../core/button/Btn.jsx";
import Translate from "./Translate.jsx";
import "./header.scss";

const Header = ({
  className1,
  className2,
  className3,
  className4,
  className5,
  to1,
  to2,
  to3,
  to4,
  to5,
  title1,
  title2,
  title3,
  title4,
  title5,
  id1,
  id2,
  id3,
  className6,
  to6,
  title6,
}) => {
  const [bodyClassName, setBodyClassName] = useState("");

  useEffect(() => {
    setBodyClassName(document.querySelector("body").className);
  }, []);

  useEffect(() => {
    const summaryBtn = document.getElementById("summary-buttun");
    const projectsBtn = document.getElementById("projects-buttun");
    const homeBtn = document.getElementById("home-buttun");

    if (bodyClassName === "body-dark") {
      summaryBtn.classList.add("btn-summary-dark");
      projectsBtn.classList.add("btn-projects-dark");
      homeBtn.classList.add("btn-home-dark");
    } else {
      summaryBtn.classList.remove("btn-summary-dark");
      projectsBtn.classList.remove("btn-projects-dark");
      homeBtn.classList.remove("btn-home-dark");
    }
  }, [bodyClassName]);

  return (
    <header id="header" className="container-fluid">
      <div>
        <Btn id={id3} className={className6} to={to6} title={title6} />
        <Btn id={id1} className={className1} to={to1} title={title1} />
        <Btn id={id2} className={className2} to={to2} title={title2} />
      </div>
      <Translate
        className3={className3}
        className4={className4}
        className5={className5}
        to3={to3}
        to4={to4}
        to5={to5}
        title3={title3}
        title4={title4}
        title5={title5}
      />
    </header>
  );
};

export { Header };
