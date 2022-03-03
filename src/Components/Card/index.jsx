import { Container, DivAdd, DivCard, Cardzin } from "./styles";
import Button from "../../Components/Button";
import Deltech from "../DelTech";
import { useState } from "react";

function Card({ setShow, list, showTech, setShowTech }) {
  const [oneTech, setOneTech] = useState();
  const quando = (valor) => {
    const filtro = list.find((item) => item.id === valor);
    setOneTech(filtro);
    return setShowTech(true);
  };
  return (
    <Container>
      <DivAdd>
        <h3>Tecnologias</h3>
        <Button onClick={() => setShow(true)} color={"#212529"}>
          +
        </Button>
      </DivAdd>
      <DivCard>
        {list.map((item) => (
          <Cardzin onClick={() => quando(item.id)} key={item.id}>
            <h3>{item.title}</h3>
            <span>{item.status}</span>
          </Cardzin>
        ))}
        {showTech && <Deltech setShowTech={setShowTech} oneTech={oneTech} />}
      </DivCard>
    </Container>
  );
}
export default Card;
