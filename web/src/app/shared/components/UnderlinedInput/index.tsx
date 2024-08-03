import { PencilSimple, Icon as PhosphorIcon } from "@phosphor-icons/react";
import { ReactNode } from "react";
import {
  StyledIconButton,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledMainContainer,
} from "./styles";

interface IContainerProps {
  children: ReactNode;
}

interface ILabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  value: string;
}

interface IIconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

interface IIconProps {
  Component: PhosphorIcon;
}

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

interface IFullComponentProps extends IInputProps {
  label: string;
  Icon: PhosphorIcon;
}

function MainContainer({ children }: IContainerProps) {
  return <StyledMainContainer>{children}</StyledMainContainer>;
}

function Label({ value, ...rest }: ILabelProps) {
  return <StyledLabel {...rest}>{value}</StyledLabel>;
}

function InputContainer({ children }: IContainerProps) {
  return <StyledInputContainer>{children}</StyledInputContainer>;
}

function IconButton({ children, ...rest }: IIconButtonProps) {
  return <StyledIconButton {...rest}>{children}</StyledIconButton>;
}

function Icon({ Component }: IIconProps) {
  return <Component size="1.5em" weight="fill" color="#545456b3" />;
}

function Input({ ...rest }: IInputProps) {
  return <StyledInput {...rest} />;
}

function FullComponent({
  label,
  Icon: IconComponent,
  ...rest
}: IFullComponentProps) {
  return (
    <MainContainer>
      <Label value={label} />
      <InputContainer>
        <Icon Component={IconComponent} />
        <Input {...rest} />
        <IconButton>
          <Icon Component={PencilSimple} />
        </IconButton>
      </InputContainer>
    </MainContainer>
  );
}

export const UnderlinedInput = {
  MainContainer,
  Label,
  InputContainer,
  IconButton,
  Icon,
  Input,
  FullComponent,
};
