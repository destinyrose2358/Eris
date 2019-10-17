import React from "react";
import { capUsername } from "../../util/user_api_util";

export default class MemberItem extends React.Component {
  render() {
    let { member } = this.props;
    return member ? (
      <li
        className="member-item">
        <img
          className="icon"
          src={ member.profile_picture }
          alt={ `${member.username}'s profile picture` }/>
        <p>{ capUsername(member.username) }</p>
      </li>
    ) : (
      <div></div>
    )
  }
}