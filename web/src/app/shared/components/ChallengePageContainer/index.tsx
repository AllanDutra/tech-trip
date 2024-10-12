import { ReactNode, useCallback } from "react";
import { AsideNavBar } from "../AsideNavBar";
import { Header } from "../Header";
import {
  StyledHeader,
  StyledMain,
  StyledPageContainer,
  StyledSubPageContainer,
} from "./styles";
import { Greetings } from "../Greetings";
import { LevelCompletionModal } from "../LevelCompletionModal";
import { useChallengeCorrection } from "../../hooks/useChallengeCorrection";
import { routeConfigs } from "../../configs";
import { useNavigate } from "react-router-dom";

interface IChallengePageContainerProps {
  currentLevel: number;
  children: ReactNode;
}

function getChallengeRouteByNumber(challengeNumber: number): string {
  return routeConfigs[`Challenge${challengeNumber}`];
}

export function ChallengePageContainer({
  currentLevel,
  children,
}: IChallengePageContainerProps) {
  const navigate = useNavigate();

  const {
    challengeCorrection,
    INITIAL_CHALLENGE_CORRECTION,
    setChallengeCorrection,
  } = useChallengeCorrection();

  const { challengeCompleted, challengePerformance } = challengeCorrection;

  const handleGoToNextChallenge = useCallback((currentLevel: number) => {
    setChallengeCorrection({ ...INITIAL_CHALLENGE_CORRECTION });

    const nextLevel = currentLevel + 1;

    const nextLevelRoute = getChallengeRouteByNumber(nextLevel);

    if (!nextLevelRoute) return navigate(routeConfigs.Map);

    return navigate(nextLevelRoute);
  }, []);

  return (
    <StyledPageContainer>
      <AsideNavBar />

      <StyledSubPageContainer>
        <StyledHeader>
          {/* // TODO: MAKE TOTAL LEVELS DYNAMIC */}
          <Header.FullComponent currentLevel={currentLevel} totalLevels={15} />

          <Greetings />
        </StyledHeader>
        <StyledMain>
          {challengeCompleted && challengePerformance ? (
            <LevelCompletionModal.FullComponent
              performance={challengePerformance}
              onContinue={() => handleGoToNextChallenge(currentLevel)}
            />
          ) : (
            children
          )}
        </StyledMain>
      </StyledSubPageContainer>
    </StyledPageContainer>
  );
}
