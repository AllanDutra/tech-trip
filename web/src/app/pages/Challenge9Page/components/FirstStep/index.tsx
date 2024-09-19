import { IOption } from "../..";
import { BinaryIndex } from "../../../../shared/assets";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
  ToastWarning,
} from "../../../../shared/components";
import {
  ButtonArea,
  ImageArea,
  Message,
  ResponseArea,
  StyledMain,
} from "../../styles";

interface IFirstStepProps {
  options: IOption[];
  setResponse: React.Dispatch<React.SetStateAction<number>>;
  response: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FirstStep = ({
  options,
  setResponse,
  response,
  setStep,
}: IFirstStepProps) => {
  const challengeOptions = options.map((option) => ({
    id: option.id,
    content: option.content,
    selected: option.id === response,
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
          onClickOption={(id: number) => {
            setResponse(id + 1);
          }}
        />
      </ResponseArea>
      <Button
        text="Confirmar"
        color="green"
        onClick={() => {
          if (response === 0) {
            <ToastWarning
              message="Selecione uma alternativa"
              positionProp="top-right"
            />;
            return;
          }
          setStep(2);
        }}
      />
    </StyledMain>
  );
};
