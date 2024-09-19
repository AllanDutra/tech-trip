import { useState } from "react";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { FirstStep, SecondStep } from "./components";
import { ToastContainer } from "react-toastify";
export interface IOption {
  id: number;
  content: string;
}

export const Challenge9Page = () => {
  const [response, setResponse] = useState(0);
  const [step, setStep] = useState(1);

  const options: IOption[] = [
    { id: 1, content: "0100 1111 0100 0001" },
    { id: 2, content: "0110 1001 0100 0001" },
    { id: 3, content: "0100 1111 0110 1001" },
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
