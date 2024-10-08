import { IOption } from "../..";
import { BinaryIndex } from "../../../../shared/assets";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
  ToastWarning,
} from "../../../../shared/components";
import { ImageArea, Message, ResponseArea, StyledMain } from "../../styles";

interface IFirstStepProps {
  options: IOption[];
  setResponse: React.Dispatch<React.SetStateAction<number | null>>;
  response: number | null;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FirstStep = ({
  options,
  setResponse,
  response,
  setStep,
}: IFirstStepProps) => {
  const challengeOptions = options.map((option, index) => ({
    content: option.content,
    selected: index === response,
    onClick: () => {
      setResponse(index);
    },
  }));

  return (
    <StyledMain>
      <Message>
        <ChallengeMessage
          children={
            <>
              <strong>Maria</strong> quer dizer <strong>"Oi"</strong> ao robô{" "}
              <strong>Rob</strong>, mas deve falar em código binário, a
              linguagem que Rob entende. Ajude <strong>Maria</strong> a
              codificar a mensagem com a tabela abaixo:
            </>
          }
        />
      </Message>
      <ImageArea>
        <BinaryIndex />
      </ImageArea>
      <ResponseArea>
        <ChallengeResponse.FullComponent
          size="large"
          options={challengeOptions}
        />
      </ResponseArea>
      <Button
        text="Confirmar"
        color="green"
        onClick={() => {
          if (response == null) {
            ToastWarning({
              message: "Selecione uma alternativa",
              positionProp: "top-right",
            });
            return;
          }
          setStep(2);
        }}
      />
    </StyledMain>
  );
};
