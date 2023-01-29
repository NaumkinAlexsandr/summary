import React from "react";

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
