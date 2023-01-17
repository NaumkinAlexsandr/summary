import { Btn } from "../../core/button/Btn.jsx";
const HeaderProjectsRU = () => {
  return (
    <header id="header" className="container-fluid">
      <div>
        <Btn className="btnTitle" to="/summary/ru" title="Резюме" />
        <Btn className="btnTitle" to="/projects/ru" title="Проекты" />
      </div>
      <div>
        <Btn className="btnLanguage" to="/projects/en" title="EN" />
        <Btn className="btnLanguage" to="/projects/ua" title="UA" />
        <Btn className="btnLanguage active" to="/projects/ru" title="RU" />
      </div>
    </header>
  );
};

export { HeaderProjectsRU };
