import "./card.scss";
import { useEffect, useState } from "react";

const Cards = ({ className, project, tehnology, href, info }) => {
  const [themeClassName, setThemeClassName] = useState("card-project");

  useEffect(() => {
    const isDarkTheme = document.body.classList.contains("body-dark");
    if (isDarkTheme) {
      setThemeClassName("card-project-dark");
    }
  }, []);
  return (
    <div className={`card-project ${themeClassName}`}>
      <div className={className}></div>
      <h3>{project}</h3>
      <h4>{tehnology}</h4>
      <p>{info}</p>
      <a target="_blank" href={href}></a>
    </div>
  );
};

export { Cards };
