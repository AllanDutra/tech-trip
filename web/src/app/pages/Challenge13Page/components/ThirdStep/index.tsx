import { Folder } from "../../../../shared/assets";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
} from "../../../../shared/components";
import { ImageArea, Message, ResponseArea, StyledMain } from "../../styles";

interface IThirdStepProps {
  setResponse: React.Dispatch<React.SetStateAction<number | null>>;
  response: number | null;
  onConfirm(): Promise<void>;
}

export const ThirdStep = ({
  setResponse,
  response,
  onConfirm,
}: IThirdStepProps) => {
  const options = [
    { content: "Monitor ou Processador" },
    { content: "Disco Rigído (HD) ou Pen Drive" },
    { content: "Câmera ou Mouse" },
  ];
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
              Por fim, Tina quer saber{" "}
              <strong>
                onde pode guardar seus arquivos e fotos no computador?
              </strong>
            </>
          }
        />
      </Message>
      <ImageArea className="folder">
        <Folder />
      </ImageArea>
      <ResponseArea>
        <ChallengeResponse.FullComponent options={challengeOptions} />
      </ResponseArea>
      <Button onClick={onConfirm} text="Confirmar" color={"green"} />
    </StyledMain>
  );
};
