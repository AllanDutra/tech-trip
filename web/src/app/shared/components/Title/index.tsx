import { StyledTitle } from "./styles";

interface ITitleProps {
  value: string;
}

export function Title({ value }: ITitleProps) {
  return <StyledTitle>{value}</StyledTitle>;
}
