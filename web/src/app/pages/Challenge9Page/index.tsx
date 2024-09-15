import { BinaryIndex } from "../../shared/assets";
import { ChallengeMessage, ChallengeResponse, Header } from "../../shared/components";
import { ImageArea, StyledMain } from "./styles";

export const Challenge9Page = () => {
  return (
    <StyledMain>
      <Header.FullComponent currentLevel={9} totalLevels={15} />

      <ChallengeMessage
        children={
          <>
            <strong>Maria</strong> quer dizer <strong>"Oi"</strong> ao robô{" "}
            <strong>Rob</strong>, mas deve falar em código binário, a linguagem
            que Rob entende. Ajude <strong>Maria</strong> a codificar a mensagem
            com a tabela abaixo:
          </>
        }
      />
      <ImageArea>
        <BinaryIndex />
      </ImageArea>

      {/* <ChallengeResponse.FullCo */}
    </StyledMain>
  );
};
