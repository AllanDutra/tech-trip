import { useNavigate } from "react-router-dom";
import { ChallengeMessage, Header } from "../../shared/components";
import { BoxColor, BoxesContainer, StyledMain } from "./styles";
import { useState } from "react";
import { routeConfigs } from "../../shared/configs";

export function Challenge7Page() {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    navigate(routeConfigs.Challenge7_2, { state: { color } });
  };

  return (
    <StyledMain>
      <Header.FullComponent currentLevel={7} totalLevels={15} />
      <ChallengeMessage
        children={
          <>
            Vou te mostrar várias maneiras de representar sua cor favorita! Mas,
            antes, me diga: <strong>qual é a cor que você mais gosta?</strong>
          </>
        }
      />
      <BoxesContainer>
        <BoxColor color="#FE0000" onClick={() => handleColorClick("#FE0000")} />
        <BoxColor color="#EE7326" onClick={() => handleColorClick("#EE7326")} />
        <BoxColor color="#FFFF00" onClick={() => handleColorClick("#FFFF00")} />
        <BoxColor color="#009045" onClick={() => handleColorClick("#009045")} />
        <BoxColor color="#3C51A4" onClick={() => handleColorClick("#3C51A4")} />
        <BoxColor color="#9743A5" onClick={() => handleColorClick("#9743A5")} />
        <BoxColor color="#FF52D8" onClick={() => handleColorClick("#FF52D8")} />
        <BoxColor color="#534B40" onClick={() => handleColorClick("#534B40")} />
        <BoxColor color="#000000" onClick={() => handleColorClick("#000000")} />
      </BoxesContainer>
    </StyledMain>
  );
}
