import { useState } from "react";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../shared/components";

export const Challenge13Page = () => {
  const [step, setStep] = useState(1);
  const [response, setResponse] = useState<number | null>(null);

  const handleConfirm = (
    result: boolean,
    response: number,
    message: string
  ) => {
    console.log(result, response, message);
    if (response == null) {
      ToastWarning({
        message: "Selecione uma alternativa",
        positionProp: "top-right",
      });
      return false;
    }

    if (result == true) {
      ToastSuccess({
        message: message,
        positionProp: "top-right",
      });
      return true;
    } else {
      ToastError({
        message: "Ops! Tente novamente.",
        positionProp: "top-right",
      });
      return false;
    }
  };

  return (
    <ChallengePageContainer
      currentLevel={13}
      children={
        <>
          {step == 1 && (
            <FirstStep
              setResponse={setResponse}
              response={response}
              setStep={setStep}
              handleConfirm={handleConfirm}
            />
          )}
          {step == 2 && (
            <SecondStep
              setResponse={setResponse}
              response={response}
              setStep={setStep}
              handleConfirm={handleConfirm}
            />
          )}
          {step == 3 && (
            <ThirdStep
              setResponse={setResponse}
              response={response}
              handleConfirm={handleConfirm}
            />
          )}
        </>
      }
    />
  );
};
