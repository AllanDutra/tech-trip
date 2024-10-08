import { Fragment } from "react/jsx-runtime";
import { StyledMatrizSquare, StyledMaze, StyledMazeContainer } from "./styles";
import { useMemo } from "react";
import { Character } from "../../../../shared/components";
import ShoeImage from "../../../../shared/assets/ChallengesImages/2/shoe.svg";

export interface ICharacterCoordinates {
  lineIndex: number;
  columnIndex: number;
}

export interface IMatrizSquareConfiguration {
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
}

interface IMatrizSquareProps extends IMatrizSquareConfiguration {
  lineIndex: number;
  columnIndex: number;
  characterCoordinates: ICharacterCoordinates;
  shoeCoordinates: ICharacterCoordinates;
}

interface IMazeProps {
  matrizConfiguration: IMatrizSquareConfiguration[][];
  characterCoordinates: ICharacterCoordinates;
  shoeCoordinates: ICharacterCoordinates;
}

function MatrizSquare({
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  lineIndex,
  columnIndex,
  characterCoordinates,
  shoeCoordinates,
}: IMatrizSquareProps) {
  const className = useMemo(() => {
    let value = "";

    if (borderTop) value += "top ";

    if (borderRight) value += "right ";

    if (borderBottom) value += "bottom ";

    if (borderLeft) value += "left ";

    return value;
  }, [borderTop, borderRight, borderBottom, borderLeft]);

  const characterVisible = useMemo(
    (): boolean =>
      lineIndex === characterCoordinates.lineIndex &&
      columnIndex === characterCoordinates.columnIndex,
    [lineIndex, columnIndex, characterCoordinates]
  );

  const shoeVisible = useMemo(
    () =>
      lineIndex === shoeCoordinates.lineIndex &&
      columnIndex === shoeCoordinates.columnIndex,
    [lineIndex, columnIndex, shoeCoordinates]
  );

  return (
    <StyledMatrizSquare
      className={`${className} ${shoeVisible ? "shoeSquare" : ""}`}
    >
      {characterVisible && <Character.FullComponent number={8} />}
      {shoeVisible && <img className="shoe" src={ShoeImage} alt="shoe" />}
    </StyledMatrizSquare>
  );
}

export function Maze({
  matrizConfiguration,
  characterCoordinates,
  shoeCoordinates,
}: IMazeProps) {
  return (
    <StyledMazeContainer>
      <StyledMaze>
        {matrizConfiguration.map((line, i) => (
          <Fragment key={i}>
            {line.map((column, j) => (
              <MatrizSquare
                key={j}
                lineIndex={i}
                columnIndex={j}
                borderTop={column.borderTop}
                borderRight={column.borderRight}
                borderBottom={column.borderBottom}
                borderLeft={column.borderLeft}
                characterCoordinates={characterCoordinates}
                shoeCoordinates={shoeCoordinates}
              />
            ))}
          </Fragment>
        ))}
      </StyledMaze>
    </StyledMazeContainer>
  );
}
