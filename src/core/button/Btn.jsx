import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const Btn = ({ id, to, title, className }) => {
  return (
    <LinkContainer to={to}>
      <Button id={id} className={className}>
        {title}
      </Button>
    </LinkContainer>
  );
};

export { Btn };
