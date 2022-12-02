import React from "react";
import Container from "react-bootstrap/Container";

const OtherInfo = ({
  languages,
  hobbies,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
}) => {
  return (
    <div id="otherInfo" className="container-fluid">
      <div className="row">
        <ul>
          <h3>{languages}</h3>
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
        <ul>
          <h3>{hobbies}</h3>
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

export { OtherInfo };
