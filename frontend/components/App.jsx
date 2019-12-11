import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import ProtectedComponents from "./protected_components";
import UserSettingsContainer from "./user/user_settings_container";
import SplashPage from "./splash_page/splash_page";

const App = () => {
  return (
    <Switch>
      <Route path="/home" component={ SplashPage } />
      <AuthRoute path="/signup" component={ SignupFormContainer } />
      <AuthRoute path="/login" component={ LoginFormContainer } />
      <ProtectedComponents />
      <ProtectedRoute path="/settings" component={ UserSettingsContainer} />
    </Switch>
)};

export default App;