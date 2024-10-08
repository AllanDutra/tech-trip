import { ChallengeMessage } from "../../../../shared/components";
import PlantWateringCanImage from "../../../../shared/assets/ChallengesImages/5/plant-watering-can.svg";
import TreeSeedlingImage from "../../../../shared/assets/ChallengesImages/5/tree-seedling.svg";
import { StyledContainer, StyledImageGroup, StyledWaterDrop } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { Functions } from "../../../../shared/functions";

interface ISecondStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export function SecondStep({ setStep }: ISecondStepProps) {
  const [touchInWateringCan, setTouchInWateringCan] = useState(false);

  const [isWatering, setIsWatering] = useState(false);

  const waterDrops = Array.from({ length: 5 }).map((_, i) => (
    <StyledWaterDrop key={i} delay={`${i * 0.5}s`} />
  ));

  const activeWateringAnimation = useCallback(async () => {
    await Functions.delay(0.5);

    setIsWatering(true);

    await Functions.delay(5);

    setStep((oldValue) => oldValue + 1);
  }, [setStep]);

  useEffect(() => {
    if (touchInWateringCan) {
      activeWateringAnimation();
    }
  }, [touchInWateringCan]);

  return (
    <StyledContainer>
      <ChallengeMessage>
        Agora, dê água à sua planta para que ela cresça forte e saudável.
        <br />
        <strong>Toque no regador:</strong>
      </ChallengeMessage>

      <StyledImageGroup>
        <img
          onClick={() => setTouchInWateringCan(true)}
          className={`plant-watering-can ${
            touchInWateringCan ? "plant-watering-can-animation" : ""
          }`}
          src={PlantWateringCanImage}
          alt="Plant watering can"
        />

        {isWatering && waterDrops}

        <img
          className={`tree-seedling ${
            isWatering ? "tree-seedling-animation" : ""
          }`}
          src={TreeSeedlingImage}
          alt="Tree seedling"
        />
      </StyledImageGroup>
    </StyledContainer>
  );
}
