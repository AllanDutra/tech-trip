import {
  StyledMain,
  SettingsHeader,
  SettingsHeaderColumn,
  ActionHeader,
  StyledLabel,
  StyledLabelBold,
  ContainerInformation,
  StyledInputGroup,
  StyledDesktopHeader,
} from "./styles";
import { Button, Header, UnderlinedInput } from "../../shared/components";
import { CaretLeft, Lock } from "@phosphor-icons/react";
import { routeConfigs } from "../../shared/configs";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { CommonPageContainer } from "../../shared/components/CommonPageContainer";
import { useLoading } from "../../shared/hooks/useLoading";
import { TechTripApiService } from "../../shared/services";
import { toast } from "react-toastify";

export const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const { setIsGlobalLoadingActive } = useLoading();

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [name]: value,
    }));
  };

  const handleBack = useCallback(() => navigate(routeConfigs.Settings), []);

  const handleSaveNewPassword = useCallback(async () => {
    if (!passwords.password)
      return toast.info("A senha atual deve ser informada.");

    if (!passwords.new_password)
      return toast.info("A nova senha deve ser informada.");

    if (!passwords.new_password_confirmation)
      return toast.info("É preciso confirmar a nova senha.");

    if (passwords.new_password !== passwords.new_password_confirmation)
      return toast.info("A nova senha não corresponde à sua confirmação.");

    try {
      setIsGlobalLoadingActive(true);

      const updatedPassword =
        await TechTripApiService.StudentsController.updatePassword({
          currentPassword: passwords.password,
          newPassword: passwords.new_password,
        });

      if (updatedPassword) {
        toast.success("Senha alterada com sucesso!");

        navigate(routeConfigs.Settings);
      } else {
        toast.warning(
          "Não foi possível alterar a senha, verifique os campos informados e tente novamente!"
        );
      }
    } finally {
      setIsGlobalLoadingActive(false);
    }
  }, [passwords]);

  return (
    <CommonPageContainer className="change-password-common-page">
      <StyledMain>
        <SettingsHeader>
          <SettingsHeaderColumn>
            <ActionHeader onClick={handleBack}>
              <CaretLeft size={26} />
            </ActionHeader>
            <StyledLabelBold>Trocar Senha</StyledLabelBold>
            <ActionHeader onClick={handleSaveNewPassword}>
              <StyledLabel>Salvar</StyledLabel>
            </ActionHeader>
          </SettingsHeaderColumn>
        </SettingsHeader>

        <ContainerInformation>
          <StyledDesktopHeader>
            <Header.CloseButton onClick={handleBack} />

            <h2>TROCAR SENHA</h2>

            <span></span>
          </StyledDesktopHeader>

          <StyledInputGroup>
            <UnderlinedInput.FullComponent
              label="Senha atual"
              Icon={Lock}
              type="password"
              placeholder="Digite sua senha atual..."
              name="password"
              onChange={handleInputChange}
              autoFocus
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
          </StyledInputGroup>

          <Button
            onClick={handleSaveNewPassword}
            color="green"
            text="Salvar nova senha"
          />
        </ContainerInformation>
      </StyledMain>
    </CommonPageContainer>
  );
};
