import { useState } from "react";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { FirstStep, SecondStep } from "./components";

export function Challenge7Page() {
  const [step, setStep] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = [
    "#FE0000",
    "#EE7326",
    "#FFFF00",
    "#009045",
    "#3C51A4",
    "#9743A5",
    "#FF52D8",
    "#534B40",
    "#000000",
  ];

  return (
    <ChallengePageContainer currentLevel={7}>
      {step === 1 && (
        <FirstStep
          setStep={setStep}
          setSelectedColor={setSelectedColor}
          colors={colors}
        />
      )}

      {step === 2 && (
        <SecondStep selectedColor={selectedColor} setStep={setStep} />
      )}
    </ChallengePageContainer>
  );
}
