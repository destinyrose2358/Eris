import React from "react";
import MemberIndex from "../user/member_index";
import ChannelIndexContainer from "../channel/channel_index_container";
import DirectChannelIndexContainer from "../channel/direct-channel-index-container";

export default class ServerShow extends React.Component {
  componentDidMount() {
    this.props.fetchServer();
  }

  componentDidUpdate(prevProps) {
    let { server } = this.props;
    if (!prevProps.server || (server && (server.id !== prevProps.server.id))) {
      this.props.fetchServer();
    }
  }
  
  render() {
    let { server } = this.props;
    return server ? (
      <>
        <ChannelIndexContainer />
        <MemberIndex memberIds={ server.member_ids } />
      </>
    ) : (
      <>
        <DirectChannelIndexContainer />
      </>
    )
  }
}