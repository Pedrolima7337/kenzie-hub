import { useForm } from "react-hook-form";
import Input from "../Input";
import Select from "../Select";
import { Container, ContentPoPup } from "./styles";
import Button from "../Button";
import api from "../../Services/api";

function Deltech({ setShowTech, oneTech }) {
  const { register, handleSubmit } = useForm();

  const token = localStorage.getItem("@kenzieHub:token");
  const newToken = token.replaceAll('"', "");
  const Salvar = (data) => {
    const { select } = data;
    const tech = {
      status: select,
    };

    api
      .put(`/users/techs/${oneTech.id}`, tech, {
        headers: { Authorization: `bearer ${newToken}` },
      })
      .then((res) => {
        return setShowTech(false);
      })
      .catch((err) => console.log(err));
  };
  const deletar = () => {
    api
      .delete(`/users/techs/${oneTech.id}`, {
        headers: { Authorization: `bearer ${newToken}` },
      })
      .then((res) => {
        return setShowTech(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <ContentPoPup>
        <div className="header">
          <span>Cadastrar Tecnologia</span>
          <button onClick={() => setShowTech(false)} className="btt-fechar">
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(Salvar)}>
          <Input
            label={"Nome do projeto"}
            register={register}
            name={oneTech.title}
            placeholder={oneTech.title}
          />
          <Select register={register} name={"select"} label={"Status"}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <div className="div-btts">
            <Button type={"submit"} color={"#FF577F"}>
              Salvar alterações
            </Button>
            <Button onClick={deletar} color={"#868E96"}>
              Excluir
            </Button>
          </div>
        </form>
      </ContentPoPup>
    </Container>
  );
}
export default Deltech;
