import {
  Button,
  DoubleSelection,
  ChallengeMessage,
  ContainedInput,
  TSelectionVariant,
} from "../../../../shared/components";
import {
  ButtonsArea,
  MainContainer,
  StyledMain,
  ChallengeInputContainer,
} from "../../styles";

interface IChallengeInputProps {
  label: string;
}

const ChallengeInput = ({ label }: IChallengeInputProps) => {
  return (
    <ChallengeInputContainer>
      <ContainedInput.Label value={label} />
      <ContainedInput.InputContainer>
        <ContainedInput.Input disabled></ContainedInput.Input>
      </ContainedInput.InputContainer>
    </ChallengeInputContainer>
  );
};

interface IFirstStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  play: TSelectionVariant;
  setPlay: React.Dispatch<React.SetStateAction<TSelectionVariant>>;
}

export const FirstStep = ({ setStep, play, setPlay }: IFirstStepProps) => {
  const handleLikeToPlay = (response: "yes" | "no") => {
    setPlay(response);
  };

  return (
    <StyledMain>
      <MainContainer>
        {" "}
        <ChallengeMessage
          children={
            <>
              Você sabia que os <strong>dados</strong> podem ter{" "}
              <strong>diferentes tipos</strong>? Vou lhe mostrar isso, mas
              antes, confirme as informações:
            </>
          }
        />
        {ChallengeInput({ label: "Seu nome" })}
        {ChallengeInput({ label: "Sua idade" })}
        <ContainedInput.Label value={"Você gosta de brincar?"} />
        <ButtonsArea>
          <DoubleSelection.FullComponent
            onClick={(e) => {
              const value = (e.target as HTMLButtonElement).textContent;
              if (value === "Sim") {
                handleLikeToPlay("yes");
              } else if (value === "Não") {
                handleLikeToPlay("no");
              }
            }}
            variant="yes-or-no"
            selected={play}
          />
        </ButtonsArea>
      <Button
        color="green"
        text="Confirmar"
        onClick={() => {
          setStep(2);
        }}
      />
      </MainContainer>
    </StyledMain>
  );
};
