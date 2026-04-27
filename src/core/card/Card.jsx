import React, { useContext } from "react";
import { ThemeContext } from "contexts/ThemeContext";
import "./card.scss";

const Cards = ({ className, project, tehnology, href, info }) => {
  const { theme } = useContext(ThemeContext);

  const cardClassName = `card-project ${
    theme === "dark-theme" ? "card-project-dark" : ""
  }`;

  return (
    <div className={cardClassName}>
      <div className="card-img">
        <div className={`img ${className}`}></div>
      </div>

      <h3>{project}</h3>
      <h4>{tehnology}</h4>
      <p>{info}</p>
      <a target="_blank" href={href}></a>
    </div>
  );
};

export { Cards };
