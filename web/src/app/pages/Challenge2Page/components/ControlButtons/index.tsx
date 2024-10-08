import {
  CaretDown,
  CaretLeft,
  CaretRight,
  CaretUp,
} from "@phosphor-icons/react";
import { Button } from "../../../../shared/components";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import {
  StyledControlButtonsContainer,
  StyledGroupedControlButtons,
} from "./styles";
import { ICharacterCoordinates, IMatrizSquareConfiguration } from "../Maze";

type TControlDirection = "Top" | "Left" | "Bottom" | "Right";

interface ISingleControlButtonProps {
  Icon: ReactNode;
  direction: TControlDirection;
}

interface IControlButtonsProps {
  matrizConfiguration: IMatrizSquareConfiguration[][];
  characterCoordinates: ICharacterCoordinates;
  shoeCoordinates: ICharacterCoordinates;
  setCharacterCoordinates: React.Dispatch<
    React.SetStateAction<ICharacterCoordinates>
  >;
}

const GROUPED_CONTROL_BUTTONS: ISingleControlButtonProps[] = [
  {
    Icon: <CaretLeft />,
    direction: "Left",
  },
  {
    Icon: <CaretDown />,
    direction: "Bottom",
  },
  {
    Icon: <CaretRight />,
    direction: "Right",
  },
];

function getOppositeDirection(direction: TControlDirection): TControlDirection {
  if (direction === "Top") return "Bottom";

  if (direction === "Right") return "Left";

  if (direction === "Bottom") return "Top";

  if (direction === "Left") return "Right";

  throw Error("Invalid direction.");
}

export function ControlButtons({
  matrizConfiguration,
  characterCoordinates,
  shoeCoordinates,
  setCharacterCoordinates,
}: IControlButtonsProps) {
  const [steps, setSteps] = useState(0);

  const finalDestinationCoordinates = useMemo(
    (): ICharacterCoordinates => ({
      lineIndex: shoeCoordinates.lineIndex + 1,
      columnIndex: shoeCoordinates.columnIndex,
    }),
    [shoeCoordinates]
  );

  const handleMoveCharacter = useCallback(
    (direction: TControlDirection) => {
      const currentMatrizSquare =
        matrizConfiguration[characterCoordinates.lineIndex][
          characterCoordinates.columnIndex
        ];

      const hasBarrier = currentMatrizSquare[`border${direction}`] || false;

      if (hasBarrier) return;

      let lineIndexDestination = characterCoordinates.lineIndex;
      let columnIndexDestination = characterCoordinates.columnIndex;

      switch (direction) {
        case "Top":
          lineIndexDestination--;
          break;
        case "Right":
          columnIndexDestination++;
          break;
        case "Bottom":
          lineIndexDestination++;
          break;
        case "Left":
          columnIndexDestination--;
          break;
        default:
          return;
      }

      const destinationMatrizSquare =
        matrizConfiguration[lineIndexDestination][columnIndexDestination];

      if (!destinationMatrizSquare) return;

      const hasDestinationBarrer =
        destinationMatrizSquare[`border${getOppositeDirection(direction)}`];

      if (hasDestinationBarrer) return;

      setCharacterCoordinates({
        lineIndex: lineIndexDestination,
        columnIndex: columnIndexDestination,
      });

      setSteps((oldValue) => oldValue + 1);
    },
    [matrizConfiguration, characterCoordinates, setSteps]
  );

  const characterIsAtFinalDestination = useMemo(
    (): boolean =>
      characterCoordinates.lineIndex ===
        finalDestinationCoordinates.lineIndex &&
      characterCoordinates.columnIndex ===
        finalDestinationCoordinates.columnIndex,
    [finalDestinationCoordinates, characterCoordinates]
  );

  useEffect(() => {
    console.log("steps: ", steps);

    if (characterIsAtFinalDestination) {
      // TODO: IMPLEMENT ROUTINE TO SEND REQUEST TO API HERE
      console.log("completed!");
    }
  }, [characterIsAtFinalDestination]);

  return (
    <StyledControlButtonsContainer>
      <Button
        color="green"
        onClick={() => handleMoveCharacter("Top")}
        disabled={characterIsAtFinalDestination}
      >
        <CaretUp />
      </Button>

      <StyledGroupedControlButtons>
        {GROUPED_CONTROL_BUTTONS.map((controlButton, key) => (
          <Button
            key={key}
            color="green"
            onClick={() => handleMoveCharacter(controlButton.direction)}
            disabled={characterIsAtFinalDestination}
          >
            {controlButton.Icon}
          </Button>
        ))}
      </StyledGroupedControlButtons>
    </StyledControlButtonsContainer>
  );
}
