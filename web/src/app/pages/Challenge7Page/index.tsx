import { ChallengeMessage, Header } from "../../shared/components";
import { StyledMain } from "./styles";

export function Challenge7Page() {
    return <StyledMain>
        <Header.FullComponent currentLevel={7} totalLevels={15} />
        <ChallengeMessage>
        Vou te mostrar várias maneiras de representar sua cor favorita! Mas, antes, me diga: <strong>qual é a cor que você mais gosta?<strong/>
      </ChallengeMessage>
    </StyledMain>;
}