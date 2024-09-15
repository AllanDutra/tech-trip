import {
  Button,
  DoubleSelection,
  ChallengeMessage,
  ContainedInput,
  Header,
} from "../../shared/components";
import {
  ButtonsArea,
  MainContainer,
  StyledMain,
  ChallengeInputContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../shared/configs";
import { useState } from "react";

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

const [play, setPlay] = useState<"yes" | "no">("no");

const handleLikeToPlay = (response: "yes" | "no") => {
  setPlay(response);
};

export const Challenge8Page = () => {
  const navigate = useNavigate();
  return (
    <StyledMain>
      <Header.FullComponent currentLevel={8} totalLevels={15} />

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
      </MainContainer>
      <Button
        color="green"
        text="Confirmar"
        onClick={() => {
          navigate(routeConfigs.Challenge8_2);
        }}
      />
    </StyledMain>
  );
};
