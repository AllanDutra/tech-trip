import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { routeConfigs } from "../shared/configs";
import {
  TestComponentsPage,
  RegisterPage,
  LoginPage,
  SettingsPage,
  MapPage,
  ChangePasswordPage,
  ResumePage,
  RankingPage,
  Challenge1Page,
  Challenge7Page,
  Challenge8Page,
  Challenge2Page,
  Challenge4Page,
  Challenge5Page,
  Challenge6Page,
  Challenge9Page,
  Challenge10Page,
  Challenge13Page,
  Challenge15Page,
} from "../pages";
import { Challenge3Page } from "../pages/Challenge3Page";
import { Challenge11Page } from "../pages/Challenge11Page";
import { Challenge12Page } from "../pages/Challenge12Page";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={routeConfigs.TestComponents}
          element={<TestComponentsPage />}
        />
        <Route path={routeConfigs.Register} element={<RegisterPage />} />
        <Route path={routeConfigs.Login} element={<LoginPage />} />
        <Route path={routeConfigs.Settings} element={<SettingsPage />} />
        <Route
          path={routeConfigs.ChangePassword}
          element={<ChangePasswordPage />}
        />
        <Route path={routeConfigs.Map} element={<MapPage />} />
        <Route path={routeConfigs.Resume} element={<ResumePage />} />
        <Route path={routeConfigs.Ranking} element={<RankingPage />} />

        <Route path={routeConfigs.Challenge1} element={<Challenge1Page />} />
        <Route path={routeConfigs.Challenge2} element={<Challenge2Page />} />
        <Route path={routeConfigs.Challenge3} element={<Challenge3Page />} />

        <Route path={routeConfigs.Challenge4} element={<Challenge4Page />} />
        <Route path={routeConfigs.Challenge5} element={<Challenge5Page />} />
        <Route path={routeConfigs.Challenge6} element={<Challenge6Page />} />

        <Route path={routeConfigs.Challenge7} element={<Challenge7Page />} />
        <Route path={routeConfigs.Challenge8} element={<Challenge8Page />} />
        <Route path={routeConfigs.Challenge9} element={<Challenge9Page />} />
        <Route path={routeConfigs.Challenge10} element={<Challenge10Page />} />
        <Route path={routeConfigs.Challenge13} element={<Challenge13Page />} />
        <Route path={routeConfigs.Challenge15} element={<Challenge15Page />} />

        <Route path={routeConfigs.Challenge11} element={<Challenge11Page />} />

        <Route path={routeConfigs.Challenge12} element={<Challenge12Page />} />

        <Route path="*" element={<Navigate to={routeConfigs.Login} />} />
      </Switch>
    </BrowserRouter>
  );
}
