import { ReactNode, useMemo } from "react";
import { CharactersImages } from "../../assets";
import { StyledContainer } from "./styles";

type TCharacterSize = "small" | "medium" | "large";

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
  const sizeAsEM = useMemo(() => {
    if (size === "large") return "6em";
    if (size === "medium") return "3.75em";
    return "3.25em"; // small as default
  }, [size]);

  return (
    <StyledContainer
      className={`character-container ${withShadow ? "withShadow" : ""} ${gray ? "gray" : ""} ${selected ? "selected" : ""}`}
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
