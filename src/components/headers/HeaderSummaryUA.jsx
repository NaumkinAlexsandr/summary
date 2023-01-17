import { Btn } from "../../core/button/Btn.jsx";
const HeaderSummaryUA = () => {
  return (
    <header id="header" className="container-fluid">
      <div>
        <Btn className="btnTitle" to="/summary/ua" title="Резюме" />
        <Btn className="btnTitle" to="/projects/ua" title="Проекти" />
      </div>
      <div>
        <Btn className="btnLanguage" to="/summary/" title="EN" />
        <Btn className="btnLanguage active" to="/summary/ua" title="UA" />
        <Btn className="btnLanguage" to="/summary/ru" title="RU" />
      </div>
    </header>
  );
};

export { HeaderSummaryUA };
