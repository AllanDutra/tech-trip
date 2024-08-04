import { StyledButton } from "./styles";

interface ISecondaryButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
}

export function SecondaryButton({ title, ...rest }: ISecondaryButtonProps) {
  return <StyledButton {...rest}>{title}</StyledButton>;
}
