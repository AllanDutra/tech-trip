import { Button, ChallengeMessage } from "../../shared/components";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import {
  StyledButtonGroup,
  StyledContainer,
  StyledImageContainer,
} from "./styles";
import ElephantImage from "../../shared/assets/ChallengesImages/elephant.svg";

export function Challenge4Page() {
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
          {/* // TODO: IMPLEMENT ROUTINE TO SEND MESSAGE FOR API HERE */}
          <Button color="green" text="VERDADEIRA" />

          <Button color="red" text="FALSA" />
        </StyledButtonGroup>
      </StyledContainer>
    </ChallengePageContainer>
  );
}
