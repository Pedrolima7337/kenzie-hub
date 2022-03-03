import { Container, SelectContainer } from "./style";

function Select({ children, label, register, name, ...rest }) {
  return (
    <Container>
      <div className="spanDiv">{label}</div>
      <SelectContainer>
        <select {...register(name)} {...rest}>
          {children}
        </select>
      </SelectContainer>
    </Container>
  );
}
export default Select;
