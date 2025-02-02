import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { routeConfigs } from "../shared/configs";
import {
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
  Challenge14Page,
  Challenge15Page,
} from "../pages";
import { Challenge3Page } from "../pages/Challenge3Page";
import { Challenge11Page } from "../pages/Challenge11Page";
import { Challenge12Page } from "../pages/Challenge12Page";
import { PrivateRoute } from "../shared/components/PrivateRoute";
import { PublicRoute } from "../shared/components/PublicRoute";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={routeConfigs.Register}
          element={<PublicRoute PageComponent={RegisterPage} />}
        />
        <Route
          path={routeConfigs.Login}
          element={<PublicRoute PageComponent={LoginPage} />}
        />

        <Route
          path={routeConfigs.Settings}
          element={<PrivateRoute PageComponent={SettingsPage} />}
        />
        <Route
          path={routeConfigs.ChangePassword}
          element={<PrivateRoute PageComponent={ChangePasswordPage} />}
        />

        <Route
          path={routeConfigs.Map}
          element={<PrivateRoute PageComponent={MapPage} />}
        />
        <Route
          path={routeConfigs.Resume}
          element={<PrivateRoute PageComponent={ResumePage} />}
        />
        <Route
          path={routeConfigs.Ranking}
          element={<PrivateRoute PageComponent={RankingPage} />}
        />

        <Route
          path={routeConfigs.Challenge1}
          element={
            <PrivateRoute PageComponent={Challenge1Page} challengeNumber={1} />
          }
        />
        <Route
          path={routeConfigs.Challenge2}
          element={
            <PrivateRoute PageComponent={Challenge2Page} challengeNumber={2} />
          }
        />
        <Route
          path={routeConfigs.Challenge3}
          element={
            <PrivateRoute PageComponent={Challenge3Page} challengeNumber={3} />
          }
        />

        <Route
          path={routeConfigs.Challenge4}
          element={
            <PrivateRoute PageComponent={Challenge4Page} challengeNumber={4} />
          }
        />
        <Route
          path={routeConfigs.Challenge5}
          element={
            <PrivateRoute PageComponent={Challenge5Page} challengeNumber={5} />
          }
        />
        <Route
          path={routeConfigs.Challenge6}
          element={
            <PrivateRoute PageComponent={Challenge6Page} challengeNumber={6} />
          }
        />

        <Route
          path={routeConfigs.Challenge7}
          element={
            <PrivateRoute PageComponent={Challenge7Page} challengeNumber={7} />
          }
        />
        <Route
          path={routeConfigs.Challenge8}
          element={
            <PrivateRoute PageComponent={Challenge8Page} challengeNumber={8} />
          }
        />
        <Route
          path={routeConfigs.Challenge9}
          element={
            <PrivateRoute PageComponent={Challenge9Page} challengeNumber={9} />
          }
        />

        <Route
          path={routeConfigs.Challenge10}
          element={
            <PrivateRoute
              PageComponent={Challenge10Page}
              challengeNumber={10}
            />
          }
        />
        <Route
          path={routeConfigs.Challenge11}
          element={
            <PrivateRoute
              PageComponent={Challenge11Page}
              challengeNumber={11}
            />
          }
        />
        <Route
          path={routeConfigs.Challenge12}
          element={
            <PrivateRoute
              PageComponent={Challenge12Page}
              challengeNumber={12}
            />
          }
        />

        <Route
          path={routeConfigs.Challenge13}
          element={
            <PrivateRoute
              PageComponent={Challenge13Page}
              challengeNumber={13}
            />
          }
        />

        <Route
          path={routeConfigs.Challenge14}
          element={
            <PrivateRoute
              PageComponent={Challenge14Page}
              challengeNumber={14}
            />
          }
        />

        <Route
          path={routeConfigs.Challenge15}
          element={
            <PrivateRoute
              PageComponent={Challenge15Page}
              challengeNumber={15}
            />
          }
        />

        <Route path="*" element={<Navigate to={routeConfigs.Login} />} />
      </Switch>
    </BrowserRouter>
  );
}
