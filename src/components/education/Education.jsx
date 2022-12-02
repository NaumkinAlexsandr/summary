import React from "react";
import Container from "react-bootstrap/Container";

const Education = ({
  education,
  university,
  additional,
  first,
  second,
  third,
  fourth,
}) => {
  return (
    <div id="education" className="container-fluid">
      <div className="row">
        <span>
          <h3>{education}</h3> <h6>{university}</h6>
        </span>
        <ul>
          <h3>{additional}</h3>
          <li>
            <h6>{first}</h6>
          </li>
          <li>
            <h6>{second}</h6>
          </li>
          <li>
            <h6>{third}</h6>
          </li>
          <li>
            <h6>{fourth}</h6>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Education };
