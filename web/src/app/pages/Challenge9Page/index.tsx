import { useState } from "react";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { FirstStep, SecondStep } from "./components";
import { ToastContainer } from "react-toastify";
export interface IOption {
  content: string;
}

export const Challenge9Page = () => {
  const [response, setResponse] = useState<number | null>(null);
  const [step, setStep] = useState(1);

  const options: IOption[] = [
    { content: "0100 1111 0100 0001" },
    { content: "0110 1001 0100 0001" },
    { content: "0100 1111 0110 1001" },
  ];

  return (
    <ChallengePageContainer
      currentLevel={9}
      children={
        <>
        <ToastContainer />
          {step == 1 && (
            <FirstStep
              options={options}
              setResponse={setResponse}
              response={response}
              setStep={setStep}
            />
          )}

          {step == 2 && <SecondStep response={response} setStep={setStep} />}
        </>
      }
    />
  );
};
