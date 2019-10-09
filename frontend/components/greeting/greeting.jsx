import React from "react";
import { ProtectedRoute } from "../../util/route_util";
import UserControlsContainer from "../user/user_controls_container";


export default class Greeting extends React.Component {
  render() {
    let { currentUser, logout } = this.props;
    return (
      <ProtectedRoute
        path="/"
        currentUser={ currentUser }
        logout={ logout }
        component={ () => (
        <div>
          <UserControlsContainer />
        </div>
      )}/>
    )
  }
}