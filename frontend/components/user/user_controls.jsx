import React from 'react';
import { Link } from "react-router-dom";
import { capUsername } from '../../util/user_api_util';


export default class UserControls extends React.Component {
  render() {
    let { currentUser, currentUser: { username } } = this.props;
    let croppedName = capUsername(username);
    return (
      <nav className="user-nav">
        <div
          className="icon"
          style={{backgroundImage: `url(${currentUser.profile_picture || "https://i.ibb.co/5x3VFXV/default-icon.jpg"})` }}
        />
        <h2>{ croppedName }</h2>
        <Link to="/settings"><i className="fas fa-cog"></i></Link>
      </nav>
    )
  }
}