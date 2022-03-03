import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Select from "../Select";
import { Container, ContentPoPup } from "./styles";
import * as yup from "yup";
import Button from "../Button";
import api from "../../Services/api";

function PoPup({ setShow, addNewTech }) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const token = localStorage.getItem("@kenzieHub:token");
  const newToken = token.replaceAll('"', "");

  const newItem = (data) => {
    const { select, name } = data;
    const tech = {
      title: name,
      status: select,
    };

    api
      .post("/users/techs", tech, {
        headers: { Authorization: `bearer ${newToken}` },
      })
      .then((res) => addNewTech(res.data), setShow(false))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <ContentPoPup>
        <div className="header">
          <span>Cadastrar Tecnologia</span>
          <button onClick={() => setShow(false)} className="btt-fechar">
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(newItem)}>
          <Input
            register={register}
            name={"name"}
            label={"Nome"}
            error={errors.name?.message}
            placeholder="TypeScript"
          />
          <Select
            register={register}
            name={"select"}
            label={"Selecionar status"}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <Button type={"submit"} color={"#FF577F"}>
            Cadastrar Tecnologia
          </Button>
        </form>
      </ContentPoPup>
    </Container>
  );
}
export default PoPup;
