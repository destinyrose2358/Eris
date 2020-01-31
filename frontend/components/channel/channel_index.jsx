import React from "react";
import ChannelItemContainer from "./channel_item_container";
import MessageIndexContainer from "../message/message_index_container";
import { Route } from "react-router-dom";

export default class ChannelIndex extends React.Component {
  render() {
    let { channelIds } = this.props;
    if (!channelIds) {
      return (
        <div className="channel-index">
        </div>
      )
    }
    let channelItems = channelIds.map(channelId => (
      <ChannelItemContainer channelId={ channelId } key={ channelId } />
    ));
    return (
      <>
        <ul className="channel-index">
          { channelItems }
        </ul>
        <Route path="/:serverId/:channelId" component={MessageIndexContainer} />
      </>
    )
  }
}