import { Folder } from "../../../../shared/assets";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
} from "../../../../shared/components";
import { IOption } from "../../../Challenge9Page";
import { ImageArea, Message, ResponseArea, StyledMain } from "../../styles";

interface ISecondStepProps {
  setResponse: React.Dispatch<React.SetStateAction<number>>;
  response: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleConfirm: CallableFunction;
}

export const ThirdStep = ({
  setResponse,
  response,
  setStep,
  handleConfirm,
}: ISecondStepProps) => {
  const options: IOption[] = [
    { id: 1, content: "Monitor ou Processador" },
    { id: 2, content: "Disco Rigído (HD) ou Pen Drive" },
    { id: 3, content: "Câmera ou Mouse" },
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
      <Message>
        <ChallengeMessage
          children={
            <>
              Por fim, Tina quer saber{" "}
              <strong>
                onde pode guardar seus arquivos e fotos no computador?
              </strong>
            </>
          }
        />
      </Message>
      <ImageArea>
        <Folder />
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
