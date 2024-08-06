import { ReactNode } from "react";
import { StyledChallengeMessage } from "./styles";

interface IChallengeMessageProps {
  children: ReactNode;
}

export function ChallengeMessage({ children }: IChallengeMessageProps) {
  return <StyledChallengeMessage>{children}</StyledChallengeMessage>;
}
