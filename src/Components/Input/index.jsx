import { Container, InputContainer } from "./styles";

function Input({ label, register, name, error, ...rest }) {
  return (
    <Container>
      <div className="spanDiv">
        {label} {!!error && <span className="spanErr"> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}
export default Input;
