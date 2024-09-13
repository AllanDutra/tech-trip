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
  ...rest
}: IChallengeMessageProps) {
  return <StyledChallengeMessage {...rest}>{children}</StyledChallengeMessage>;
}
