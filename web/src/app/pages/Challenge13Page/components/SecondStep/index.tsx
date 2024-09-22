import { ToastContainer } from "react-toastify";
import { ComputerComponents } from "../../../../shared/assets";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
} from "../../../../shared/components";
import { IOption } from "../../../Challenge9Page";
import { ImageArea, MessageArea, ResponseArea, StyledMain } from "../../styles";

interface ISecondStepProps {
  setResponse: React.Dispatch<React.SetStateAction<number>>;
  response: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleConfirm: CallableFunction;
}

export const SecondStep = ({
  setResponse,
  response,
  setStep,
  handleConfirm,
}: ISecondStepProps) => {
  const options: IOption[] = [
    { id: 1, content: "Impressora ou roteador" },
    { id: 2, content: "Fones de ouvido ou alto-falantes" },
    { id: 3, content: "Microfone ou teclado" },
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
              E se Tina quiser <strong>ouvir uma música</strong> no computador,{" "}
              <strong>qual dispositivo ela deve utilizar</strong>?
            </>
          }
        />
      </MessageArea>
      <ImageArea>
        <ComputerComponents />
      </ImageArea>
      <ResponseArea>
        <ChallengeResponse.FullComponent options={challengeOptions} />
      </ResponseArea>
      <Button
        onClick={() => {
          const result = true;
          const message =
            "Parabéns! Você acertou! Para ouvir música no computador, os dispositivo ideais são realmente os fones de ouvido ou alto-falantes. Excelente escolha para garantir uma ótima experiência musical para Tina!";
          if (handleConfirm(result, response, message)) {
            setStep(3);
          }
        }}
        text="Confirmar"
        color={"green"}
      />
    </StyledMain>
  );
};
