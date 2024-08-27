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

export function LoginPage() {
  const navigate = useNavigate();

  const handleFirstAccess = () => {
    navigate(routeConfigs.Register);
  };

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      user: user,
      password: password,
    };

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Login successful", result);
      } else {
        console.error("Login error:", response.statusText);
      }
    } catch (error) {
      console.error("Error connecting to the API:", error);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginHeader>
          <Title value="Tech KIDs"></Title>
          <SubTitle>Descubra uma nova forma de aprender computação.</SubTitle>
        </LoginHeader>
        <LoginMain>
          <ContainedInput.FullComponent
            label="Usuário"
            Icon={IdentificationBadge}
            placeholder="Nome de usuário ou e-mail..."
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <ContainedInput.FullComponent
            label="Senha"
            Icon={Lock}
            placeholder="Digite sua senha aqui..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LoginMain>

        <LoginFooter>
          <Button color="green" text="Entrar" type="submit" />
          <SecondaryButton
            title="Primeiro acesso"
            onClick={handleFirstAccess}
          />
        </LoginFooter>
      </LoginForm>
    </LoginContainer>
  );
}
