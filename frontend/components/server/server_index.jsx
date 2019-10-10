import React from "react";
import ServerItemContainer from "./server_item_container";

export default class ServerIndex extends React.Component {
  componentDidMount() {
    this.props.fetchServers();
  }

  render() {
    let serverItems = this.props.serverIds.map(serverId => (
      <ServerItemContainer serverId={ serverId } key={ serverId } />
    ));
    return (
      <div>
        <ul>
          { serverItems }
        </ul>
      </div>
    )
  }
}