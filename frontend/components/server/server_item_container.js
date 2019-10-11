import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchServer } from "../../actions/server_actions";
import ServerItem from "./server_item";

const msp = (state, { serverId }) => ({
  server: state.entities.servers[serverId]
});

const mdp = (dispatch, { serverId }) => ({
  fetchServer: () => dispatch(fetchServer(serverId))
});

const ServerItemContainer = withRouter(connect(msp, mdp)(ServerItem));

export default ServerItemContainer;