import React from "react";
import Container from "react-bootstrap/Container";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";

const Sotial = () => {
  return (
    <Container className="conteinerOne">
      <div className="icon">
        <a
          target="_blanck"
          className="telegram"
          href="https://t.me/NaumkinAleksander"
        >
          <FaTelegram className="socialIcon" />
        </a>
      </div>
      <div className="icon">
        <a
          target="_blanck"
          className="google"
          href="mailto:naumkin93@gmail.com"
        >
          <SiGmail className="socialIcon" />
        </a>
      </div>
      <div className="icon">
        <a
          target="_blanck"
          className="git"
          href="https://github.com/NaumkinAlexsandr"
        >
          <FaGithub className="socialIcon" />
        </a>
      </div>
      <div className="icon">
        <a
          target="_blanck"
          className="linkedin"
          href="https://www.linkedin.com/in/alexsander-naumkin-3a7591240/"
        >
          <FaLinkedinIn className="socialIcon" />
        </a>
      </div>
    </Container>
  );
};

export { Sotial };
