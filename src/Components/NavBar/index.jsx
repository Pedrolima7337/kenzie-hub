import Button from "../Button";
import { Container } from "./styles";

function NavBar({ setAuth }) {
  const sair = () => {
    localStorage.clear();
    setAuth(false);
  };

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Button onClick={sair} color={"#212529"}>
        Sair
      </Button>
    </Container>
  );
}
export default NavBar;
