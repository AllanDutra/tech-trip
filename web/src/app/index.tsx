import { Bounce, ToastContainer } from "react-toastify";
import { Routes } from "./routes";
import { Loading } from "./shared/components/Loading";
import { GlobalStyle } from "./shared/global/";
import { LoadingProvider } from "./shared/hooks/useLoading";
import { AuthenticationProvider } from "./shared/hooks/useAuthentication";
import { ChallengeCorrectionProvider } from "./shared/hooks/useChallengeCorrection";
import { NotifyOnReload } from "./shared/components/NotifyOnReload";
import { ProgressProvider } from "./shared/hooks/useProgress";

export function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        pauseOnFocusLoss={false}
        draggable={true}
        theme={"colored"}
        transition={Bounce}
      />
      <LoadingProvider>
        <AuthenticationProvider>
          <ChallengeCorrectionProvider>
            <ProgressProvider>
              <GlobalStyle />
              <Loading />
              <NotifyOnReload />
              <Routes />
            </ProgressProvider>
          </ChallengeCorrectionProvider>
        </AuthenticationProvider>
      </LoadingProvider>
    </>
  );
}
