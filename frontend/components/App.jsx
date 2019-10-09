import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import Greeting from "./greeting/greeting";
import UserSettingsContainer from "./user/user_settings_container";

const App = () => {
  return (
  <div>
    <Greeting />
    <AuthRoute path="/signup" component={ SignupFormContainer } />
    <AuthRoute path="/login" component={ LoginFormContainer } />
    <ProtectedRoute path="/settings" component={ UserSettingsContainer} /> 
  </div>
)};

export default App;