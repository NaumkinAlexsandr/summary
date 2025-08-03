import React, { useState, useEffect, useRef, useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import TranslateIcon from "../../img/headerIcon/translate.png";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./translate.scss";

export default function Translate({
  langEN,
  langUA,
  langRU,
  toEN,
  toUA,
  toRU,
  langTitleEN,
  langTitleUA,
  langTitleRU,
}) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [languages, setLanguages] = useState({ isLanguages: false });
  const menuRef = useRef(null);

  function handleLanguages(event) {
    event.stopPropagation();
    setLanguages((prevState) => ({ isLanguages: !prevState.isLanguages }));
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setLanguages({ isLanguages: false });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-menu">
      <div className="humburger">
        <div className="menu-block" ref={menuRef}>
          <button
            onClick={handleLanguages}
            id="menu"
            className={
              languages.isLanguages ? `menu_active ${theme}` : `menu ${theme}`
            }
          >
            <img src={TranslateIcon} alt="Translate Icon" />
          </button>
          <nav
            className={
              languages.isLanguages
                ? `menu-nav menu-nav_active ${theme}`
                : `menu-nav ${theme}`
            }
          >
            <LinkContainer to={toEN}>
              <button className={langEN}>{langTitleEN}</button>
            </LinkContainer>
            <LinkContainer to={toUA}>
              <button className={langUA}>{langTitleUA}</button>
            </LinkContainer>
            <LinkContainer to={toRU}>
              <button className={langRU}>{langTitleRU}</button>
            </LinkContainer>
          </nav>
        </div>
      </div>
      <div className="site-theme">
        <button id="theme" className={theme} onClick={toggleTheme}></button>
      </div>
    </div>
  );
}
