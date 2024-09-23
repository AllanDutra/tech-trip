/* eslint-disable react-refresh/only-export-components */
import { ReactNode, useMemo } from "react";
import { StyledGeneralContainer, StyledOption } from "./styles";

interface IGeneralContainerProps {
  children: ReactNode;
}

type TOptionSize = "small" | "medium" | "large";

export interface IOptionProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  optionLetterIndex: number;
  children: ReactNode;
  size?: TOptionSize;
  selected?: boolean;
}

interface IReceivedOption {
  text?: string;
  content?: ReactNode;
  selected?: boolean;
  onClick: CallableFunction;
}

interface IFullComponentProps extends Omit<IOptionProps, "optionLetterIndex" | "children">{
  options: IReceivedOption[];
  size?: TOptionSize;
}

function GeneralContainer({ children }: IGeneralContainerProps) {
  return <StyledGeneralContainer>{children}</StyledGeneralContainer>;
}

const OPTION_LETTERS = ["A", "B", "C"];

function Option({
  optionLetterIndex,
  children,
  size = "medium",
  selected = false,
  ...rest
}: IOptionProps) {
  const letter = useMemo(
    () => OPTION_LETTERS[optionLetterIndex] ?? "?",
    [optionLetterIndex]
  );

  return (
    <StyledOption className={`${size} ${selected ? "selected" : ""}`} {...rest}>
      <div>
        <span className="question-id">{letter}</span>
        <span className="question-text">{children}</span>
      </div>
    </StyledOption>
  );
}

function FullComponent({ options, size, ...rest }: IFullComponentProps) {
  return (
    <GeneralContainer>
      {options.map((option, index) => (
        <Option
          selected={option.selected}
          size={size}
          key={index}
          optionLetterIndex={index}
          onClick={() => option.onClick()}
          {...rest}
        >
          {option.text ? <b>{option.text}</b> : option.content}
        </Option>
      ))}
    </GeneralContainer>
  );
}

export const ChallengeResponse = { GeneralContainer, Option, FullComponent };
