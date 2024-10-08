import { ChallengeMessage } from "../../../../shared/components";
import Seeds1Image from "../../../../shared/assets/ChallengesImages/5/seeds1.svg";
import Seeds2Image from "../../../../shared/assets/ChallengesImages/5/seeds2.svg";
import Seeds3Image from "../../../../shared/assets/ChallengesImages/5/seeds3.svg";
import { StyledContainer, StyledSeedsGroup } from "./styles";
import { TSeedId } from "../..";
import { useCallback } from "react";

interface IFirstStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setSelectedSeed: React.Dispatch<React.SetStateAction<TSeedId | undefined>>;
}

export function FirstStep({ setStep, setSelectedSeed }: IFirstStepProps) {
  const handleSelectSeed = useCallback(
    (seedId: TSeedId) => {
      setSelectedSeed(seedId);

      setStep((oldValue) => oldValue + 1);
    },
    [setStep]
  );

  return (
    <StyledContainer>
      <ChallengeMessage>
        Vamos ajudar a mãe natureza cultivando uma plantinha!
        <br />
        <strong>Escolha uma semente:</strong>
      </ChallengeMessage>

      <StyledSeedsGroup>
        <img
          onClick={() => handleSelectSeed(1)}
          src={Seeds1Image}
          alt="seeds 1"
        />

        <div>
          <img
            onClick={() => handleSelectSeed(2)}
            src={Seeds2Image}
            alt="seeds 2"
          />
          <img
            onClick={() => handleSelectSeed(3)}
            src={Seeds3Image}
            alt="seeds 3"
          />
        </div>
      </StyledSeedsGroup>

      <div />
    </StyledContainer>
  );
}
