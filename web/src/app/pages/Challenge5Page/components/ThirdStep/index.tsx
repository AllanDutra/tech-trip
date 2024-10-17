import { useCallback, useMemo } from "react";
import { Button, ChallengeMessage } from "../../../../shared/components";
import { StyledContainer } from "./styles";
import Tree1 from "../../../../shared/assets/ChallengesImages/5/tree1.svg";
import Tree2 from "../../../../shared/assets/ChallengesImages/5/tree2.svg";
import Tree3 from "../../../../shared/assets/ChallengesImages/5/tree3.svg";
import { TSeedId } from "../..";
import { useChallengeCorrection } from "../../../../shared/hooks/useChallengeCorrection";

interface IThirdStepProps {
  selectedSeed?: TSeedId;
}

export function ThirdStep({ selectedSeed }: IThirdStepProps) {
  const { checkChallengeCorrection } = useChallengeCorrection();
  const handleVerify = useCallback(async () => {
    await checkChallengeCorrection({
      challenge_Id: 5,
      steps: 3,
      studentResponse: "",
    });
  }, [checkChallengeCorrection]);

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

      {treeImage ? <img src={treeImage} alt="Tree" /> : <div />}

      {/* // TODO: CALL API HERE */}

      <Button onClick={() => handleVerify()} color="green" text="AVANÇAR" />
    </StyledContainer>
  );
}
