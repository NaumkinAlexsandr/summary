import React from "react";
import ReactDOM from "react-dom/client";
import { Routing } from "./Routing";
import "./style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Routing />
    </ThemeProvider>
  </React.StrictMode>
);
