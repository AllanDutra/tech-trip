import { Routes } from "./routes";
import { Loading } from "./shared/components/Loading";
import { GlobalStyle } from "./shared/global/";
import { LoadingProvider } from "./shared/hooks/useLoading";

export function App() {
  return (
    <LoadingProvider>
      <GlobalStyle />
      <Loading />
      <Routes />
    </LoadingProvider>
  );
}
