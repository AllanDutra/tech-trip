import { ReactNode, useMemo } from "react";
import { CharactersImages } from "../../assets";
import { StyledContainer } from "./styles";

type TCharacterSize = "small" | "medium";

interface IContainerProps {
  children: ReactNode;
  size?: TCharacterSize;
  withShadow?: boolean;
  gray?: boolean;
}

interface ICharacterSvgProps {
  number: number;
}

interface IFullComponentProps {
  number: number;
  size?: TCharacterSize;
  withShadow?: boolean;
  gray?: boolean;
}

function Container({
  children,
  size = "small",
  withShadow = false,
  gray = false,
}: IContainerProps) {
  const sizeAsEM = useMemo(
    () => (size === "medium" ? "3.75em" : "3.25em"),
    [size]
  );

  return (
    <StyledContainer
      className={`${withShadow ? "withShadow" : ""} ${gray ? "gray" : ""}`}
      style={{ width: sizeAsEM, height: sizeAsEM }}
    >
      {children}
    </StyledContainer>
  );
}

function CharacterSvg({ number }: ICharacterSvgProps) {
  return (
    <img src={CharactersImages[number - 1]} alt={`Personagem ${number}`} />
  );
}

function FullComponent({
  number,
  size,
  withShadow,
  gray,
}: IFullComponentProps) {
  return (
    <Container size={size} withShadow={withShadow} gray={gray}>
      <CharacterSvg number={number} />
    </Container>
  );
}

export const Character = { Container, CharacterSvg, FullComponent };
