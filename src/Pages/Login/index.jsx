import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Content, IrCadastro } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

function Login({ auth, setAuth }) {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email invalido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "mínimo é de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSub = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const { token, user } = res.data;

        localStorage.setItem("@kenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@kenzieHub:user_id", JSON.stringify(user.id));

        setAuth(true);

        return history.push(`/dashboard/${user.id}`);
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  if (auth) {
    const userId = JSON.parse(localStorage.getItem("@kenzieHub:user_id"));
    return <Redirect to={`/dashboard/${userId}`} />;
  }

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Content>
        <form onSubmit={handleSubmit(onSub)}>
          <h1>Login</h1>
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

          <Button type={"submit"} color={"#FF577F"}>
            Login
          </Button>
        </form>
        <IrCadastro>
          <span>Ainda não possui uma conta?</span>
          <Button onClick={() => history.push("/signup")} color={"#868E96"}>
            Cadastre-se
          </Button>
        </IrCadastro>
      </Content>
    </Container>
  );
}
export default Login;
