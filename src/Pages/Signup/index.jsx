import { useForm } from "react-hook-form";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import { Container, Content } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { Redirect, useHistory } from "react-router-dom";

function Signup({ auth }) {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email invalido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "mínimo é de 6 dígitos")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não são iguais")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const cadastro = ({ name, email, password, select }) => {
    const user = {
      name,
      email,
      password,
      course_module: select,
      contact: email,
      bio: "Lorem sladasldaskdak",
    };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso");
        return history.push("/");
      })
      .catch((err) => toast.error("Erro ao criar a conta"));
  };

  const userId = JSON.parse(localStorage.getItem("@kenzieHub:user_id"));

  if (auth) {
    return <Redirect to={`/dashboard/${userId}`} />;
  }

  return (
    <Container>
      <div className="divLogo">
        <h1>Kenzie Hub</h1>
        <Button onClick={() => history.push("/")} color={"#212529"}>
          Voltar
        </Button>
      </div>

      <Content>
        <form onSubmit={handleSubmit(cadastro)}>
          <h1>Crie sua conta</h1>
          <span>Rapido e grátis, vamos nessa</span>
          <Input
            register={register}
            name={"name"}
            label={"Nome"}
            error={errors.name?.message}
            placeholder="Digite aqui seu nome"
          />
          <Input
            register={register}
            name={"email"}
            label={"Email"}
            error={errors.email?.message}
            placeholder="Digite aqui seu email"
          />
          <Input
            register={register}
            name={"password"}
            label={"Senha"}
            type={"password"}
            error={errors.password?.message}
            placeholder="Digite aqui sua senha"
          />
          <Input
            register={register}
            name={"confirmPassword"}
            label={"Confirme a senha"}
            type={"password"}
            error={errors.confirmPassword?.message}
            placeholder="Digite novamente sua senha"
          />
          <Select
            register={register}
            name={"select"}
            label={"Selecionar módulo"}
          >
            <option value="    Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option
              value="Quarto módulo
            (Backend Avançado)"
            >
              Quarto módulo (Backend Avançado)
            </option>
          </Select>
          <Button type={"submit"} color={"#FF577F"}>
            Cadastrar
          </Button>
        </form>
      </Content>
    </Container>
  );
}
export default Signup;
