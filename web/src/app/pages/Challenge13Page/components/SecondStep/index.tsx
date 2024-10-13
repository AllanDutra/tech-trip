// import { ToastContainer } from "react-toastify";
import { ComputerComponents } from "../../../../shared/assets";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
} from "../../../../shared/components";
import { ImageArea, MessageArea, ResponseArea, StyledMain } from "../../styles";

interface ISecondStepProps {
  setResponse: React.Dispatch<React.SetStateAction<number | null>>;
  response: number | null;
  onConfirm(): Promise<void>;
}

export const SecondStep = ({
  setResponse,
  response,
  onConfirm,
}: ISecondStepProps) => {
  const options = [
    { content: "Impressora ou roteador" },
    { content: "Fones de ouvido ou alto-falantes" },
    { content: "Microfone ou teclado" },
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
              E se Tina quiser <strong>ouvir uma música</strong> no computador,{" "}
              <strong>qual dispositivo ela deve utilizar</strong>?
            </>
          }
        />
      </MessageArea>
      <ImageArea className="computerComponents">
        <ComputerComponents />
      </ImageArea>
      <ResponseArea>
        <ChallengeResponse.FullComponent options={challengeOptions} />
      </ResponseArea>

      <Button onClick={onConfirm} text="Confirmar" color={"green"} />
    </StyledMain>
  );
};
