import { ToastContainer } from "react-toastify";
import { OfficeObjects } from "../../../../shared/assets";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
} from "../../../../shared/components";
import { IOption } from "../../../Challenge9Page";
import { ImageArea, Message, MessageArea, ResponseArea, StyledMain } from "../../styles";

interface IFirstStepProps {
  setResponse: React.Dispatch<React.SetStateAction<number>>;
  response: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleConfirm: CallableFunction;
}

export const FirstStep = ({
  setResponse,
  response,
  setStep,
  handleConfirm,
}: IFirstStepProps) => {
  const options: IOption[] = [
    { id: 1, content: "Teclado" },
    { id: 2, content: "Mouse" },
    { id: 3, content: "Câmera" },
  ];
  const challengeOptions = options.map((option) => ({
    id: option.id,
    content: option.content,
    selected: option.id === response,
    onClick: (id: number) => {
      setResponse(id);
    },
  }));

  return (
    <StyledMain>
      <ToastContainer />
      <MessageArea>
        <ChallengeMessage
          children={
            <>
              Tina quer montar um computador e precisa da sua ajuda. Diga a ela
              <strong>
                {" "}
                qual destes dispositivos usamos para digitar um texto no
                computador?
              </strong>
            </>
          }
        />
      </MessageArea>
      <ImageArea>
        <OfficeObjects />
      </ImageArea>
      <ResponseArea>
        <ChallengeResponse.FullComponent options={challengeOptions} />
      </ResponseArea>
      <Button
        onClick={() => {
          setStep(2);
          /*const result = true;
          setResponse(1);
          const message =
            "Parabéns! Buscar informações em fontes confiáveis é sempre a melhor escolha ao se deparar com uma notícia.";
          if (handleConfirm(result, response, message)) {
          }*/
        }}
        text="Confirmar"
        color={"green"}
      />
    </StyledMain>
  );
};
