import { ChallengeMessage } from "../../shared/components";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { ControlButtons } from "./components/ControlButtons";
import { Maze } from "./components/Maze";
import { StyledChallengeContainer, StyledContainer } from "./styles";

export function Challenge2Page() {
  return (
    <ChallengePageContainer currentLevel={2}>
      <StyledContainer>
        <StyledChallengeContainer>
          <ChallengeMessage>
            Gabriel perdeu seu sapato no labirinto. Ajude-o a encontrá-lo!
          </ChallengeMessage>

          <Maze />

          <ControlButtons />
        </StyledChallengeContainer>
      </StyledContainer>
    </ChallengePageContainer>
  );
}
