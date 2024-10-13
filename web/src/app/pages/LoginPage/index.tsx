import {
  LoginContainer,
  LoginForm,
  SubTitle,
  LoginHeader,
  LoginMain,
  LoginFooter,
} from "./styles";
import {
  Title,
  ContainedInput,
  Button,
  SecondaryButton,
} from "../../shared/components";
import { useState } from "react";
import { IdentificationBadge, Lock } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../shared/configs";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { appConfigs } from "../../shared/configs/App";
import { TechTripApiService } from "../../shared/services";
import { authConfigs } from "../../shared/configs/Auth";
import { useLoading } from "../../shared/hooks/useLoading";

interface ILoginCredentials {
  user: string;
  password: string;
}

export function LoginPage() {
  const navigate = useNavigate();

  const { isGlobalLoadingActive, setIsGlobalLoadingActive } = useLoading();

  const handleFirstAccess = () => {
    navigate(routeConfigs.Register);
  };

  const [credentials, setCredentials] = useState<ILoginCredentials>({
    user: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isGlobalLoadingActive) return;

    if (!credentials.user || !credentials.password) {
      toast.warning("Preencha todos os campos!");

      return;
    }

    try {
      setIsGlobalLoadingActive(true);

      const { user, password } = credentials;

      const authenticatedStudent =
        await TechTripApiService.StudentsController.authenticate({
          user,
          password,
        });

      if (!authenticatedStudent) {
        toast.warning("Usuário ou senha inválidos");

        return;
      }

      sessionStorage.setItem(
        authConfigs.USER_CREDENTIALS,
        JSON.stringify(authenticatedStudent)
      );

      navigate(routeConfigs.Map);
    } finally {
      setIsGlobalLoadingActive(false);
    }
  };

  return (
    <LoginContainer>
      {/* <ToastContainer /> */}
      <LoginForm onSubmit={handleSubmit}>
        <LoginHeader>
          <Title value={appConfigs.NAME}></Title>
          <SubTitle>Descubra uma nova forma de aprender computação.</SubTitle>
        </LoginHeader>
        <LoginMain>
          <ContainedInput.FullComponent
            label="Usuário"
            Icon={IdentificationBadge}
            placeholder="Nome de usuário ou e-mail..."
            value={credentials.user}
            name="user"
            onChange={handleInputChange}
            autoFocus
          />
          <ContainedInput.FullComponent
            label="Senha"
            Icon={Lock}
            placeholder="Digite sua senha aqui..."
            value={credentials.password}
            onChange={handleInputChange}
            name="password"
            type="password"
          />
        </LoginMain>

        <LoginFooter>
          <Button color="green" text="Entrar" type="submit" />

          <SecondaryButton
            title="Primeiro acesso"
            type="button"
            onClick={handleFirstAccess}
            disabled={isGlobalLoadingActive}
          />
        </LoginFooter>
      </LoginForm>
    </LoginContainer>
  );
}
