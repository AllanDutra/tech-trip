import { StyledButton } from "./styles";

interface ISecondaryButtonProps {
  title: string;
}

export function SecondaryButton({ title }: ISecondaryButtonProps) {
  return <StyledButton>{title}</StyledButton>;
}
