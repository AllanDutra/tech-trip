import { ReactNode, useCallback, useEffect } from "react";
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
import { useProgress } from "../../hooks/useProgress";
import { Functions } from "../../functions";
import { useLoading } from "../../hooks/useLoading";
import { TechTripApiService } from "../../services";
import { FooterCredits } from "../FooterCredits";

interface IChallengePageContainerProps {
  currentLevel: number;
  children: ReactNode;
}

export function ChallengePageContainer({
  currentLevel,
  children,
}: IChallengePageContainerProps) {
  const navigate = useNavigate();

  const { setIsGlobalLoadingActive } = useLoading();

  const { progress, setProgress } = useProgress();

  const {
    challengeCorrection,
    INITIAL_CHALLENGE_CORRECTION,
    setChallengeCorrection,
  } = useChallengeCorrection();

  const { challengeCompleted, challengePerformance } = challengeCorrection;

  const handleGoToNextChallenge = useCallback(async (currentLevel: number) => {
    setIsGlobalLoadingActive(true);

    const progressData =
      await TechTripApiService.ChallengesController.getChallengesProgress();

    setIsGlobalLoadingActive(false);

    setProgress({ ...progressData });

    setChallengeCorrection({ ...INITIAL_CHALLENGE_CORRECTION });

    const nextLevel = currentLevel + 1;

    const nextLevelRoute = Functions.getChallengeRouteByNumber(nextLevel);

    if (!nextLevelRoute) return navigate(routeConfigs.Map);

    return navigate(nextLevelRoute);
  }, []);

  useEffect(() => {
    return () => {
      setChallengeCorrection({ ...INITIAL_CHALLENGE_CORRECTION });
    };
  }, []);

  return (
    <StyledPageContainer>
      <AsideNavBar />

      <StyledSubPageContainer>
        <StyledHeader>
          <Header.FullComponent
            currentLevel={currentLevel}
            totalLevels={progress.totalChallenges}
          />

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

        <FooterCredits />
      </StyledSubPageContainer>
    </StyledPageContainer>
  );
}
