import React from "react";
import Container from "react-bootstrap/Container";

const Sotial = () => {
  return (
    <Container className="conteinerOne">
      <div className="icon">
        <a
          target="_blanck"
          className="telegram"
          href="https://web.telegram.org/k/#@NaumkinAleksander"
        >
          <i className="fa-brands fa-telegram"></i>
        </a>
      </div>
      <div className="icon">
        <a
          target="_blanck"
          className="google"
          href="mailto:naumkin93@gmail.com"
        >
          <i className="fa-brands fa-google"></i>
        </a>
      </div>
      <div className="icon">
        <a
          target="_blanck"
          className="git"
          href="https://github.com/NaumkinAlexsandr"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="icon">
        <a
          target="_blanck"
          className="linkedin"
          href="https://www.linkedin.com/in/alexsander-naumkin-3a7591240/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </Container>
  );
};

export { Sotial };
