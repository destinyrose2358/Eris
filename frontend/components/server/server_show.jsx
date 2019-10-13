import React from "react";
import MemberIndex from "../user/member_index";

export default class ServerShow extends React.Component {
  componentDidMount() {
    this.props.fetchServer()
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.server || (this.props.server.id !== prevProps.server.id)) {
      this.props.fetchServer();
    }
  }
  
  render() {
    let { server } = this.props;
    console.log(server);
    return server ? (
      <>
        <MemberIndex memberIds={ server.member_ids } />
      </>
    ) : (
      <div>
      </div>
    )
  }
}