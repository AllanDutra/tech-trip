import { useMemo } from "react";
import { Button, ChallengeMessage } from "../../../../shared/components";
import { StyledContainer } from "./styles";
import Tree1 from "../../../../shared/assets/ChallengesImages/5/tree1.svg";
import Tree2 from "../../../../shared/assets/ChallengesImages/5/tree2.svg";
import Tree3 from "../../../../shared/assets/ChallengesImages/5/tree3.svg";

type TSeedId = 1 | 2 | 3;

interface IThirdStepProps {
  selectedSeed: TSeedId;
}

export function ThirdStep({ selectedSeed }: IThirdStepProps) {
  const treeImage = useMemo(() => {
    if (selectedSeed === 1) return Tree1;

    if (selectedSeed === 2) return Tree2;

    if (selectedSeed === 3) return Tree3;

    return "";
  }, [selectedSeed]);

  return (
    <StyledContainer>
      <ChallengeMessage>
        Parabéns! Sua plantinha cresceu e se transformou em uma forte, saudável
        e bonita árvore!
      </ChallengeMessage>

      <img src={treeImage} alt="Tree" />

      {/* // TODO: CALL API HERE */}
      <Button color="green" text="AVANÇAR" />
    </StyledContainer>
  );
}
