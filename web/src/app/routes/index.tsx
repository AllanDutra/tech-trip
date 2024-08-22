import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { routeConfigs } from "../shared/configs";
import { TestComponentsPage } from "../pages";
import { RegisterPage } from "../pages";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={routeConfigs.TestComponents}
          element={<TestComponentsPage />}
        />
        <Route
          path={routeConfigs.Register} 
          element={<RegisterPage />}
        />
        <Route
          path="*"
          element={<Navigate to={routeConfigs.TestComponents} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
