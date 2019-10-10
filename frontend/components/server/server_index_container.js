import { connect } from "react-redux";
import { fetchServers } from "../../actions/server_actions";
import ServerIndex from "./server_index";

const msp = (state) => ({
  serverIds: state.serverIds
});

const mdp = (dispatch) => ({
  fetchServers: () => dispatch(fetchServers())
})

const ServerIndexContainer = connect(msp, mdp)(ServerIndex);

export default ServerIndexContainer;