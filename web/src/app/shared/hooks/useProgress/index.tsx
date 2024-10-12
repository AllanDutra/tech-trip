import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthentication } from "../useAuthentication";
import { useLoading } from "../useLoading";
import { TechTripApiService } from "../../services";
import { IChallengesProgress } from "../../services/TechTripApi/ChallengesController";

interface IProgressContextData {
  progress: IChallengesProgress;
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
  const { isAuthenticated } = useAuthentication();
  const { setIsGlobalLoadingActive } = useLoading();

  const [progress, setProgress] = useState<IChallengesProgress>({
    ...INITIAL_PROGRESS,
  });

  useEffect(() => {
    (async () => {
      try {
        if (await isAuthenticated()) {
          setIsGlobalLoadingActive(true);

          const progressData =
            await TechTripApiService.ChallengesController.getChallengesProgress();

          setProgress(progressData);
        }
      } finally {
        setIsGlobalLoadingActive(false);
      }
    })();
  }, []);

  return (
    <ProgressContext.Provider value={{ progress }}>
      {children}
    </ProgressContext.Provider>
  );
}

function useProgress() {
  const context = useContext(ProgressContext);

  return context;
}

export { ProgressProvider, useProgress };
