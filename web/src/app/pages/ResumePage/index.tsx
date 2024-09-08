import { GearSix, SketchLogo, Star } from "@phosphor-icons/react/dist/ssr";
import { ProgressBar } from "../../shared/components/ProgressBar";
import {
  Header,
  StyledMain,
  ProgressContainer,
  Greetings,
  ActionHeader,
  StyledLabel,
  Indicator,
  List,
  IndicatorContent,
  IndicatorArea,
  Content,
  Number,
  ListItem,
  StarsContainer,
  DiamondContainer,
  CharacterPicture,
  IndicatorTitle,
  ChallengeScoreContainer,
  NavBarContainer,
} from "./styles";
import { Character, NavBar } from "../../shared/components";
import { IStudents, IChallengesStudent } from "../../shared/services";
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../shared/configs";
import { StarAndCrescent, StarFour } from "@phosphor-icons/react";

export const ResumePage = () => {
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
  const article = student.gender == "female" ? "a" : "o";

  const challenges: Array<IChallengesStudent> = [
    { challenge_id: 1, current: false, score_Stars: 3, score_Diamonds: 0 },
    { challenge_id: 2, current: false, score_Stars: 3, score_Diamonds: 0 },
    { challenge_id: 3, current: false, score_Stars: 3, score_Diamonds: 1 },
    { challenge_id: 4, current: true, score_Stars: 2, score_Diamonds: 0 },
    { challenge_id: 5, current: false, score_Stars: 0, score_Diamonds: 0 },
    { challenge_id: 6, current: false, score_Stars: 0, score_Diamonds: 0 },
    { challenge_id: 7, current: false, score_Stars: 0, score_Diamonds: 0 },
    { challenge_id: 8, current: false, score_Stars: 0, score_Diamonds: 0 },
    { challenge_id: 9, current: false, score_Stars: 0, score_Diamonds: 0 },
    { challenge_id: 10, current: false, score_Stars: 0, score_Diamonds: 0 },
    { challenge_id: 11, current: false, score_Stars: 0, score_Diamonds: 0 },
    { challenge_id: 12, current: false, score_Stars: 0, score_Diamonds: 0 },
    { challenge_id: 13, current: false, score_Stars: 0, score_Diamonds: 0 },
    { challenge_id: 14, current: false, score_Stars: 0, score_Diamonds: 0 },
    { challenge_id: 15, current: false, score_Stars: 0, score_Diamonds: 0 },
  ];

  const progress = 75;
  const star_total = 11;
  const diamonds_total = 1;

  const renderChallenges = () => {
    return challenges.map((challenge) => (
      <ListItem key={challenge.challenge_id}>
        <Number>
          <span>{challenge.challenge_id}</span>
        </Number>
        <StarsContainer>
          {[...Array(3)].map((_, index) => (
            <Star
              key={index}
              size={28}
              color={index < challenge.score_Stars ? "#FFA425" : "#99B9B7"}
              weight="fill"
            />
          ))}
        </StarsContainer>
        <DiamondContainer
          visibility={challenge.score_Diamonds > 0 ? "visible" : "hidden"}
        >
          <SketchLogo size={26} color="#00C3FF" weight="fill" />
          <span>{challenge.score_Diamonds}</span>
        </DiamondContainer>
      </ListItem>
    ));
  };

  return (
    <StyledMain>
      <Header>
        <ProgressContainer>
          <ProgressBar progress={progress} />
        </ProgressContainer>
        <Greetings>
          {`Olá, Pequen${article}`}
          <span>{student?.name.toLocaleUpperCase()}!</span>
        </Greetings>
        <ActionHeader onClick={() => navigate(routeConfigs.Settings)}>
          <GearSix weight="fill" size={32} />
        </ActionHeader>
      </Header>

      <Content>
        <CharacterPicture>
          <Character.FullComponent size="large" number={student.character_id} />
        </CharacterPicture>
        <StyledLabel>Minha pontuação</StyledLabel>
        <IndicatorArea>
          <Indicator>
            <IndicatorTitle>Total de Estrelas</IndicatorTitle>
            <IndicatorContent color="#FFA425">
              <Star size={38} color={"#FFA425"} weight="fill" />{" "}
              <span>{star_total}</span>
            </IndicatorContent>
          </Indicator>
          <Indicator>
            <IndicatorTitle>Total de Diamantes</IndicatorTitle>
            <IndicatorContent color="#00C3FF">
              <SketchLogo size={38} color={"#00C3FF"} weight="fill" />
              <span>{diamonds_total}</span>
            </IndicatorContent>
          </Indicator>
        </IndicatorArea>

        <StyledLabel>Resumo</StyledLabel>
        <List>{renderChallenges()}</List>
      </Content>
      <NavBar.FullComponent />
    </StyledMain>
  );
};
