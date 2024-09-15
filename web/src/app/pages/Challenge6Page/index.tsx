import { ChallengeMessage } from "../../shared/components";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { NoughtAndCrosses } from "./components/NoughtsAndCrosses";
import { StyledContainer, StyledMessageGroup } from "./styles";

export function Challenge6Page() {
  return (
    <ChallengePageContainer currentLevel={6}>
      <StyledContainer>
        <StyledMessageGroup>
          <ChallengeMessage>
            Vamos brincar de jogo da velha usando uma matriz de 2 dimensões!{" "}
          </ChallengeMessage>

          <ChallengeMessage>
            Você ficará com a bolinha{" "}
            <strong>
              (<span className="noughts">O</span>)
            </strong>{" "}
            e eu com o xis{" "}
            <strong>
              (<span className="crosses">X</span>). Pode começar a jogar!
            </strong>
          </ChallengeMessage>
        </StyledMessageGroup>

        <NoughtAndCrosses />
      </StyledContainer>
    </ChallengePageContainer>
  );
}
