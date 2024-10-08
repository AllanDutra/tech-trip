import {
  StyledMain,
  SettingsHeader,
  SettingsHeaderColumn,
  ActionHeader,
  StyledLabel,
  StyledLabelBold,
  ContainerInformation,
} from "./styles";
import {
  Button,
  ToastError,
  ToastSuccess,
  ToastWarning,
  UnderlinedInput,
} from "../../shared/components";
import { CaretLeft, Lock } from "@phosphor-icons/react";
import { routeConfigs } from "../../shared/configs";
import { useNavigate } from "react-router-dom";
import { StudentsService } from "../../shared/services";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export const ChangePasswordPage = () => {
  const navigate = useNavigate();

  interface IPasswords {
    password: string;
    new_password: string;
    new_password_confirmation: string;
  }

  const [passwords, setPasswords] = useState<IPasswords>({
    password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const redirectToLogin = (message: string) => {
    // ToastWarning({message: message, positionProp: 'top-right'})
    // navigate(routeConfigs.Login);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [name]: value,
    }));
  };

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(passwords);

    if (
      passwords.password == "" ||
      passwords.new_password == "" ||
      passwords.new_password_confirmation == ""
    ) {
      ToastWarning({
        message: "Preencha todos os campos",
        positionProp: "top-right",
      });
      return;
    }

    if (passwords.new_password !== passwords.new_password_confirmation) {
      ToastWarning({
        message: "A nova senha e a confirmação devem ser iguais",
        positionProp: "top-right",
      });
      return;
    }

    try {
      const token = sessionStorage.getItem("authToken");

      if (!token) {
        redirectToLogin(
          "Erro de autenticação. Por favor, faça login novamente."
        );
        return;
      }

      StudentsService.changePassword(
        token,
        passwords.password,
        passwords.new_password
      );

      ToastSuccess({
        message: "Senha alterada com sucesso",
        positionProp: "top-right",
      });
      navigate(routeConfigs.Settings);
    } catch (error) {
      ToastError({
        message: "Erro ao mudar a senha. Por favor, tente novamente.",
        positionProp: "top-right",
      });
      console.error(error);
    }
  };

  return (
    <StyledMain>
      <SettingsHeader>
        <SettingsHeaderColumn>
          <ActionHeader
            onClick={() => {
              navigate(routeConfigs.Settings);
            }}
          >
            <CaretLeft size={26} />
          </ActionHeader>
          <StyledLabelBold>Trocar Senha</StyledLabelBold>
          <ActionHeader
            onClick={(event) => {
              handleSave(event);
            }}
          >
            <StyledLabel>Salvar</StyledLabel>
          </ActionHeader>
        </SettingsHeaderColumn>
      </SettingsHeader>

      <ContainerInformation>
        <UnderlinedInput.FullComponent
          label="Senha atual"
          Icon={Lock}
          type="password"
          placeholder="Digite sua senha atual..."
          name="password"
          onChange={handleInputChange}
        />

        <UnderlinedInput.FullComponent
          label="Nova senha"
          Icon={Lock}
          type="password"
          placeholder="Digite sua nova senha..."
          name="new_password"
          onChange={handleInputChange}
        />

        <UnderlinedInput.FullComponent
          label="Confirme a nova senha"
          Icon={Lock}
          type="password"
          placeholder="Confirme a senha..."
          name="new_password_confirmation"
          onChange={handleInputChange}
        />
        <ToastContainer></ToastContainer>
        <Button
          onClick={(event) => {
            handleSave(event);
          }}
          color="green"
          text="Trocar senha"
        />
      </ContainerInformation>
    </StyledMain>
  );
};
