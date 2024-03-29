import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example({ certificate, title, href, className }) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button
          key={idx}
          className="education-btn me-2 mb-2"
          onClick={() => handleShow(v)}
        >
          {certificate}
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <a target="_blank" href={href}>
              {title}
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="row">
          <div className={className}></div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export { Example };
