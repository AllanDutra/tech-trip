import { ChallengeMessage } from "../../../../shared/components";
import Seeds1Image from "../../../../shared/assets/ChallengesImages/5/seeds1.svg";
import Seeds2Image from "../../../../shared/assets/ChallengesImages/5/seeds2.svg";
import Seeds3Image from "../../../../shared/assets/ChallengesImages/5/seeds3.svg";
import { StyledContainer, StyledSeedsGroup } from "./styles";

export function FirstStep() {
  return (
    <StyledContainer>
      <ChallengeMessage>
        Vamos ajudar a mãe natureza cultivando uma plantinha!
        <br />
        <strong>Escolha uma semente:</strong>
      </ChallengeMessage>

      <StyledSeedsGroup>
        <img src={Seeds1Image} alt="seeds 1" />

        <div>
          <img src={Seeds2Image} alt="seeds 2" />
          <img src={Seeds3Image} alt="seeds 3" />
        </div>
      </StyledSeedsGroup>

      <div />
    </StyledContainer>
  );
}
