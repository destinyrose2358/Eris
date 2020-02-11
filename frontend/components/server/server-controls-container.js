import { connect } from "react-redux";
import ServerControls from "./server-controls";

const mdp = (dispatch, { server }) => {
    return {
        inviteUser: (userId) => dispatch(inviteUser(server.id, userId))
    }
}

const ServerControlsContainer = connect(null, mdp)(ServerControls);

export default ServerControlsContainer;