import { GearSix, Star } from "@phosphor-icons/react/dist/ssr";
import { ProgressBar } from "../../shared/components/ProgressBar";
import {
  Header,
  StyledMain,
  ProgressContainer,
  Greetings,
  ActionHeader,
  StyledLabel,
  Indicator,
  List,
  IndicatorContent,
} from "./styles";
import { NavBar } from "../../shared/components";

export const ResumePage = () => {
  const star_total = 6;
  const diamond_total = 3;

  return (
    <StyledMain>
      <Header>
        <ProgressContainer>
          <ProgressBar progress={75} />
        </ProgressContainer>
        <Greetings>
          Olá, Pequeno
          <span>Oliver</span>
        </Greetings>
        <ActionHeader>
          <GearSix weight="fill" size={32} />
        </ActionHeader>
      </Header>

      <StyledLabel>Minha pontuação</StyledLabel>

      <Indicator>
        <span>Total de estrelas</span>
        <IndicatorContent color="#FFA425">
          <Star size={26} color={"#FFA425"} weight="fill"/> {star_total}
        </IndicatorContent>
      </Indicator>
      <Indicator></Indicator>

      <StyledLabel>Resumo</StyledLabel>

      <List>{}</List>
      <NavBar.FullComponent />
    </StyledMain>
  );
};
