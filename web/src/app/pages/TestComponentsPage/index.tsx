import { CaretUp, UserCircle } from "@phosphor-icons/react";
import {
  Button,
  Character,
  ContainedInput,
  UnderlinedInput,
} from "../../shared/components";
import { StyledMain } from "./styles";

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
    </StyledMain>
  );
}
