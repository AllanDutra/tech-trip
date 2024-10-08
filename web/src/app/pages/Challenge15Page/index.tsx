import { useState } from "react";
import { Button, ChallengeMessage, ChallengeResponse } from "../../shared/components";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { ImageArea, Message, ResponseArea, StyledMain } from "./styles";
import { Bruna } from "../../shared/assets";

export const Challenge15Page = () => {
  const [response, setResponse] = useState<number>();

  interface IOption {
    text: string;
    content: string;
  }
  const options: IOption[] = [
    { text: "Computador: ", content: "Escrever e imprimir convites em papel." },
    { text: "Celular: ", content: "Enviar mensagens de texto ou um e-mail." },
    {
      text: "Tablet: ",
      content: "Fazer um vídeo convite e enviar para os amigos.",
    },
  ];

  const challengeOptions = options.map((option, index) => ({
    content: option.content,
    text: option.text,
    selected: index === response,
    onClick: () => {
      setResponse(index);
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
            <Button text="Confirmar" color="green" onClick={() => {

            }}/>
          </StyledMain>
        </>
      }
    />
  );
};
