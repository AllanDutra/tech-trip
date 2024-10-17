import { useState } from "react";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { FirstStep, SecondStep } from "./components";
import { ToastContainer } from "react-toastify";
export interface IOption {
  letter: string;
  content: string;
}

export const Challenge9Page = () => {
  const [response, setResponse] = useState<string>("");
  const [step, setStep] = useState(1);
  const [result, setResult] = useState<boolean>(false);

  const options: IOption[] = [
    {letter: "A", content: "0100 1111 0100 0001" },
    {letter: "B", content: "0110 1001 0100 0001" },
    {letter: "C", content: "0100 1111 0110 1001" },
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
              setResult={setResult}
              setStep={setStep}
            />
          )}

          {step == 2 && <SecondStep result={result} setStep={setStep} />}
        </>
      }
    />
  );
};
