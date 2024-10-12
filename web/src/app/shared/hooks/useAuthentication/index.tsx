import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import {
  IAuthenticateResponse,
  IStudentClaims,
} from "../../services/TechTripApi/StudentsController";
import { useLoading } from "../useLoading";
import { TechTripApiService } from "../../services";
import { authConfigs } from "../../configs/Auth";
import { TechTripApi } from "../../services/TechTripApi/axios-config";

interface IAuthenticationContextData {
  userCredentials: IStudentClaims;
  setUserCredentials: React.Dispatch<React.SetStateAction<IStudentClaims>>;
  isAuthenticated: () => Promise<boolean>;
}

type AuthenticationProviderProps = {
  children: ReactNode;
};

const AuthenticationContext = createContext({} as IAuthenticationContextData);

function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const { setIsGlobalLoadingActive } = useLoading();

  const [userCredentials, setUserCredentials] = useState<IStudentClaims>(
    {} as IStudentClaims
  );

  const isAuthenticated = useCallback(async (): Promise<boolean> => {
    try {
      setIsGlobalLoadingActive(true);

      const sessionCredentials = sessionStorage.getItem(
        authConfigs.USER_CREDENTIALS
      );

      if (!sessionCredentials) return false;

      const { token } = JSON.parse(sessionCredentials) as IAuthenticateResponse;

      TechTripApi.defaults.headers["Authorization"] = `Bearer ${token}`;

      const claims = await TechTripApiService.StudentsController.getClaims();

      if (claims == null) return false;

      setUserCredentials({ ...claims });

      return true;
    } finally {
      setIsGlobalLoadingActive(false);
    }
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{ userCredentials, setUserCredentials, isAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

function useAuthentication() {
  const context = useContext(AuthenticationContext);

  return context;
}

export { AuthenticationProvider, useAuthentication };
