import React from 'react';
import { Link } from "react-router-dom";


export default class UserControls extends React.Component {
  render() {
    let { currentUser, currentUser: { username } } = this.props;
    let croppedName = username.length > 8 ? username.slice(0, 8) + "..." : username;
    return (
      <nav className="user-nav">
        <img className="icon" src={currentUser.profile_picture || "https://i.ibb.co/5x3VFXV/default-icon.jpg" }
          alt="Profile Picture"/>
        <h2>{ croppedName }</h2>
        <Link to="/settings"><i className="fas fa-cog"></i></Link>
      </nav>
    )
  }
}