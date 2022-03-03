import { Container } from "./styles";

function Button({ children, color, ...rest }) {
  return (
    <Container color={color} type="button" {...rest}>
      {children}
    </Container>
  );
}
export default Button;
