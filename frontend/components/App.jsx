import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import ProtectedComponents from "./protected_components";
import UserSettingsContainer from "./user/user_settings_container";

const App = () => {
  return (
  <>
    <ProtectedComponents />
    <AuthRoute path="/signup" component={ SignupFormContainer } />
    <AuthRoute path="/login" component={ LoginFormContainer } />
    <ProtectedRoute path="/settings" component={ UserSettingsContainer} /> 
  </>
)};

export default App;