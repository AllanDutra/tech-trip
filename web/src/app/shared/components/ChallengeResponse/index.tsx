import { ReactNode } from "react";
import { StyledGeneralContainer } from "./styles";

interface IGeneralContainerProps {
  children: ReactNode;
}

function GeneralContainer({ children }: IGeneralContainerProps) {
  return <StyledGeneralContainer>{children}</StyledGeneralContainer>;
}

function Option() {
  return (
    <button>
      <span className="question-id"></span>
      <span className="question-text"></span>
    </button>
  );
}

function FullComponent() {
  return <GeneralContainer></GeneralContainer>;
}

export const ChallengeResponse = { GeneralContainer, Option };
