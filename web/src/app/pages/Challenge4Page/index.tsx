import { Button, ChallengeMessage } from "../../shared/components";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import {
  StyledButtonGroup,
  StyledContainer,
  StyledImageContainer,
} from "./styles";
import ElephantImage from "../../shared/assets/ChallengesImages/4/elephant.svg";
import { useCallback } from "react";
import { useChallengeCorrection } from "../../shared/hooks/useChallengeCorrection";

export function Challenge4Page() {
  const { checkChallengeCorrection } = useChallengeCorrection();

  const handleVerify = useCallback(async (answer: number) => {
    await checkChallengeCorrection({
      challenge_Id: 4,
      steps: 1,
      studentResponse: answer.toString(),
    });
  }, [checkChallengeCorrection]);

  return (
    <ChallengePageContainer currentLevel={4}>
      <StyledContainer>
        <ChallengeMessage>
          Com base na imagem abaixo, classifique a <strong>frase</strong> a
          seguir como verdadeira ou falsa
        </ChallengeMessage>

        <StyledImageContainer>
          <img src={ElephantImage} alt="elephant" />

          <strong>“Elefantes têm a pele vermelha”</strong>
        </StyledImageContainer>

        <StyledButtonGroup>
          <Button
            onClick={() => handleVerify(1)}
            color="green"
            text="VERDADEIRA"
          />

          <Button onClick={() => handleVerify(0)} color="red" text="FALSA" />
        </StyledButtonGroup>
      </StyledContainer>
    </ChallengePageContainer>
  );
}
