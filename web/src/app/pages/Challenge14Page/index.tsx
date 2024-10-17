import { useState } from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";

export const Challenge14Page = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <ChallengePageContainer
      currentLevel={14}
      children={
        <>
          {step == 1 && <FirstStep setStep={setStep} />}
          {step == 2 && <SecondStep />}
        </>
      }
    />
  );
};
