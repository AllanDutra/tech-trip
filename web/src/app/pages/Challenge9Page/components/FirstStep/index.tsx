import { IOption } from "../..";
import { BinaryIndex } from "../../../../shared/assets";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
} from "../../../../shared/components";
import { ImageArea, Message, ResponseArea, StyledMain } from "../../styles";
import { useChallengeCorrection } from "../../../../shared/hooks/useChallengeCorrection";
import { useCallback } from "react";
import { toast } from "react-toastify";
interface IFirstStepProps {
  options: IOption[];
  setResponse: React.Dispatch<React.SetStateAction<string>>;
  response: string;
  setResult: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FirstStep = ({
  options,
  setResponse,
  response,
  setResult,
  setStep,
}: IFirstStepProps) => {
  const { checkChallengeCorrection } = useChallengeCorrection();

  const handleVerify = useCallback(async () => {
    if (response == null) {
      toast.warning("Selecione uma alternativa");
      return;
    }
    const result = await checkChallengeCorrection({
      challenge_Id: 9,
      steps: 1,
      studentResponse: response.toString(),
    }, false);

    setResult(result.challengeCompleted);

    console.log(result);

    setStep(2);
  }, [checkChallengeCorrection, response, setResult, setStep]);

  const challengeOptions = options.map((option) => ({
    content: option.content,
    selected: option.letter === response,
    onClick: () => {
      setResponse(option.letter);
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
          handleVerify();
        }}
      />
    </StyledMain>
  );
};
