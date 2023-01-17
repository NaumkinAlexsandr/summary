import { Btn } from "../../core/button/Btn.jsx";
const HeaderSummaryRU = () => {
  return (
    <header id="header" className="container-fluid">
      <div>
        <Btn className="btnTitle" to="/summary/ru" title="Резюме" />
        <Btn className="btnTitle" to="/projects/ru" title="Проекты" />
      </div>
      <div>
        <Btn className="btnLanguage" to="/summary/" title="EN" />
        <Btn className="btnLanguage" to="/summary/ua" title="UA" />
        <Btn className="btnLanguage active" to="/summary/ru" title="RU" />
      </div>
    </header>
  );
};

export { HeaderSummaryRU };
