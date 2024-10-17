import { useCallback, useState } from "react";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
} from "../../shared/components";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import {
  ButtonArea,
  ImageArea,
  Message,
  ResponseArea,
  StyledMain,
} from "./styles";
import { Bruna } from "../../shared/assets";
import { useChallengeCorrection } from "../../shared/hooks/useChallengeCorrection";
export const Challenge15Page = () => {
  const [response, setResponse] = useState<string>("");
  const { checkChallengeCorrection } = useChallengeCorrection();

  interface IOption {
    text: string;
    content: string;
    letter: string;
  }
  const options: IOption[] = [
    {
      letter: "A",
      text: "Computador: ",
      content: "Escrever e imprimir convites em papel.",
    },
    {
      letter: "B",
      text: "Celular: ",
      content: "Enviar mensagens de texto ou um e-mail.",
    },
    {
      letter: "C",
      text: "Tablet: ",
      content: "Fazer um vídeo convite e enviar para os amigos.",
    },
  ];

  const handleVerify = useCallback(async () => {
    await checkChallengeCorrection({
      challenge_Id: 15,
      steps: 1,
      studentResponse: response,
    });
  }, [checkChallengeCorrection, response]);

  const challengeOptions = options.map((option) => ({
    content: option.text + option.content,
    selected: option.letter === response,
    onClick: () => {
      setResponse(option.letter);
    },
  }));

  return (
    <ChallengePageContainer
      currentLevel={15}
      children={
        <>
          <StyledMain>
            <Message>
              <ChallengeMessage
                children={
                  <>
                    Bruna vai fazer uma festa e precisa enviar convites para
                    todos os amigos.{" "}
                    <strong>
                      Qual tecnologia seria melhor para enviar convites
                      rapidamente?
                    </strong>
                  </>
                }
              />
            </Message>
            <ImageArea>
              <Bruna />
            </ImageArea>
            <ResponseArea>
              <ChallengeResponse.FullComponent
                options={challengeOptions}
                size="large"
              />
            </ResponseArea>
            <ButtonArea>
              <Button
                text="Confirmar"
                color="green"
                onClick={() => {
                  handleVerify();
                }}
              />
            </ButtonArea>
          </StyledMain>
        </>
      }
    />
  );
};
