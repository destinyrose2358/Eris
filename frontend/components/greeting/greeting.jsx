import React from "react";
import { ProtectedRoute } from "../../util/route_util";


export default class Greeting extends React.Component {
  render() {
    let { currentUser, logout } = this.props;
    return (
      <ProtectedRoute
        path="/"
        currentUser={ currentUser }
        logout={ logout }
        component={ ({ currentUser, logout }) => (
        <div>
          <h1>Welcome, { currentUser.username }</h1>
          <button onClick={ logout }>Logout</button>
        </div>
      )}/>
    )
  }
}