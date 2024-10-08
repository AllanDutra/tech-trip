import { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { ReactNode } from "react";
import {
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
  Icon: PhosphorIcon | null;
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

function Icon({ Component }: IIconProps) {
  return <Component size="1.5em" weight="fill" color="#B8BDBD" />;
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
      </InputContainer>
    </MainContainer>
  );
}

export const ContainedInput = {
  MainContainer,
  Label,
  InputContainer,
  Icon,
  Input,
  FullComponent,
};
