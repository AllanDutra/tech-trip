import { Fragment } from "react/jsx-runtime";
import {
  StyledContainer,
  StyledNoughtsAndCrossesContainer,
  StyledSquare,
} from "./styles";

const ROWS_NUMBER = 3;
const COLUMNS_NUMBER = 3;

interface ISquareProps {
  rowIndex: number;
  columnIndex: number;
}

function Square({ rowIndex, columnIndex }: ISquareProps) {
  return (
    <StyledSquare>
      ({rowIndex},{columnIndex})
    </StyledSquare>
  );
}

export function NoughtAndCrosses() {
  return (
    <StyledContainer>
      <StyledNoughtsAndCrossesContainer>
        {Array.from({ length: ROWS_NUMBER }).map((_, i) => (
          <Fragment key={i}>
            {Array.from({ length: COLUMNS_NUMBER }).map((__, j) => (
              <Square key={j} rowIndex={i} columnIndex={j} />
            ))}
          </Fragment>
        ))}
      </StyledNoughtsAndCrossesContainer>
    </StyledContainer>
  );
}
