import { useNavigate } from "react-router-dom";
import { HappyRob, SadRob } from "../../../../shared/assets";
import { Button, ChallengeMessage } from "../../../../shared/components";
import { routeConfigs } from "../../../../shared/configs";
import { ButtonsArea, ImageRobbot, Message, StyledMain } from "../../styles";

interface ISecondStepProps {
  result: boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export function SecondStep({ result, setStep }: ISecondStepProps) {
  const navigate = useNavigate();

  return (
    <StyledMain>
      <Message>
        <ChallengeMessage
          children={
            <>
              {result && (
                <>
                  Parabéns! Você informou o código corretamente e{" "}
                  <strong>Rob</strong> conseguiu entender a mensagem.
                </>
              )}
              {!result && (
                <>
                  Ah, não! Você informou o código incorretamente e{" "}
                  <strong>Rob</strong> não entendeu a mensagem.
                </>
              )}
            </>
          }
        />
      </Message>

      <ImageRobbot>
        {result && <HappyRob />}
        {!result && <SadRob />}
      </ImageRobbot>

      <ButtonsArea>
        {result && (
          <Button
            color="green"
            text="Avançar"
            onClick={() => navigate(routeConfigs.Challenge10)}
          />
        )}
        {!result && (
          <Button
            color="red"
            text="Tentar novamente"
            onClick={() => setStep(1)}
          />
        )}
      </ButtonsArea>
    </StyledMain>
  );
}
