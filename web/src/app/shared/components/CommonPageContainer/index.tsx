import { ReactNode } from "react";
import { AsideNavBar } from "../AsideNavBar";
import {
  StyledHeader,
  StyledMain,
  StyledPageContainer,
  StyledSubPageContainer,
} from "../ChallengePageContainer/styles";
import { Greetings } from "../Greetings";
import { useProgress } from "../../hooks/useProgress";
import { StyledProgressBar, StyledProgressInfo } from "./styles";
import { Link } from "react-router-dom";
import { routeConfigs } from "../../configs";
import { GearSix } from "@phosphor-icons/react";

interface ICommonPageContainerProps {
  children: ReactNode;
  className?: string;
}

export function CommonPageContainer({
  children,
  className,
}: ICommonPageContainerProps) {
  const { progress } = useProgress();

  return (
    <StyledPageContainer className={`common-page ${className}`}>
      <AsideNavBar />

      <StyledSubPageContainer>
        <StyledHeader>
          <StyledProgressInfo>
            <strong>Progresso</strong>

            <div className="progress-bar progress-bar-container">
              <StyledProgressBar
                className="progress-bar"
                percentprogress={progress.percentProgress}
              ></StyledProgressBar>

              <span className="mobile-progress">
                {progress.percentProgress} %
              </span>
            </div>

            <strong>{progress.percentProgress} %</strong>
          </StyledProgressInfo>

          <Greetings />

          <div className="gear-icon-container">
            <Link to={routeConfigs.Settings}>
              <GearSix size={40} weight="fill" fill="#2BCB9A" />
            </Link>
          </div>
        </StyledHeader>
        <StyledMain>{children}</StyledMain>
      </StyledSubPageContainer>
    </StyledPageContainer>
  );
}
