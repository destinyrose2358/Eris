import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { AuthRoute } from "../util/route_util";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";

const App = () => (
  <div>
    <GreetingContainer />
    <AuthRoute path="/signup" component={ SignupFormContainer } />
    <AuthRoute path="/login" component={ LoginFormContainer } />
  </div>
);

export default App;