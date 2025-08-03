import React, { useState, useEffect } from "react";
import { Btn } from "../../core/button/Btn.jsx";
import Translate from "./Translate.jsx";
import "./header.scss";

const Header = ({
  cvBtnClass,
  projectsBtnClass,
  langEN,
  langUA,
  langRU,
  homeBtnClass,
  toCV,
  toProjects,
  toEN,
  toUA,
  toRU,
  toHome,
  cvBtnTitle,
  projectsBtnTitle,
  langTitleEN,
  langTitleUA,
  langTitleRU,
  homeBtnTitle,
  homeId,
  cvId,
  projectsId,
}) => {
  return (
    <header id="header" className="container-fluid">
      <div>
        <Btn
          id={homeId}
          className={homeBtnClass}
          to={toHome}
          title={homeBtnTitle}
        />
        <Btn id={cvId} className={cvBtnClass} to={toCV} title={cvBtnTitle} />
        <Btn
          id={projectsId}
          className={projectsBtnClass}
          to={toProjects}
          title={projectsBtnTitle}
        />
      </div>
      <Translate
        langEN={langEN}
        langUA={langUA}
        langRU={langRU}
        toEN={toEN}
        toUA={toUA}
        toRU={toRU}
        langTitleEN={langTitleEN}
        langTitleUA={langTitleUA}
        langTitleRU={langTitleRU}
      />
    </header>
  );
};

export { Header };
