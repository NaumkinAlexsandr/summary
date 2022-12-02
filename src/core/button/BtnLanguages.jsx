import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const BtnLanguage = ({ to, language, className }) => {
  return (
    <LinkContainer to={to}>
      <Button className={className}>{language}</Button>
    </LinkContainer>
  );
};

export { BtnLanguage };
