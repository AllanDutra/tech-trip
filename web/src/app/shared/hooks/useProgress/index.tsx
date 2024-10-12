import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { IChallengesProgress } from "../../services/TechTripApi/ChallengesController";

interface IProgressContextData {
  progress: IChallengesProgress;
  currentChallengeNumber: number;
  setProgress: React.Dispatch<React.SetStateAction<IChallengesProgress>>;
}

type ProgressProviderProps = {
  children: ReactNode;
};

const INITIAL_PROGRESS: IChallengesProgress = {
  totalChallenges: 0,
  totalSolvedChallenges: 0,
  percentProgress: 0,
};

const ProgressContext = createContext({} as IProgressContextData);

function ProgressProvider({ children }: ProgressProviderProps) {
  const [progress, setProgress] = useState<IChallengesProgress>({
    ...INITIAL_PROGRESS,
  });

  const currentChallengeNumber = useMemo(
    () => progress.totalSolvedChallenges + 1,
    [progress]
  );

  return (
    <ProgressContext.Provider
      value={{ progress, currentChallengeNumber, setProgress }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

function useProgress() {
  const context = useContext(ProgressContext);

  return context;
}

export { ProgressProvider, useProgress };
