import { useState } from "react";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { ThirdStep } from "./components/ThirdStep";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";

export type TSeedId = 1 | 2 | 3;

export function Challenge5Page() {
  const [step, setStep] = useState(1);

  const [selectedSeed, setSelectedSeed] = useState<TSeedId>();

  return (
    <ChallengePageContainer currentLevel={5}>
      {step === 1 && (
        <FirstStep setStep={setStep} setSelectedSeed={setSelectedSeed} />
      )}

      {step === 2 && <SecondStep setStep={setStep} />}

      {step === 3 && <ThirdStep selectedSeed={selectedSeed} />}
    </ChallengePageContainer>
  );
}
