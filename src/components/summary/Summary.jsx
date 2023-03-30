import React from "react";
import "./summary.scss";

const Summary = ({ title, summary }) => {
  return (
    <div id="summary" className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
};

export { Summary };
