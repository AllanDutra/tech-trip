import { useState } from "react";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { FirstStep } from "./components/FirstStep";
import { TSelectionVariant } from "../../shared/components";
import { SecondStep, ThirdStep } from "./components";

export function Challenge8Page() {
  const [step, setStep] = useState(1);
  const [play, setPlay] = useState<TSelectionVariant>("yes");

  return (
    <ChallengePageContainer
      currentLevel={8}
      children={
        <>
          {step == 1 && (
            <FirstStep setStep={setStep} setPlay={setPlay} play={play} />
          )}
          {step == 2 && <SecondStep play={play} setStep={setStep} />}
          {step == 3 && <ThirdStep setStep={setStep} />}
        </>
      }
    />
  );
}
