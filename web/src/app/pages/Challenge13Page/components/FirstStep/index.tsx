// import { ToastContainer } from "react-toastify";
import { OfficeObjects } from "../../../../shared/assets";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
} from "../../../../shared/components";
import { ImageArea, MessageArea, ResponseArea, StyledMain } from "../../styles";

interface IFirstStepProps {
  setResponse: React.Dispatch<React.SetStateAction<number | null>>;
  response: number | null;
  onConfirm(): Promise<void>;
}

export const FirstStep = ({
  setResponse,
  response,
  onConfirm,
}: IFirstStepProps) => {
  const options = [
    { content: "Teclado" },
    { content: "Mouse" },
    { content: "Câmera" },
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
      {/* <ToastContainer /> */}
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
      <ImageArea className="officeObjects">
        <OfficeObjects />
      </ImageArea>

      <ResponseArea>
        <ChallengeResponse.FullComponent
          options={challengeOptions}
          size="large"
        />
      </ResponseArea>

      <Button onClick={onConfirm} text="Confirmar" color={"green"} />
    </StyledMain>
  );
};
