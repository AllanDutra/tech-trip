import { ReactNode, useMemo } from "react";
import { StyledGeneralContainer, StyledOption } from "./styles";

interface IGeneralContainerProps {
  children: ReactNode;
}

type TOptionSize = "small" | "medium" | "large";

interface IOptionProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "id"
  > {
  id: number;
  children: ReactNode;
  size?: TOptionSize;
  selected?: boolean;
}

interface IReceivedOption {
  text?: string;
  content?: ReactNode;
  selected?: boolean;
}

interface IFullComponentProps {
  options: IReceivedOption[];
  size?: TOptionSize;
}

function GeneralContainer({ children }: IGeneralContainerProps) {
  return <StyledGeneralContainer>{children}</StyledGeneralContainer>;
}

const OPTION_LETTERS = ["A", "B", "C"];

function Option({
  id,
  children,
  size = "medium",
  selected = false,
  ...rest
}: IOptionProps) {
  const letter = useMemo(() => OPTION_LETTERS[id] ?? "?", [id]);

  return (
    <StyledOption className={`${size} ${selected ? "selected" : ""}`} {...rest}>
      <div>
        <span className="question-id">{letter}</span>
        <span className="question-text">{children}</span>
      </div>
    </StyledOption>
  );
}

function FullComponent({ options, size }: IFullComponentProps) {
  return (
    <GeneralContainer>
      {options.map((option, index) => (
        <Option selected={option.selected} size={size} key={index} id={index}>
          {option.text ? <b>{option.text}</b> : option.content}
        </Option>
      ))}
    </GeneralContainer>
  );
}

export const ChallengeResponse = { GeneralContainer, Option, FullComponent };
