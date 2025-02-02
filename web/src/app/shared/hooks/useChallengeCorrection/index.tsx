import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { PERFORMANCE_MAP } from "../../components";
import { useLoading } from "../useLoading";
import { TechTripApiService } from "../../services";
import { IProcessAttemptRequest } from "../../services/TechTripApi/ChallengesController";
import { Functions } from "../../functions";
import { useFeedback } from "../useFeedback";
// import { Functions } from "../../functions";

type TPerformanceMap = keyof typeof PERFORMANCE_MAP;

interface IChallengeCorrection {
  challengeCompleted: boolean;
  challengePerformance?: TPerformanceMap;
}

interface IChallengeCorrectionContextData {
  INITIAL_CHALLENGE_CORRECTION: IChallengeCorrection;
  challengeCorrection: IChallengeCorrection;
  checkChallengeCorrection: (
    challengeAttempt: IProcessAttemptRequest,
    goToNextChallenge?: boolean
  ) => Promise<IChallengeCorrection>;
  setChallengeCorrection: React.Dispatch<
    React.SetStateAction<IChallengeCorrection>
  >;
}

type ChallengeCorrectionProviderProps = {
  children: ReactNode;
};

const INITIAL_CHALLENGE_CORRECTION: IChallengeCorrection = {
  challengeCompleted: false,
};

const ChallengeCorrectionContext = createContext(
  {} as IChallengeCorrectionContextData
);

function ChallengeCorrectionProvider({
  children,
}: ChallengeCorrectionProviderProps) {
  const { setIsGlobalLoadingActive } = useLoading();
  const { activeSound, activeVibration } = useFeedback();

  const [challengeCorrection, setChallengeCorrection] =
    useState<IChallengeCorrection>({
      ...INITIAL_CHALLENGE_CORRECTION,
    });

  const showReloadNotification = useCallback(() => {
    Functions.setReloadNotification(
      "error",
      "A tentativa não foi bem-sucedida. Por favor, tente outra vez!"
    );
  }, []);

  const checkChallengeCorrection = useCallback(
    async (
      challengeAttempt: IProcessAttemptRequest,
      goToNextChallenge: boolean = true,
      shouldShowCorrectionPage: boolean = true
    ): Promise<IChallengeCorrection> => {
      try {
        setIsGlobalLoadingActive(true);

        const { correctAttempt, totalStars, totalDiamonds } =
          await TechTripApiService.ChallengesController.processAttemptOnChallenge(
            challengeAttempt
          );

        if (!correctAttempt) {
          activeVibration();

          activeSound("attempt-failed", showReloadNotification);

          return { ...INITIAL_CHALLENGE_CORRECTION };
        }

        const challengePerformance = totalStars + totalDiamonds;

        const correctionResult = {
          challengeCompleted: true,
          challengePerformance: challengePerformance as TPerformanceMap,
        };

        if (goToNextChallenge || shouldShowCorrectionPage) {
          setChallengeCorrection({ ...correctionResult });
        }

        return correctionResult;
      } finally {
        setIsGlobalLoadingActive(false);
      }
    },
    [activeVibration, activeSound, showReloadNotification]
  );

  return (
    <ChallengeCorrectionContext.Provider
      value={{
        INITIAL_CHALLENGE_CORRECTION,
        challengeCorrection,
        checkChallengeCorrection,
        setChallengeCorrection,
      }}
    >
      {children}
    </ChallengeCorrectionContext.Provider>
  );
}

function useChallengeCorrection() {
  const context = useContext(ChallengeCorrectionContext);

  return context;
}

export { ChallengeCorrectionProvider, useChallengeCorrection };
