import { useNavigate } from "react-router-dom";
import { Folder } from "../../../../shared/assets";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
} from "../../../../shared/components";
import { ImageArea, Message, ResponseArea, StyledMain } from "../../styles";
import { routeConfigs } from "../../../../shared/configs";

interface IThirdStepProps {
  setResponse: React.Dispatch<React.SetStateAction<number | null>>;
  response: number | null;
  handleConfirm: CallableFunction;
}

export const ThirdStep = ({
  setResponse,
  response,
  handleConfirm,
}: IThirdStepProps) => {
  const navigate = useNavigate();
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
      <ImageArea className='folder'>
        <Folder/>
      </ImageArea>
      <ResponseArea>
        <ChallengeResponse.FullComponent options={challengeOptions} />
      </ResponseArea>
      <Button
        onClick={() => {
          const result = true;
          const message =
            "Parabéns! Você acertou! Para armazenar arquivos e fotos no computador, devemos utilizar dispositivos de armazenamento, como o disco rígido ou pen drives.";
          if (handleConfirm(result, response, message)) {
            navigate(routeConfigs.Map);
          }
        }}
        text="Confirmar"
        color={"green"}
      />
    </StyledMain>
  );
};
