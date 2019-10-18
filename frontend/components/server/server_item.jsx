import React from "react";
import { Link } from "react-router-dom";

export default class ServerItem extends React.Component {
  render() {
    let { server, location } = this.props;
    let isDisabled = location.pathname.split("/")[1] === `${server.id}`;
    if (isDisabled) {
      return (
        <li className="fake server-link">
          <img className="icon" src={server.icon} alt={`${server.title}'s Icon`} />
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