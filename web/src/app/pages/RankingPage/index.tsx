import { CrownSimple } from "@phosphor-icons/react";
import { Character, NavBar, ProgressBar } from "../../shared/components";
import {
  ActionHeader,
  Greetings,
  Header,
  ProgressContainer,
  StyledLabel,
  StyledMain,
  FeaturedSection,
  FeaturedCard,
  StudentList,
  StudentItem,
  Number,
  StudentInfo,
  CharacterContainer,
  Featured,
  Name,
  Points,
  MedalContainer,
  CharacterFeatured,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { IStudents } from "../../shared/services";
import { routeConfigs } from "../../shared/configs";
import { GearSix, Medal } from "@phosphor-icons/react/dist/ssr";

export const RankingPage = () => {
  const navigate = useNavigate();
  const student: IStudents = {
    id: 0,
    name: "Oliver",
    email: "",
    user: "",
    password: "",
    birth: "",
    gender: "male",
    character_id: 1,
    sound: true,
    vibration: true,
  };

  const students = [
    { name: "Letícia", points: 300, position: 2, character_id: 2 },
    { name: "Oliver", points: 295, position: 1, character_id: 1 },
    { name: "Humberto", points: 196, position: 3, character_id: 3 },
    { name: "José Frederico", points: 150, position: 4, character_id: 4 },
    { name: "Fernanda", points: 140, position: 5, character_id: 5 },
    { name: "Paula", points: 120, position: 6, character_id: 6 },
    { name: "Bernardo", points: 96, position: 7, character_id: 7 },
    { name: "Isaque", points: 84, position: 8, character_id: 8 },
    { name: "Camila", points: 80, position: 9, character_id: 9 },
    { name: "Felipe", points: 78, position: 10, character_id: 10 },
    { name: "Juliana", points: 75, position: 11, character_id: 11 },
    { name: "Lucas", points: 72, position: 12, character_id: 12 },
    { name: "Ana Clara", points: 68, position: 13, character_id: 1 },
    { name: "Ricardo", points: 66, position: 14, character_id: 2 },
    { name: "Guilherme", points: 62, position: 15, character_id: 3 },
    { name: "Bianca", points: 59, position: 16, character_id: 4 },
    { name: "Marcelo", points: 55, position: 17, character_id: 5 },
    { name: "Sabrina", points: 52, position: 18, character_id: 6 },
    { name: "Cauã", points: 50, position: 19, character_id: 7 },
    { name: "Bruna", points: 48, position: 20, character_id: 8 },
  ];
  const topStudents = students.slice(0, 3);

  const article = student.gender == "female" ? "a" : "o";

  return (
    <StyledMain>
      <Header>
        <ProgressContainer>
          <ProgressBar progress={75}></ProgressBar>
        </ProgressContainer>
        <Greetings>
          {`Olá, Pequen${article}`}{" "}
          <span>{student?.name.toLocaleUpperCase()}!</span>
        </Greetings>
        <ActionHeader onClick={() => navigate(routeConfigs.Settings)}>
          <GearSix size={32} color="#2bcb9a" weight="fill"></GearSix>
        </ActionHeader>
      </Header>

      <Featured>
        <StyledLabel>Alunos Destaque</StyledLabel>
        <FeaturedSection>
          <FeaturedCard>
            <CharacterFeatured>
              <Character.FullComponent number={topStudents[1].character_id} />
              <MedalContainer>
                <Medal size={24} color="#9E919D" weight="fill" />
              </MedalContainer>
            </CharacterFeatured>
            <Name>{topStudents[1].name}</Name>
            <Points>{topStudents[1].points} pts</Points>
          </FeaturedCard>

          <FeaturedCard>
            <CrownSimple weight="fill" size={24} color="#FFD700" />
            <Character.FullComponent
              size="medium"
              number={topStudents[0].character_id}
            />
            <Name>{topStudents[0].name}</Name>
            <Points>{topStudents[0].points} pts</Points>
          </FeaturedCard>

          <FeaturedCard>
            <CharacterFeatured>
              <Character.FullComponent number={topStudents[2].character_id} />
              <MedalContainer>
                <Medal size={24} color="#CD7F32" weight="fill" />
              </MedalContainer>
            </CharacterFeatured>
            <Name>{topStudents[2].name}</Name>
            <Points>{topStudents[2].points} pts</Points>
          </FeaturedCard>
        </FeaturedSection>
      </Featured>

      <StudentList>
        {students.slice(3).map((student, index) => (
          <StudentItem key={student.name}>
            <Number>{index + 4}</Number>
            <StudentInfo>
              <CharacterContainer>
                <Character.FullComponent
                  size="small"
                  number={student.character_id}
                />
                {student.name}
              </CharacterContainer>
              <span>{student.points} pts</span>
            </StudentInfo>
          </StudentItem>
        ))}
      </StudentList>

      <NavBar.FullComponent />
    </StyledMain>
  );
};
