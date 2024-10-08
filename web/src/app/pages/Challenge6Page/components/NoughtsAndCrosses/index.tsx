import { Fragment } from "react/jsx-runtime";
import {
  StyledContainer,
  StyledNoughtsAndCrossesContainer,
  StyledSquare,
} from "./styles";
import { useCallback, useEffect, useMemo } from "react";
import { useLoading } from "../../../../shared/hooks/useLoading";
import { Functions } from "../../../../shared/functions";
import { TGameStatus, TNoughtAndCrossesGameOption } from "../..";

interface ISquarePositionProps {
  rowIndex: number;
  columnIndex: number;
}

interface ISquareProps extends ISquarePositionProps {
  value: TNoughtAndCrossesGameOption;
  gameStatus: TGameStatus;
  onMarkSquare: (destinationSquare: ISquarePositionProps) => void;
}

interface INoughtAndCrossesProps {
  gameMatriz: TNoughtAndCrossesGameOption[][];
  isMachineTime: boolean;
  gameStatus: TGameStatus;
  setIsMachineTime: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFirstTime: React.Dispatch<React.SetStateAction<boolean>>;
  setGameMatriz: React.Dispatch<
    React.SetStateAction<TNoughtAndCrossesGameOption[][]>
  >;
}

const STUDENT_SYMBOL = "O";
const MACHINE_SYMBOL = "X";

function Square({
  rowIndex,
  columnIndex,
  value,
  gameStatus,
  onMarkSquare,
}: ISquareProps) {
  const endedGame = useMemo(() => gameStatus !== "playing", [gameStatus]);

  const isBusy = useMemo(() => value !== "", [value]);

  return (
    <StyledSquare
      className={isBusy || endedGame ? "blocked" : ""}
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

export function NoughtAndCrosses({
  gameMatriz,
  isMachineTime,
  gameStatus,
  setGameMatriz,
  setIsMachineTime,
  setIsFirstTime,
}: INoughtAndCrossesProps) {
  const { setIsGlobalLoadingActive } = useLoading();

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

  // ? Returns a boolean value indicating whether the square was marked (true) or no (false)
  const markSquare = useCallback(
    (
      destinationSquare: ISquarePositionProps,
      symbol: TNoughtAndCrossesGameOption
    ): boolean => {
      if (isSquareBusy(destinationSquare)) return false;

      setGameMatriz((oldValue) =>
        oldValue.map((row, i) =>
          row.map((square, j) => {
            if (
              destinationSquare.rowIndex === i &&
              destinationSquare.columnIndex === j
            ) {
              square = symbol;
            }

            return square;
          })
        )
      );

      return true;
    },
    [isSquareBusy, setGameMatriz]
  );

  const handleMarkSquare = useCallback(
    (destinationSquare: ISquarePositionProps) => {
      if (gameStatus !== "playing") return;

      if (isMachineTime) return;

      const squareWasMarked = markSquare(destinationSquare, STUDENT_SYMBOL);

      if (!squareWasMarked) return;

      setIsFirstTime(false);

      setIsMachineTime(true);
    },
    [isMachineTime, gameStatus, markSquare]
  );

  const markSquareAsMachine = useCallback(async () => {
    if (!isMachineTime) return;

    if (!haveSquareEmpty) return;

    setIsGlobalLoadingActive(true);

    await Functions.delay(1);

    let rowIndex: number;
    let columnIndex: number;

    do {
      rowIndex = Math.floor(Math.random() * 3);
      columnIndex = Math.floor(Math.random() * 3);
    } while (isSquareBusy({ rowIndex, columnIndex }));

    const squareWasMarked = markSquare(
      { rowIndex, columnIndex },
      MACHINE_SYMBOL
    );

    if (!squareWasMarked) return;

    setIsMachineTime(false);

    setIsGlobalLoadingActive(false);
  }, [isMachineTime, haveSquareEmpty, isSquareBusy, markSquare]);

  useEffect(() => {
    if (isMachineTime && gameStatus === "playing") {
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
                gameStatus={gameStatus}
                onMarkSquare={handleMarkSquare}
              />
            ))}
          </Fragment>
        ))}
      </StyledNoughtsAndCrossesContainer>
    </StyledContainer>
  );
}
