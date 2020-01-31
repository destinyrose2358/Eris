import React from "react";
import { ProtectedRoute } from "../util/route_util";
import UserControlsContainer from "./user/user_controls_container";
import ServerIndexContainer from "./server/server_index_container";
import { Route } from "react-router-dom";
import ServerShowConainer from "./server/server_show_container";


export default class ProtectedComponents extends React.Component {
  render() {
    let { currentUser, logout } = this.props;
    return (
      <ProtectedRoute
        path="/"
        currentUser={ currentUser }
        logout={ logout }
        component={ () => (
        <div className="main-page">
          <ServerIndexContainer />
          <UserControlsContainer />
          <Route path="/:serverId" component={ ServerShowConainer } />
        </div>
      )}/>
    )
  }
}