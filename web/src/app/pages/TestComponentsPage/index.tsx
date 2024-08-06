import { CaretUp, UserCircle } from "@phosphor-icons/react";
import {
  Button,
  Character,
  ContainedInput,
  DoubleSelection,
  NavBar,
  PreferenceButton,
  SecondaryButton,
  UnderlinedInput,
} from "../../shared/components";
import { StyledMain } from "./styles";
import { Title } from "../../shared/components/Title";
import { Header } from "../../shared/components/Header";

export function TestComponentsPage() {
  return (
    <StyledMain>
      <h2>Contained Input</h2>

      <ContainedInput.FullComponent
        label="Nome"
        Icon={UserCircle}
        placeholder="Digite seu nome aqui..."
      />

      <h2>Underlined Input</h2>

      <UnderlinedInput.FullComponent
        label="Nome"
        Icon={UserCircle}
        placeholder="Digite seu nome aqui..."
        value="Oliver da Silva Pereira"
      />

      <h2>Character</h2>

      <Character.FullComponent size="medium" number={1} />

      <h2>Button</h2>

      <Button color="green" text="Registrar" />
      <Button color="green">
        <CaretUp />
      </Button>
      <Button color="red" text="Falsa" />
      <Button color="yellow" text="Continuar" />
      <Button color="blue" text="Continuar" />

      <h2>Double Selection</h2>

      <DoubleSelection.FullComponent variant="gender" selected="female" />
      <DoubleSelection.FullComponent variant="gender" selected="male" />
      <DoubleSelection.FullComponent variant="yes-or-no" selected="no" />
      <DoubleSelection.FullComponent variant="yes-or-no" selected="yes" />

      <h2>Secondary Button</h2>

      <SecondaryButton title="Já tenho uma conta" />
      <SecondaryButton title="Primeiro acesso" />

      <h2>Preference Button</h2>

      <PreferenceButton variant="sound" active />
      <PreferenceButton variant="vibration" />

      <NavBar.FullComponent />

      <h2>Title</h2>

      <Title value="TECH KIDs" />

      <h2>Header</h2>

      <Header.FullComponent currentLevel={6} totalLevels={15} />
    </StyledMain>
  );
}
