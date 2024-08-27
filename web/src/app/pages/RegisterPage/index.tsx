import {
  Title,
  Character,
  ContainedInput,
  DoubleSelection,
  Button,
  SecondaryButton,
} from "../../shared/components";

import {
  UserCircle,
  Envelope,
  IdentificationBadge,
  CalendarDots,
  Lock,
} from "@phosphor-icons/react";
import { useState } from "react";

import {
  StyledMain,
  RegisterContainer,
  RegisterHeader,
  CharactersContainer,
  Characters,
  RegisterForm,
  StyledLabel,
  GenderButtons,
  RegisterFooter,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../shared/configs";

export function RegisterPage() {
  const navigate = useNavigate();

  const handleAlreadyHaveAccount = () => {
    navigate(routeConfigs.Login);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");
  const [selectedGender, setSelectedGender] = useState<"male" | "female">(
    "female"
  );
  const [selectedCharacterId, setSelectedCharacterId] = useState<number>(2);

  const handleGenderSelection = (gender: "male" | "female") => {
    setSelectedGender(gender);
  };

  const handleCharacterSelection = (id: number) => {
    setSelectedCharacterId(id);
  };

  const CharactersIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      username,
      password,
      birth,
      gender: selectedGender,
      character_id: selectedCharacterId,
    };

    //console.log(data);

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
        console.log("Sucessfully registered:", result);
      } else {
        console.error("Error when registering:", response.statusText);
      }
    } catch (error) {
      console.error("Error connecting to the API:", error);
    }
  };

  return (
    <StyledMain>
      <RegisterContainer>
        <RegisterForm onSubmit={handleSubmit}>
          <div>
            <RegisterHeader>
              <Title value="TECH KIDs" />
              <p>Descubra uma nova forma de aprender computação.</p>
            </RegisterHeader>

            <CharactersContainer>
              <StyledLabel>Selecione o seu personagem</StyledLabel>
              <Characters>
                {CharactersIds.map((id) => (
                  <Character.FullComponent
                    key={id}
                    number={id}
                    gray={
                      selectedCharacterId !== null && selectedCharacterId !== id
                    }
                    onClick={() => handleCharacterSelection(id)}
                    selected={selectedCharacterId === id}
                  />
                ))}
              </Characters>
            </CharactersContainer>

            <ContainedInput.FullComponent
              label="Nome"
              Icon={UserCircle}
              placeholder="Digite seu nome aqui..."
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ContainedInput.FullComponent
              label="E-mail"
              Icon={Envelope}
              placeholder="exemplo@email.com..."
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <ContainedInput.FullComponent
              label="Usuário"
              Icon={IdentificationBadge}
              placeholder="Nome de usuário, sem espaços..."
              name="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <ContainedInput.FullComponent
              label="Senha"
              Icon={Lock}
              placeholder="Mínimo de 8 caracteres..."
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ContainedInput.FullComponent
              label="Data de nascimento"
              Icon={CalendarDots}
              placeholder="Informe sua data de nascimento..."
              name="birth"
              type="date"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
            <GenderButtons>
              <StyledLabel>Gênero</StyledLabel>
              <DoubleSelection.FullComponent
                variant="gender"
                selected={selectedGender}
                type="button"
                onClick={(e) => {
                  const value = (e.target as HTMLButtonElement).textContent;
                  handleGenderSelection(
                    value === "Masculino" ? "male" : "female"
                  );
                }}
              />
            </GenderButtons>
            <Button color="green" text="Registrar" type="submit" />

            <RegisterFooter>
              <SecondaryButton
                onClick={handleAlreadyHaveAccount}
                title="Já tenho uma conta"
              />
            </RegisterFooter>
          </div>
        </RegisterForm>
      </RegisterContainer>
    </StyledMain>
  );
}
