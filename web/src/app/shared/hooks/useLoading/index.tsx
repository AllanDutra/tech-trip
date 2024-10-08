import { createContext, ReactNode, useContext, useState } from "react";

interface ILoadingContextData {
  isGlobalLoadingActive: boolean;
  setIsGlobalLoadingActive: React.Dispatch<React.SetStateAction<boolean>>;
}

type LoadingProviderProps = {
  children: ReactNode;
};

const LoadingContext = createContext({} as ILoadingContextData);

function LoadingProvider({ children }: LoadingProviderProps) {
  const [isGlobalLoadingActive, setIsGlobalLoadingActive] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ isGlobalLoadingActive, setIsGlobalLoadingActive }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

function useLoading() {
  const context = useContext(LoadingContext);

  return context;
}

export { LoadingProvider, useLoading };
