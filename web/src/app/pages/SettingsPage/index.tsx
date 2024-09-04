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
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../shared/configs";
import {
  Character,
  UnderlinedInput,
  DoubleSelection,
  PreferenceButton,
  Button,
  ToastError,
  ToastWarning,
  ToastSuccess,
} from "../../shared/components";
import { useState, useEffect, ReactEventHandler } from "react";
import { IStudents, StudentsService } from "../../shared/services";

export function SettingsPage() {
  const navigate = useNavigate();

  const fetchStudentSettings = async () => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      const response = await StudentsService.getSettings(token);
      if (response instanceof Error) {
        redirectToLogin(response.message);
      } else {
        setStudent(response);
      }
    } else {
      redirectToLogin("");
    }
  };

  useEffect(() => {
    fetchStudentSettings();
  }, []);

  const redirectToLogin = (message: string) => {
    // ToastWarning({
    //   message: "Realize login!",
    //   positionProp: "top-right",
    // });
    // navigate(routeConfigs.Login);
    // console.error(message);
  };

  const [student, setStudent] = useState<IStudents>({
    id: 0,
    name: "",
    email: "",
    user: "",
    password: "",
    birth: "",
    gender: "",
    character_id: 1,
    sound: true,
    vibration: true,
  });

  const [isCharacterPickerOpen, setCharacterPickerOpen] = useState(false);
  const handleChangeCharacter = () => {
    setCharacterPickerOpen((prevState) => !prevState);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const [soundPreference, setSoundPreference] = useState<boolean>(
    student.sound
  );

  const handleSoundPreference = (preference: boolean) => {
    setSoundPreference(preference);
    student.sound = preference;
  };

  const [vibrationPreference, setVibrationPreference] = useState<boolean>(
    student.vibration
  );

  const handleVibrationPreference = (preference: boolean) => {
    setVibrationPreference(preference);
    student.vibration = preference;
  };

  const [selectedGender, setSelectedGender] = useState<"male" | "female">(
    "female"
  );

  const handleGenderSelection = (gender: "male" | "female") => {
    setSelectedGender(gender);
    student.gender = gender;
  };

  const [selectedCharacterId, setSelectedCharacterId] = useState<number>(1);
  const handleCharacterSelect = (id: number) => {
    setSelectedCharacterId(id);
    student.character_id = id;
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const token = sessionStorage.getItem("authToken");
    /*console.log(student);
    return;*/
    if (!token) {
      redirectToLogin("");
      return;
    }

    const response = await StudentsService.updateStudent(token, student);

    if (response instanceof Error) {
      ToastError({
        message: response.message,
        positionProp: "top-right",
      });
    } else {
      ToastSuccess({
        message: "Dados atualizados com sucesso!",
        positionProp: "top-right",
      });
      navigate(routeConfigs.Map);
    }
  };

  return (
    <SettingsContainer>
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
          <ActionHeader
            onClick={(event) => {
              handleSave(event);
            }}
          >
            <StyledLabel>Salvar</StyledLabel>
          </ActionHeader>
        </SettingsHeaderColumn>
      </SettingsHeader>

      <ProfileContainer>
        <CharacterContainer>
          <Character.FullComponent size="medium" number={selectedCharacterId} />
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
          onClick={handleChangeCharacter}
          isopen={isCharacterPickerOpen}
        >
          <UserCircle size={18} /> Alterar Imagem
        </ButtonChangeImage>

        {isCharacterPickerOpen && (
          <CharacterPickerContainer>
            {[...Array(12)].map((_, index) => (
              <Characters>
                <Character.FullComponent
                  key={index}
                  number={index + 1}
                  size="medium"
                  gray={selectedCharacterId != index + 1}
                  onClick={() => handleCharacterSelect(index + 1)}
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
            selected={selectedGender}
            type="button"
            onClick={(e) => {
              const value = (e.target as HTMLButtonElement).textContent;
              handleGenderSelection(value === "Masculino" ? "male" : "female");
            }}
          />
        </GenderButtons>
        <PreferenceSection>
          <PreferenceButton
            variant="sound"
            active={student.sound}
            onClick={() => {
              handleSoundPreference(!student.sound);
            }}
          />
          <PreferenceButton
            variant="vibration"
            active={student.vibration}
            onClick={() => {
              handleVibrationPreference(!student.vibration);
            }}
          />
        </PreferenceSection>
        <Button
          onClick={(event) => {
            handleSave(event);
          }}
          color="green"
          text="Salvar alterações"
        />
      </ContainerInformation>
    </SettingsContainer>
  );
}
