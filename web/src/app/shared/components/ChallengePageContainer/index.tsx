import { ReactNode } from "react";
import { AsideNavBar } from "../AsideNavBar";
import { Header } from "../Header";
import {
  StyledHeader,
  StyledPageContainer,
  StyledSubPageContainer,
} from "./styles";
import { Greetings } from "../Greetings";

interface IChallengePageContainerProps {
  currentLevel: number;
  children: ReactNode;
}

export function ChallengePageContainer({
  currentLevel,
  children,
}: IChallengePageContainerProps) {
  return (
    <StyledPageContainer>
      <AsideNavBar />

      <StyledSubPageContainer>
        <StyledHeader>
          {/* // TODO: MAKE TOTAL LEVELS DYNAMIC */}
          <Header.FullComponent currentLevel={currentLevel} totalLevels={15} />

          <Greetings />
        </StyledHeader>
        <main>{children}</main>
      </StyledSubPageContainer>
    </StyledPageContainer>
  );
}
