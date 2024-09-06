import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { routeConfigs } from "../shared/configs";
import { TestComponentsPage, RegisterPage, LoginPage, SettingsPage, MapPage, ChangePasswordPage, ResumePage } from "../pages";

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
        <Route path={routeConfigs.ChangePassword} element={<ChangePasswordPage />} />
        <Route path={routeConfigs.Map} element={<MapPage />} />
        <Route path={routeConfigs.Resume} element={<ResumePage />}/>

        <Route
          path="*"
          element={<Navigate to={routeConfigs.Login} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
