import React from "react";
import { Link } from "react-router-dom";

export default class ServerItem extends React.Component {
  render() {
    let { server, location } = this.props;
    let isDisabled = location.pathname.split("/")[1] === `${server.id}`;
    if (isDisabled) {
      return (
        <div className="fake server-link icon"
          style={{ backgroundImage: `url(${server.icon})` }}
        >
          {server.icon ? null : <p>{server.title.split(" ").map(word => word[0])}</p>}
      </div>
      )
    }
    return (
      <div
        className="server-link icon"
        style={{ backgroundImage: `url(${server.icon})` }}
      >
        <Link
          to={`/${server.id}`}
        >
          {server.icon ? null : <p>{server.title.split(" ").map(word => word[0])}</p>}
        </Link>
      </div>
    )
  }
}