import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function NofoundPage() {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div className="container">
        <h1 className="errorPage">
          Page not found <Link to="/summary">Go Home</Link>
        </h1>
      </div>
    </>
  );
}

export { NofoundPage };
