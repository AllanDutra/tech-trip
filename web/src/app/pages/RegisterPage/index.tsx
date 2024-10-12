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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { appConfigs } from "../../shared/configs/App";
import { IStudentClaims } from "../../shared/services/TechTripApi/StudentsController";
import { TechTripApiService } from "../../shared/services";

export function RegisterPage() {
  const navigate = useNavigate();

  const [student, setStudent] = useState<IStudentClaims>({
    id: 0,
    name: "",
    email: "",
    user: "",
    birth: "",
    gender: "",
    character_Id: 0,
    preference_Sound: false,
    preference_Vibration: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(student);
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const [selectedGender, setSelectedGender] = useState<"male" | "female">(
    "female"
  );
  const handleGenderSelection = (gender: "male" | "female") => {
    setSelectedGender(gender);
  };

  const [selectedCharacterId, setSelectedCharacterId] = useState<number>(2);
  const CharactersIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const handleCharacterSelection = (id: number) => {
    setSelectedCharacterId(id);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      student.gender = selectedGender;
      student.character_Id = selectedCharacterId;

      const studentId = await TechTripApiService.StudentsController.register(
        {} as any // TODO: change
      );

      if (typeof studentId === "number") {
        toast.success("Usuário registrado com sucesso!");

        navigate(routeConfigs.Login);
      } else {
        // toast.error(studentId.message);
      }
    } catch (error) {
      toast.error("Erro ao conectar");
    }
  };

  return (
    <StyledMain>
      <ToastContainer />
      <RegisterContainer>
        <RegisterForm onSubmit={handleSubmit}>
          <div>
            <RegisterHeader>
              <Title value={appConfigs.NAME} />
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
                    onClick={() => {
                      handleCharacterSelection(id);
                    }}
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
              value={student.name}
              onChange={handleInputChange}
            />
            <ContainedInput.FullComponent
              label="E-mail"
              Icon={Envelope}
              placeholder="exemplo@email.com..."
              name="email"
              type="email"
              value={student.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <ContainedInput.FullComponent
              label="Usuário"
              Icon={IdentificationBadge}
              placeholder="Nome de usuário, sem espaços..."
              name="user"
              value={student.user}
              onChange={handleInputChange}
            />
            <ContainedInput.FullComponent
              label="Senha"
              Icon={Lock}
              placeholder="Mínimo de 8 caracteres..."
              name="password"
              type="password"
              value={""}
              onChange={handleInputChange}
            />
            <ContainedInput.FullComponent
              label="Data de nascimento"
              Icon={CalendarDots}
              placeholder="Informe sua data de nascimento..."
              name="birth"
              type="date"
              value={student.birth}
              onChange={handleInputChange}
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
                onClick={() => {
                  navigate(routeConfigs.Login);
                }}
                title="Já tenho uma conta"
              />
            </RegisterFooter>
          </div>
        </RegisterForm>
      </RegisterContainer>
    </StyledMain>
  );
}
