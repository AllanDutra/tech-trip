import { Bounce, ToastContainer } from "react-toastify";
import { Routes } from "./routes";
import { Loading } from "./shared/components/Loading";
import { GlobalStyle } from "./shared/global/";
import { LoadingProvider } from "./shared/hooks/useLoading";

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
        <GlobalStyle />
        <Loading />
        <Routes />
      </LoadingProvider>
      <ToastContainer />
    </>
  );
}
