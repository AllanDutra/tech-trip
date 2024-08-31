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
} from "./styles";
import {
  CaretLeft,
  UserCircle,
  Envelope,
  IdentificationBadge,
  CalendarDots,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../shared/configs";
import {
  Character,
  UnderlinedInput,
  DoubleSelection,
  PreferenceButton,
  Button,
} from "../../shared/components";
import { useState, useEffect } from "react";
import axios from "axios";

export function SettingsPage() {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(routeConfigs.TestComponents);
  };

  const [isCharacterPickerOpen, setCharacterPickerOpen] = useState(false);
  const handleChangeCharacter = () => {
    setCharacterPickerOpen((prevState) => !prevState);
  };

  const student = {
    character_id: 1,
    name: "Oliver",
    email: "oliver@email.com",
    user: "oliver_12",
    birth: "2004-04-11",
    gender: "male",
  };

  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [user, setUser] = useState(student.user);
  const [birth, setBirth] = useState(student.birth);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);
  const handleBirthChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBirth(e.target.value);
  const [selectedGender, setSelectedGender] = useState<"male" | "female">(
    "female"
  );

  const handleGenderSelection = (gender: "male" | "female") => {
    setSelectedGender(gender);
  };

  const [selectedCharacterId, setSelectedCharacterId] = useState<number>(
    student.character_id
  );
  const handleCharacterSelect = (id: number) => {
    setSelectedCharacterId(id);
  };

  const handleSave = async () => {
    if (student) {
      try {
        await axios.put('', student);
        console.log("Dados atualizados com sucesso!");
      } catch (error) {
        console.error("Erro ao atualizar dados do estudante:", error);
      }
    }
  };

  return (
    <SettingsContainer>
      <SettingsHeader>
        <SettingsHeaderColumn>
          <ActionHeader onClick={handleReturn}>
            <CaretLeft size={26} />
          </ActionHeader>
          <StyledLabelBold>Editar perfil</StyledLabelBold>
          <ActionHeader onClick={handleSave}>
            <StyledLabel>Salvar</StyledLabel>
          </ActionHeader>
        </SettingsHeaderColumn>
      </SettingsHeader>

      <ProfileContainer>
        <CharacterContainer>
          <Character.FullComponent size="medium" number={selectedCharacterId} />
        </CharacterContainer>
        <Name>{student.name}</Name>
        <ButtonChangeImage
          onClick={handleChangeCharacter}
          isOpen={isCharacterPickerOpen}
        >
          Alterar Imagem
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
          value={name}
          onChange={handleNameChange}
        />
        <UnderlinedInput.FullComponent
          label="E-mail"
          Icon={Envelope}
          placeholder="Digite seu email aqui..."
          value={email}
          onChange={handleEmailChange}
        />
        <UnderlinedInput.FullComponent
          label="Usuário"
          Icon={IdentificationBadge}
          placeholder="Digite seu usuário aqui..."
          value={user}
          onChange={handleUserChange}
        />
        <UnderlinedInput.FullComponent
          label="Data de nascimento"
          Icon={CalendarDots}
          placeholder="Digite sua data de nascimento aqui..."
          value={birth}
          onChange={handleBirthChange}
          type="date"
        />
        <GenderButtons>
          <LabelForm>Gênero</LabelForm>
          <DoubleSelection.FullComponent
            variant="gender"
            selected={setSelectedGender}
            type="button"
            variant="gender"
          />
        </GenderButtons>
        <PreferenceSection>
          <PreferenceButton variant="sound" active />
          <PreferenceButton variant="vibration" />
        </PreferenceSection>
        <Button color="green" text="Salvar alterações" />
      </ContainerInformation>
    </SettingsContainer>
  );
}
