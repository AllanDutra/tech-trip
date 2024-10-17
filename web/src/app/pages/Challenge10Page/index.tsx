// import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
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
import { useCallback, useState } from "react";
import { useChallengeCorrection } from "../../shared/hooks/useChallengeCorrection";

export const Challenge10Page = () => {
  const { checkChallengeCorrection } = useChallengeCorrection();
  const [response, setResponse] = useState<string>("");

  const options = [
    { letter: "A", content: "Acreditar na notícia de imediato" },
    { letter: "B", content: "Procurar a notícia em sites confiáveis" },
    { letter: "C", content: "Ver se os amigos já ouviram falar disso" },
  ];

  const challengeOptions = options.map((option) => ({
    content: option.content,
    selected: option.letter === response,
    onClick: () => {
      setResponse(option.letter);
    },
  }));

  const handleVerify = useCallback(async () => {
    if (response == "") {
      toast.warning("Selecione uma alternativa");
      return;
    }

    await checkChallengeCorrection({
      challenge_Id: 10,
      steps: 1,
      studentResponse: response,
    });
  }, [checkChallengeCorrection, response]);

  return (
    <ChallengePageContainer
      currentLevel={10}
      children={
        <>
          <StyledMain>
            {/* <ToastContainer /> */}
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
                handleVerify();
              }}
            />
          </StyledMain>
        </>
      }
    />
  );
};
