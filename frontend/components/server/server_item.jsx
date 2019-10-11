import React from "react";
import { Link } from "react-router-dom";

export default class ServerItem extends React.Component {
  render() {
    let { server, location } = this.props;
    let isDisabled = location.pathname === `/${server.id}`;
    if (isDisabled) {
      return (
        <li className="fake server-link">
        <div>
          <img className="icon" src={server.icon} alt={`${server.title}'s Icon`} />
        </div>
      </li>
      )
    }
    return (
      <li className="server-link">
        <Link
          to={`/${server.id}`}>
          <img className="icon" src={ server.icon } alt={`${server.title}'s Icon`}/>
        </Link>
      </li>
    )
  }
}