import React from "react";
import Container from "react-bootstrap/Container";

const SoftSkill = ({
  softSkill,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
}) => {
  return (
    <div id="softSkill" className="container-fluid">
      <div className="row">
        <span>
          <h3>{softSkill}</h3>
        </span>
        <ul>
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
          <li>
            <h6>{fifth}</h6>
          </li>
          <li>
            <h6>{sixth}</h6>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { SoftSkill };
