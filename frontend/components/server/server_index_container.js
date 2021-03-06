import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchServers } from "../../actions/server_actions";
import ServerIndex from "./server_index";

const msp = (state) => ({
  serverIds: state.serverIds
});

const ServerIndexContainer = withRouter(connect(msp)(ServerIndex));

export default ServerIndexContainer;