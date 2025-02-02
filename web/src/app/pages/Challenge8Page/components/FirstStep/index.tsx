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
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const ChallengeInput = ({ label, value, onChange }: IChallengeInputProps) => {
  return (
    <ChallengeInputContainer>
      <ContainedInput.Label value={label} />
      <ContainedInput.InputContainer>
        <ContainedInput.Input
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={value}
        ></ContainedInput.Input>
      </ContainedInput.InputContainer>
    </ChallengeInputContainer>
  );
};

interface IFirstStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  play: TSelectionVariant;
  setPlay: React.Dispatch<React.SetStateAction<TSelectionVariant>>;
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const FirstStep = ({
  setStep,
  play,
  setPlay,
  age,
  setAge,
  name,
  setName,
}: IFirstStepProps) => {
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
        {ChallengeInput({
          label: "Seu nome",
          value: name,
          onChange: setName,
        })}
        {ChallengeInput({ label: "Sua idade", value: age, onChange: setAge })}
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
