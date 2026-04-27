import React, { useContext, useState } from "react";
import { ThemeContext } from "contexts/ThemeContext";
import { Modal, Button, Carousel } from "react-bootstrap";
import "./cardApp.scss";

const CardAPP = ({ className, project, tehnology, href, info, images }) => {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isDark = theme === "dark-theme";
  const cardClassName = `card-project ${isDark ? "card-project-dark" : ""}`;

  return (
    <>
      <div
        className={cardClassName}
        onClick={handleShow}
        style={{ cursor: "pointer" }}
      >
        <div className="card-img">
          <div className={`img ${className}`}></div>
        </div>

        <h3>{project}</h3>
        <h4>{tehnology}</h4>
        <p className="text-truncate-custom">{info}</p>
      </div>

      <Modal
        show={show}
        fullscreen={true}
        onHide={handleClose}
        centered
        size="lg"
        contentClassName={isDark ? "bg-dark text-light" : ""}
      >
        <Modal.Header closeButton closeVariant={isDark ? "white" : undefined}>
          <Modal.Title>{project}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Секция со слайдером */}
          {images.length > 0 && (
            <Carousel
              id="projectCarousel"
              className="project-slider shadow-sm"
              interval={null}
            >
              {images.map((imgSrc, index) => (
                <Carousel.Item key={index}>
                  <div className="slider-wrapper">
                    <img
                      src={imgSrc}
                      className="slider-main-img"
                      alt={`${project} screen ${index + 1}`}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          )}

          <div className="modal-project-content">
            <h5
              style={{
                marginTop: "20px",
              }}
            >
              {tehnology}
            </h5>
            <hr />
            <p>{info}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export { CardAPP };
