import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const Btn = ({ to, title, className }) => {
  return (
    <LinkContainer to={to}>
      <Button className={className}>{title}</Button>
    </LinkContainer>
  );
};

export { Btn };
