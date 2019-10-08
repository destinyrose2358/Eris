import React from "react";
import { Link } from "react-router-dom";


export default class Greeting extends React.Component {
  render() {
    let { currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div className="greeting">
          <h1>Welcome, {currentUser.username}</h1>
          <button onClick={ logout }>Logout</button>
        </div>
    )} else {
      return (
        <div className="session-nav">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      )
    }
  }
}