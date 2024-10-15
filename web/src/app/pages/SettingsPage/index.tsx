import {
  SettingsContainer,
  SettingsHeader,
  SettingsHeaderColumn,
  StyledLabel,
  StyledLabelBold,
  ActionHeader,
  ProfileContainer,
  CharacterContainer,
  Name,
  ButtonChangeImage,
  ContainerInformation,
  GenderButtons,
  LabelForm,
  PreferenceSection,
  CharacterPickerContainer,
  Characters,
  ButtonChangePassword,
} from "./styles";
import {
  CaretLeft,
  UserCircle,
  Envelope,
  IdentificationBadge,
  CalendarDots,
  Lock,
} from "@phosphor-icons/react";
import { routeConfigs } from "../../shared/configs";
import {
  Character,
  UnderlinedInput,
  DoubleSelection,
  PreferenceButton,
  Button,
  TSelectionVariant,
} from "../../shared/components";
import { useCallback, useState } from "react";
// import { ToastContainer } from "react-toastify";
import { IStudentClaims } from "../../shared/services/TechTripApi/StudentsController";
import { useAuthentication } from "../../shared/hooks/useAuthentication";
import { useNavigate } from "react-router-dom";
import { TechTripApiService } from "../../shared/services";
import { toast } from "react-toastify";
import { useLoading } from "../../shared/hooks/useLoading";

export function SettingsPage() {
  const navigate = useNavigate();

  const { setIsGlobalLoadingActive } = useLoading();

  const { userCredentials, setUserCredentials } = useAuthentication();

  const [student, setStudent] = useState<IStudentClaims>({
    ...userCredentials,
  });

  const [isCharacterPickerEnable, setIsCharacterPickerEnable] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const toggleSoundPreference = () => {
    setStudent((oldValue) => ({
      ...oldValue,
      preference_Sound: !oldValue.preference_Sound,
    }));
  };

  const toggleVibrationPreference = () => {
    setStudent((oldValue) => ({
      ...oldValue,
      preference_Vibration: !oldValue.preference_Vibration,
    }));
  };

  const handleChangeCharacter = (characterNumber: number) => {
    setStudent((oldValue) => ({ ...oldValue, character_Id: characterNumber }));
  };

  const handleChangeGenderSelection = (genderOption: string) => {
    setStudent((oldValue) => ({ ...oldValue, gender: genderOption }));
  };

  const handleSave = useCallback(async () => {
    try {
      setIsGlobalLoadingActive(true);

      const updateSuccessful =
        await TechTripApiService.StudentsController.update({ ...student });

      if (updateSuccessful) {
        setUserCredentials({ ...student });

        toast.success("Dados atualizados com sucesso!");
      } else {
        toast.warning(
          "Não foi possível atualizar as informações, verifique os campos informados e tente novamente!"
        );
      }
    } finally {
      setIsGlobalLoadingActive(false);
    }
  }, [student]);

  return (
    <SettingsContainer>
      {/* <ToastContainer /> */}
      <SettingsHeader>
        <SettingsHeaderColumn>
          <ActionHeader
            onClick={() => {
              navigate(routeConfigs.Map);
            }}
          >
            <CaretLeft size={26} />
          </ActionHeader>
          <StyledLabelBold>Editar perfil</StyledLabelBold>
          <ActionHeader onClick={handleSave}>
            <StyledLabel>Salvar</StyledLabel>
          </ActionHeader>
        </SettingsHeaderColumn>
      </SettingsHeader>

      <ProfileContainer
        style={{ marginBottom: isCharacterPickerEnable ? "0" : "2em" }}
      >
        <CharacterContainer>
          <Character.FullComponent
            size="medium"
            number={student.character_Id}
          />
        </CharacterContainer>
        <Name>{student.name}</Name>
        <ButtonChangePassword
          onClick={() => {
            navigate(routeConfigs.ChangePassword);
          }}
        >
          <Lock size={18}></Lock> Alterar senha
        </ButtonChangePassword>
        <ButtonChangeImage
          onClick={() => setIsCharacterPickerEnable((oldValue) => !oldValue)}
          isopen={isCharacterPickerEnable}
        >
          <UserCircle size={18} /> Alterar Imagem
        </ButtonChangeImage>

        {isCharacterPickerEnable && (
          <CharacterPickerContainer>
            {[...Array(12)].map((_, index) => (
              <Characters>
                <Character.FullComponent
                  key={index}
                  number={index + 1}
                  size="medium"
                  gray={student.character_Id !== index + 1}
                  onClick={() => handleChangeCharacter(index + 1)}
                />
              </Characters>
            ))}
          </CharacterPickerContainer>
        )}
      </ProfileContainer>

      <ContainerInformation>
        <UnderlinedInput.FullComponent
          label="Nome"
          Icon={UserCircle}
          placeholder="Digite seu nome aqui..."
          value={student.name}
          name="name"
          onChange={handleInputChange}
        />
        <UnderlinedInput.FullComponent
          label="E-mail"
          Icon={Envelope}
          placeholder="Digite seu email aqui..."
          value={student.email}
          name="email"
          onChange={handleInputChange}
        />
        <UnderlinedInput.FullComponent
          label="Usuário"
          Icon={IdentificationBadge}
          placeholder="Digite seu usuário aqui..."
          value={student.user}
          name="user"
          onChange={handleInputChange}
        />
        <UnderlinedInput.FullComponent
          label="Data de nascimento"
          Icon={CalendarDots}
          placeholder="Digite sua data de nascimento aqui..."
          value={student.birth}
          name="birth"
          onChange={handleInputChange}
          type="date"
        />
        <GenderButtons>
          <LabelForm>Gênero</LabelForm>
          <DoubleSelection.FullComponent
            variant="gender"
            selected={student.gender as TSelectionVariant}
            type="button"
            onClick={(e) => {
              const value = (e.target as HTMLButtonElement).textContent;
              handleChangeGenderSelection(
                value === "Masculino" ? "male" : "female"
              );
            }}
          />
        </GenderButtons>
        <PreferenceSection>
          <PreferenceButton
            variant="sound"
            active={student.preference_Sound}
            onClick={toggleSoundPreference}
          />
          <PreferenceButton
            variant="vibration"
            active={student.preference_Vibration}
            onClick={toggleVibrationPreference}
          />
        </PreferenceSection>
        <Button onClick={handleSave} color="green" text="Salvar alterações" />
      </ContainerInformation>
    </SettingsContainer>
  );
}
