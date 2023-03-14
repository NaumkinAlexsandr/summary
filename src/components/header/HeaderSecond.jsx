import { Btn } from "../../core/button/Btn.jsx";

const HeaderSecond = ({
  className1,
  className2,
  className3,
  className4,
  className5,
  to1,
  to2,
  to3,
  to4,
  to5,
  title1,
  title2,
  title3,
  title4,
  title5,
}) => {
  return (
    <header id="header" className="container-fluid">
      <div>
        <Btn className={className1} to={to1} title={title1} />
        <Btn className={className2} to={to2} title={title2} />
      </div>
      <div>
        <Btn className={className3} to={to3} title={title3} />
        <Btn className={className4} to={to4} title={title4} />
        <Btn className={className5} to={to5} title={title5} />
      </div>
    </header>
  );
};

export { HeaderSecond };
