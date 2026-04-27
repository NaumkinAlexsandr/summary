import React, { useState, useEffect } from "react";
import "./backTop.scss";
import upArrow from "img/headerIcon/up-arrow.png";

export default function BackTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="back-top"
      className={isVisible ? "visible" : ""}
      onClick={scrollToTop}
    >
      <img src={upArrow} alt="Наверх" />
      <a href="#top" onClick={(e) => e.preventDefault()}></a>
    </div>
  );
}
