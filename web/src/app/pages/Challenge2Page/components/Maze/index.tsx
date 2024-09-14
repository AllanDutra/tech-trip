import { Fragment } from "react/jsx-runtime";
import { StyledMatrizSquare, StyledMaze, StyledMazeContainer } from "./styles";
import { useMemo } from "react";

interface IMatrizSquareConfiguration {
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
}

interface IMatrizSquareProps extends IMatrizSquareConfiguration {
  lineIndex: number;
  columnIndex: number;
}

function MatrizSquare({
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
}: IMatrizSquareProps) {
  const className = useMemo(() => {
    let value = "";

    if (borderTop) value += "top ";

    if (borderRight) value += "right ";

    if (borderBottom) value += "bottom ";

    if (borderLeft) value += "left ";

    return value;
  }, [borderTop, borderRight, borderBottom, borderLeft]);

  return <StyledMatrizSquare className={className}></StyledMatrizSquare>;
}

const MAZE_MATRIZ_CONFIGURATION: IMatrizSquareConfiguration[][] = [
  // ? First line
  [
    { borderTop: true, borderLeft: true },
    { borderTop: true, borderBottom: true },
    { borderTop: true, borderRight: true, borderBottom: true },
    { borderTop: true, borderBottom: true },
    { borderTop: true, borderBottom: true },
    { borderTop: true, borderRight: true },
  ],
  // ? Second line
  [
    { borderLeft: true },
    { borderBottom: true },
    { borderBottom: true },
    { borderBottom: true },
    { borderRight: true },
    { borderRight: true },
  ],
  // ? Third line
  [
    { borderLeft: true },
    { borderRight: true },
    {},
    { borderRight: true },
    {},
    { borderRight: true },
  ],
  // ? Fourth line
  [
    { borderLeft: true, borderRight: true },
    { borderBottom: true, borderRight: true },
    {},
    { borderBottom: true, borderRight: true },
    { borderRight: true },
    { borderTop: true, borderRight: true },
  ],
  // ? Fifth line
  [
    { borderLeft: true },
    { borderRight: true },
    { borderBottom: true },
    { borderBottom: true },
    { borderBottom: true, borderRight: true },
    { borderRight: true },
  ],
  // ? Sixth line
  [
    { borderLeft: true, borderBottom: true, borderRight: true },
    { borderBottom: true },
    { borderBottom: true },
    { borderBottom: true },
    { borderBottom: true },
    { borderBottom: true, borderRight: true },
  ],
];

export function Maze() {
  return (
    <StyledMazeContainer>
      <StyledMaze>
        {MAZE_MATRIZ_CONFIGURATION.map((line, i) => (
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
              />
            ))}
          </Fragment>
        ))}
      </StyledMaze>
    </StyledMazeContainer>
  );
}
