import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { SecondStep } from "./components/SecondStep";

export function Challenge5Page() {
  return (
    <ChallengePageContainer currentLevel={5}>
      <SecondStep />
    </ChallengePageContainer>
  );
}
