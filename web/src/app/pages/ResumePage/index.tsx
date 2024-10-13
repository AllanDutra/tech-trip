import { SketchLogo, Star } from "@phosphor-icons/react/dist/ssr";
import {
  StyledMain,
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
  StyledTotalScoreContainer,
  StyledResumeContainer,
} from "./styles";
import { Character, NavBar } from "../../shared/components";
import { CommonPageContainer } from "../../shared/components/CommonPageContainer";
import { useAuthentication } from "../../shared/hooks/useAuthentication";
import { IChallenge } from "../../shared/services/TechTripApi/ChallengesController";
import { useEffect, useState } from "react";
import { ITotalScore } from "../../shared/services/TechTripApi/ScoresController";
import { useLoading } from "../../shared/hooks/useLoading";
import { TechTripApiService } from "../../shared/services";

export const ResumePage = () => {
  const { setIsGlobalLoadingActive } = useLoading();
  const { userCredentials } = useAuthentication();

  const [totalScore, setTotalScore] = useState<ITotalScore>({
    stars: 0,
    diamonds: 0,
  });

  const [challenges, setChallenges] = useState<IChallenge[]>([]);

  const renderChallenges = () => {
    return challenges.map((challenge) => (
      <ListItem key={challenge.challenge_Id}>
        <Number>
          <span>{challenge.challenge_Id}</span>
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

  useEffect(() => {
    (async () => {
      try {
        setIsGlobalLoadingActive(true);

        const results = await Promise.all([
          TechTripApiService.ScoresController.getTotalScore(),
          TechTripApiService.ChallengesController.getChallengesMap(),
        ]);

        const [totalScoreData, challengesData] = results;

        setTotalScore({ ...totalScoreData });
        setChallenges([...challengesData]);
      } finally {
        setIsGlobalLoadingActive(false);
      }
    })();
  }, []);

  return (
    <CommonPageContainer>
      <StyledMain>
        <Content>
          <CharacterPicture>
            <Character.FullComponent
              size="large"
              number={userCredentials.character_Id}
            />
          </CharacterPicture>

          <StyledTotalScoreContainer>
            <StyledLabel className="label">Minha pontuação</StyledLabel>
            <IndicatorArea>
              <Indicator className="indicator">
                <IndicatorTitle className="mobile">
                  Total de Estrelas
                </IndicatorTitle>

                <IndicatorContent color="#FFA425">
                  <Star size={38} color={"#FFA425"} weight="fill" />{" "}
                  <span className="mobile">{totalScore.stars}</span>
                  <strong className="desktop">
                    ({totalScore.stars}) Estrelas
                  </strong>
                </IndicatorContent>
              </Indicator>
              <Indicator className="indicator">
                <IndicatorTitle className="mobile">
                  Total de Diamantes
                </IndicatorTitle>
                <IndicatorContent color="#00C3FF">
                  <SketchLogo size={38} color={"#00C3FF"} weight="fill" />
                  <span className="mobile">{totalScore.diamonds}</span>
                  <strong className="desktop">
                    ({totalScore.diamonds}) Diamantes
                  </strong>
                </IndicatorContent>
              </Indicator>
            </IndicatorArea>
          </StyledTotalScoreContainer>

          <StyledResumeContainer>
            <StyledLabel className="label">Resumo</StyledLabel>
            <List className="list">{renderChallenges()}</List>
          </StyledResumeContainer>
        </Content>
        <NavBar.FullComponent />
      </StyledMain>
    </CommonPageContainer>
  );
};
