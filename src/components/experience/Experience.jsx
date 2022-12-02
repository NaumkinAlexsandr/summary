import React from "react";
import Container from "react-bootstrap/Container";

const Experience = ({ experience, first, second, third }) => {
  return (
    <div id="experience" className="container-fluid">
      <div className="row">
        <span>
          <h3>{experience}</h3>
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
        </ul>
      </div>
    </div>
  );
};

export { Experience };
