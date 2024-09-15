import { Cake, UserCircle } from "@phosphor-icons/react";
import {
  Button,
  DoubleSelection,
  ChallengeMessage,
  ContainedInput,
  Header,
} from "../../shared/components";
import { ButtonsArea, MainContainer, StyledLabel, StyledMain } from "./styles";
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../shared/configs";

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
        <ContainedInput.FullComponent
          readOnly
          label="Seu nome"
          Icon={UserCircle}
        />
        <ContainedInput.FullComponent readOnly label="Sua idade" Icon={Cake} />
        <StyledLabel>Você gosta de brincar?</StyledLabel>
        <ButtonsArea>
          <DoubleSelection.FullComponent variant="yes-or-no" selected="yes" />
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
