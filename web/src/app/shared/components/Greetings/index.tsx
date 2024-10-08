import { useMemo } from "react";
import { StyledGreetings } from "./styles";
import { Character } from "../Character";

// TODO: MAKE THIS DYNAMIC
const STUDENT_GENDER = "male";
const STUDENT_NAME = "Oliver";
const STUDENT_CHARACTER_ID = 1;

export function Greetings() {
  const article = useMemo(
    () => (STUDENT_GENDER === "male" ? "o" : "a"),
    [STUDENT_GENDER]
  );

  return (
    <StyledGreetings>
      <div>
        <span>Olá, Pequen{article}</span>
        <strong>{STUDENT_NAME.toLocaleUpperCase()}!</strong>
      </div>

      <Character.FullComponent number={STUDENT_CHARACTER_ID} />
    </StyledGreetings>
  );
}
