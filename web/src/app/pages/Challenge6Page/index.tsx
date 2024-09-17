import { ReactNode, useMemo, useState } from "react";
import { ChallengeMessage } from "../../shared/components";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { NoughtAndCrosses } from "./components/NoughtsAndCrosses";
import { StyledContainer, StyledMessageGroup } from "./styles";

export type TNoughtAndCrossesGameOption = "O" | "X" | "";

export type TGameStatus = "victory-X" | "victory-O" | "draw" | "playing";

const INITIAL_GAME_MATRIZ: TNoughtAndCrossesGameOption[][] = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export function Challenge6Page() {
  const [isFirstTime, setIsFirstTime] = useState(true);

  const [isMachineTime, setIsMachineTime] = useState(false);

  const [gameMatriz, setGameMatriz] =
    useState<TNoughtAndCrossesGameOption[][]>(INITIAL_GAME_MATRIZ);

  const gameStatus = useMemo(() => {
    // Verify rows
    for (let i = 0; i < 3; i++) {
      if (
        gameMatriz[i][0] === gameMatriz[i][1] &&
        gameMatriz[i][1] === gameMatriz[i][2] &&
        gameMatriz[i][0] !== ""
      ) {
        return `victory-${gameMatriz[i][0]}` as TGameStatus;
      }
    }

    // Verify columns
    for (let i = 0; i < 3; i++) {
      if (
        gameMatriz[0][i] === gameMatriz[1][i] &&
        gameMatriz[1][i] === gameMatriz[2][i] &&
        gameMatriz[0][i] !== ""
      ) {
        return `victory-${gameMatriz[0][i]}` as TGameStatus;
      }
    }

    // Verify first diagonal
    if (
      gameMatriz[0][0] === gameMatriz[1][1] &&
      gameMatriz[1][1] === gameMatriz[2][2] &&
      gameMatriz[0][0] !== ""
    ) {
      return `victory-${gameMatriz[0][0]}` as TGameStatus;
    }

    // Verify second diagonal
    if (
      gameMatriz[0][2] === gameMatriz[1][1] &&
      gameMatriz[1][1] === gameMatriz[2][0] &&
      gameMatriz[0][2] !== ""
    ) {
      return `victory-${gameMatriz[0][2]}` as TGameStatus;
    }

    let isDraw = true;

    first_loop: for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (gameMatriz[i][j] === "") {
          isDraw = false;
          break first_loop;
        }
      }
    }

    if (isDraw) {
      return "draw";
    } else {
      return "playing";
    }
  }, [gameMatriz]);

  const dynamicMessage = useMemo((): ReactNode => {
    if (gameStatus === "victory-X")
      return (
        <>
          Que pena, você perdeu. ☹️
          <br />
          <strong>Tente novamente!</strong>
        </>
      );

    if (gameStatus === "victory-O")
      return (
        <>
          <strong>Muito bem! Você venceu! 🥳</strong>
        </>
      );

    if (gameStatus === "draw")
      return (
        <>
          Empate! Esse jogo foi bem disputado.
          <br />
          <strong>Tente novamente!</strong>
        </>
      );

    if (isFirstTime) {
      return (
        <>
          Você ficará com a bolinha{" "}
          <strong>
            (<span className="noughts">O</span>)
          </strong>{" "}
          e eu com o xis{" "}
          <strong>
            (<span className="crosses">X</span>). Pode começar a jogar!
          </strong>
        </>
      );
    }

    if (isMachineTime) {
      return (
        <>
          <strong>
            Minha vez (<span className="crosses">X</span>)! Aguarde...
          </strong>
        </>
      );
    } else {
      return (
        <>
          <strong>
            Sua vez (<span className="noughts">O</span>)!
          </strong>
        </>
      );
    }
  }, [isFirstTime, isMachineTime]);

  return (
    <ChallengePageContainer currentLevel={6}>
      <StyledContainer>
        <StyledMessageGroup>
          <ChallengeMessage>
            Vamos brincar de jogo da velha usando uma matriz de 2 dimensões!{" "}
          </ChallengeMessage>

          <ChallengeMessage>{dynamicMessage}</ChallengeMessage>
        </StyledMessageGroup>

        <NoughtAndCrosses
          gameMatriz={gameMatriz}
          isMachineTime={isMachineTime}
          gameStatus={gameStatus}
          setGameMatriz={setGameMatriz}
          setIsMachineTime={setIsMachineTime}
          setIsFirstTime={setIsFirstTime}
        />
      </StyledContainer>
    </ChallengePageContainer>
  );
}
