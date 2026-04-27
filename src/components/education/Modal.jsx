import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ThemeContext } from "contexts/ThemeContext";

function Example({ certificate, title, href, className }) {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const isDark = theme === "dark-theme";

  const btnClassName = `education-btn me-2 mb-2 ${
    isDark ? "education-btn-dark" : "education-btn-light"
  }`;

  function handleShow(v) {
    setFullscreen(v);
    setShow(true);
  }

  return (
    <>
      <Button className={btnClassName} onClick={() => handleShow(true)}>
        {certificate}
      </Button>

      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        contentClassName={isDark ? "bg-dark text-light" : ""}
      >
        <Modal.Header
          closeButton
          closeVariant={isDark ? "white" : undefined}
          className={isDark ? "border-secondary" : ""}
        >
          <Modal.Title>
            <a
              target="_blank"
              href={href}
              rel="noreferrer"
              className={isDark ? "text-info" : ""}
            >
              {title}
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`row ${isDark ? "bg-dark" : ""}`}>
          <div className={className}></div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export { Example };
