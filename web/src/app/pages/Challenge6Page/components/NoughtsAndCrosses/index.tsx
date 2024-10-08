import { Fragment } from "react/jsx-runtime";
import {
  StyledContainer,
  StyledNoughtsAndCrossesContainer,
  StyledSquare,
} from "./styles";
import { useCallback, useEffect, useMemo, useState } from "react";

type TNoughtAndCrossesGameOption = "O" | "X" | "";

interface ISquarePositionProps {
  rowIndex: number;
  columnIndex: number;
}

interface ISquareProps extends ISquarePositionProps {
  value: TNoughtAndCrossesGameOption;
  onMarkSquare: (destinationSquare: ISquarePositionProps) => void;
}

const STUDENT_SYMBOL = "O";
const MACHINE_SYMBOL = "X";

const INITIAL_GAME_MATRIZ: TNoughtAndCrossesGameOption[][] = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function Square({ rowIndex, columnIndex, value, onMarkSquare }: ISquareProps) {
  const isBusy = useMemo(() => value !== "", [value]);

  return (
    <StyledSquare
      className={isBusy ? "busy" : ""}
      onClick={() => onMarkSquare({ rowIndex, columnIndex })}
    >
      {isBusy ? (
        <span className={value}>{value}</span>
      ) : (
        `(${rowIndex}, ${columnIndex})`
      )}
    </StyledSquare>
  );
}

export function NoughtAndCrosses() {
  const [isMachineTime, setIsMachineTime] = useState(false);

  const [gameMatriz, setGameMatriz] =
    useState<TNoughtAndCrossesGameOption[][]>(INITIAL_GAME_MATRIZ);

  const haveSquareEmpty = useMemo((): boolean => {
    for (let i = 0; i < gameMatriz.length; i++) {
      for (let j = 0; j < gameMatriz.length; j++) {
        const currentSquare = gameMatriz[i][j];

        if (currentSquare === "") return true;
      }
    }

    return false;
  }, [gameMatriz]);

  const isSquareBusy = useCallback(
    (squarePosition: ISquarePositionProps): boolean =>
      gameMatriz[squarePosition.rowIndex][squarePosition.columnIndex] !== "",
    [gameMatriz]
  );

  const checkResult = useCallback(() => {
    console.log("ACABOU");
  }, []);

  const markSquare = useCallback(
    (
      destinationSquare: ISquarePositionProps,
      symbol: TNoughtAndCrossesGameOption
    ) => {
      if (isSquareBusy(destinationSquare)) return;

      let newGameMatrizConfiguration: TNoughtAndCrossesGameOption[][];

      setGameMatriz((oldValue) => {
        newGameMatrizConfiguration = oldValue.map((row, i) =>
          row.map((square, j) => {
            if (
              destinationSquare.rowIndex === i &&
              destinationSquare.columnIndex === j
            ) {
              square = symbol;
            }

            return square;
          })
        );

        return newGameMatrizConfiguration;
      });
    },
    [isSquareBusy, setGameMatriz]
  );

  const handleMarkSquare = useCallback(
    (destinationSquare: ISquarePositionProps) => {
      if (isMachineTime) return;

      markSquare(destinationSquare, STUDENT_SYMBOL);

      setIsMachineTime(true);
    },
    [isMachineTime, markSquare]
  );

  const markSquareAsMachine = useCallback(() => {
    if (!isMachineTime) return;

    if (!haveSquareEmpty) return;

    let rowIndex: number;
    let columnIndex: number;

    do {
      rowIndex = Math.floor(Math.random() * 3);
      columnIndex = Math.floor(Math.random() * 3);
    } while (isSquareBusy({ rowIndex, columnIndex }));

    markSquare({ rowIndex, columnIndex }, MACHINE_SYMBOL);

    setIsMachineTime(false);
  }, [isMachineTime, haveSquareEmpty, isSquareBusy, markSquare]);

  useEffect(() => {
    if (isMachineTime) {
      markSquareAsMachine();
    }
  }, [isMachineTime]);

  return (
    <StyledContainer>
      <StyledNoughtsAndCrossesContainer>
        {gameMatriz.map((row, i) => (
          <Fragment key={i}>
            {row.map((squareValue, j) => (
              <Square
                key={j}
                rowIndex={i}
                columnIndex={j}
                value={squareValue}
                onMarkSquare={handleMarkSquare}
              />
            ))}
          </Fragment>
        ))}
      </StyledNoughtsAndCrossesContainer>
    </StyledContainer>
  );
}
