import { Bounce, ToastContainer } from "react-toastify";
import { Routes } from "./routes";
import { Loading } from "./shared/components/Loading";
import { GlobalStyle } from "./shared/global/";
import { LoadingProvider } from "./shared/hooks/useLoading";
import { AuthenticationProvider } from "./shared/hooks/useAuthentication";
import { ChallengeCorrectionProvider } from "./shared/hooks/useChallengeCorrection";
import { NotifyOnReload } from "./shared/components/NotifyOnReload";

export function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme={"colored"}
        transition={Bounce}
      />
      <LoadingProvider>
        <AuthenticationProvider>
          <ChallengeCorrectionProvider>
            <GlobalStyle />
            <Loading />
            <NotifyOnReload />
            <Routes />
          </ChallengeCorrectionProvider>
        </AuthenticationProvider>
      </LoadingProvider>
    </>
  );
}
