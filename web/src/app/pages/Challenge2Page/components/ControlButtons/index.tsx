import {
  CaretDown,
  CaretLeft,
  CaretRight,
  CaretUp,
} from "@phosphor-icons/react";
import { Button } from "../../../../shared/components";
import { ReactNode } from "react";
import {
  StyledControlButtonsContainer,
  StyledGroupedControlButtons,
} from "./styles";

type TControlDirection = "up" | "left" | "down" | "right";

interface IControlButtonProps {
  Icon: ReactNode;
  direction: TControlDirection;
}

const GROUPED_CONTROL_BUTTONS: IControlButtonProps[] = [
  {
    Icon: <CaretLeft />,
    direction: "left",
  },
  {
    Icon: <CaretDown />,
    direction: "down",
  },
  {
    Icon: <CaretRight />,
    direction: "right",
  },
];

export function ControlButtons() {
  return (
    <StyledControlButtonsContainer>
      <Button color="green">
        <CaretUp />
      </Button>

      <StyledGroupedControlButtons>
        {GROUPED_CONTROL_BUTTONS.map((controlButton, key) => (
          <Button key={key} color="green">
            {controlButton.Icon}
          </Button>
        ))}
      </StyledGroupedControlButtons>
    </StyledControlButtonsContainer>
  );
}
