import { ReactNode } from "react";
import { StyledChallengeMessage } from "./styles";

interface IChallengeMessageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  children: ReactNode;
}

export function ChallengeMessage({
  children,
  className,
  ...rest
}: IChallengeMessageProps) {
  return (
    <StyledChallengeMessage
      className={`challenge-message ${className}`}
      {...rest}
    >
      {children}
    </StyledChallengeMessage>
  );
}
