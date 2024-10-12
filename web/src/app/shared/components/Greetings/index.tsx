import { useMemo } from "react";
import { StyledGreetings } from "./styles";
import { Character } from "../Character";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Functions } from "../../functions";

export function Greetings() {
  const { userCredentials } = useAuthentication();

  const article = useMemo(
    () => (userCredentials.gender === "male" ? "o" : "a"),
    [userCredentials]
  );

  return (
    <StyledGreetings className="greetings">
      <div>
        <span>Olá, Pequen{article}</span>
        <strong>
          {Functions.getFirstName(userCredentials.name).toLocaleUpperCase()}!
        </strong>
      </div>

      <Character.FullComponent number={userCredentials.character_Id} />
    </StyledGreetings>
  );
}
