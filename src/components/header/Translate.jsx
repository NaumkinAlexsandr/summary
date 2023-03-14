import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import TranslateIcon from "../../img/translate.png";
import "./translate.scss";

export default function Translate({
  className3,
  className4,
  className5,
  to3,
  to4,
  to5,
  title3,
  title4,
  title5,
}) {
  const [languages, setLanguages] = useState("isLanguages");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light-theme"
  );

  function handleLanguages() {
    setLanguages((prevState) => ({
      isLanguages: !prevState.isLanguages,
    }));
  }

  useEffect(() => {
    document.body.classList.toggle("body-dark", theme === "dark-theme");
  }, [theme]);

  function handleTheme() {
    const selectedTheme =
      theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    window.location.reload(false);
  }

  return (
    <div className="header-menu">
      <div className="humburger">
        <div className="menu-block">
          <button
            onClick={handleLanguages}
            id="menu"
            className={
              languages.isLanguages ? `menu_active ${theme}` : `menu ${theme}`
            }
          >
            <img src={TranslateIcon} alt="Translate Icon"></img>
          </button>
          <nav
            className={
              languages.isLanguages
                ? `menu-nav menu-nav_active ${theme}`
                : `menu-nav ${theme}`
            }
          >
            <LinkContainer to={to3}>
              <button className={className3}>{title3}</button>
            </LinkContainer>
            <LinkContainer to={to4}>
              <button className={className4}>{title4}</button>
            </LinkContainer>
            <LinkContainer to={to5}>
              <button className={className5}>{title5}</button>
            </LinkContainer>
          </nav>
        </div>
      </div>
      <div className="site-theme">
        <button id="theme" className={theme} onClick={handleTheme}></button>
      </div>
    </div>
  );
}
