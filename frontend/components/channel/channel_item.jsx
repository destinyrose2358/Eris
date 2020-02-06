import React from "react";
import { Link } from "react-router-dom";

export default class ChannelItem extends React.Component {
  render() {
    let { serverId, channel, location, members } = this.props;
    let isDisabled = location.pathname === `/${serverId}/${channel.id}`;

    if (isDisabled) {
      return (
        <li className="fake channel-link">
          <p>{ channel.title || members[members.length - 1].username }</p>
        </li>
      )
    }
    return (
      <li className="channel-link">
        <Link
          to={`/${serverId}/${channel.id}`}>
          <p>{ channel.title || members[members.length - 1].username }</p>
        </Link>
      </li>
    )
  }
}