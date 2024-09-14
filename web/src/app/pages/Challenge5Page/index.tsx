import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { FirstStep } from "./components/FirstStep";

export function Challenge5Page() {
  return (
    <ChallengePageContainer currentLevel={5}>
      <FirstStep />
    </ChallengePageContainer>
  );
}
