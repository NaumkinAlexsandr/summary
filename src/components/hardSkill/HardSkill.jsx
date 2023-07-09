import React from "react";
import Container from "react-bootstrap/Container";
import "./hardSkill.scss";

const HardSkill = ({
  objective,
  look,
  hardSkill,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
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
            <p>{eight}</p>
          </li>
          <li>
            <h6>{second}</h6>
            <p>{nine}</p>
          </li>
          <li>
            <h6>{third}</h6>
            <p>{ten}</p>
          </li>
          <li>
            <h6>{fourth}</h6>
            <p>{eleven}</p>
          </li>
          <li>
            <h6>{fifth}</h6>
            <p>{twelve}</p>
          </li>
          <li>
            <h6>{sixth}</h6>
            <p>{thirteen}</p>
          </li>
          <li>
            <h6>{seven}</h6>
            <p>{fourteen}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { HardSkill };
