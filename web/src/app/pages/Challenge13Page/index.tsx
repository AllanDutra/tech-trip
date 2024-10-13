import { useCallback, useEffect, useState } from "react";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import { useLoading } from "../../shared/hooks/useLoading";
import { TechTripApiService } from "../../shared/services";
import { useChallengeCorrection } from "../../shared/hooks/useChallengeCorrection";
import { toast } from "react-toastify";

const RESPONSE_INDEX_MAP = {
  0: "A",
  1: "B",
  2: "C",
};

type TResponse = keyof typeof RESPONSE_INDEX_MAP;

function getResponseByIndex(index: TResponse) {
  return RESPONSE_INDEX_MAP[index];
}

export const Challenge13Page = () => {
  const { setIsGlobalLoadingActive } = useLoading();

  const { checkChallengeCorrection } = useChallengeCorrection();

  const [currentStage, setCurrentStage] = useState<number>(0);

  const [response, setResponse] = useState<number | null>(null);

  const handleConfirm = useCallback(async () => {
    if (!response && response !== 0) {
      toast.warning("Selecione uma resposta antes de prosseguir");

      return;
    }

    const goToNextChallenge = currentStage === 3;

    const challengeCorrectionData = await checkChallengeCorrection(
      {
        challenge_Id: 13,
        steps: currentStage,
        studentResponse: getResponseByIndex(response as TResponse),
      },
      goToNextChallenge
    );

    if (challengeCorrectionData.challengeCompleted && !goToNextChallenge) {
      toast.success("Muito bem!");

      setResponse(null);
      setCurrentStage((oldValue) => oldValue + 1);
    }
  }, [response, currentStage, checkChallengeCorrection, setCurrentStage]);

  useEffect(() => {
    (async () => {
      try {
        setIsGlobalLoadingActive(true);

        const currentStageData =
          await TechTripApiService.ChallengesController.getCurrentStageOnCompoundChallenge(
            13
          );

        setCurrentStage(currentStageData);
      } finally {
        setIsGlobalLoadingActive(false);
      }
    })();
  }, []);

  if (!currentStage) return <></>;

  return (
    <ChallengePageContainer
      currentLevel={13}
      children={
        <>
          {currentStage == 1 && (
            <FirstStep
              setResponse={setResponse}
              response={response}
              onConfirm={handleConfirm}
            />
          )}
          {currentStage == 2 && (
            <SecondStep
              setResponse={setResponse}
              response={response}
              onConfirm={handleConfirm}
            />
          )}
          {currentStage == 3 && (
            <ThirdStep
              setResponse={setResponse}
              response={response}
              onConfirm={handleConfirm}
            />
          )}
        </>
      }
    />
  );
};
