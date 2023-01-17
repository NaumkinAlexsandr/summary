import { Btn } from "../../core/button/Btn.jsx";
const HeaderProjectsUA = () => {
  return (
    <header id="header" className="container-fluid">
      <div>
        <Btn className="btnTitle" to="/summary/ua" title="Резюме" />
        <Btn className="btnTitle" to="/projects/ua" title="Проекти" />
      </div>
      <div>
        <Btn className="btnLanguage" to="/projects/en" title="EN" />
        <Btn className="btnLanguage active" to="/projects/ua" title="UA" />
        <Btn className="btnLanguage" to="/projects/ru" title="RU" />
      </div>
    </header>
  );
};

export { HeaderProjectsUA };
