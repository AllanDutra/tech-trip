import { ReactNode, useMemo } from "react";
import { CharactersImages } from "../../assets";
import { StyledContainer } from "./styles";

type TCharacterSize = "small" | "medium";

interface IContainerProps {
  children: ReactNode;
  size?: TCharacterSize;
  withShadow?: boolean;
  gray?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

interface ICharacterSvgProps {
  number: number;
}

interface IFullComponentProps {
  number: number;
  size?: TCharacterSize;
  withShadow?: boolean;
  gray?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

function Container({
  children,
  size = "small",
  withShadow = false,
  gray = false,
  selected = false,
  onClick,
}: IContainerProps) {
  const sizeAsEM = useMemo(
    () => (size === "medium" ? "3.75em" : "3.25em"),
    [size]
  );

  return (
    <StyledContainer
      className={`${withShadow ? "withShadow" : ""} ${gray ? "gray" : ""} ${selected ? "selected" : ""}`}
      style={{ width: sizeAsEM, height: sizeAsEM }}
      onClick={onClick}
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
  selected,
  onClick,
}: IFullComponentProps) {
  return (
    <Container size={size} withShadow={withShadow} gray={gray} selected={selected} onClick={onClick}>
      <CharacterSvg number={number} />
    </Container>
  );
}

export const Character = { Container, CharacterSvg, FullComponent };
