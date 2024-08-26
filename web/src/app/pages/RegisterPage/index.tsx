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

export function RegisterPage() {
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

  return (
    <StyledMain>
      <RegisterContainer>
        <RegisterForm>
          <div>
            <RegisterHeader>
              <Title value="Tech KIDs" />
              <p>Descubra uma nova forma de aprender computação.</p>
            </RegisterHeader>

            <CharactersContainer>
              <p>Selecione o seu personagem</p>
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
            />
            <ContainedInput.FullComponent
              label="E-mail"
              Icon={Envelope}
              placeholder="exemplo@email.com..."
            />
          </div>

          <div>
            <ContainedInput.FullComponent
              label="Usuário"
              Icon={IdentificationBadge}
              placeholder="Nome de usuário, sem espaços..."
            />
            <ContainedInput.FullComponent
              label="Senha"
              Icon={Lock}
              placeholder="Mínimo de 8 caracteres..."
            />
            <ContainedInput.FullComponent
              label="Data de nascimento"
              Icon={CalendarDots}
              placeholder="Informe sua data de nascimento..."
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
            <Button color="green" text="Registrar" />

            <RegisterFooter>
              <SecondaryButton title="Já tenho uma conta" />
            </RegisterFooter>
          </div>
        </RegisterForm>
      </RegisterContainer>
    </StyledMain>
  );
}
