import { ReactNode, useMemo } from "react";
import {
  StyledCloseButton,
  StyledContainer,
  StyledLevelIndicator,
} from "./styles";
import { X } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../configs";

interface IContainerProps {
  children: ReactNode;
}

interface ICloseButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

interface ILevelIndicatorProps {
  currentLevel: number;
  totalLevels: number;
}

interface IFullComponentProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  currentLevel: number;
  totalLevels: number;
}

function Container({ children }: IContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

function CloseButton({ ...rest }: ICloseButtonProps) {
  const navigate = useNavigate();

  return (
    <StyledCloseButton
      onClick={() => navigate(routeConfigs.Map)}
      className="close-button"
      {...rest}
    >
      <span>
        <X weight="bold" color="#424243" />
      </span>
    </StyledCloseButton>
  );
}

function LevelIndicator({ currentLevel, totalLevels }: ILevelIndicatorProps) {
  const barWidth = useMemo(
    () => (currentLevel / totalLevels) * 100,
    [currentLevel, totalLevels]
  );

  return (
    <StyledLevelIndicator>
      <div className="bar">
        <div style={{ width: `${barWidth}%` }} />
      </div>

      <span>
        {currentLevel} / {totalLevels}
      </span>
    </StyledLevelIndicator>
  );
}

function FullComponent({
  currentLevel,
  totalLevels,
  ...rest
}: IFullComponentProps) {
  return (
    <Container>
      <CloseButton {...rest} />
      <LevelIndicator currentLevel={currentLevel} totalLevels={totalLevels} />
    </Container>
  );
}

export const Header = { Container, CloseButton, LevelIndicator, FullComponent };
