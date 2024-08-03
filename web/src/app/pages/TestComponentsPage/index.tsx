import { UserCircle } from "@phosphor-icons/react";
import { ContainedInput, UnderlinedInput } from "../../shared/components";
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
    </StyledMain>
  );
}
