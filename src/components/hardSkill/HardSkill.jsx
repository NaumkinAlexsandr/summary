import React from "react";
import Container from "react-bootstrap/Container";

const HardSkill = ({
  objective,
  look,
  hardSkill,
  first,
  second,
  third,
  fourth,
}) => {
  return (
    <div id="hardSkill" className="container-fluid">
      <div className="row">
        <span>
          <h3>{objective} </h3> <h6>{look}</h6>
        </span>
        <ul>
          <h3>{hardSkill}</h3>
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

export { HardSkill };
