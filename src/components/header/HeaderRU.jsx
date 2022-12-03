import { BtnLanguage } from "../../core/button/BtnLanguages";
const HeaderRU = () => {
  return (
    <header id="header" className="container-fluid">
      <div className="row">
        <BtnLanguage className="btnLanguage" to="/summary/" language="EN" />
        <BtnLanguage className="btnLanguage" to="/summary/ua" language="UA" />
        <BtnLanguage
          className="btnLanguage active"
          to="/summary/ru"
          language="RU"
        />
      </div>
    </header>
  );
};

export { HeaderRU };
