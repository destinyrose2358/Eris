import React from "react";
import UpdateUserFormContainer from "./update_user_form_container";

export default class UserSettings extends React.Component {
  render() {
    let { logout } = this.props;
    return (
      <div className="modal-settings">
        <nav className="setting-nav">
          <button onClick={logout}>Logout</button>
        </nav>
        <aside className="user-info">
          <UpdateUserFormContainer />
        </aside>
      </div>
    )
  }
}