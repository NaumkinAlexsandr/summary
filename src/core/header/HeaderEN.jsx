import { Link } from "react-router-dom";

const HeaderEN = ({ title }) => {
  return (
    <div id="header" className="container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <div className="languages col">
            <button className="language active btn">
              EN <Link to="/summary/"></Link>
            </button>
            <button className="language btn">
              UA <Link to="/summary/ua"></Link>
            </button>
            <button className="language  btn">
              RU <Link to="/summary/ru"></Link>
            </button>
          </div>
        </div>
        <div className="col-sm-8">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export { HeaderEN };
