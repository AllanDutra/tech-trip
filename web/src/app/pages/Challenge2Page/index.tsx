import { useEffect, useState } from "react";
import { ChallengeMessage } from "../../shared/components";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { ControlButtons } from "./components/ControlButtons";
import {
  ICharacterCoordinates,
  IMatrizSquareConfiguration,
  Maze,
} from "./components/Maze";
import { StyledChallengeContainer, StyledContainer } from "./styles";

const SHOE_COORDINATES: ICharacterCoordinates = {
  lineIndex: 2,
  columnIndex: 2,
};

const INITIAL_CHARACTER_COORDINATES: ICharacterCoordinates = {
  lineIndex: 5,
  columnIndex: 3,
};

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

export function Challenge2Page() {
  const [characterCoordinates, setCharacterCoordinates] =
    useState<ICharacterCoordinates>({
      ...INITIAL_CHARACTER_COORDINATES,
    });

  return (
    <ChallengePageContainer currentLevel={2}>
      <StyledContainer>
        <StyledChallengeContainer>
          <ChallengeMessage>
            Gabriel perdeu seu sapato no labirinto. Ajude-o a encontrá-lo!
          </ChallengeMessage>

          <Maze
            matrizConfiguration={MAZE_MATRIZ_CONFIGURATION}
            characterCoordinates={characterCoordinates}
            shoeCoordinates={SHOE_COORDINATES}
          />

          <ControlButtons
            matrizConfiguration={MAZE_MATRIZ_CONFIGURATION}
            characterCoordinates={characterCoordinates}
            shoeCoordinates={SHOE_COORDINATES}
            setCharacterCoordinates={setCharacterCoordinates}
          />
        </StyledChallengeContainer>
      </StyledContainer>
    </ChallengePageContainer>
  );
}
