import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme || "light-theme";
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  useEffect(() => {
    document.body.className = theme === "dark-theme" ? "body-dark" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
