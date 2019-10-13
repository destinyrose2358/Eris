import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ServerShow from "./server_show";

const msp = (state, { match: { params } }) => ({
  server: state.entities.servers[params.serverId]
});

const mdp = (dispatch, { match: { params } }) => ({
  fetchServer: () => dispatch(fetchServer(params.serverId))
});

const ServerShowConainer = withRouter(
  connect(msp, mdp)(ServerShow)
);

export default ServerShowConainer;