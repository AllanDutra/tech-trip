import { useEffect, useState } from "react";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { FirstStep } from "./components/FirstStep";
import { TSelectionVariant } from "../../shared/components";
import { SecondStep, ThirdStep } from "./components";
import { useAuthentication } from "../../shared/hooks/useAuthentication";

export function Challenge8Page() {
  function calculateAge(birthDate: string): string {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();

    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    const birthMonth = birth.getMonth();
    const birthDay = birth.getDate();

    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDay < birthDay)
    ) {
      age--;
    }

    return age.toString();
  }

  const { userCredentials } = useAuthentication();

  const [step, setStep] = useState(1);
  const [play, setPlay] = useState<TSelectionVariant>("yes");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");

  useEffect(() => {
    if (userCredentials?.birth) {
      setAge(calculateAge(userCredentials.birth));
    }
    setName(userCredentials.name);
  }, [userCredentials]);

  return (
    <ChallengePageContainer
      currentLevel={8}
      children={
        <>
          {step == 1 && (
            <FirstStep
              setStep={setStep}
              setPlay={setPlay}
              play={play}
              age={age}
              setAge={setAge}
              name={name}
              setName={setName}
            />
          )}
          {step == 2 && (
            <SecondStep play={play} setStep={setStep} name={name} age={age} />
          )}
          {step == 3 && <ThirdStep setStep={setStep} name={name} age={age} play={play} />}
        </>
      }
    />
  );
}
