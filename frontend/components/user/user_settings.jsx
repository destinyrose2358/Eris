import React from "react";

export default class UserSettings extends React.Component {
  render() {
    let { logout } = this.props;
    return (
      <div className="modal-settings">
        <nav className="setting-nav">
          <button onClick={logout}>Logout</button>
        </nav>
        <aside className="user-info">
          
        </aside>
      </div>
    )
  }
}