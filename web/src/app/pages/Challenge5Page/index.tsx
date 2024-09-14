import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { ThirdStep } from "./components/ThirdStep";

export function Challenge5Page() {
  return (
    <ChallengePageContainer currentLevel={5}>
      <ThirdStep selectedSeed={1} />
    </ChallengePageContainer>
  );
}
