import { Btn } from "../../core/button/Btn.jsx";
const HeaderProjectsEN = () => {
  return (
    <header id="header" className="container-fluid">
      <div>
        <Btn className="btnTitle" to="/summary/" title="Summary" />
        <Btn className="btnTitle" to="/projects/en" title="Projects" />
      </div>
      <div>
        <Btn className="btnLanguage active" to="/projects/en" title="EN" />
        <Btn className="btnLanguage" to="/projects/ua" title="UA" />
        <Btn className="btnLanguage" to="/projects/ru" title="RU" />
      </div>
    </header>
  );
};

export { HeaderProjectsEN };
