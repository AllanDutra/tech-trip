import { CaretCircleDoubleDown } from "@phosphor-icons/react";
import {
  Header,
  ChallengeMessage,
  ContainedInput,
  Button
} from "../../../../shared/components";
import { StyledMain, MainContainer, StyledLabel, ButtonsArea } from "../../styles";

export const Challenge8Stage2 = () => {
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
        <ContainedInput.FullComponent
          label="Seu nome"
          Icon={CaretCircleDoubleDown}
        />
        <ContainedInput.FullComponent
          label="Sua idade"
          Icon={CaretCircleDoubleDown}
        />
        <StyledLabel>Você gosta de brincar?</StyledLabel>
        <ButtonsArea>
          <Button color="green" text="Sim" />
          <Button color="red" text="Não" />
        </ButtonsArea>
      </MainContainer>
      <Button color="green" text="Confirmar" />
    </StyledMain>
  );
};
