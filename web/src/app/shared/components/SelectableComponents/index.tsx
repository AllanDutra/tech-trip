import { ReactNode, useCallback, useMemo } from "react";
import { StyledChooseContainer, StyledTargetContainer } from "./styles";

interface IChooseContainerProps {
  chooseDisable?: boolean;
  color?: string;

  children: ReactNode;

  index: number;
  activeChooseContainerIndex: number | null;
  setActiveChooseContainerIndex: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}

function ChooseContainer({
  chooseDisable = false,
  color,
  children,
  index,
  activeChooseContainerIndex,
  setActiveChooseContainerIndex,
}: IChooseContainerProps) {
  const isHighlighted = useMemo(
    (): boolean => index === activeChooseContainerIndex,
    [index, activeChooseContainerIndex]
  );

  const handleClick = useCallback(() => {
    if (chooseDisable) return;

    if (index === activeChooseContainerIndex) {
      setActiveChooseContainerIndex(null);
    } else {
      setActiveChooseContainerIndex(index);
    }
  }, [chooseDisable, index, activeChooseContainerIndex]);

  return (
    <StyledChooseContainer
      className={`choose-container ${isHighlighted ? "highlighted" : ""} ${
        chooseDisable ? "choose-disable" : ""
      }`}
      color={color}
      onClick={handleClick}
    >
      {children}
    </StyledChooseContainer>
  );
}

interface ITargetContainerProps {
  targetDisable?: boolean;
  children?: ReactNode;
  color?: string;

  activeChooseContainerIndex: number | null;
  onClick(): void;
}

function TargetContainer({
  targetDisable = false,
  children,
  color,
  activeChooseContainerIndex,
  onClick,
}: ITargetContainerProps) {
  const isHighLighted = useMemo(
    () => !targetDisable && activeChooseContainerIndex !== null,
    [targetDisable, activeChooseContainerIndex]
  );

  const handleClick = useCallback(() => {
    if (targetDisable) return;

    onClick();
  }, [targetDisable, onClick]);

  return (
    <StyledTargetContainer
      color={color}
      className={`target-container ${isHighLighted ? "highlighted" : ""} ${
        targetDisable ? "target-disable" : ""
      }`}
      onClick={handleClick}
    >
      {children}
    </StyledTargetContainer>
  );
}

export const SelectableComponents = { ChooseContainer, TargetContainer };
