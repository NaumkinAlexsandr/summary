import { BtnLanguage } from "../../core/button/BtnLanguages";
const Header = () => {
  return (
    <header id="header" className="container-fluid">
      <div className="row">
        <BtnLanguage
          className="btnLanguage active"
          to="/summary/"
          language="EN"
        />
        <BtnLanguage className="btnLanguage" to="/summary/ua" language="UA" />
        <BtnLanguage className="btnLanguage" to="/summary/ru" language="RU" />
      </div>
    </header>
  );
};

export { Header };
