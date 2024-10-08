import { ChallengeMessage } from "../../../../shared/components";
import { BoxColor, BoxesContainer, StyledMain } from "../../styles";

export function FirstStep({ setStep, setSelectedColor, colors }) {
  const handleColorClick = (color) => {
    setSelectedColor(color);
    setStep(2);
  };

  return (
    <StyledMain>
      <ChallengeMessage>
        <>
          Vou te mostrar várias maneiras de representar sua cor favorita! Mas,
          antes, me diga: <strong>qual é a cor que você mais gosta?</strong>
        </>
      </ChallengeMessage>
      <BoxesContainer>
        {colors.map((color) => (
          <BoxColor
            key={color}
            color={color}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </BoxesContainer>
    </StyledMain>
  );
}
