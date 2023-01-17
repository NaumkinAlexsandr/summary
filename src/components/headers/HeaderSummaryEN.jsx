import { Btn } from "../../core/button/Btn.jsx";
const HeaderSummaryEN = () => {
  return (
    <header id="header" className="container-fluid">
      <div>
        <Btn className="btnTitle" to="/summary/" title="Summary" />
        <Btn className="btnTitle" to="/projects/en" title="Projects" />
      </div>
      <div>
        <Btn className="btnLanguage active" to="/summary/" title="EN" />
        <Btn className="btnLanguage" to="/summary/ua" title="UA" />
        <Btn className="btnLanguage" to="/summary/ru" title="RU" />
      </div>
    </header>
  );
};

export { HeaderSummaryEN };
