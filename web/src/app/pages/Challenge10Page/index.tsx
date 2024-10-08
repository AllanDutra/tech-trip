import { ToastContainer } from "react-toastify";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../shared/components";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import {
  ImageArea,
  MessageArea,
  ResponseArea,
  StatementContainer,
  StyledMain,
} from "./styles";
import { Investigator } from "../../shared/assets";
import { useState } from "react";

export const Challenge10Page = () => {
  const [response, setResponse] = useState<number>();

  const options = [
    { content: "Acreditar na notícia de imediato" },
    { content: "Procurar a notícia em sites confiáveis" },
    { content: "Ver se os amigos já ouviram falar disso" },
  ];

  const challengeOptions = options.map((option, index) => ({
    content: option.content,
    selected: index === response,
    onClick: () => {
      setResponse(index);
    },
  }));

  const handleConfirm = (result: boolean) => {
    if (response == undefined) {
      ToastWarning({
        message: "Selecione uma alternativa",
        positionProp: "top-right",
      });
      return;
    }

    if (result == true) {
      ToastSuccess({
        message:
          "Parabéns! Buscar informações em fontes confiáveis é sempre a melhor escolha ao se deparar com uma notícia.",
        positionProp: "top-right",
      });
    } else {
      ToastError({
        message: "Ops! Tente novamente.",
        positionProp: "top-right",
      });
    }
  };

  return (
    <ChallengePageContainer
      currentLevel={10}
      children={
        <>
          <StyledMain>
            <ToastContainer />
            <StatementContainer>
              {" "}
              <MessageArea>
                <div>
                  <ChallengeMessage
                    children={
                      <>
                        Às vezes, quando vemos algo na internet, não sabemos se
                        é verdade ou não. Como saber se uma notícia é real?
                        Vamos aprender com o <strong>Investigador Info!</strong>
                      </>
                    }
                  />
                  <ImageArea className="mobileVisible">
                    <Investigator />
                  </ImageArea>
                </div>
                <ChallengeMessage
                  children={
                    <>
                      <strong>Info</strong> encontrou uma notícia incrível
                      dizendo que um cachorro foi para a lua!{" "}
                    </>
                  }
                />
                <ChallengeMessage
                  children={
                    <>
                      <strong>
                        O que ele deve fazer para verificar se isso é verdade?
                      </strong>
                    </>
                  }
                />
              </MessageArea>
              <ImageArea className="desktopVisible">
                <Investigator />
              </ImageArea>
            </StatementContainer>
            <ResponseArea>
              <ChallengeResponse.FullComponent
                size="large"
                options={challengeOptions}
              />
            </ResponseArea>
            <Button
              color={"green"}
              text="Confirmar"
              onClick={() => {
                const result = true;
                handleConfirm(result);
              }}
            />
          </StyledMain>
        </>
      }
    />
  );
};
